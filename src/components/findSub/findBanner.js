import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Swiper from "react-native-swiper";

import {s} from '../common/findStyle'

export default class  extends Component {
    render() {
        return (
            <View
                style={{
                    height: 156,

                }}
            >
                <Swiper
                    style={s.wrapper}
                    activeDotColor={'red'}
                    dotColor={'#ddd'}
                    autoplay={true}
                    autoplayTimeout={2.5}
                >
                    <View style={s.slide1}>
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 5
                            }}
                            source={require('../../asset/images/recommendation0.png')}
                        />
                    </View>
                    <View style={s.slide1}>
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 5
                            }}
                            source={require('../../asset/images/recommendation1.png')}
                        />
                    </View>
                    <View style={s.slide1}>
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 5
                            }}
                            source={require('../../asset/images/recommendation2.png')}
                        />
                    </View>

                </Swiper>
            </View>
        );
    }
}
