import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext, AuthState } from '../context/AuthContext';

const AlbumsScreen = () => {

  const { authState, logout } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      { authState.isLoggedIn && <Button title="Log out" onPress={logout}></Button>}
    </View>
  )
}

export default AlbumsScreen
