import {
    StyleSheet,
    Dimensions,
    NativeModules

} from "react-native";

const {width} = Dimensions.get('window')
const {StatusBarManager} = NativeModules;
export    const s = StyleSheet.create({
    commonHeader: {
        paddingTop: StatusBarManager.HEIGHT,
        height: 90,
        backgroundColor: '#d53c32',
        justifyContent: 'center'
    },
    findSearchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'blue',
        height: 30
    },
    findSearchCon: {
        width: 306,
        height: 30,
        backgroundColor: '#dc655c',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    findSearchText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 8
    },
    findTabCon: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',

    },
    findTabAbs: {
        position: 'absolute',
        width,
        height: 166,
        backgroundColor: '#d53c32'
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        marginHorizontal: 5,
        borderRadius: 5
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    findSongList: {
        backgroundColor: '#fff',
        paddingHorizontal: 5,
    },
    findSongTitle: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center'
    },
    findTitTxt: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    findSongRecList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    findSongRec: {
        width: width / 3 - 6,
        marginVertical: 10
    },
    findSongImg: {
        width: width / 3 - 6,
        height: 132,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 2
    },
    videoCon: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    videoHead: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    videoInfo: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    videoPic: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    videoTxt: {
        height:40,
        justifyContent: 'center',
        paddingHorizontal:5
    },
    myList: {
        paddingHorizontal: 10,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    myListDic: {
        flexDirection:'row',
        alignItems: 'center'
    },
    myListPd: {
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    myCollect: {
        paddingHorizontal: 5,
        height:30,
        justifyContent: 'center',
        backgroundColor: '#ccc'
    },
    myCT : {
        fontSize: 12
    },
    myCPic: {
        marginVertical: 3,
        flexDirection: 'row'
    },
    myCInfo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333'
    }
})