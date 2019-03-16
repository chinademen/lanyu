/**
 * 一键换肤
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
} from 'react-native'
import { Fab, Icon, Button } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import skinStyle from '@/assets/dh/skin'
import Svg from '@/components/Svg'

@inject(({ app }) => {
    return {
        changeSkin: app.changeSkin
    }
})
@observer
export default class ChangeSkin extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    changeAllSkin(newSkin) {
        // 改变静态global皮肤
        global.skin = newSkin;
        // 改变store中的皮肤
        this.props.changeSkin(newSkin);
    }

    render() {

        return(
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}
            >
                <Icon name="share" />
                <Button style={{ backgroundColor: '#D82741' }} onPress={() => this.changeAllSkin(skinStyle.red)}>
                    <Svg icon={'skin_red'} size="30" />
                </Button>
                <Button style={{ backgroundColor: '#4477FF' }} onPress={() => this.changeAllSkin(skinStyle.blue)}>
                    <Svg icon={'skin_blue'} size="30" />
                </Button>
                <Button style={{ backgroundColor: '#fff' }} onPress={() => this.changeAllSkin(skinStyle.black)}>
                    <Svg icon={'skin_black'} size="30" />
                </Button>
                <Button style={{ backgroundColor: '#f09c15' }} onPress={() => this.changeAllSkin(skinStyle.gold)}>
                    <Svg icon={'skin_gold'} size="30" />
                </Button>
                <Button style={{ backgroundColor: '#428739' }} onPress={() => this.changeAllSkin(skinStyle.green)}>
                    <Svg icon={'skin_green'} size="30" />
                </Button>
                <Button style={{ backgroundColor: '#000' }} onPress={() => this.changeAllSkin(skinStyle.silver)}>
                    <Svg icon={'skin_silver'} size="30" />
                </Button>
                <Button style={{ backgroundColor: '#6F50E7' }} onPress={() => this.changeAllSkin(skinStyle.purple)}>
                    <Svg icon={'skin_purple'} size="30" />
                </Button>
            </Fab>
        )
    }
}

const styles = StyleSheet.create({
    
})