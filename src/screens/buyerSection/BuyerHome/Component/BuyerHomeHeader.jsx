import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import AntDesign from '@react-native-vector-icons/ant-design';
import { RESPONSIVE } from '../../../../helper';

const BuyerHomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchcontainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Search Item'
                        placeholderTextColor={"black"}
                        style={styles.inputfield}
                    />
                    <AntDesign
                        name='search'
                        color={"black"}
                        size={20}
                        style={styles.searchIcon}
                    />
                </View>
            </View>

            <View>
                <View style={styles.locationcontainer}>
                    <View style={styles.locationinput}>
                        <TextInput
                            placeholder='Search Item'
                            placeholderTextColor={"black"}
                            style={styles.locationinputfield}
                        />
                        <AntDesign
                            name='location'
                            color={"black"}
                            size={20}
                            style={styles.searchIcon}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default BuyerHomeHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchcontainer: {
        backgroundColor: '#66BB6A',
        paddingVertical: RESPONSIVE.GET_HEIGHT(2),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(3),
        borderBottomRightRadius: RESPONSIVE.MODERATE_SCALE(20),
        borderBottomLeftRadius: RESPONSIVE.MODERATE_SCALE(20),
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#21e42b',
        borderWidth: 1,
        // backgroundColor: '#fff',
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        paddingHorizontal: 10,
    },
    inputfield: {
        flex: 1,
        color: "black",
        height: RESPONSIVE.GET_HEIGHT(5),
    },
    searchIcon: {
        marginLeft: 5,
    },
    locationcontainer: {
        // backgroundColor: 'white',
        paddingVertical: RESPONSIVE.GET_HEIGHT(2),
        paddingHorizontal: RESPONSIVE.GET_WIDTH(3),
        // borderBottomRightRadius: RESPONSIVE.MODERATE_SCALE(20),
        // borderBottomLeftRadius: RESPONSIVE.MODERATE_SCALE(20),
    },
    locationinput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#21e42b',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: RESPONSIVE.MODERATE_SCALE(20),
        paddingHorizontal: 10,
    },
    locationinputfield: {
        flex: 1,
        color: "black",
        height: RESPONSIVE.GET_HEIGHT(5),
    }
});