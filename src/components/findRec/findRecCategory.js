import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {s} from "../common/findStyle";


export default class  extends Component {
    render() {
        return (
            <View
                style={{
                    height: 108,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <View
                    style={{alignItems: 'center'}}
                >
                    <Image
                        style={{width: 55, height: 55}}
                        source={require('../../asset/cates/cate1.png')}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    > 电台分类</Text>
                </View>
                <View
                    style={{alignItems: 'center'}}
                >
                    <Image
                        style={{width: 55, height: 55}}
                        source={require('../../asset/cates/cate2.png')}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    >电台排行</Text>
                </View>
                <View
                    style={{alignItems: 'center'}}
                >
                    <Image
                        style={{width: 55, height: 55}}
                        source={require('../../asset/cates/cate3.png')}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    > DI电音</Text>
                </View>
                <View
                    style={{alignItems: 'center'}}
                >
                    <Image
                        style={{width: 55, height: 55}}
                        source={require('../../asset/cates/cate4.png')}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    >小冰电台 </Text>
                </View>
            </View>
        );
    }
}
