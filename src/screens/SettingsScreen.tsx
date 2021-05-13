import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top
    }}>
      <Text style={styles.title} >Settings</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  )
}

export default SettingsScreen
