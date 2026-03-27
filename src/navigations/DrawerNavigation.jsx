/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from './../screens/Home/Home';
import MyCart from './../screens/buyerSection/Cart/MyCart';
import AntDesign from '@react-native-vector-icons/ant-design';
import LinearGradient from 'react-native-linear-gradient';
import AccountSetting from './../screens/buyerSection/Setting/AccountSetting';
import Entypo from '@react-native-vector-icons/entypo';
import Areas from './../screens/buyerSection/MarketByArea/Areas';
import SellerProfile from './../screens/SellerSection/Profile/SellerProfile';

const Drawer = createDrawerNavigator();

// Custom Drawer with gradient background
const CustomDrawerContent = (props) => {
    return (
        <LinearGradient
            colors={['#66BB6A', 'black']} // Top green, bottom black
            style={{ flex: 1 }}
        >
            <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </LinearGradient>
    );
};

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                contentStyle: { backgroundColor: 'transparent' },
                headerShown: false,
                // drawerLabelStyle: { color: 'white', fontSize: 16, marginLeft: -16 },
                drawerActiveTintColor: '#ffffff',
            }}
        >
            <Drawer.Screen
                name="MainHome"
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="home" size={20} color="white" />
                    ),
                }}
            />
            <Drawer.Screen
                name="My Cart"
                component={MyCart}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="shopping-cart" size={20} color="white" />
                    ),
                }}
            />

            <Drawer.Screen
                name="Account Setting"
                component={AccountSetting}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={20} color="white" />
                    ),
                }}
            />

            <Drawer.Screen
                name="Profile"
                component={SellerProfile}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="user" size={20} color="white" />
                    ),
                }}
            />

            <Drawer.Screen
                name="Areas"
                component={Areas}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Entypo name="location" size={20} color="white" />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});