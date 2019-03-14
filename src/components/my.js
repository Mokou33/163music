import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicon from "react-native-vector-icons/Ionicons";


import {s} from "./common/findStyle";


import StatusBar from "./common/statusbar";
import PublicHeader from "./findSub/publicHeader";
import MyList from "./my/myList";
import MyCollect from "./my/myCollect";


export default class My extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon(props) {
            const {focused} = props;
            return (
                <FontAwesome5Icon
                    name={'music'}
                    size={22}
                    color={focused?'red':'#ccc'}
                />
            );
        }
    }
    
    
    render() {
        return (
            <View style={{flex: 1,}}>
                <StatusBar />
                <PublicHeader />
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <ScrollView>
                        <MyList />
                        <MyCollect />
                        <MyCollect />
                    </ScrollView>
                </View>
            </View>
        );
    }
}
