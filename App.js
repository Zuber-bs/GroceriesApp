import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const appNavigator = createSwitchNavigator({

});

const AppContainer = createAppContainer(appNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
