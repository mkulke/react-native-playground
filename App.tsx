import * as React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MyMap />
        <View style={styles.text}>
          <Text>Open up App.ts to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <MyButton message="hello" />
        </View>
      </View>
    );
  }
}

interface ButtonProps {
  message: string;
}

const MyButton = (props: ButtonProps) => (
  <Button title={props.message} color="#841584" onPress={ohmy} />
);

function ohmy(): void {}

const MyMap = (props: {}) => (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    top: height / 2,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: height / 2,
  },
});
