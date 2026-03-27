/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DashboardCart from './DashboardCart'
import { RESPONSIVE } from '../../../../helper'
import { DATA } from './../../../../utils/Dummydata/DummyData';
import { useNavigation } from '@react-navigation/native';

const Product = () => {


    const navigation = useNavigation()
    const Renderitems = ({ item }) => {
        return (
            <View style={styles.productCart}>
                <Image source={item.image} resizeMode='cover' style={styles.image} />
                <View style={styles.textcontainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.products}</Text>
                    <Text style={[styles.name, { marginRight: 100, fontSize: 12 }]}>{item.desc}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <DashboardCart />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateProduct')}>
                <Text style={{ fontFamily: 'WorkSans-Bold', color: 'white', fontSize: 20, textAlign: 'center' }}>Add Product</Text>
            </TouchableOpacity>
            {/* <Text >dashbord Product</Text> */}

            {/* <View style={styles.productCart}>
                <Image source={require('../../../../assets/images/shop1.jpg')} resizeMode='cover' style={styles.image} />
                <View>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.name}>Description</Text>
                </View>
            </View> */}
            <FlatList
                data={DATA}
                renderItem={Renderitems}
                keyExtractor={(item) => item.id}
                // numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginBottom: RESPONSIVE.GET_HEIGHT(3),
        backgroundColor: '#66BB6A',
        marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    },
    name: {
        // fontWeight: 'bold',
        fontSize: RESPONSIVE.GET_FONT_SIZE(14),
        fontFamily: 'WorkSans-Bold'
    },
    productCart: {
        marginHorizontal: RESPONSIVE.GET_WIDTH(3),
        flexDirection: 'row',
        gap: 10
    },
    image: {
        height: 100,
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        width: 100
    },
    textcontainer: {
        alignSelf: 'center'
        // marginHorizontal:RESPONSIVE.GET_WIDTH(10)
        // marginLeft:10
    },
    list: {
        gap: 10
    }
})