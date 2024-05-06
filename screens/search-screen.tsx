import { Image, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { S, ms } from './themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../navigation/navigation-stack';


const FirstRoute = () => { 
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

 return(  
  <View style={{ flex: 1, backgroundColor: 'white',alignItems:'center',justifyContent:'center' }} >
    <View  style={{alignItems:'center',justifyContent:'center' }} >
      <View style={{borderWidth:1,borderRadius:10,borderColor:'#E5E5E5', padding:12}}>
        <Image source={require('../assets/file-attachment-02.png')}/>
      </View>
      
      <Text style={{fontSize:20, fontWeight:'bold',marginTop:16 }}>Chưa có bài viết</Text>
      <Text style={{marginTop:4, color:'#141414',fontSize:14}}>Hãy xác minh tài khoản để được đăng bài miễn phí</Text>
      <TouchableOpacity style={{backgroundColor:'#155EEF',padding:16, borderRadius:15, marginTop:24}}
      onPress={()=>{navigation.navigate('Auth')}}
      >

        <Text style={{fontSize:16,fontWeight:'600', color:'white'}}>Xác minh tài khoản</Text>

      </TouchableOpacity>

    </View>
  </View>)
};

interface Business {
  name: string;
  contactPerson: string;
  category: {
    name: string;
  };
  images: { url: string }[];
}

interface ItemDL {
  business: Business;
}

const SecondRoute = () => { 
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  return( 
  <View style={{ flex: 1 }} >
    
    <TouchableOpacity style={{padding:10, borderWidth:0.5}}
      onPress={()=>navigation.navigate('Details')}
      >
      <Text>Đăng 12 phút trước</Text>
      <Text style={{fontSize:18,fontWeight:'500',marginTop:6}}>Thiết kế, thi công công trình phụ, nhà vệ sinh, nhà ở</Text>
      <Text style={{fontSize:16,marginTop:6}}>Xây dựng - Nội thất</Text>
      <View style={{justifyContent:'space-between',flexDirection:'row', marginTop:6}}>
        <View>
          <Text>Khu vực</Text>
          <Text style={{fontSize:15,fontWeight:'500'}}>Đông Đa, Hà Nội</Text>
        </View>
        <View>
          <Text>Ngân Sách</Text>
          <Text style={{fontSize:15,fontWeight:'500'}}>đ100000000000</Text>
        </View>

      </View>

      
    </TouchableOpacity>

  </View>)
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const SearchScreen = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AppStackParamList,'Auth'>>();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Bài đăng của tôi' },
    { key: 'second', title: 'Báo giá' },
  ]);

  return (
    <SafeAreaView>
      <View
        style={{height:"10%", backgroundColor:'white'}}>
        <Text style={{fontSize:20, fontWeight:"600", margin:16}}>Bài viết</Text>
      </View>
      <View style={{height:'90%'}}>
        <TabView
          // style={{flex:1}}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
            {...props}
            activeColor={'#2971f0'}
            style={{ backgroundColor: '#fff',  paddingHorizontal:16}}
            labelStyle={{ color: '#1a202c',fontSize:16, fontWeight:"bold"}}
            indicatorStyle={{ backgroundColor: '#004EEB',marginLeft:16}}
            scrollEnabled
            tabStyle={{
              width: 'auto',
              paddingHorizontal: ms(8),            
            }}
          />
        )}
        />
      </View>
     </SafeAreaView>
    
  )
}

export default SearchScreen

const styles = StyleSheet.create({})