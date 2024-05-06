import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/navigation-stack';
import { TextInput } from 'react-native-gesture-handler';

interface RouteParams {
  item: any; 
}
const AuthScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  
  return (
    <View style={{backgroundColor:'white',flex:1}}>
        <View style={{paddingHorizontal:8, flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../Image/chevron-left.png')} style={{ justifyContent:'flex-start',padding:8, gap:8}}/>
          </TouchableOpacity >
          
          <Text style={{paddingHorizontal:'26%',fontSize:16, fontWeight:'bold'}}>Chi tiết bài đăng</Text>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../Image/dots-vertical.png')} style={{ justifyContent:'flex-end'}}/>
          </TouchableOpacity>
        </View>
        <ScrollView >
          <View style={styles.viewW}> 
            <Text>Tiêu đề</Text>
            <View style={{borderRadius:8,borderWidth:1,marginTop:6, borderColor:'#D6D6D6'}}>
            <TextInput 
              style={styles.TextInput}
              placeholder="Ví dụ: Thiết kế nội thất"/>
          </View>
          </View>

          <View style={styles.viewW}> 
            <Text>Mô tả</Text>      
              <TextInput placeholder='Note'
              numberOfLines={6} multiline={true}
              style={styles.noteTextArea}   
              />
          </View>

          <View style={styles.viewW}>
            <Text>Ngân Sách</Text>
              <View style={styles.ViewInput}>
                <Text>đ</Text>
                <TextInput 
                  style={styles.TextInput}
                  placeholder="Ví dụ: Thiết kế nội thất"/>
            </View>
          </View>

          

          <View style={styles.viewW}> 
            <Text>Lĩnh vực, ngành nghề</Text>
            <View style={styles.buttonText}>
              <View style={{width:"90%"}}>
              <TextInput 
                style={styles.TextInput}
                placeholder="Ví dụ: Thiết kế nội thất"/>
              </View>
              <View >
                <Image style={{padding:12}} source={require('../Image/chevron-down.png')}/>
              </View>

            </View>
          </View>
          <View style={styles.viewW}> 
            <Text>Lĩnh vực, ngành nghề</Text>
            <View style={styles.buttonText}>
              <View style={{width:"90%"}}>
              <TextInput 
                style={styles.TextInput}
                placeholder="Ví dụ: Thiết kế nội thất"/>
              </View>
              <View >
                <Image style={{padding:12}} source={require('../Image/chevron-down.png')}/>
              </View>

            </View>
          </View>
          <View style={styles.viewW}> 
            <Text>Lĩnh vực, ngành nghề</Text>
            <View style={styles.buttonText}>
              <View style={{width:"90%"}}>
              <TextInput 
                style={styles.TextInput}
                placeholder="Ví dụ: Thiết kế nội thất"/>
              </View>
              <View >
                <Image style={{padding:12}} source={require('../Image/chevron-down.png')}/>
              </View>

            </View>
          </View>

          <View style={styles.viewW}> 
            <Text>Ảnh sản phẩm</Text>
            <View style={{borderRadius:8,height:50,borderWidth:1,marginTop:6, borderColor:'#D6D6D6', flexDirection:'row'}}>
              <View style={{width:'50%',padding:10,justifyContent:'center'}}>
                <Text>.jpg, .png</Text>
              </View>
              <View style={{width:1, backgroundColor:'#D6D6D6'}}/>

              <TouchableOpacity style={{width:'50%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}
                onPress={()=>console.log(2)}>
                  <Image source={require('../Image/image-plus.png')}/>
                  <Text style={{fontSize:16, color:'#424242', fontWeight:'600', padding:6}}>Thêm ảnh</Text>

              </TouchableOpacity>
            </View>
            <Text style={{color:'#525252', fontSize:12}}>Tối đa 8 ảnh. Dung lượng tối đa 5MB</Text>

          </View>

          <View style={styles.viewW}> 
            <Text>Ảnh sản phẩm</Text>
            <View style={{borderRadius:8,height:50,borderWidth:1,marginTop:6, borderColor:'#D6D6D6', flexDirection:'row'}}>
              <View style={{width:'50%',padding:10,justifyContent:'center'}}>
                <Text>.doc, .xls, .pdfg</Text>
              </View>
              <View style={{width:1, backgroundColor:'#D6D6D6'}}/>

              <TouchableOpacity style={{width:'50%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}
                onPress={()=>console.log(2)}>
                  <Image source={require('../Image/image-plus.png')}/>
                <Text style={{fontSize:16, color:'#424242', fontWeight:'600', padding:6}}>Thêm tài liệu</Text>
              </TouchableOpacity>

            </View>
            
          </View>
          <View style={{width:'100%',height:100, alignItems:'center'}}>
          <TouchableOpacity style={{width:'90%',borderRadius:8, height:'50%',backgroundColor:'#F5F5F5 ',borderColor:'#E5E5E5', marginTop:40, alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#A3A3A3', fontSize:16}}>Đăng bài</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  viewW:{
    paddingHorizontal:16, 
    marginTop:24,
    
  },
  buttonText:{
    flexDirection:'row',
    alignItems:'center',
    borderRadius:8,borderWidth:1,marginTop:6, borderColor:'#D6D6D6'
  },
  ViewInput:{
    flexDirection:'row', 
    alignItems:'center', 
    borderWidth:1,
    marginTop:6,
    borderColor:'#D6D6D6',
    borderRadius:8,
    paddingHorizontal:14
  },
  TextInput:{
    borderRadius:8,
    paddingHorizontal:14,
    paddingVertical:12,
    color:'#737373'
    
  },
  noteTextArea:{
    marginTop:4,
    borderWidth:1,
    borderRadius:8,
    textAlignVertical:'top',
    fontSize:15,
    padding:12,
    borderColor:'#D6D6D6',
  },
})