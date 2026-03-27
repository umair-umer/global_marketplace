/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@react-native-vector-icons/ant-design'
import { RESPONSIVE } from '../../helper'

const DateOfBirth = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.login}>DOB & Address</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.input}>
                    <Text style={styles.name}>Enter DOB</Text>
                    <TextInput placeholder='Enter DOB'
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.name}>Enter id Number</Text>
                    <TextInput placeholder='Enter id Number'
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.name}>Enter Street NO</Text>
                    <TextInput placeholder='Enter Street NO'
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                        keyboardType='numeric'
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddressAndLocation')}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Next</Text>
                <View style={{ marginTop: 5 }}>

                    <AntDesign
                        name={'arrow-right'}
                        color="white"
                        size={15}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DateOfBirth

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginTop: RESPONSIVE.GET_HEIGHT(5),

    },
    login: {
        marginTop: RESPONSIVE.GET_HEIGHT(30),
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:RESPONSIVE.GET_FONT_SIZE(30),
        color: 'black'
    },
    name: {
        marginBottom: 10,
        color: 'black'
    },
    inputcontainer: {
        // marginTop: RESPONSIVE.GET_HEIGHT(5),
        // gap:RESPONSIVE.MODERATE_SCALE(10),
        marginHorizontal: RESPONSIVE.GET_WIDTH(10)
    },
    inputfield: {
        paddingHorizontal: RESPONSIVE.GET_WIDTH(5),
        borderColor: '#66BB6A',
        borderWidth: 1,
        color: 'white',
        borderRadius:RESPONSIVE.MODERATE_SCALE(20)
    },
    button: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#66BB6A',
        gap: 10,
        paddingHorizontal: RESPONSIVE.GET_WIDTH(30),
        // marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    }
})