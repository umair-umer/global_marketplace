import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { RESPONSIVE } from '../../../../helper'

const DashboardCart = () => {
    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#66BB6A', '#000000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.cartcontainer}
            >

                <Text style={styles.title}>Seller Dashboard</Text>

                <Text style={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga, corrupti nesciunt? Eos, fuga! Animi quisquam doloremque nemo.
                    Enim doloremque debitis optio, sint itaque facere ea dolore fugiat
                    nobis maxime atque.
                </Text>

            </LinearGradient>

        </View>
    )
}

export default DashboardCart

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    cartcontainer: {
        borderBottomLeftRadius: RESPONSIVE.MODERATE_SCALE(10),
        borderBottomRightRadius: RESPONSIVE.MODERATE_SCALE(10),
        // width: '90%',
        padding: 20,
        // borderRadius: 15
    },

    title: {
        color: 'white',
        fontSize: RESPONSIVE.GET_FONT_SIZE(18),
        fontWeight: 'bold',
        marginVertical: RESPONSIVE.GET_HEIGHT(5)
    },

    desc: {
        color: 'white'
    }
})