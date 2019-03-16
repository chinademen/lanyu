/**
 * 选项卡
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import { Tab, Tabs, ScrollableTab } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import Hoc from '@/components/Hoc'

@inject(({ app }) => {
    return {
        appSkin: app.appSkin
    }
})
@observer
export default class CommonTab extends PureComponent {
    // 渲染tab
    createTab(tabs) {
        const { appSkin, navigator } = this.props;
        return tabs.map(item => {
            const { name, component } = item;
            const NewComponent = Hoc(component);
            return (
                <Tab heading={name}
                    tabStyle={{ backgroundColor: appSkin.tab }} 
                    textStyle={{ color: appSkin.text }}
                    activeTabStyle={{ backgroundColor: appSkin.active }}
                >
                    <NewComponent navigator={navigator} />
                </Tab>
            )
        })
    }

    render() {
        const { appSkin, tabs } = this.props;

        if (tabs && tabs.length > 0) {
            return(
                <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: appSkin.tab }} />}>
                    {this.createTab(tabs)}
                </Tabs>
            )
        } else {
            return (
                <View style={styles.noData}>
                    <Text>暂无数据</Text>
                </View>
            )
        }
       
    }
}

const styles = StyleSheet.create({
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
    }
})