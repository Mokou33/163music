import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {s} from "../common/findStyle";


export default class  extends Component {
    render() {
        return (
            <View>
                <View
                    style={s.myCollect}
                >
                    <Text
                        style={s.myCT}
                    >我创建的歌单（3）</Text>
                </View>
                <View
                    style={{
                        paddingHorizontal: 5
                    }}
                >
                    <View
                        style={s.myCPic}
                    >
                        <View>
                            <Image
                                style={{
                                    width:54,
                                    height: 54
                                }}
                                source={require('../../asset/my/14.png')}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={s.myCInfo}
                            >我喜欢的音乐</Text>
                            <Text>233首</Text>
                        </View>
                    </View>

                </View>
                <View
                    style={{
                        paddingHorizontal: 5
                    }}
                >
                    <View
                        style={s.myCPic}
                    >
                        <View>
                            <Image
                                style={{
                                    width:54,
                                    height: 54
                                }}
                                source={require('../../asset/my/14.png')}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={s.myCInfo}
                            >超TM喜欢</Text>
                            <Text>322首</Text>
                        </View>
                    </View>

                </View>
                <View
                    style={{
                        paddingHorizontal: 5
                    }}
                >
                    <View
                        style={s.myCPic}
                    >
                        <View>
                            <Image
                                style={{
                                    width:54,
                                    height: 54
                                }}
                                source={require('../../asset/my/14.png')}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={s.myCInfo}
                            >喵喵喵</Text>
                            <Text>222首</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}
