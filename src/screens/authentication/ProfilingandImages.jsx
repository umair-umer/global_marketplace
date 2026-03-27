/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { RESPONSIVE } from '../../helper'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@react-native-vector-icons/ant-design'
import { launchImageLibrary } from 'react-native-image-picker'

const ProfilingandImages = () => {

  const navigation = useNavigation()

  const [profileImage, setProfileImage] = useState(null)
  const [idCardImage, setIdCardImage] = useState(null)
  const [shopImage, setShopImage] = useState(null)

  const pickImage = (type) => {

    const options = {
      mediaType: 'photo',
      quality: 1
    }

    launchImageLibrary(options, response => {

      if (response.didCancel) return

      if (response.assets) {

        const uri = response.assets[0].uri

        if (type === 'profile') setProfileImage(uri)
        if (type === 'idcard') setIdCardImage(uri)
        if (type === 'shop') setShopImage(uri)

      }

    })

  }

  return (

    <View style={styles.container}>

      <Text style={styles.login}>Profile</Text>

      <View style={styles.inputcontainer}>

        {/* Profile Image */}
        <View style={styles.input}>
          <Text style={styles.name}>Select Image</Text>

          <TouchableOpacity
            style={styles.imageField}
            onPress={() => pickImage('profile')}
          >

            {profileImage ?
              <Image source={{ uri: profileImage }} style={styles.image} />
              :
              <Text style={styles.placeholder}>Select Image</Text>
            }

          </TouchableOpacity>
        </View>

        {/* ID Card */}
        <View style={styles.input}>
          <Text style={styles.name}>Select ID Card Image</Text>

          <TouchableOpacity
            style={styles.imageField}
            onPress={() => pickImage('idcard')}
          >

            {idCardImage ?
              <Image source={{ uri: idCardImage }} style={styles.image} />
              :
              <Text style={styles.placeholder}>Select ID Card Image</Text>
            }

          </TouchableOpacity>
        </View>

        {/* Shop Image */}
        <View style={styles.input}>
          <Text style={styles.name}>Select Shop Image</Text>

          <TouchableOpacity
            style={styles.imageField}
            onPress={() => pickImage('shop')}
          >

            {shopImage ?
              <Image source={{ uri: shopImage }} style={styles.image} />
              :
              <Text style={styles.placeholder}>Select Shop Image</Text>
            }

          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >

        <Text style={{ color: 'white', fontSize: 20 }}>Next</Text>

        <AntDesign
          name={'arrow-right'}
          color="white"
          size={15}
          style={{ marginTop: 5 }}
        />

      </TouchableOpacity>

    </View>

  )
}

export default ProfilingandImages

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  login: {
    marginTop: RESPONSIVE.GET_HEIGHT(20),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RESPONSIVE.GET_FONT_SIZE(30),
    color: 'black'
  },

  inputcontainer: {
    marginHorizontal: RESPONSIVE.GET_WIDTH(10)
  },

  input: {
    marginTop: RESPONSIVE.GET_HEIGHT(5)
  },

  name: {
    marginBottom: 10,
    color: 'black'
  },

  imageField: {
    borderWidth: 1,
    borderColor: '#66BB6A',
    borderRadius: RESPONSIVE.MODERATE_SCALE(20),
    height: RESPONSIVE.GET_HEIGHT(8),
    justifyContent: 'center',
    alignItems: 'center'
  },

  placeholder: {
    color: 'black'
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: RESPONSIVE.MODERATE_SCALE(20)
  },

  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#66BB6A',
    gap: 10,
    paddingHorizontal: RESPONSIVE.GET_WIDTH(30),
    borderRadius: RESPONSIVE.MODERATE_SCALE(20),
    marginTop: RESPONSIVE.GET_HEIGHT(5),
    paddingVertical: RESPONSIVE.GET_HEIGHT(2)
  }

})