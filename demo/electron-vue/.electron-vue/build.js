'use strict'

process.env.NODE_ENV = 'production'

const { say } = require('cfonts') // 终端的字体样式
const chalk = require('chalk')  // 终端的样式修改
const del = require('del')  // 删除文件及文件夹命令
const { spawn } = require('child_process')  // 异步衍生子进程
const webpack = require('webpack')
const Multispinner = require('multispinner')  // 终端的控制进度条指示器


const mainConfig = require('./webpack.main.config') // 主入口配置
const rendererConfig = require('./webpack.renderer.config') //  
const webConfig = require('./webpack.web.config')

// 设置终端样式
const doneLog = chalk.bgGreen.white(' DONE ') + ' '
const errorLog = chalk.bgRed.white(' ERROR ') + ' '
const okayLog = chalk.bgBlue.white(' OKAY ') + ' '
const isCI = process.env.CI || false

if (process.env.BUILD_TARGET === 'clean') clean()
else if (process.env.BUILD_TARGET === 'web') web()
else build()

// 清空build目录下除了 build/icons目录 及 icon.* 以外的文件
function clean () {
  del.sync(['build/*', '!build/icons', '!build/icons/icon.*'])
  console.log(`\n${doneLog}\n`)
  // 结束进程
  process.exit()
}

// 构建
function build () {
  // 纯打印信息
  greeting()

  // dist目录下除了.gitkeep文件全部删除
  del.sync(['dist/electron/*', '!.gitkeep'])

  const tasks = ['main', 'renderer']
  const m = new Multispinner(tasks, {
    preText: 'building',
    postText: 'process'
  })

  let results = ''

  // 任务进程执行成功
  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f')
    console.log(`\n\n${results}`)
    console.log(`${okayLog}take it away ${chalk.yellow('`electron-builder`')}\n`)
    process.exit()
  })

  // 打包主进程electron
  pack(mainConfig).then(result => {
    // 打包成功输出打印信息
    results += result + '\n\n'
    m.success('main')
  }).catch(err => {
    // 打包失败输出打印信息
    m.error('main')
    console.log(`\n  ${errorLog}failed to build main process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })

  // 打包子进程webpack-dev-server服务
  pack(rendererConfig).then(result => {
    // 打包成功输出打印信息
    results += result + '\n\n'
    m.success('renderer')
  }).catch(err => {
    // 打包失败输出打印信息
    m.error('renderer')
    console.log(`\n  ${errorLog}failed to build renderer process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })
}

// 打包函数
function pack (config) {
  return new Promise((resolve, reject) => {
    config.mode = 'production'
    webpack(config, (err, stats) => {
      if (err) reject(err.stack || err)
      else if (stats.hasErrors()) {
        let err = ''

        stats.toString({
          chunks: false,
          colors: true
        })
        .split(/\r?\n/)
        .forEach(line => {
          err += `    ${line}\n`
        })

        reject(err)
      } else {
        // 成功
        resolve(stats.toString({
          chunks: false,
          colors: true
        }))
      }
    })
  })
}

function web () {
  del.sync(['dist/web/*', '!.gitkeep'])
  webConfig.mode = 'production'
  webpack(webConfig, (err, stats) => {
    if (err || stats.hasErrors()) console.log(err)

    console.log(stats.toString({
      chunks: false,
      colors: true
    }))

    process.exit()
  })
}

function greeting () {
  const cols = process.stdout.columns
  let text = ''

  if (cols > 85) text = 'lets-build'
  else if (cols > 60) text = 'lets-|build'
  else text = false

  if (text && !isCI) {
    // 打印信息
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.yellow.bold('\n  lets-build'))
  console.log()
}