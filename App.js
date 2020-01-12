import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import { BACKGROUND_COLOR } from './src/constants/style';

export default function App() {
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
