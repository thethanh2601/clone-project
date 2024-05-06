import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { AppStackParamList } from '../navigation/navigation-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const PostScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  return (
    <View>
      <Text onPress={()=>{navigation.navigate('Auth')}}>post-screen</Text>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({})