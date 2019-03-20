/**
 * 选择器
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal'

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false, // 是否触发选择状态
        }
    }

    CacelBtn = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.CacelBtn}
                onPress={this.handleCancel}
            >
                <Text>取消</Text>
            </TouchableOpacity>
        )
    }

    OkBtn = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.OkBtn}
                onPress={this.handleOk}
            >
                <Text>确定</Text>
            </TouchableOpacity>
        )
    }

    handleSelect = () => {
        this.setState({
            isVisible: true
        })
    }

    handleOk = () => {
        this.setState({
            isVisible: false
        })
    }

    handleCancel = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const { isVisible } = this.state;

        return (
            <View style={{ flex: 1 }}>
                {/* 选择器 */}
                <View style={[styles.selectInput]}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.selectInput}
                        onPress={this.handleSelect}
                    >
                        <Text>选择器</Text>
                    </TouchableOpacity>
                </View>
                {/* 遮罩 */}
                <Modal
                    isVisible={isVisible} 
                    style={styles.modal}
                    onBackdropPress={() => this.setState({ isVisible: false })}>
                    {/* 选择层 */}
                    <View style={{ flex: 1 }}>
                        <View style={[styles.selectBox]}>
                            <View style={styles.header}>
                                {this.CacelBtn()}
                                {this.OkBtn()}
                            </View>
                            <View style={styles.header2}>
                              
                            </View>
                            <View style={styles.topModal}></View>
                            <ScrollView
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                automaticallyAdjustContentInsets={false}
                                removeClippedSubviews
                                style={{ width: gScreen.width, height: scaleSize(200) }}
                                contentContainerStyle={{ alignItems: 'center' }}
                            >
                                <Text>11111111111111111111111111</Text>
                            </ScrollView>
                            <View style={styles.bottomModal}></View>
                        </View>
                    </View>                    
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    selectInput: {
        width: gScreen.width * 0.33
    },
    modal: {
        padding: 0,
        margin: 0
    },
    selectBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: scaleSize(240),
        backgroundColor: '#fff',
    },
    header: {
        width: gScreen.width,
        height: scaleSize(40),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: 'gray'
    },
    OkBtn: {
        position: 'absolute',
        right: 0,
        height: scaleSize(40),
        width: scaleSize(80),
        alignItems:'center',
        justifyContent: 'center',
    },
    CacelBtn: {
        position: 'absolute',
        left: 0,
        height: scaleSize(40),
        width: scaleSize(80),
        alignItems:'center',
        justifyContent: 'center',
    },
    topModal: {
        position: 'absolute',
        top: scaleSize(40),
        height: scaleSize(90),
        width: gScreen.width,
        backgroundColor: '#0000001a',
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#f6f6f6',
    },
    bottomModal: {
        position: 'absolute',
        bottom: 0,
        height: scaleSize(90),
        width: gScreen.width,
        backgroundColor: '#0000001a',
        borderTopWidth: scaleSize(1),
        borderTopColor: '#f6f6f6',
        zIndex: 9999,
    }
})