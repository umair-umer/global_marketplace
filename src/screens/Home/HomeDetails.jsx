import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RESPONSIVE } from '../../helper'
const DATA = [
    {
        id: '1',
        name: 'Dawn Bakers',
        products: 'Toast, Bread and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'
    },
    {
        id: '2',
        name: 'City Bakers',
        products: 'Cakes, Biscuits and etc',
        image: require('../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '3',
        name: 'Fresh Bakers',
        products: 'Pizza, Burger and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '4',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '5',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '6',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '7',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '8',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '9',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
    {
        id: '10',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you cn choise the item my price and  quality of the product'

    },
]
const HomeDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { shop } = route.params
    // eslint-disable-next-line react/no-unstable-nested-components
    const Renderitem = ({ item }) => {

        return (
            <View style={styles.productscards}>

                <Image
                    source={item.image}
                    style={styles.image1}
                    resizeMode='cover'
                />

                <Text style={styles.shopname}>{item.name}</Text>

                <Text style={styles.product}>{item.products}</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductDetails', { shop: item })}>
                    <Text style={styles.btntext}>buy Now</Text>
                </TouchableOpacity>

            </View>
        )
    }
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

            <View>
                <Text style={styles.relevent}>See the relevent item in this shop</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={Renderitem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />

        </View>
    )
}

export default HomeDetails

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
        fontSize:RESPONSIVE.GET_FONT_SIZE(26),
        fontWeight: 'bold',
        color: 'white'
    },
    products: {
        position: 'absolute',
        fontSize:RESPONSIVE.GET_FONT_SIZE(16),
        bottom: 10,
        fontWeight: 'bold',
        left: 15,
        // fontSize: 26,
        marginTop: 10,
        color: 'white',
        marginHorizontal: 15
    },
    relevent: {
        color: 'white',
        marginVertical: RESPONSIVE.GET_HEIGHT(1),
        textAlign: 'center',
        fontSize: RESPONSIVE.GET_FONT_SIZE(10),
        fontWeight: 'bold'
    },
    productscards: {
        flex: 1,
        margin: 10,
        padding: RESPONSIVE.MODERATE_SCALE(10),
        backgroundColor: '#66BB6A',
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        alignItems: 'center'
    },

    image1: {
        height: RESPONSIVE.MODERATE_SCALE(110),
        width: RESPONSIVE.MODERATE_SCALE(120),
        borderRadius: RESPONSIVE.MODERATE_SCALE(10)
    },

    shopname: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold'
    },

    product: {
        color: 'white',
        marginTop: 3
    },

    button: {
        marginTop: RESPONSIVE.GET_HEIGHT(1),
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15
    },

    btntext: {
        textAlign: 'center',
    }
})