import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Skip = ({navigation}) => {
  return (
    <TouchableOpacity>
    <Text onPress={navigation.navigate('login')} style={{color:'#645abf'}}>Skip</Text>
    </TouchableOpacity>
  )
}

export default Skip

const styles = StyleSheet.create({})