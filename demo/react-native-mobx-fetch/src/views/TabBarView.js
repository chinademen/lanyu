/**
 * 底部导航
 */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react/native'
import Feed from '@/pages/feed/Feed'
import Home from '@/views/home'
import Report from '@/pages/report'
import Profile from '@/pages/profile/Profile'
import TabBar from '@/components/TabBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'

const tabTitles = ['彩票', '开奖', '报表', '我的']
const tabIcons = [
    require('@/assets/images/navbar/hotlottery_nor.png'),
    require('@/assets/images/navbar/kaijiang_nor.png'),
    require('@/assets/images/navbar/stats_w.png'),
    require('@/assets/images/navbar/my_nor.png'),
]
const tabSelectedIcon = [
    require('@/assets/images/navbar/hotlottery_press.png'),
    require('@/assets/images/navbar/kaijiang_press.png'),
    require('@/assets/images/navbar/stats_b.png'),
    require('@/assets/images/navbar/my_press.png'),
]

@inject('app')
@observer
export default class TabBarView extends Component {

    onChangeTab = ({i}) => {
        const {app} = this.props
        if (i === 1) {
            app.updateBarStyle('default')
        } else {
            app.updateBarStyle('light-content')
        }
    }

    renderTabBar = () => {
        return (
            <TabBar
                tabNames={tabTitles}
                tabIconNames={tabIcons}
                selectedTabIconNames={tabSelectedIcon}
            />
        )
    }

    render() {
        return (
            <ScrollableTabView
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