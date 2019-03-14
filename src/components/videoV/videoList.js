import React, {Component} from 'react';
import {
    Dimensions, Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";


import {s} from "../common/findStyle";


export default class  extends Component {
    render() {
        return (
            <View>
                <View
                    style={s.videoCon}
                >
                    <View
                        style={s.videoHead}
                    >
                        <MaterialCommunityIcon
                            size={28}
                            name={'music-circle'}
                            color={'#8edbe0'}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >音乐诊疗室</Text>
                    </View>
                    <View
                        style={s.videoInfo}
                    >
                        <MaterialCommunityIcon
                            size={24}
                            name={'thumb-up-outline'}
                        />
                        <MaterialCommunityIcon
                            size={24}
                            name={'comment-processing-outline'}
                        />
                        <MaterialCommunityIcon
                            size={24}
                            name={'music-circle-outline'}
                        />
                        <MaterialCommunityIcon
                            size={24}
                            name={'share-variant'}
                        />
                    </View>
                </View>
                <View
                    style={s.videoPic}
                >
                    <Image
                        style={{
                            flex: 1,
                            height: 225,
                            marginHorizontal: 5

                        }}
                        source={require('../../asset/imgvideo/1.png')}
                    />
                </View>
                <View
                    style={s.videoTxt}
                >
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >今天睡衣趴嘻嘻嘻嘻</Text>
                </View>
            </View>
        );
    }
}
