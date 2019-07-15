class SSC {
    /**
     * 号码球点击事件
     * @param {*} row 所在行
     * @param {*} ballIndex 号码球索引
     */
    static ballClick(row, ballIndex){
        //组选包胆只能选择一个号码
        if(this.methodCode.includes('zuxuanbaodan')){
            row = row.map(item=>{
                item.selected=false;
                return item
            })
        }
        var ball = row[ballIndex]
        ball.selected = !ball.selected;
        this.$set(row, ballIndex, ball)
    }

    /**
     * 全大小奇偶清 点击事件
     * @param {*} btn 点击的按钮对象
     * @param {*} rowIndex 所在行索引
     */
    static rowBtnClick(btn, rowIndex){
        this.currentBtnName.splice(rowIndex, 1, btn.name);
        var _row = this.rowBalls[rowIndex];
        switch(btn.name){
            case 'all':
                _row = _row.map(item=>{
                    item.selected = true;
                    return item
                })
                break;
            case 'big':
                _row = _row.map((item,index)=>{
                    item.selected = index>4 ? true : false;
                    return item
                })
                break;
            case 'small':
                _row = _row.map((item,index)=>{
                    item.selected = index<5 ? true : false;
                    return item
                })
                break;
            case 'odd':
                _row = _row.map((item,index)=>{
                    item.selected = index%2!=0 ? true : false;
                    return item
                })
                break;
            case 'even':
                _row = _row.map((item,index)=>{
                    item.selected = index%2==0 ? true : false;
                    return item
                });
                break;
            case 'clear':
                _row = _row.map(item=>{
                    item.selected = false;
                    return item
                })
                break;
            default:
                break;
        }
        
        this.$set(this.rowBalls, rowIndex, _row);
    }

    /**
     * 计算注数
     * @param {*} method 当前玩发
     * @param {*} balls 选中的号码球
     */
    static getBetNumber(method, balls){
        var n = 0;
        let m = method.split('_');
        var a = balls[0];
        var b = balls.length > 1 ? balls[1] : [];
        switch(m[1]){
            case 'zhixuanfushi':  //直选复式
                n = 1;
                balls.forEach(item=>{
                    n = n * item.length
                });
                break;
            case 'zhixuanzuhe':  //直选组合
                n = 1;
                balls.forEach(item=>{
                    n = n * item.length
                });
                n = n * balls.length;
                break;
            case 'zuxuan120':  //组选120
                n = Math.combination(balls[0].length, 5);
                break;
            case 'zuxuan60':
                var n1 = Math.combination(b.length, 3);
                var n2 = Math.difference(a, b).length;
                var n3 = Math.intersection(a, b).length;
                var n4 = Math.combination(b.length - 1, 3) * n3;
                n = n1 * n2 + n4;
                break;
            case 'zuxuan30':
                var n1 = Math.combination(a.length, 2);
                var n2 = Math.combination(b.length, 1);
                var n3 = Math.intersection(a, b).length;
                
                n = n1 * n2 - (a.length - 1) * n3;
                break;
            case "zuxuan20": //组选20
                var n1 = Math.combination(b.length, 2);
                var n2 = Math.difference(a, b).length;
                var n3 = Math.intersection(a, b).length;
                var n4 = Math.combination(b.length - 1, 2) * n3;
                
                n = n1 * n2 + n4;
                break;
            case "zuxuan10": //组选10
                var n1 = Math.combination(b.length, 1);
                var n2 = Math.difference(a, b).length;
                var n3 = Math.intersection(a, b).length;
                var n4 = Math.combination(b.length - 1, 1) * n3;
                
                n = n1 * n2 + n4;
                break;
            case "zuxuan5": //组选5
                var n1 = Math.combination(b.length, 1);
                var n2 = Math.difference(a, b).length;
                var n3 = Math.intersection(a, b).length;
                var n4 = Math.combination(b.length - 1, 1) * n3;
                
                n = n1 * n2 + n4;
                break;
            case 'zuxuan24':
                n = Math.combination(a.length, 4);
                break;
            case "zuxuan12": //组选12
                var n1 = Math.combination(b.length, 2);
                var n2 = Math.difference(a, b).length;
                var n3 = Math.intersection(a, b).length;
                var n4 = Math.combination(b.length - 1, 2) * n3;
                
                n = n1 * n2 + n4;
                break;
            case "zuxuan6": //组选6
                if("qiansi" == m[0] || "housi" == m[0] || "rx4" === m[0]){
                    n = Math.combination(a.length, 2);
                }else if("qiansan" == m[0] || "zhongsan" == m[0] || "housan" == m[0]){
                    n = Math.combination(a.length, 3);
                }
                // 任选三、任选四 组6 计算万千百十个是否选择
                if("rx3" === m[0] || "rx4" === m[0]){
                    n = n * Math.combination(pos, rxNum);
                }
                break;
            case "zuxuan4": //组选4
                var n1 = Math.combination(b.length, 1);
                var n2 = Math.difference(a, b).length;
                var n3 = Math.intersection(a, b).length;
                var n4 = Math.combination(b.length - 1, 1) * n3;
                
                n = n1 * n2 + n4;
                if("rx4" === m[0]){
                    n = n * Math.combination(pos, rxNum);
                }
                break;
            case 'zuxuan3':
                n = a.length * (a.length - 1);
                break;
            case 'zhixuankuadu':  //三星直选跨度
                for(var i=0;i<a.length;i++){
                    var _n =  10 - a[i];
                    if(a[i]>0){
                        _n = _n * 2 * 3 * a[i]
                    } 
                    n = n + _n
                };
                break;
            case 'zuxuanhezhi':  //组选和值
                //data下标对应所选号码的值
                var data = [1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15, 15, 14, 14, 13, 11, 10, 8, 6, 5, 4, 2, 2, 1];
                var data2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 4, 4, 3, 3, 2, 2, 1, 1];
                n = 0;
                for (var i = 0; i < a.length; i++) {
                   n += data[a[i]-1];
                }
                break;
            case 'zuxuanbaodan':  //组选包胆
                n = a.length > 0 ? 54 : 0;
                break;
            case 'zhixuanhezhi':  //直选和值
            case 'hezhiweishu':  //和值尾数
            case 'dingweidan':   //定位胆
                balls.forEach(item=>{
                    n = n + item.length
                });
                break;
            default:
                break;
        }
        return n;
    }

}

export default SSC;