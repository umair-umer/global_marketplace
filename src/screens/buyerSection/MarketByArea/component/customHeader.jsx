import Entypo from '@react-native-vector-icons/entypo'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RESPONSIVE } from '../../../../helper'

const customHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Areas</Text>
                <Text style={styles.headerText}>Gul Plaza</Text>
                <Entypo name="location" size={20} color="black" style={styles.locationIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#66BB6A',
        padding: 10,
        borderBottomLeftRadius: RESPONSIVE.MODERATE_SCALE(10),
        borderBottomRightRadius: RESPONSIVE.MODERATE_SCALE(10),
    },
    headerContainer: {
        paddingTop: RESPONSIVE.GET_HEIGHT(3),
        paddingBottom: RESPONSIVE.GET_HEIGHT(2),

        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: RESPONSIVE.GET_WIDTH(2)
        // justifyContent: 'space-between',
    },
    locationIcon: {
        marginLeft: 'auto',
    },
    headerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: RESPONSIVE.GET_FONT_SIZE(12),
    },
})

export default customHeader