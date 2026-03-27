/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import EachShopHeader from './component/EachShopHeader'
import { RESPONSIVE } from "../../../helper";
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '1',
        name: 'Dawn Bakers',
        products: 'Toast, Bread and etc',
        image: require('../../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'
    },
    {
        id: '2',
        name: 'City Bakers',
        products: 'Cakes, Biscuits and etc',
        image: require('../../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '3',
        name: 'Fresh Bakers',
        products: 'Pizza, Burger and etc',
        image: require('../../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '4',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '5',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '6',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '7',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '8',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '9',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop1.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
    {
        id: '10',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../../assets/images/shop2.jpg'),
        desc: 'this is the product of this shop and stores may have similar item you can choise the item my price and  quality of the product'

    },
]

const EachShop = () => {

    const navigation = useNavigation()

    const [cartItems, setCartItems] = useState({})

    const toggleCart = (id) => {

        setCartItems(prev => {

            const newCart = { ...prev }

            if (newCart[id]) {
                delete newCart[id]
            } else {
                newCart[id] = 1
            }

            return newCart
        })
    }

    const Renderitem = ({ item }) => {

        const added = cartItems[item.id]

        return (
            <View style={styles.productscards}>

                <Image
                    source={item.image}
                    style={styles.image1}
                    resizeMode='cover'
                />

                <Text style={styles.shopname}>{item.name}</Text>

                <Text style={styles.product}>{item.products}</Text>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: added ? 'red' : 'white' }]}
                    onPress={() => toggleCart(item.id)}
                >
                    <Text style={styles.btntext}>
                        {added ? 'Remove' : 'Add To Cart'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { marginTop: RESPONSIVE.GET_HEIGHT(1) }]}
                    onPress={() => navigation.navigate('ProductDetails', { shop: item })}
                >
                    <Text style={styles.btntext}>View Detail</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View style={styles.container}>

            <EachShopHeader />

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

// export default EachShop
export default EachShop
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productscards: {
        marginTop: RESPONSIVE.GET_HEIGHT(4),
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
        fontSize: RESPONSIVE.GET_FONT_SIZE(10),
        fontWeight: 'bold'
    }
})