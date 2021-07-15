import React from 'react'
import {createAppContainer,createSwitchNavigator}  from 'react-navigation'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import WelcomeScreen from './Screens/WelcomeScreen'
import HomeScreen from './Screens/HomeScreen'
import {AppDrawerNavigator} from './Components/AppDrawerNavigation'

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
      </SafeAreaProvider>
      
    )
  }
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator},
  HomeScreen:{screen:HomeScreen},

  
  


})

const AppContainer = createAppContainer(switchNavigator)