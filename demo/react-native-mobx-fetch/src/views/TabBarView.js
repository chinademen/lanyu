/**
 * 底部导航
 */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react/native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Feed from '@/views/award/Feed'
import Home from '@/views/home'
import Report from '@/views/report'
import Profile from '@/views/profile'
import TabBar from '@/components/TabBar'

const tabTitles = ['彩票', '开奖', '报表', '我的']
const tabIcons = ['hotlottery_nor', 'kaijiang_nor', 'stats_w', 'my_nor'];
const tabSelectedIcon = ['hotlottery_press', 'kaijiang_press', 'stats_b', 'my_press'];

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