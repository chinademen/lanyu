/**
 * 一键换平台
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
} from 'react-native'
import { Fab, Button } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import skinStyle from '@/assets/dh/skin'
import Svg from '@/components/Svg'

@inject(({ app }) => {
    return {
        changeSkin: app.changeSkin,
        appPlat: app.appPlat,
        changePlat: app.changePlat
    }
})
@observer
export default class ChangePlat extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    changePlat(newPlat, defaultSkin) {
        // 切换静态global平台
        global.platName = newPlat;
        // 切换store中的平台
        this.props.changePlat(newPlat);
        // 切换平台默认皮肤
        global.skin = defaultSkin;
        this.props.changeSkin(defaultSkin);
        this.setState({
            active: false,
        })
    }

    render() {
        const { appPlat } = this.props;

        return(
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#fff' }}
                position="bottomLeft"
                onPress={() => this.setState({ active: !this.state.active })}
            >
                <Svg icon={appPlat} size="42" />
                <Button style={{ backgroundColor: '#fff' }} onPress={() => this.changePlat('east', skinStyle.brown)}>
                    <Svg icon={'east'} size="42" />
                </Button>
                <Button style={{ backgroundColor: '#fff' }} onPress={() => this.changePlat('weat', skinStyle.blue)}>
                    <Svg icon={'weat'} size="42" />
                </Button>
                <Button style={{ backgroundColor: '#fff' }} onPress={() => this.changePlat('south', skinStyle.red)}>
                    <Svg icon={'south'} size="42" />
                </Button>
                <Button style={{ backgroundColor: '#fff' }} onPress={() => this.changePlat('north', skinStyle.black)}>
                    <Svg icon={'north'} size="42" />
                </Button>
                <Button style={{ backgroundColor: '#fff' }} onPress={() => this.changePlat('middle', skinStyle.green)}>
                    <Svg icon={'middle'} size="42" />
                </Button>
            </Fab>
        )
    }
}

const styles = StyleSheet.create({
    
})