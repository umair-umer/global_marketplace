import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RESPONSIVE } from './../helper/responsive';
import AntDesign from '@react-native-vector-icons/ant-design';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>

                    <Image source={require('../assets/images/avatar.jpg')} style={styles.userimage} />
                </TouchableOpacity>
                <Text style={styles.name}>Welcome! Hussain</Text>

                <TouchableOpacity style={styles.bellicon} onPress={()=>navigation.navigate('Notifications')}>
                    <AntDesign name='bell' size={20} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    header: {
        borderBottomLeftRadius: RESPONSIVE.MODERATE_SCALE(20),
        borderBottomRightRadius: RESPONSIVE.MODERATE_SCALE(20),
        paddingVertical: RESPONSIVE.GET_HEIGHT(3),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(5),
        backgroundColor: 'black',
        flexDirection: 'row',
        gap: 20,
    },
    userimage: {
        marginTop: RESPONSIVE.GET_HEIGHT(1),
        borderRadius: RESPONSIVE.MODERATE_SCALE(50),
        height: RESPONSIVE.MODERATE_SCALE(30),
        width: RESPONSIVE.MODERATE_SCALE(30)
    },
    name: {
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        color: 'white'
    },
    bellicon: {
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 15
    }
})