import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BuyerHomeHeader from './Component/BuyerHomeHeader';

const BuyerHome = () => {
    return (
        <View style={styles.container}>
            <BuyerHomeHeader />
            <Text>BuyerHome</Text>
        </View>
    )
}

export default BuyerHome

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})