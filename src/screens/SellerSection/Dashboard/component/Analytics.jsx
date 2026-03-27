import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};
const Analytics = () => {
  return (
    <View>
      <Text>Analytics</Text>
    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({})