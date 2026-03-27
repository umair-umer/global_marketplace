import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { RESPONSIVE } from './../../helper/responsive';

const slides = [
  {
    key: '1',
    title: 'Welcome',
    text: 'Welcome to our App',
    image: require('../../assets/images/basket.png'),
  },
  {
    key: '2',
    title: 'Discover',
    text: 'Find amazing things',
    image: require('../../assets/images/basket.png'),
  },
  {
    key: '3',
    title: 'Get Started',
    text: 'Start your journey now',
    image: require('../../assets/images/basket.png'),
  },
]

const IntroSlider = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />

        <Text style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.text}>
          {item.text}
        </Text>
      </View>
    )
  }

  const onDone = () => {
    navigation.replace("UserConfirmation")
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton
      onSkip={onDone}
    />
  )
}

export default IntroSlider

const styles = StyleSheet.create({
  slide:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'#fff'
  },
  image:{
    width:250,
    height:250,
    marginBottom:40
  },
  title:{
    fontSize:RESPONSIVE.GET_FONT_SIZE(24),
    fontWeight:'bold'
  },
  text:{
    fontSize:RESPONSIVE.GET_FONT_SIZE(16),
    textAlign:'center',
    marginTop:10,
    paddingHorizontal:20
  }
})