import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab1Screen = () => {

  const { top: marginTop } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])

  return (
    <View style={{ ...styles.globalMargin, marginTop }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="ios-person" size={80} color={colores.primary} />
        <Icon name="ear-outline" size={80} color={colores.primary} />
        <Icon name="partly-sunny-outline" size={80} color={colores.primary} />
        <Icon name="earth-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  )
}

export default Tab1Screen
