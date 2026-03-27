import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DashboardCart from './DashboardCart';

const Home = () => {
    return (
        <View style={styles.container}>
            <DashboardCart />
            <Text>dashboard Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})