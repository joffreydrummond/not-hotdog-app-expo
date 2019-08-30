import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import * as Permissions from "expo-permissions";

const VISION_API_KEY = "AIzaSyDzhWT9l90szQEJeDgXexfEF0JCORaufYs";

class App extends Component {
  state = {
    hasGrantedCameraPermission: false,
    hasGrantedCameraRollPermission: false
  };
  render() {
    const {
      hasGrantedCameraPermission,
      hasGrantedCameraRollPermission
    } = this.state;
    if (
      hasGrantedCameraPermission === false &&
      hasGrantedCameraRollPermission === false
    ) {
      return (
        <View style={{ flex: 1, marginTop: 100 }}>
          <Text>No access to Camera or Gallery!</Text>
        </View>
      );
    } else {
      return <View style={styles.container}>{}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
