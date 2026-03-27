/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, PermissionsAndroid, Platform } from 'react-native'
import React, { useState } from 'react'
import { RESPONSIVE } from '../../../helper'
import AntDesign from '@react-native-vector-icons/ant-design'
import Entypo from '@react-native-vector-icons/entypo'
import { launchImageLibrary } from 'react-native-image-picker'

const CreateProduct = () => {

    const [image, setImage] = useState(null)

    const requestPermission = async () => {

        if (Platform.OS === 'android') {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                openGallery()
            }

        } else {
            openGallery()
        }
    }

    const openGallery = () => {

        const options = {
            mediaType: 'photo',
            quality: 1
        }

        launchImageLibrary(options, response => {

            if (response.didCancel) {
                console.log('User cancelled image picker')
            }
            else if (response.errorCode) {
                console.log(response.errorMessage)
            }
            else {

                const uri = response.assets[0].uri
                setImage(uri)

            }

        })

    }

    return (
        <View style={styles.container}>

            <View style={styles.productimage}>

                <View style={styles.imageWrapper}>

                    <TouchableOpacity style={styles.imagebox} onPress={requestPermission}>

                        {image ? (

                            <Image
                                source={{ uri: image }}
                                style={styles.image}
                                resizeMode='cover'
                            />

                        ) : (

                            <>
                                <Entypo name='images' color={"black"} size={24} />
                                <Text style={{ fontFamily: 'WorkSans-Bold', color: 'black', fontSize: 20, textAlign: 'center' }}>
                                    Drop the image
                                </Text>
                            </>

                        )}

                    </TouchableOpacity>

                    <View style={styles.cameraIcon}>
                        <AntDesign name="camera" size={16} color="white" />
                    </View>

                </View>

            </View>

            <View style={styles.inputcontainer}>

                <View style={styles.inputfiled}>
                    <Text style={styles.label}>Product name</Text>
                    <TextInput
                        placeholder="Enter Product Name"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                </View>

                <View style={styles.inputfiled}>
                    <Text style={styles.label}>Product Price</Text>
                    <TextInput
                        placeholder="Enter Product Price"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                </View>

                <View style={styles.inputfiled}>
                    <Text style={styles.label}>Product Description</Text>
                    <TextInput
                        placeholder="Enter Product Description"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                </View>

                <View style={styles.inputfiled}>
                    <Text style={styles.label}>Product Discount</Text>
                    <TextInput
                        placeholder="Enter Product Discount"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                </View>

                <View style={styles.inputfiled}>
                    <Text style={styles.label}>Product Return Duration</Text>
                    <TextInput
                        placeholder="Enter Product Return Duration"
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                </View>

            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: 'WorkSans-Bold', color: 'white', fontSize: 20, textAlign: 'center' }}>
                    Add to Listing
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default CreateProduct

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    productimage: {
        alignSelf: 'center',
        marginTop: RESPONSIVE.GET_HEIGHT(5),
    },

    imageWrapper: {
        position: 'relative'
    },

    imagebox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: 'rgb(156,156,156)',
        paddingVertical: RESPONSIVE.GET_HEIGHT(5),
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(20)
    },

    image: {
        height: 120,
        width: 120,
        borderRadius: 10
    },

    cameraIcon: {
        position: 'absolute',
        bottom: -10,
        right: -10,
        width: 28,
        height: 28,
        borderRadius: RESPONSIVE.MODERATE_SCALE(14),
        backgroundColor: '#66BB6A',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white'
    },

    inputcontainer: {
        marginTop: RESPONSIVE.GET_HEIGHT(5),
        marginHorizontal: RESPONSIVE.GET_WIDTH(5)
    },

    label: {
        fontFamily: 'WorkSans-Bold'
    },

    inputfiled: {
        gap: 5,
        marginVertical: RESPONSIVE.GET_HEIGHT(2)
    },

    inputfield: {
        borderWidth: 1,
        height: RESPONSIVE.GET_HEIGHT(6),
        borderColor: '#66BB6A',
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        padding: 10
    },

    button: {
        backgroundColor: '#66BB6A',
        marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    }

})