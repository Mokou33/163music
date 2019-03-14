import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import StatusBar from "./common/statusbar";


export default class Friends extends Component {
    static navigationOptions = {
        tabBarLabel: '前端',
        tabBarIcon(props){
            const {focused} = props;
            return (
                <FontAwesome5Icon
                    name={'user-friends'}
                    size={22}
                    color={focused?'red':'#ccc'}
                />
            )
        }
    }


    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <StatusBar />
                <View style={{
                    flex: 1,
                    // borderWidth: 1,
                    backgroundColor:'#ccc'
                }}>
                    <View
                        style={{
                            height:70,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 30
                            }}
                        >WEB 前端</Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Text>HTML</Text>
                        <Text>CSS</Text>
                        <Text>JS</Text>
                        <Text>JQ</Text>
                        <Text>ES6</Text>
                        <Text>GIT</Text>
                        <Text>NODE</Text>
                        <Text>VUE</Text>
                        <Text>REACT</Text>
                        <Text>REACT NATIVE</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({})