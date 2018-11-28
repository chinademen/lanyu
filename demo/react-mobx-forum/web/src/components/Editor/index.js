import React, { Component } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

// 将raw格式的数据转换成editorState
// const rawString = `{"blocks":[{"key":"9hu83","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}`
// const editorState = BraftEditor.createEditorState(rawString)

// 将html字符串转换成editorState
const htmlString = `<p>Hello <b>World!</b></p>`;
const editorState2 = BraftEditor.createEditorState(htmlString);

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null)
      // editorState: editorState2
    }
  }

  // async componentDidMount () {
  //   // 假设此处从服务端获取html格式的编辑器内容
  //   const htmlContent = await fetchEditorContent()
  //   // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
  //   this.setState({
  //       editorState: BraftEditor.createEditorState(htmlContent)
  //   })
  // }

  // 在编辑器获得焦点时按下ctrl+s会执行此方法
  // submitContent = async () => {
  //   // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
  //   const htmlContent = this.state.editorState.toHTML()
  //   const result = await saveEditorContent(htmlContent)
  // }

  handleChange = (editorState) => {
    // 将editorState数据转换成RAW字符串
    // const rawString = editorState.toRAW();
    // console.log(rawString);
    // editorState.toRAW()方法接收一个布尔值参数，用于决定是否返回RAW JSON对象，默认是false
    // const rawJSON = editorState.toRAW(true);
    // console.log(rawJSON);
    // 将editorState数据转换成html字符串
    const htmlString = editorState.toHTML();
    console.log(htmlString);
    this.setState({ editorState })
  }

  render () {
    return (
      <BraftEditor 
        value={this.state.editorState} 
        onChange={this.handleChange}
        // onSave={this.submitContent}
        style={{ border: '1px solid #ddd' }} 
      />
    )
  }
}

export default Editor