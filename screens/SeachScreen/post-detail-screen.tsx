import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/navigation-stack';

const PostDetailScreen = () => {
    const navigation = useNavigation<NavigationProp<AppStackParamList,'Auth'>>();
  
    return (
      <View style={{backgroundColor:'white',flex:1}}>
          <View style={{paddingHorizontal:8, flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={require('../Image/chevron-left.png')} style={{ justifyContent:'flex-start',padding:8, gap:8}}/>
            </TouchableOpacity>
            
            <Text style={{paddingHorizontal:'26%',fontSize:16, fontWeight:'bold'}}>Chi tiết bài đăng</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={require('../Image/dots-vertical.png')} style={{ justifyContent:'flex-end'}}/>
            </TouchableOpacity>
           
          </View>
          <ScrollView >
  
            <View style={{marginTop:8, padding:16, marginBottom:10}}>
              <Text style={{fontSize:22}}>Thiết kế, thi công công trình phụ, nhà vệ sinh, nhà ở</Text>
              <Text style={{marginTop:10,fontSize:12, color:'#525252'}}>Đăng 12 phút trước</Text>
            </View>
            <View style={{height:0.5, width:"100%", backgroundColor:'#E5E5E5'}}/>
  
            <View style={{marginTop:8, padding:16}}>
              <View style={{flexDirection:'row' ,alignItems:'center'}}>
                <Image source={require('../Image/tag-01.png')} style={{marginRight:10}} />
                <Text style={{fontSize:16, color:'#424242'}}>Xây dựng - Nội thất</Text>
              </View>
  
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Image source={require('../Image/bank-note-03.png')} style={{ marginRight:10}}/>
                <Text style={{fontSize:16, color:'#424242'}}>Đống Đa, Hà Nội</Text>
              </View>
  
            
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Image source={require('../Image/marker-pin-03.png')} style={{marginRight:10}}/>
                <Text style={{fontSize:16, color:'#424242'}}>100.000.000</Text>
              </View>
  
            </View>
            <View style={{height:0.5, width:"100%", backgroundColor:'#E5E5E5'}}/>
  
            <View style={styles.viewW}>
              <Text style={{fontSize:14, color:'#292929'}}>Lorem ipsum dolor sit amet consectetur. Massa sapien diam imperdiet lorem et commodo tellus justo tristique. Nunc turpis turpis nec mauris nunc aliquet id lorem. Pellentesque cras orci volutpat eget in dictumst. Ullamcorper egestas quis fames malesuada viverra in.</Text>
            </View>
            <View style={{height:0.5, width:"100%", backgroundColor:'#E5E5E5'}}/>
            <View style={styles.viewW}>
              <Text style={{color:'#141414', fontSize:18, fontWeight:'600'}}>Từ Khóa</Text>
              <View  style={{flexDirection:'row', gap:8, flexWrap:'wrap',marginTop:16}}>
                <View style={styles.textK}>
                  <Text>Thiết Kế</Text>
                </View>
                <View style={styles.textK}>
                  <Text>Thi công</Text>
                </View>
                <View style={styles.textK}>
                  <Text>Công trình phụ</Text>
                </View>
                <View style={styles.textK}>
                <Text>Nhà vệ sinh</Text>
              </View>
              <View style={styles.textK}>
                <Text>Xây dựng và cải tạo</Text>
              </View>
            </View>
            </View>
            <View style={{height:0.5, width:"100%", backgroundColor:'#E5E5E5'}}/>
            <View style={styles.viewW}>
              <Text style={{color:'#141414', fontSize:18, fontWeight:'600'}}>Từ Khóa</Text>
              <View  style={{flexDirection:'row', gap:12, flexWrap:'wrap',marginTop:16}}>
                <Image source={require('../Image/20-hinh-anh-tuyet-dep-ve-Viet-Nam-ivivu-13.jpg')} style={styles.Img}/>
                <Image source={require('../Image/anh-dep-viet-nam-25.jpg')} style={styles.Img}/>
                <Image source={require('../Image/anh-phat-dep-lam-hinh-nen-62.jpg')} style={styles.Img}/>
                <Image source={require('../Image/hinh-anh-dep-1.jpg')} style={styles.Img}/>
                <Image source={require('../Image/20-hinh-anh-tuyet-dep-ve-Viet-Nam-ivivu-13.jpg')} style={styles.Img}/>
                <Image source={require('../Image/anh-dep-viet-nam-25.jpg')} style={styles.Img}/>
                <Image source={require('../Image/anh-phat-dep-lam-hinh-nen-62.jpg')} style={styles.Img}/>
                <Image source={require('../Image/hinh-anh-dep-1.jpg')} style={styles.Img}/>
  
              </View>
            </View>
            <View style={{height:0.5, width:"100%", backgroundColor:'#E5E5E5'}}/>
  
            <View style={styles.viewW}>
              <Text style={{color:'#141414', fontSize:18, fontWeight:'600'}}>Tài Liệu</Text>
              <View  style={styles.ViewTL}>
                <Image source={require('../Image/marker-pin-03.png')} style={styles.ImgTL}/>
                <View>
                  <Text>Tech design requirements.pdf</Text>
                  <Text>200 KB – 100% uploaded</Text>
                </View>
              </View>
              <View  style={styles.ViewTL}>
                <Image source={require('../Image/marker-pin-03.png')} style={styles.ImgTL}/>
                <View>
                  <Text>Tech design requirements.pdf</Text>
                  <Text>200 KB – 100% uploaded</Text>
                </View>
              </View>
              <View  style={styles.ViewTL}>
                <Image source={require('../Image/marker-pin-03.png')} style={styles.ImgTL}/>
                <View>
                  <Text>Tech design requirements.pdf</Text>
                  <Text>200 KB – 100% uploaded</Text>
                </View>
              </View>
          
            </View> 
  
  
              
          </ScrollView>
      </View>
    )
  }
  
  export default  PostDetailScreen
  
  const styles = StyleSheet.create({
    viewW:{marginTop:8, padding:16, marginBottom:8},
    textK:{
      borderRadius:16,
      borderWidth:1,
      borderColor:'#E5E5E5',
      backgroundColor:'#FAFAFA',
      alignSelf:'flex-start',
      paddingHorizontal:8
    },
    Img:{
      width:72,
      height:73
    },
    ImgTL:{
      width:40,
      height:40
    },
    ViewTL:{flexDirection:'row',
    alignItems:'center', 
    gap:12, 
    flexWrap:'wrap',
    padding:16,
    marginTop:16, 
    borderWidth:1,
    backgroundColor:' #FFF',
    borderColor:'#E5E5E5',
    borderRadius:12
  
    }
  })