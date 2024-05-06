import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/search-screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DetaillScreen from '../screens/SeachScreen/detaill-screen';
import AuthScreen from '../screens/SeachScreen/auth-screen';
import PostDetailScreen from '../screens/SeachScreen/post-detail-screen';


export type AppStackParamList = {
  Home:undefined;
  Auth:undefined;
  Post:undefined;
  Details:undefined;
};
export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

const Stack = createStackNavigator<AppStackParamList>();


const NavigateStack = () => {

  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false, 
      }}>
      <Stack.Screen
      name='Home'
      component={SearchScreen}
      options={{title:"seach"}}/>
      <Stack.Screen
      name='Auth'
      component={AuthScreen}
      options={{title:"Auth"}}/>
      <Stack.Screen
      name='Post'
      component={PostDetailScreen}
      options={{title:"PostItem"}}/>
      <Stack.Screen
      name='Details'
      component={DetaillScreen}
      options={{title:"Details"}}/>

    </Stack.Navigator>
  )
}

export default NavigateStack

const styles = StyleSheet.create({})