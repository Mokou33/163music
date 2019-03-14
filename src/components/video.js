import React, {Component} from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import StatusBar from "./common/statusbar";
import PublicHeader from "./findSub/publicHeader";
import VideoList from "./videoV/videoList";


import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import {s} from "./common/findStyle";



export default class Video extends Component {
    static navigationOptions = {
        tabBarLabel: '视频',
        tabBarIcon(props) {
            const {focused} = props;
            return (
                <MaterialIcon
                    name={'ondemand-video'}
                    size={22}
                    color={focused?'red':'#ccc'}
                />
            );
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar />
                {/*头部*/}
                <PublicHeader />
                <View
                    style={s.findTabCon}
                >
                    <ScrollableTabView
                        tabBarBackgroundColor={'#d53c32'}
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
                        <View style={{marginTop: 10}} tabLabel={'推荐'}>
                            <ScrollView>
                                <VideoList />
                                <VideoList />
                                <VideoList />
                                <VideoList />
                                <VideoList />
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10}} tabLabel={'LOOk直播'}>
                            <ScrollView>
                                <View >
                                    <ScrollView>
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10}} tabLabel={'有颜有会唱'}>
                            <ScrollView>
                                <View >
                                    <ScrollView>
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10}} tabLabel={'好心分手'}>
                            <ScrollView>
                                <View >
                                    <ScrollView>
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{marginTop: 10}} tabLabel={'满汉全席'}>
                            <ScrollView>
                                <View >
                                    <ScrollView>
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                        <VideoList />
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollableTabView>
                </View>

            </View>
        );
    }
}

