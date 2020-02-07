import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      {/* <Text>Hello World!</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default App;
