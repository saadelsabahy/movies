import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import { BACKGROUND_COLOR } from './src/constants/style';
import { AppLoading, SplashScreen } from 'expo';

export default function App() {
   useEffect(() => {
      SplashScreen.hide();
   }, []);
   return (
      <View style={styles.container}>
         <StatusBar
            backgroundColor={'#000'}
            barStyle="light-content"
            translucent={true}
         />
         <AppNavigator />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: BACKGROUND_COLOR,
   },
});
