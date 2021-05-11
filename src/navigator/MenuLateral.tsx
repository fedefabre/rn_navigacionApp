import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';

import { Image, Text, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {


  return (

    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
        }} style={styles.avatar} />

      </View>

      {/* Opciones del menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={styles.menuBoton}
        onPress={()=>{navigation.navigate('Tabs')}}
        >
          <Icon style={styles.menuIcon} name='list-outline' size={30} color={colores.primary} />
          <Text style={styles.menuTexto}>Tabs </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.menuBoton}
        onPress={()=>{navigation.navigate('SettingsScreen')}}
        >
          <Icon style={styles.menuIcon} name='cog-outline' size={30} color={colores.primary} />
          <Text style={styles.menuTexto}>Settings </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>

  );
}