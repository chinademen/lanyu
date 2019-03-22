/**
 * 彩票账变报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native'
import { Container, CheckBox } from 'native-base'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'
import {observer, inject} from 'mobx-react/native'
import Picker from 'react-native-picker'
import Svg from '@/components/Svg'
import LinearGradient from 'react-native-linear-gradient'

let data = [];
for(var i=0;i<100;i++){
    data.push(i);
}

let accountChangeType = [
    { type: '3', name: '投注扣款' },
    { type: '4', name: '投注返点' },
    { type: '5', name: '奖金派送' },
    { type: '6', name: '创建追号扣款' },
    { type: '7', name: '当期追号返款' },
    { type: '9', name: '撤单返款' },
    { type: '11', name: '撤单返点' },
    { type: '12', name: '撤销派奖' },
];

let pickerParams = {
    pickerConfirmBtnText: '确定',
    pickerCancelBtnText: '取消',
    pickerConfirmBtnColor: [16,110,216,1],
    pickerCancelBtnColor: [16,110,216,1],
    pickerTitleText: '',
    pickerToolBarBg: [255,255,255,1],
    pickerBg: [255,255,255,1],
    pickerToolBarFontSize: 16,
    pickerFontSize: 16,
};

let timeZone = ['今天', '近三天', '近七天'];

// 获取需要的
function getDay(n) {
    let date = new Date();
    date.setDate(date.getDate() - n);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = (month < 10 ) ? `0${month}` : month;
    day = (day < 10) ? `0${day}` : day;
    let result = `${year}-${month}-${day}`;
    return result;
}

@inject(({ app, homeStore }) => {
    return {
        appSkin: app.appSkin,
        lotteryList: homeStore.lotteryList,
        modes: homeStore.modes,
    }
})
@observer
export default class LotteryChangeReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotteryid: null,    // 彩种
            modeid: null,       // 模式
            type: null,         // 账变类型
            starttime: `${getDay(0)} 00:00:00`,    // 开始时间
            endtime: `${getDay(0)} 23:59:59`,      // 结束时间
            selectTime: 0,      // 选中时间
            includesub: true,   // 是否包含下级
            username: null,     // 用户名
            tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
            ],
        }
    }

    // 无数据
    createNoData = () => {
        return (
            <View style={styles.noData}>
                <Text style={{ color: '#fff' }}>暂无数据</Text>
            </View> 
        )
    }

    onValueChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    // 选择彩种
    selectLottery = (lotteryList) => {
        let data = ['所有彩种'];
        lotteryList.forEach(item => {
            data.push(item.cnname)
        });

        Picker.init({
            ...pickerParams,
            pickerData: data,
            selectedValue: [],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let lotteryid = ((pickedIndex - 0) !== 0) ? lotteryList[pickedIndex - 1].lotteryid : null;
                this.setState({ lotteryid })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {

            },
            onPickerSelect: (pickedValue, pickedIndex) => {
            
            }
        });
        Picker.show();
    }

    // 选择模式
    selectMode = (modes) => {
        let data = ['所有模式'];
        modes.forEach(item => {
            data.push(item.name)
        });

        Picker.init({
            ...pickerParams,
            pickerData: data,
            selectedValue: [],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let modeid = ((pickedIndex - 0) !== 0) ? modes[pickedIndex - 1].id : null;
                this.setState({ modeid })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
               
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
               
            }
        });
        Picker.show();
    }

    // 选择类型
    selectType = (accountChangeType) => {
        let data = ['所有类型'];
        accountChangeType.forEach(item => {
            data.push(item.name)
        });

        Picker.init({
            ...pickerParams,
            pickerData: data,
            selectedValue: [],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let type = ((pickedIndex - 0) !== 0) ? accountChangeType[pickedIndex - 1].type : null;
                this.setState({ type })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
       
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
          
            }
        });
        Picker.show();
    }

    // 选择日期
    selectTime = () => {

        Picker.init({
            ...pickerParams,
            pickerData: timeZone,
            selectedValue: [],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let arr = [0, 2, 6];
                let startDay = getDay(arr[pickedIndex - 0]);
                let endDay =  getDay(0);
                this.setState({ 
                    starttime: `${startDay} 00:00:00`,
                    endtime: `${endDay} 23:59:59`,
                    selectTime: pickedIndex - 0,
                })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
       
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
          
            }
        });
        Picker.show();
    }

    // 输入用户名
    inputUsername = (val) => {
        this.setState({
            username: val
        })
    }

    // 是否包含下级
    selectIncludesub = (includesub) => {
        this.setState({
            includesub: !includesub
        })
    }

    // 查询
    searchData = () => {
        // alert(this.state.username)
    }

    _alertIndex(index) {
        alert(`This is row ${index + 1}`);
    }

    render() {
        const { appSkin, lotteryList, modes } = this.props;
        const { lotteryid, modeid, type, selectTime, starttime, endtime, username, includesub, tableHead, tableData } = this.state;

        let cnname = '所有彩种';
        if (lotteryList && lotteryList.length > 0) {
            lotteryList.forEach(item => {
                if (item.lotteryid === lotteryid) {
                    cnname = item.cnname
                }
            })
        }

        let modeName = '所有模式';
        if (modes && modes.length > 0) {
            modes.forEach(item => {
                if (item.id === modeid) {
                    modeName = item.name
                }
            })
        }

        let typeName = '所有类型';
        if (accountChangeType && accountChangeType.length > 0) {
            accountChangeType.forEach(item => {
                if (item.type === type) {
                    typeName = item.name
                }
            })
        }

        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
              <View style={[styles.tableBtn, { backgroundColor: appSkin.tBodyBtnBackground }]}>
                <Text style={[styles.tableBtnText, { color: appSkin.tBodyBtnText }]}>详情</Text>
              </View>
            </TouchableOpacity>
        );

        return (
            <View style={[styles.container, { backgroundColor: appSkin.pageBackground }]}>
                {/* 查询条件 悬浮 */}
                <View style={styles.searchBox}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={{ flex: 1, flexDirection: 'row', width: gScreen.width * 0.33, height: scaleSize(40), alignItems:'center', justifyContent: 'center' }}
                        onPress={() => this.selectLottery(lotteryList)}
                    >
                        <Text>{cnname}</Text>
                        <Svg icon='down' size='18' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={{ flex: 1, flexDirection: 'row', width: gScreen.width * 0.33, height: scaleSize(40), alignItems:'center', justifyContent: 'center' }}
                        onPress={() => this.selectMode(modes)}
                    >
                        <Text>{modeName}</Text>
                        <Svg icon='down' size='18' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={{ flex: 1, flexDirection: 'row', width: gScreen.width * 0.33, height: scaleSize(40), alignItems:'center', justifyContent: 'center' }}
                        onPress={() => this.selectType(accountChangeType)}
                    >
                        <Text>{typeName}</Text>
                        <Svg icon='down' size='18' />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBox}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={{ flex: 1, flexDirection: 'row', width: gScreen.width * 0.33, height: scaleSize(40), alignItems:'center', justifyContent: 'center' }}
                        onPress={() => this.selectTime()}
                    >
                        <Text>{timeZone[selectTime]}</Text>
                        <Svg icon='down' size='18' />
                    </TouchableOpacity>
                    <TextInput 
                        style={[styles.input, { paddingVertical: 0, width: gScreen.width * 0.33, height: scaleSize(28) }]} 
                        placeholder={i18n.COMMON_TEXT_USERNAME}
                        maxLength={16}
                        onChangeText={val => this.inputUsername(val)}
                        value={username}
                    ></TextInput>
                    <View style={{ flex: 1, flexDirection: 'row', width: gScreen.width * 0.33, height: scaleSize(40), alignItems:'center', justifyContent: 'center' }}>
                        <CheckBox checked={includesub} onPress={() => this.selectIncludesub(includesub)} style={{ marginRight: scaleSize(15) }} />
                        <Text>包含下级</Text>
                    </View>
                </View>
                <View style={[styles.searchBox, {  height: scaleSize(50), paddingVertical: scaleSize(10) }]}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={this.searchData}
                    >
                        <LinearGradient colors={skin.background} style={styles.btn}>
                            <Text style={{fontSize: scaleSize(14), color: '#fff'}}>{i18n.COMMON_TEXT_SEARCH}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                {/* 表格 滚动区 */}
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    removeClippedSubviews
                    style={{ flex: 1, width: gScreen.width }}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 }}
                >
                    <Table style={{ width: gScreen.width }} borderStyle={{borderColor: '#fff' }}>
                        {/* thead */}
                        <Row 
                            data={tableHead} 
                            style={[styles.tableHead, { backgroundColor: appSkin.tHeadBackground }]} 
                            textStyle={[styles.tableText, { color: appSkin.tHeadText } ]}
                        />
                        {/* tbody */}
                        {
                            tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={[styles.row, { backgroundColor: appSkin.tBodyBackgound }]}>
                                {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell 
                                        key={cellIndex}
                                        data={cellIndex === 3 ? element(cellData, index) : cellData} 
                                        textStyle={styles.tableText}
                                    />
                                ))
                                }
                            </TableWrapper>
                            ))
                        }
                    </Table>
                    {/* 分页 */}
                    <View style={[styles.pagination, { backgroundColor: appSkin.paginationBackground }]}>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.searchData}
                            style={{ width: gScreen.width * 0.1, marginHorizontal: scaleSize(5) }}
                        >
                            <LinearGradient colors={skin.background} style={styles.pageBtn}>
                                <Svg icon='left' size='12' />
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.searchData}
                            style={{ width: gScreen.width * 0.1, marginHorizontal: scaleSize(5) }}
                        >
                            <LinearGradient colors={skin.background} style={styles.pageBtn}>
                                <Text style={{fontSize: scaleSize(12), color: '#fff'}}>1</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.searchData}
                            style={{ width: gScreen.width * 0.1, marginHorizontal: scaleSize(5) }}
                        >
                            <LinearGradient colors={skin.background} style={styles.pageBtn}>
                                <Text style={{fontSize: scaleSize(12), color: '#fff'}}>2</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.searchData}
                            style={{ width: gScreen.width * 0.1, marginHorizontal: scaleSize(5) }}
                        >
                            <LinearGradient colors={skin.background} style={styles.pageBtn}>
                                <Text style={{fontSize: scaleSize(12), color: '#fff'}}>...</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.searchData}
                            style={{ width: gScreen.width * 0.1, marginHorizontal: scaleSize(5) }}
                        >
                            <LinearGradient colors={skin.background} style={styles.pageBtn}>
                                <Text style={{fontSize: scaleSize(12), color: '#fff'}}>100</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.searchData}
                            style={{ width: gScreen.width * 0.1, marginHorizontal: scaleSize(5) }}
                        >
                            <LinearGradient colors={skin.background} style={styles.pageBtn}>
                                <Svg icon='right' size='12' />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    {/* {this.createNoData()} */}
                </ScrollView>

                {/* 底部合计 */}
                <View style={styles.footer}>
                    <Text style={[styles.footerText, { width: gScreen.width, borderBottomWidth: scaleSize(1), borderColor: '#f6f6f6', paddingLeft: scaleSize(10) }]}>
                        {i18n.COMMON_TEXT_TOTAL}
                    </Text>
                    <Text style={styles.footerText}>{i18n.COMMON_TEXT_CAPITAL_CHANGE}</Text>
                    <Text style={styles.footerText}>{0.000}{i18n.HOME_MONEY_YUAN}</Text>
                    <Text style={styles.footerText}>{i18n.COMMON_TEXT_DATADELAY_WARING}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBox: {
        height: scaleSize(40),
        backgroundColor: '#fff', 
        width: gScreen.width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scaleSize(5),
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        height: scaleSize(100),
        width: gScreen.width,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    footerText: {
        color: '#333',
        height: scaleSize(25),
        fontSize: scaleSize(14)
    },
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
        color: '#fff'
    },
    input: { // 输入框
        borderColor: '#c0bebc',
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(5),
        overflow: 'hidden',
        alignSelf: 'center',
        paddingHorizontal: scaleSize(5),
    },
    btn: {
        flexDirection: 'row',
        width: gScreen.width * 0.8,
        height: scaleSize(30),
        borderRadius: scaleSize(15),
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#bbbbb8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(8),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    tableHead: { height: 40 },
    tableText: { margin: 6, textAlign: 'center' },
    row: { flexDirection: 'row' },
    tableBtn: { width: 58, height: 18, borderRadius: 2, alignSelf: 'center', justifyContent: 'center' },
    tableBtnText: { textAlign: 'center' },
    pagination: {
        flex: 1, 
        flexDirection: 'row', 
        alignSelf: 'center', 
        justifyContent: 'center',
        width: gScreen.width,
        height: scaleSize(40),
        paddingVertical: scaleSize(5),
    },
    pageBtn: { 
        flexDirection: 'row', 
        width: gScreen.width * 0.1, 
        height: scaleSize(30), 
        borderRadius: scaleSize(2), 
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#bbbbb8',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: scaleSize(5),
    }
})