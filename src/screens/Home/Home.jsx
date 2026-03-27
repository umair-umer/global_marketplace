import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeHeader from './../../components/HomeHeader';
import { RESPONSIVE } from './../../helper/responsive';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '1',
        name: 'Dawn Bakers',
        products: 'Toast, Bread and etc',
        image: require('../../assets/images/shop1.jpg')
    },
    {
        id: '2',
        name: 'City Bakers',
        products: 'Cakes, Biscuits and etc',
        image: require('../../assets/images/shop2.jpg')
    },
    {
        id: '3',
        name: 'Fresh Bakers',
        products: 'Pizza, Burger and etc',
        image: require('../../assets/images/shop1.jpg')
    },
    {
        id: '4',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg')
    },
    {
        id: '5',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop2.jpg')
    },
    {
        id: '6',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg')
    },
    {
        id: '7',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop2.jpg')
    },
    {
        id: '8',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg')
    },
    {
        id: '9',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg')
    },
    {
        id: '10',
        name: 'Royal Bakers',
        products: 'Snacks and etc',
        image: require('../../assets/images/shop1.jpg')
    },
]

const Home = () => {
const navigation = useNavigation()
    // eslint-disable-next-line react/no-unstable-nested-components
    const Renderitem = ({ item }) => {
        return (
            <View style={styles.productscards}>

                <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode='cover'
                />

                <Text style={styles.shopname}>{item.name}</Text>

                <Text style={styles.products}>{item.products}</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeDetails', { shop: item })}>
                    <Text style={styles.btntext}>Shop Now</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View style={styles.container}>

            <HomeHeader />

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

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    list: {
        padding: 10
    },

    productscards: {
        flex: 1,
        margin: 10,
        padding: RESPONSIVE.MODERATE_SCALE(10),
        backgroundColor: '#66BB6A',
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        alignItems: 'center'
    },

    image: {
        height: RESPONSIVE.MODERATE_SCALE(110),
        width: RESPONSIVE.MODERATE_SCALE(120),
        borderRadius: RESPONSIVE.MODERATE_SCALE(10)
    },

    shopname: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold'
    },

    products: {
        color: 'white',
        marginTop: 3
    },

    button: {
        marginTop: 10,
        borderRadius: RESPONSIVE.MODERATE_SCALE(10),
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15
    },

    btntext: {
        textAlign: 'center',
        fontWeight: 'bold'
    }

})