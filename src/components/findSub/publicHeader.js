import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';
import FeatherIcon from "react-native-vector-icons/Feather";

import {s} from '../common/findStyle'

const {StatusBarManager} = NativeModules;


export default class  extends Component {
    state = {
        iosH:StatusBarManager.HEIGHT
    }
    getIosH(){
        Platform.OS === 'ios' && StatusBarManager.getHeight((h) => {
            this.setState({
                iosH: h.height
            })
        })
    }

    componentWillMount() {
        this.getIosH()
    }

    render() {
        let pd = Platform.OS === 'ios'?{paddingTop: this.state.iosH}:{}
        return (
            <View style={[s.commonHeader,pd]}>
                {/*搜索框*/}
                <View
                    style={s.findSearchHeader}
                >
                    <FeatherIcon
                        name={'mic'}
                        size={22}
                        color={'#fff'}
                    />
                    <View
                        style={s.findSearchCon}
                    >
                        <FeatherIcon
                            name={'search'}
                            size={22}
                            color={'#fff'}
                        />
                        <Text
                            style={s.findSearchText}
                        >
                            Here With You - Asher Monroe
                        </Text>
                    </View>
                    <FeatherIcon
                        name={'grid'}
                        size={22}
                        color={'#fff'}
                    />
                </View>
            </View>
        );
    }
}

