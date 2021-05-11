import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'

const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="ios-person" size={30} color="#4F8EF7" />;
      </Text>
    </View>
  )
}

export default Tab1Screen
