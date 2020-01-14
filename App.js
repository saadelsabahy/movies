if (__DEV__) {
   import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured')
   );
}
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import { BACKGROUND_COLOR } from './src/constants/style';
import { AppLoading, SplashScreen } from 'expo';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
   useEffect(() => {
      SplashScreen.hide();
   }, []);
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <View style={styles.container}>
               <StatusBar
                  backgroundColor={'#000'}
                  barStyle="light-content"
                  translucent={true}
               />
               <AppNavigator />
            </View>
         </PersistGate>
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: BACKGROUND_COLOR,
   },
});
