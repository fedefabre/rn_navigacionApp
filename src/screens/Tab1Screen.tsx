import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

  const { top: marginTop } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])

  return (
    <View style={{ ...styles.globalMargin, marginTop }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="ios-person" />
        <TouchableIcon iconName="ear-outline" />
        <TouchableIcon iconName="partly-sunny-outline" />
        <TouchableIcon iconName="earth-outline" />
      </Text>
    </View>
  )
}

export default Tab1Screen
