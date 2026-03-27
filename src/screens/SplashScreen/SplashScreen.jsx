// /* eslint-disable react-native/no-inline-styles */
// import { Image, StyleSheet, Text, View, Animated, ActivityIndicator } from 'react-native'
// import React, { useEffect, useRef } from 'react'
// import { RESPONSIVE } from '../../helper'
// import { useNavigation } from '@react-navigation/native'

// const SplashScreen = () => {

//     const navigation = useNavigation()

//     const fadeAnim = useRef(new Animated.Value(0)).current
//     const scaleAnim = useRef(new Animated.Value(0.7)).current

//     useEffect(() => {

//         Animated.parallel([
//             Animated.timing(fadeAnim, {
//                 toValue: 1,
//                 duration: 1500,
//                 useNativeDriver: true
//             }),
//             Animated.spring(scaleAnim, {
//                 toValue: 1,
//                 friction: 4,
//                 useNativeDriver: true
//             })
//         ]).start()

//         // 3 second baad login screen
//         setTimeout(() => {
//             navigation.replace('IntroSlider')
//         }, 3000)

//     }, [])

//     return (
//         <View style={styles.container}>
//             <Animated.Image
//                 source={require('../../assets/images/basket.png')}
//                 style={[
//                     styles.basket,
//                     {
//                         opacity: fadeAnim, transform: [{ scale: scaleAnim }]
//                     }
//                 ]}
//                 resizeMode="contain"
//             />

//             <Animated.View style={{ opacity: fadeAnim }}>
//                 <Text style={styles.logoText}>Fresh Mart</Text>
//                 <Text style={styles.desc}>All Your Daily Needs, One Basket</Text>
//             </Animated.View>
            
//             <View style={{ alignSelf: 'center', marginTop: RESPONSIVE.GET_WIDTH(10) }}>
//                 <ActivityIndicator size='small' color={'black'} />
//             </View>
//         </View>
//     )
// }

// export default SplashScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     basket: {
//         height: 200,
//         width: 200,
//         alignSelf: 'center',
//         marginTop: RESPONSIVE.GET_HEIGHT(20),
//     },
//     logoText: {
//         color: 'black',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontSize: RESPONSIVE.GET_FONT_SIZE(16),
//         marginTop: 20,
//     },
//     desc: {
//         color: 'black',
//         textAlign: 'center',
//         fontSize: RESPONSIVE.GET_FONT_SIZE(11),
//         marginTop: 5,
//     }
// })



/* eslint-disable react-native/no-inline-styles */
import {  StyleSheet, Text, View, Animated, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { RESPONSIVE } from '../../helper'
import { useNavigation } from '@react-navigation/native'
import ReactNativeBiometrics from '@sbaiahmed1/react-native-biometrics'

const SplashScreen = () => {

    const navigation = useNavigation()
    const rnBiometrics = ReactNativeBiometrics ? new ReactNativeBiometrics() : null

    const fadeAnim = useRef(new Animated.Value(0)).current
    const scaleAnim = useRef(new Animated.Value(0.7)).current

    useEffect(() => {

        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true
            })
        ]).start()

        // Show biometric prompt after splash animation (3 seconds)
        setTimeout(() => {
            checkFingerprint()
        }, 3500)

    }, [])

    const checkFingerprint = async () => {

        try {
            
            if (!rnBiometrics) {
                navigation.replace('IntroSlider')
                return
            }

            const { available } = await rnBiometrics.isSensorAvailable()

            if (available) {

                const { success } = await rnBiometrics.simplePrompt({
                    promptMessage: 'Verify your fingerprint'
                })

                if (success) {
                    navigation.replace('Home')
                } else {
                    navigation.replace('IntroSlider')
                }

            } else {
                navigation.replace('IntroSlider')
            }

        } catch (error) {
            navigation.replace('IntroSlider')
        }

    }

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/images/basket.png')}
                style={[
                    styles.basket,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }]
                    }
                ]}
                resizeMode="contain"
            />

            <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={styles.logoText}>Fresh Mart</Text>
                <Text style={styles.desc}>All Your Daily Needs, One Basket</Text>
            </Animated.View>

            <View style={{ alignSelf: 'center', marginTop: RESPONSIVE.GET_WIDTH(10) }}>
                <ActivityIndicator size='small' color={'black'} />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    basket: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: RESPONSIVE.GET_HEIGHT(20),
    },
    logoText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: RESPONSIVE.GET_FONT_SIZE(16),
        marginTop: 20,
    },
    desc: {
        color: 'black',
        textAlign: 'center',
        fontSize: RESPONSIVE.GET_FONT_SIZE(11),
        marginTop: 5,
    }
})