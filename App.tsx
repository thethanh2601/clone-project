import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationButton } from './navigation/navigation-botton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomScreen from './screens/SeachScreen/bottom-screen';
import { NavigationContainer } from '@react-navigation/native';
import PostItemScreen from './screens/SeachScreen/post-detail-screen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
      <NavigationButton/> 
      {/* <BottomScreen/> */}
      </NavigationContainer>
    </GestureHandlerRootView>
      
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
