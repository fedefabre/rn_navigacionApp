import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  // Modificar el
  useEffect(() => {
    navigator.setOptions({
      headerBackTitle: ''
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen </Text>

      <Button
        title="Ir Pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')} />
    </View>
  )
}
