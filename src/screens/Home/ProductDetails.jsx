/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { RESPONSIVE } from '../../helper'

const ProductDetails = () => {
    const route = useRoute()
    const { shop } = route.params
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={shop.image}
                    style={styles.image}
                    resizeMode='cover'
                />

                <Text style={styles.overlayText}>{shop.name}</Text>
                <Text style={styles.products}>{shop.products}</Text>

            </View>
            <View style={styles.descriptioncontainer}>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.dyamicdescription}>{shop.desc}</Text>
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}>
                <Text style={{ color: 'white', fontSize: RESPONSIVE.GET_FONT_SIZE(15), textAlign: 'center' }}>Add to cart</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', fontSize: RESPONSIVE.GET_FONT_SIZE(15), textAlign: 'center' }}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        position: 'relative'
    },
    image: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: RESPONSIVE.MODERATE_SCALE(20),
        borderBottomRightRadius: RESPONSIVE.MODERATE_SCALE(20)
    },
    overlayText: {
        position: 'absolute',
        bottom: 30,
        left: 15,
        fontSize: RESPONSIVE.GET_FONT_SIZE(26),
        fontWeight: 'bold',
        color: 'white'
    },
    products: {
        position: 'absolute',
        fontSize: RESPONSIVE.GET_FONT_SIZE(16),
        bottom: 10,
        fontWeight: 'bold',
        left: 15,
        // fontSize: 26,
        marginTop: 10,
        color: 'white',
        marginHorizontal: 15
    },
    descriptioncontainer: {
        marginHorizontal: RESPONSIVE.GET_WIDTH(5),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
    },
    description: {
        color: 'black',
        fontSize: RESPONSIVE.GET_FONT_SIZE(15),
        fontWeight: 'bold'
    },
    dyamicdescription: {
        color: 'black',
        marginTop: RESPONSIVE.GET_HEIGHT(1),
        fontSize: RESPONSIVE.GET_FONT_SIZE(12),
    },
    button: {
        backgroundColor: '#66BB6A',

        marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    }
})