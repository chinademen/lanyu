<!-- 用户须知 -->
<template>
    <div class="user-book">
        <h1>挂机软件</h1>
        <div class="content">
            <h3>挂机软件注步骤：</h3>
            <p>1.选择要投注的彩种</p>
            <p>2.自定义设定方案，选择玩法、选号、倍投等形成方案</p>
            <p>3.勾选、启动方案</p>
            <p>4.开始挂机，自动投注</p>
            <h3>注意事件：</h3>
            <p>1.免责声明：挂机只是技术交流而参考使用，勿用于其他用途及商业用途，请遵守法律</p>
            <p>2.软件运行环境：windows操作系统+.NET Framework 2.0或更高.NET Framework版本</p>
            <p>3.一个方案只能有一种玩法（自定义方案时选择一种方案后，选择号码后，更换玩法，预览框里面的号码将被替换）</p>
            <p>4.选择一个彩种后，自动投注的方案就是对应彩种方案，更换彩种后将更换为其对应的方案；两个方案同时挂架</p>
            <p>5.挂机投注方式：当前期开奖后才自动投注下一期。</p>
            <p>6.投注记录在pc端同步；pc端和挂机同时存在（待议）</p>
            <p>7.出现提示投注失败或者不符合条件投注或者断期等，请检查下投注方案是否有问题</p>
            <p>8.如果出常掉线，断期等等问题，看下是否线路问题</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'user-book',
    }
</script>

<style lang="less">
    .user-book {
            width: 100%;
            min-width: 1027px;
            h1 {
                width: 1027px;
                box-sizing: border-box;
                text-align: center;
                margin-top: 20px;
            }
            .content {
                width: 1027px;
                box-sizing: border-box;
                padding: 30px 100px;
            }
            h3, p {
                margin: 10px 0;
            }
    }
</style>