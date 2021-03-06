import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={ ()=> navigation.toggleDrawer()}>
          <Icon name="menu-outline" style={{ marginLeft: 10}} size={35} color={colores.primary}></Icon>
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen </Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
      }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5cc9f5'}}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#71cd67'}}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}
