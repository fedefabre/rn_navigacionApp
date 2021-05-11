import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';


export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabIOS />
    : <TabAndroid />

}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTapNavigator':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'St'
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTapNavigator" options={{ title: 'Tab2' }} component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Tab3' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopWidth: 0,
          elevation: 0
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTapNavigator':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'St'
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTapNavigator" options={{ title: 'Tab2' }} component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Tab3' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}