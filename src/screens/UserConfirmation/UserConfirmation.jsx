/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@react-native-vector-icons/ant-design'
import { RESPONSIVE } from '../../helper'
import { useNavigation } from '@react-navigation/native'

const UserConfirmation = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>"Welcome! 🚀 Are you looking to sell your products or find amazing deals as a buyer? Let us know your role and get started on your personalized journey today!"</Text>
            <View style={styles.usercontiner}>
                <AntDesign name='user' size={20} color={'black'} />
                <Text style={{ color: 'black', textAlign: 'center' }}>Seller</Text>
            </View>
            <View style={styles.usercontiner}>
                <AntDesign name='user' size={20} color={'black'} />
                <Text style={{ color: 'black', textAlign: 'center' }}>Buyer</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>Next</Text>
                <View style={{ marginTop: 5 }}>

                    <AntDesign
                        name={'arrow-right'}
                        color="black"
                        size={15}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default UserConfirmation

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        paddingVertical: RESPONSIVE.GET_HEIGHT(10),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(10),
        color: 'black',
        alignContent: 'center',
        textAlign: 'justify',
        fontSize: RESPONSIVE.GET_FONT_SIZE(14),
        fontWeight: 'bold'
    },
    usercontiner: {
        marginVertical: RESPONSIVE.GET_HEIGHT(1),
        alignSelf: 'center',
        gap: 10,
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2.5),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(30),
        backgroundColor: '#66BB6A',
        flexDirection: 'row'
    },
    button: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#66BB6A',
        gap: 10,
        marginTop: RESPONSIVE.GET_HEIGHT(25),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(30),
        // marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        // marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    }

})