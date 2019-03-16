/**
 * 底部导航
 */
import React, { Component } from 'react'
import { View } from 'react-native'
import {observer, inject} from 'mobx-react/native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Feed from '@/views/award'
import Home from '@/views/home'
import Report from '@/views/report'
import Profile from '@/views/profile'
import TabBar from '@/components/TabBar'

const tabTitles = [i18n.COMMON_TEXT_LOTTERY, i18n.COMMON_TEXT_WIN_NUMBER, i18n.COMMON_TEXT_REPORT, i18n.COMMON_TEXT_MY];
const tabIcons = ['hotlottery_nor', 'kaijiang_nor', 'stats_w', 'my_nor'];
const tabSelectedIcon = ['hotlottery_press', 'kaijiang_press', 'stats_b', 'my_press'];

@inject(({ app }) => {
    return {
        updateBarStyle: app.updateBarStyle,
        appSkin: app.appSkin,
    }
})
@observer
export default class TabBarView extends Component {

    onChangeTab = ({i}) => {
        const { updateBarStyle } = this.props;
        if (i === 1) {
            updateBarStyle('default')
        } else {
            updateBarStyle('light-content')
        }
    }

    renderTabBar = () => {
        return (
            <TabBar
                appSkin={this.props.appSkin}
                tabNames={tabTitles}
                tabIconNames={tabIcons}
                selectedTabIconNames={tabSelectedIcon}
            />
        )
    }

    render() {
        let tabBottom = ifIphoneX({ paddingBottom: scaleSize(12) }, { paddingBottom: scaleSize(0) }, { paddingBottom: 0 })

        return (
            <ScrollableTabView
                style={tabBottom}
                locked
                scrollWithoutAnimation
                renderTabBar={this.renderTabBar}
                tabBarPosition='bottom'
                onChangeTab={this.onChangeTab}
            >
                <Home tabLabel="Home" navigator={this.props.navigator} />
                <Feed tabLabel="Feed" navigator={this.props.navigator} />
                <Report tabLabel="Report" navigator={this.props.navigator} />
                <Profile tabLabel="Profile" navigator={this.props.navigator} />
            </ScrollableTabView>
        )
    }
}