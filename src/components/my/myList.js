import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

import {s} from "../common/findStyle";




export default class  extends Component {
    render() {
        return (
            <View>
                <View
                    style={s.myList}
                >
                    <View
                        style={s.myListDic}
                    >
                        <SimpleLineIcon
                            style={s.myListPd}
                            size={24}
                            name={'music-tone-alt'}
                            color={'#d53c32'}
                        />
                        <Text
                            style={s.myListPd}
                        >本地音乐</Text>
                    </View>
                    <View
                        style={s.myListDic}
                    >
                        <Text>0</Text>
                        <FontAwesome5Icon
                            style={s.myListPd}
                            size={24}
                            name={'chevron-right'}
                            color={'#ccc'}
                        />
                    </View>
                </View>
                <View
                    style={s.myList}
                >
                    <View
                        style={s.myListDic}
                    >
                        <SimpleLineIcon
                            style={s.myListPd}
                            size={24}
                            name={'playlist'}
                            color={'#d53c32'}
                        />
                        <Text
                            style={s.myListPd}
                        >最近播放</Text>
                    </View>
                    <View
                        style={s.myListDic}
                    >
                        <Text>11</Text>
                        <FontAwesome5Icon
                            style={s.myListPd}
                            size={24}
                            name={'chevron-right'}
                            color={'#ccc'}
                        />
                    </View>
                </View>
                <View
                    style={s.myList}
                >
                    <View
                        style={s.myListDic}
                    >
                        <Ionicon
                            style={s.myListPd}
                            size={24}
                            name={'ios-radio'}
                            color={'#d53c32'}
                        />
                        <Text
                            style={s.myListPd}
                        >我的电台</Text>
                    </View>
                    <View
                        style={s.myListDic}
                    >
                        <Text>0</Text>
                        <FontAwesome5Icon
                            style={s.myListPd}
                            size={24}
                            name={'chevron-right'}
                            color={'#ccc'}
                        />
                    </View>
                </View>
                <View
                    style={s.myList}
                >
                    <View
                        style={s.myListDic}
                    >
                        <SimpleLineIcon
                            style={s.myListPd}
                            size={24}
                            name={'music-tone'}
                            color={'#d53c32'}
                        />
                        <Text
                            style={s.myListPd}
                        >我的收藏</Text>
                    </View>
                    <View
                        style={s.myListDic}
                    >
                        <Text>专辑/歌手/视频/专栏</Text>
                        <FontAwesome5Icon
                            style={s.myListPd}
                            size={24}
                            name={'chevron-right'}
                            color={'#ccc'}
                        />
                    </View>
                </View>
                <View
                    style={s.myList}
                >
                    <View
                        style={s.myListDic}
                    >
                        <FontAwesome5Icon
                            style={s.myListPd}
                            size={24}
                            name={'fantasy-flight-games'}
                            color={'#d53c32'}
                        />
                        <Text
                            style={s.myListPd}
                        >本地音乐</Text>
                    </View>
                    <View
                        style={s.myListDic}
                    >
                        <Text>特别的聆听模式</Text>
                        <FontAwesome5Icon
                            style={s.myListPd}
                            size={24}
                            name={'chevron-right'}
                            color={'#ccc'}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
