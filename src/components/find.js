import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground
} from 'react-native';

import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";


import StatusBar from "./common/statusbar";
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import Swiper from "react-native-swiper";

import {s} from './common/findStyle'

import PublicHeader from "./findSub/publicHeader";
import FindBanner from "./findSub/findBanner";
import FindCategory from "./findSub/findCategory";
import FindRecMusic from "./findSub/findRecMusic";
import FindRecBanner from "./findRec/findRecBanner";
import FindRecCategory from "./findRec/findRecCategory";
import FindRecSong from "./findRec/findRecSong";



export default class Find extends Component {
    static navigationOptions = {
        tabBarLabel: '发现',
        tabBarIcon(props){
            // console.log(props)
            const {focused} = props
            return (
                <AntDesignIcon
                    name={'find'}
                    size={22}
                    color={focused?'red':'#ccc'}
                />
            )
        }
    }


    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar />
                {/*头部*/}
                <PublicHeader />
                {/*tab*/}
                <View
                    style={s.findTabCon}
                >
                    <View
                        style={s.findTabAbs}
                    ></View>
                    <ScrollableTabView
                        tabBarInactiveTextColor={'#fff'}
                        tabBarActiveTextColor={'#fff'}
                        tabBarUnderlineStyle={{backgroundColor:'#fff',borderRadius:3,}}
                        renderTabBar={() => (
                            <ScrollableTabBar
                                style={{
                                    borderWidth: 0,
                                }}
                            />)
                        }
                    >
                        <View style={{marginTop: 10}} tabLabel={'个性推荐'}>
                            <ScrollView>
                                <View >
                                    {/*banner start*/}
                                    <FindBanner />
                                    {/*banner end*/}
                                    {/*分类 start*/}
                                    <FindCategory />
                                    {/*分类 end*/}
                                    {/*歌单 start*/}
                                    <FindRecMusic />
                                    {/*歌单 end*/}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10}} tabLabel={'主播电台'}>
                            <ScrollView>
                                <View >
                                    {/*banner start*/}
                                    <FindRecBanner />
                                    {/*banner end*/}
                                    {/*分类 start*/}
                                    <FindRecCategory />
                                    {/*分类 end*/}
                                    {/*歌单 start*/}
                                    <FindRecSong />
                                    {/*歌单 end*/}
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

