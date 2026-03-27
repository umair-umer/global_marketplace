import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RESPONSIVE } from "../../../../helper";

const EachShopHeader = () => {
    return (
        <View style={styles.container}>

            <Image
                source={require('../../../../assets/images/shop1.jpg')}
                resizeMode="cover"
                style={styles.image}
            />

            {/* Gradient Overlay */}
            <LinearGradient
                colors={['transparent', 'black']}
                style={styles.gradient}
            />

            {/* Content on Image */}
            <View style={styles.content}>
                <Text style={styles.title}>Gul Plaza</Text>

                <TextInput
                    placeholder="Search Item"
                    placeholderTextColor={'#ccc'}
                    style={styles.input}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 180
    },

    image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },

    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%'
    },

    content: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15
    },

    title: {
        color: 'white',
        fontSize:RESPONSIVE.GET_FONT_SIZE(22),
        fontWeight: 'bold',
        marginBottom: 10
    },

    input: {
        backgroundColor: 'rgba(87, 88, 86, 0.5)123, 0.5)',
        borderRadius: RESPONSIVE.MODERATE_SCALE(15),
        paddingHorizontal: 12,
        color: 'white',
        height: 40
    }
})

export default EachShopHeader