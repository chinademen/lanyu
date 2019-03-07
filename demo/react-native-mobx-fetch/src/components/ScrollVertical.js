import React, {Component} from 'react'
import {
    Text,
    View,
    Animated,
    Easing,
    StyleSheet,
} from 'react-native'

export default class ScrollVertical extends Component {
    static defaultProps = {
        enableAnimation: true,
    };

    constructor(props) {
        super(props);
        let translateValue = new Animated.ValueXY({ x: 0, y: 0 })
        translateValue.addListener(({x,y})=>{
           // alert('value',x,y)
        })
        this.state = {
            translateValue: translateValue,
            // 滚屏高度
            scrollHeight: this.props.scrollHeight || 32,
            // 滚屏内容
            data: [],
            // Animated.View 滚动到的 y轴坐标
            currentY: 0,
            // 最大偏移量
            y: 0,
            // 每一次滚动切换之前延迟的时间
            delay: this.props.delay || 500,
            // 每一次滚动切换的持续时间
            duration: this.props.duration || 500,
            enableAnimation: true,
        }
    }

    render() {
        return (
            <View style={[styles.kbContainer, {height: this.state.scrollHeight}, this.props.kbContainer]}>
                {
                    this.state.data.length !== 0 ?
                        <Animated.View
                            style={[
                                {flexDirection: 'column'},
                                {
                                    transform: [
                                        {translateY: this.state.translateValue.y}
                                    ]
                                }
                            ]}>
                            {this.state.data.map(this._createKbItem.bind(this))}
                        </Animated.View> : null
                }
            </View>
        )
    }

    componentWillReceiveProps(nextProps) {
        // 更新公告列表，最大偏移量
        let h = (nextProps.data.length + 1) * nextProps.scrollHeight
        this.setState({
                data: nextProps.data,
                y: h,
                enableAnimation: nextProps.enableAnimation ? true : false,
            }, () => {
                this.startAnimation();
            }
        )
    }

    componentDidMount() {
        let data = this.props.data || []
        if (data.length !== 0) {
            let h = (data.length + 1) * this.state.scrollHeight
            this.setState({
                data: data.concat(data[0]),
                y: h
            })

            // 开始动画
            this.startAnimation();
        }
    }

    // 更新列表数据，最大偏移量


    _createKbItem(item, index) {
        return (
            <View key={index}
                  style={[{ justifyContent: 'center', height: this.state.scrollHeight }, this.props.scrollStyle]}>
                <Text style={[styles.kb_text_c, this.props.textStyle]}>{item.content}</Text>
            </View>
        )
    }

  
    componentWillUnmount() {
        if (this.animation) {
            clearTimeout(this.animation);
        }
        if(this.state.translateValue){
            this.state.translateValue.removeAllListeners();
        }
    }

    // 初始 / 刷新动画
    startAnimation = () => {
        if (this.state.enableAnimation) {
            if (!this.animation) {
                this.animation = setTimeout(() => {
                    this.animation = null;
                    this._startAnimation();
                }, this.state.delay);
            }

        }

    }


    // 执行动画
    _startAnimation = () => {
        // 向上滚动
        this.state.currentY -= this.state.scrollHeight;
        if (this.props.onChange) {
            let index = Math.abs(this.state.currentY) / (this.state.scrollHeight);
            this.props.onChange(index < this.state.data.length -1 ? index : 0);
        }
        Animated.sequence([

            // Animated.delay(this.state.delay),
            Animated.timing(
                this.state.translateValue,
                {
                    isInteraction: false,
                    toValue: {x: 0, y: this.state.currentY},
                    duration: this.state.duration, // 动画持续的时间（单位是毫秒），默认为500
                    easing: Easing.linear
                }
            ),
        ])
            .start(() => {
                // 无缝切换
                if (this.state.currentY - this.state.scrollHeight === -this.state.y) {
                    // 快速拉回到初始状态
                    this.state.translateValue.setValue({x: 0, y: 0});
                    this.state.currentY = 0;
                }
                this.startAnimation();



            })
    }
}

const styles = StyleSheet.create({
    kbContainer: {
        // 必须要有一个背景或者一个border，否则本身高度将不起作用
        backgroundColor: 'transparent',
        overflow: 'hidden'
    },
    kb_text_c: {
        fontSize: 14,
        color: '#181818',
    }
})