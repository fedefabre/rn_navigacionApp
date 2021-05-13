import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//   id: number,
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

const PersonaScreen = ({ route, navigation }: Props) => {

  
  // const params = route.params as RouterParams;
  const params = route.params;
  const { changeUsername } = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre
    });
  }, [])

  useEffect(() => {
    if(params.nombre) changeUsername(params.nombre)
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {params.nombre} </Text>
    </View>
  )
}

export default PersonaScreen
