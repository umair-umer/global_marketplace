/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RESPONSIVE } from '../../helper/responsive'
import AntDesign from '@react-native-vector-icons/ant-design';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation()
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.login}>Login</Text>
            </View>

            <View style={styles.inputcontainer}>

                <View style={styles.input}>
                    <Text style={styles.name}>Enter Name</Text>
                    <TextInput placeholder='Enter Name'
                        placeholderTextColor={'black'}
                        style={styles.inputfield}
                    />
                    {/* <AntDesign name="house" color="#ff0000" size={20} /> */}
                </View>

                <View style={styles.input}>
                    <Text style={styles.name}>Enter Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder='Enter Password'
                            placeholderTextColor={'black'}
                            style={styles.passwordInput}
                            secureTextEntry={!showPassword}
                        />

                        <TouchableOpacity
                            style={{ paddingRight: 10 }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <AntDesign
                                name={showPassword ? "eye" : "eye-invisible"}
                                color="black"
                                size={15}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
            <Text style={styles.account}>Do not have account?
                <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>SignUP</Text>
                </TouchableOpacity>
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainDashboard')}>
                <Text style={{ fontFamily: 'WorkSans-Bold', color: 'white', fontSize: 20, textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    login: {
        marginTop: RESPONSIVE.GET_HEIGHT(30),
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:RESPONSIVE.GET_FONT_SIZE(30),
        color: 'black'
    },
    inputcontainer: {
        marginTop: RESPONSIVE.GET_HEIGHT(5),
        // gap:RESPONSIVE.MODERATE_SCALE(10),
        marginHorizontal: RESPONSIVE.GET_WIDTH(10)
    },
    inputfield: {
        paddingHorizontal: RESPONSIVE.GET_WIDTH(5),
        borderColor: '#66BB6A',
        borderWidth: 1,
        color: 'black',
        borderRadius:RESPONSIVE.MODERATE_SCALE(20)
    },
    input: {
        marginTop: RESPONSIVE.GET_HEIGHT(5),
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#66BB6A',
        borderWidth: 1,
        borderRadius:RESPONSIVE.MODERATE_SCALE(20),
        paddingHorizontal: 5
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: RESPONSIVE.GET_WIDTH(5),
        color: 'black'
    },
    name: {
        marginBottom: 10,
        color: 'black'
    },
    account: {
        textAlign: 'center',
        color: 'black',
        marginTop: 10
    },
    button: {
        backgroundColor: '#66BB6A',
        marginHorizontal: RESPONSIVE.GET_WIDTH(10),
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        marginTop: RESPONSIVE.GET_HEIGHT(2),
        paddingVertical: RESPONSIVE.GET_HEIGHT(2)
    }
})




/* eslint-disable react-native/no-inline-styles */
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { RESPONSIVE } from '../../helper/responsive'
// import AntDesign from '@react-native-vector-icons/ant-design';
// import { useNavigation } from '@react-navigation/native';
// // Biometrics import
// import { isSensorAvailable, simplePrompt } from '@sbaiahmed1/react-native-biometrics';

// const Login = () => {
//     const navigation = useNavigation()
//     const [showPassword, setShowPassword] = useState(false)
//     const [isBiometricAvailable, setIsBiometricAvailable] = useState(false)

//     // Check availability on mount
//     useEffect(() => {
//         checkBiometrics();
//     }, []);

//     const checkBiometrics = async () => {
//         const { available } = await isSensorAvailable();
//         setIsBiometricAvailable(available);
//     };

//     const handleBiometricLogin = async () => {
//         try {
//             const { success } = await simplePrompt('Login using Biometrics');
//             if (success) {
//                 navigation.navigate('MainDashboard');
//             } else {
//                 Alert.alert('Authentication Failed', 'Please try again or use password.');
//             }
//         } catch (error) {
//             console.error(error);
//             Alert.alert('Error', 'Biometric authentication error.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.login}>Login</Text>
//             </View>

//             <View style={styles.inputcontainer}>
//                 <View style={styles.input}>
//                     <Text style={styles.name}>Enter Name</Text>
//                     <TextInput 
//                         placeholder='Enter Name'
//                         placeholderTextColor={'black'}
//                         style={styles.inputfield}
//                     />
//                 </View>

//                 <View style={styles.input}>
//                     <Text style={styles.name}>Enter Password</Text>
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             placeholder='Enter Password'
//                             placeholderTextColor={'black'}
//                             style={styles.passwordInput}
//                             secureTextEntry={!showPassword}
//                         />
//                         <TouchableOpacity
//                             style={{ paddingRight: 10 }}
//                             onPress={() => setShowPassword(!showPassword)}
//                         >
//                             <AntDesign
//                                 name={showPassword ? "eye" : "eye-invisible"}
//                                 color="black"
//                                 size={15}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>

//             {/* Biometric Button - Sirf tab dikhega agar sensor available ho */}
//             {isBiometricAvailable && (
//                 <TouchableOpacity 
//                     style={styles.biometricBtn} 
//                     onPress={handleBiometricLogin}
//                 >
//                     <AntDesign name="customerservice" size={30} color="#66BB6A" />
//                     <Text style={{color: '#66BB6A', marginTop: 5}}>Use Biometrics</Text>
//                 </TouchableOpacity>
//             )}

//             <Text style={styles.account}>Do not have account?
//                 <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
//                     <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>SignUP</Text>
//                 </TouchableOpacity>
//             </Text>

//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainDashboard')}>
//                 <Text style={{ fontFamily: 'WorkSans-Bold', color: 'white', fontSize: 20, textAlign: 'center' }}>Login</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     login: {
//         marginTop: RESPONSIVE.GET_HEIGHT(30),
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontSize: RESPONSIVE.GET_FONT_SIZE(30),
//         color: 'black'
//     },
//     inputcontainer: {
//         marginTop: RESPONSIVE.GET_HEIGHT(5),
//         marginHorizontal: RESPONSIVE.GET_WIDTH(10)
//     },
//     inputfield: {
//         paddingHorizontal: RESPONSIVE.GET_WIDTH(5),
//         borderColor: '#66BB6A',
//         borderWidth: 1,
//         color: 'black',
//         borderRadius: RESPONSIVE.MODERATE_SCALE(20)
//     },
//     input: {
//         marginTop: RESPONSIVE.GET_HEIGHT(5),
//     },
//     passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderColor: '#66BB6A',
//         borderWidth: 1,
//         borderRadius: RESPONSIVE.MODERATE_SCALE(20),
//         paddingHorizontal: 5
//     },
//     passwordInput: {
//         flex: 1,
//         paddingHorizontal: RESPONSIVE.GET_WIDTH(5),
//         color: 'black'
//     },
//     name: {
//         marginBottom: 10,
//         color: 'black'
//     },
//     biometricBtn: {
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     account: {
//         textAlign: 'center',
//         color: 'black',
//         marginTop: 20
//     },
//     button: {
//         backgroundColor: '#66BB6A',
//         marginHorizontal: RESPONSIVE.GET_WIDTH(10),
//         borderRadius: RESPONSIVE.MODERATE_SCALE(20),
//         marginTop: RESPONSIVE.GET_HEIGHT(2),
//         paddingVertical: RESPONSIVE.GET_HEIGHT(2)
//     }
// })
