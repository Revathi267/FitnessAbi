import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBarMenu from "./SideBarMenu";
import HomeScreen from "../Screens/HomeScreen";
import RemainderScreen from "../Screens/RemainderScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import TrainerListScreen from "../Screens/TrainerListScreen";

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Settings: {
        screen: SettingsScreen
    },
    TrainersList: {
        screen: TrainerListScreen
    },
    Remainder: {
        screen: RemainderScreen
    }
},
    {
        contentComponent: SideBarMenu
    },
    {
        initialRouteName: 'Home'
    })