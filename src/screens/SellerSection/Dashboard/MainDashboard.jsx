/* eslint-disable react-native/no-inline-styles */
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const MainDashboard = () => {
//     return (
//         <View>
//             <Text>MainDashboard</Text>
//         </View>
//     )
// }

// export default MainDashboard

// const styles = StyleSheet.create({})



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Home from './component/Home';
import Product from './component/Product';
import AntDesign from '@react-native-vector-icons/ant-design';
import Analytics from './component/Analytics';



const MainDashboard = () => {

    const [activeTab, setActiveTab] = useState(0);

    const screens = [
        <Home />,
        <Product />,
        <Home />,
        <Analytics />,
        // <Cart />,
        // <Profile />
    ];

    const tabs = [
        { name: 'Home', AntDesign: 'home' },
        { name: 'Product', AntDesign: 'product' },
        { name: 'Order', AntDesign: 'shop' },
        { name: 'Analytics', AntDesign: 'analytics' },
    ];

    return (
        <View style={{ flex: 1 }}>

            {/* Screen */}
            <View style={{ flex: 1 }}>
                {screens[activeTab]}
            </View>

            {/* Tab Bar */}
            <View style={styles.tabBar}>

                {tabs.map((tab, index) => {

                    const isActive = activeTab === index;

                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.tab}
                            onPress={() => setActiveTab(index)}
                        >

                            <AntDesign
                                name={tab.AntDesign}
                                size={20}
                                color={isActive ? '#e3e8ec' : '#999'}
                            />

                            <Text style={{
                                color: isActive ? '#007AFF' : '#999',
                                fontSize: 12
                            }}>
                                {tab.name}
                            </Text>

                        </TouchableOpacity>
                    );
                })}

            </View>

        </View>
    );
};

export default MainDashboard;

const styles = StyleSheet.create({

    tabBar: {
        flexDirection: 'row',
        height: 65,
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#0f0c0c'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});