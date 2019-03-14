import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';



export default class  extends Component {
    render() {
        return (
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'transparent'}
                translucent={true} //从顶端开始布局
            />
        );
    }
}
