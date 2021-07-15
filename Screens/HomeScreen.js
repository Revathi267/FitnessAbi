import React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,SafeAreaView,Platform,StatusBar} from 'react-native'
import { Header } from 'react-native-elements'


export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}/>
        <View>
          <Header
           centerComponent={{text:"Fitness Wonders",style:{fontSize:30,marginLeft:-20}}}
          />
        </View>  

        <View>
          <TouchableOpacity style={[styles.routeCard,{ backgroundColor:'#EFA15B'}]}>
             <Text style={styles.textStyle}>  Preschool-Aged Children(3-5 years)   </Text>

          </TouchableOpacity>

          <TouchableOpacity style={[styles.routeCard,{backgroundColor:'#78DFD6'}]} >
           <Text style={styles.textStyle}> Children and Adolescents (6-17 years) </Text>
          </TouchableOpacity >

          <TouchableOpacity style={[styles.routeCard,{backgroundColor:'#AA44D3'}]} >
           <Text style={styles.textStyle}>  Adults (18-64 years) </Text>
          </TouchableOpacity >

          <TouchableOpacity style={[styles.routeCard,{backgroundColor:'#3CC8FE'}]} >
           <Text style={styles.textStyle}> Older Adults (65 years and older) </Text>
          </TouchableOpacity >
          
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#FBF7EA'
  },
  safeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
  title:{
    flex:0.15
  },
  textStyle:{
    marginLeft:40,
    marginTop:-50,
    color:'white',
    fontWeight:'bold'
  },
  imgStyle:{
    width:300,
    height:250,
    marginTop:-50,
    marginLeft:10
  },
  routeCard:{
    marginTop:35,
    width:300,
    marginLeft:30,
    height:200,
    borderRadius:30
  }
})