/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { RESPONSIVE } from "../../../helper";
import AntDesign from "@react-native-vector-icons/ant-design";

const SellerProfile = () => {
    return (
        <View style={styles.container}>

            <View style={styles.avatarContainer}>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={require('../../../assets/images/avatar.jpg')}
                        style={styles.avatar}
                    />

                    <TouchableOpacity style={styles.cameraIcon}>
                        <AntDesign name="camera" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.formcontainer}>
                <View style={styles.input}>
                    <Text>First Name</Text>
                    <TextInput placeholder="First Name"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />

                </View>
                <View style={styles.input}>
                    <Text>Last Name</Text>
                    <TextInput placeholder="Last Name"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />

                </View>

                <View style={styles.input}>
                    <Text>Email</Text>
                    <TextInput placeholder="Email"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />

                </View>
                <View style={styles.input}>
                    <Text>Phone No</Text>
                    <TextInput placeholder="Phone NO"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.input}>
                    <Text>Email</Text>
                    <TextInput placeholder="Email"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontFamily:'WorkSans-Bold' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RESPONSIVE.GET_HEIGHT(10),
    },

    avatarWrapper: {
        position: 'relative'
    },

    avatar: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius:RESPONSIVE.MODERATE_SCALE(50)
    },

    cameraIcon: {
        position: 'absolute',
        right: -2,
        bottom: 0,
        backgroundColor: 'black',
        width: 32,
        height: 32,
        borderRadius:RESPONSIVE.MODERATE_SCALE(16),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white'
    },
    formcontainer: {
        marginTop: RESPONSIVE.GET_HEIGHT(5),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(3)
    },
    inputfield: {
        borderWidth: 1,
        height: RESPONSIVE.GET_HEIGHT(6),
        // paddingVertical: RESPONSIVE.GET_HEIGHT(2),
        borderColor: '#66BB6A',
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        padding: 10
    },
    input: {
        marginVertical: RESPONSIVE.GET_HEIGHT(2),

    },
    button: {
        backgroundColor: '#66BB6A',
        // marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    }

});

export default SellerProfile;