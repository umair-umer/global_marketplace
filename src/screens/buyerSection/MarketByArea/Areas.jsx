/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import CustomHeader from './component/customHeader'
import { useNavigation } from '@react-navigation/native'
import { RESPONSIVE } from '../../../helper'

const { width } = Dimensions.get('window')

const areasData = [
    {
        id: '1',
        name: 'Downtown',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea corrupti eos rerum ut in error nemo aut tenetur delectus ab cumque.',
        image: require('../../../assets/images/shop1.jpg')
    },
    {
        id: '2',
        name: 'Uptown',
        description: 'Area description lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: require('../../../assets/images/shop2.jpg')
    },
    {
        id: '3',
        name: 'Midtown',
        description: 'Midtown is a bustling area with lots of shops and restaurants.',
        image: require('../../../assets/images/shop1.jpg')
    },
    {
        id: '4',
        name: 'Greenfield',
        description: 'Greenfield is peaceful and has nice parks.',
        image: require('../../../assets/images/shop2.jpg')
    },
    {
        id: '5',
        name: 'Lakeside',
        description: 'Beautiful area with lakes and recreational activities.',
        image: require('../../../assets/images/shop1.jpg')
    }
]

const Areas = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.areaProduct} onPress={() => navigation.navigate('AreasShop', { area: item })}>
            <Image source={item.image} style={styles.image} resizeMode='cover' />
            <View style={styles.overlay}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <CustomHeader />
            <FlatList
                data={areasData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 10 }}
            />
        </View>
    )
}

export default Areas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    areaProduct: {
        marginBottom: 20,
        backgroundColor: '#66BB6A',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3
    },
    image: {
        width: width - 20, // Full width minus padding
        height: 150
    },
    overlay: {
        position: 'absolute',
        // top: 90,
        bottom: 80,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:RESPONSIVE.GET_FONT_SIZE(16)
    },
    description: {
        padding: 10,
        fontSize:RESPONSIVE.GET_FONT_SIZE(14),
        color: '#333'
    }
})