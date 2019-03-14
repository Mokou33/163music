import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ImageBackground
} from 'react-native';

const {width,height} = Dimensions.get('window')

export default class  extends Component {
    state = {
        num: 5
    }

    timer = null;
    componentDidMount() {
        let {num} = this.state;
        let {navigation} = this.props;
        let {navigate} = navigation;

        this.timer = setInterval(() => {
            num>0 && num--;
            this.setState({num})

            num == 0 && (() => {
                this.timer && clearInterval(this.timer)
                navigate('My')
            })()
        },1000)
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }

    render() {
        const {num} = this.state
        return (
            <View>
                <ImageBackground
                    style={{
                        width,
                        height
                    }}
                    source={require('../asset/images/nd.jpg')}
                >
                    <Text>仿网易云App</Text>
                    <Text
                        style={{
                            fontSize: 24
                        }}
                    >广告倒计时:{num}</Text>
                </ImageBackground>
            </View>
        );
    }
}
