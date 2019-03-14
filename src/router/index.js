import {
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import Find from "../components/find";
import Video from "../components/video";
import My from "../components/my";
import Friends from "../components/friends";
import Adv from "../components/adv";


export const BottomTabNavigator = createBottomTabNavigator(
    {
        Find: {
            screen: Find,

        },
        Video: {
            screen: Video
        },
        My: {
            screen: My
        },
        Friends: {
            screen: Friends
        },

    },{
        // initialRouteName: 'Adv',
        tabBarOptions: {
            inactiveTintColor: '#ccc',
            activeTintColor: 'red',
            style: {
                // backgroundColor: '#ff6449',//TabBar 背景色
                // height: 50
            },
            pressColor: 'blue', //android  按压时显示的颜色
            labelStyle: {
                fontSize: 10 //文字大小
            },
            tabStyle: {
                height: 50,
                // backgroundColor: '#ff6449'
            }
        }
    }
)

export const SwitchNavigator = createSwitchNavigator({
    Adv,
    BottomTabNavigator
})