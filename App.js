import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from 'native-base';
import firebase from 'firebase';

// Initialize Firebase
import fbConfig from './fbConfig';
firebase.initializeApp(fbConfig);

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <View>
            <Text>Hello World</Text>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}
