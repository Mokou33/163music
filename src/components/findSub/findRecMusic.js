import React, {Component} from 'react';
import {
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";

import {s} from "../common/findStyle";


export default class  extends Component {
    render() {
        return (
            <View style={s.findSongList}>
                <View style={s.findSongTitle}>
                    <Text style={s.findTitTxt}>推荐歌单</Text>
                    <AntDesignIcon
                        name={'right'}
                        size={22}
                    />
                </View>
                <View style={s.findSongRecList}>
                    <View style={s.findSongRec}>
                        <ImageBackground
                            style={s.findSongImg}
                            source={require('../../asset/songlist/song1.jpg')}
                        >
                            <FeatherIcon
                                name={'headphones'}
                                size={20}
                                color={'#fff'}
                            />
                            <Text style={{color:'#fff'}}>333万</Text>
                        </ImageBackground>
                        <Text>华语速爆新歌</Text>
                    </View>
                    <View style={s.findSongRec}>
                        <ImageBackground
                            style={s.findSongImg}
                            source={require('../../asset/songlist/song2.jpg')}
                        ></ImageBackground>
                        <Text>元宵，原灯火阑珊，笑语渐浓</Text>
                    </View>
                    <View style={s.findSongRec}>
                        <ImageBackground
                            style={s.findSongImg}
                            source={require('../../asset/songlist/song3.jpg')}
                        ></ImageBackground>
                        <Text>小时候词不达意，长大后言不由衷</Text>
                    </View>
                    <View style={s.findSongRec}>
                        <ImageBackground
                            style={s.findSongImg}
                            source={require('../../asset/songlist/song4.jpg')}
                        ></ImageBackground>
                        <Text>大师们牛逼哄哄的Swing Jazz</Text>
                    </View>
                    <View style={s.findSongRec}>
                        <ImageBackground
                            style={s.findSongImg}
                            source={require('../../asset/songlist/song5.jpg')}
                        ></ImageBackground>
                        <Text>[独立女嗓]众人皆是风花雪月迷途物</Text>
                    </View>
                    <View style={s.findSongRec}>
                        <ImageBackground
                            style={s.findSongImg}
                            source={require('../../asset/songlist/song6.jpg')}
                        ></ImageBackground>
                        <Text>重温"古惑仔"你被影响到了吗？</Text>
                    </View>
                </View>
            </View>
        );
    }
}

