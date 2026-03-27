/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Search from './Search';
import Cart from './Cart';
import Profile from './Profile';

const CustomTabview = () => {

  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    <Home />,
    <Search />,
    <Cart />,
    <Profile />
  ];

  const tabs = [
    {name: 'Home', icon: 'home-outline'},
    {name: 'Search', icon: 'search-outline'},
    {name: 'Cart', icon: 'cart-outline'},
    {name: 'Profile', icon: 'person-outline'},
  ];

  return (
    <View style={{flex:1}}>

      {/* Screen */}
      <View style={{flex:1}}>
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

              <Icon
                name={tab.icon}
                size={24}
                color={isActive ? '#007AFF' : '#999'}
              />

              <Text style={{
                color: isActive ? '#007AFF' : '#999',
                fontSize:12
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

export default CustomTabview;

const styles = StyleSheet.create({

  tabBar:{
    flexDirection:'row',
    height:65,
    borderTopWidth:1,
    borderColor:'#eee',
    backgroundColor:'#fff'
  },

  tab:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

});