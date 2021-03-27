import React from 'react';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import SettingScreen from '../screens/SettingScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator= createDrawerNavigator({
    home:{screen:AppTabNavigator},
    setting:{screen:SettingScreen},
},

{contentComponent:CustomSideBarMenu},

{initialRouteName:'home'})

