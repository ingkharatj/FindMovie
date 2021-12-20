
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import HomeScreen from './src/screens/HomeScreen';
import { Component } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MovieScreen from './src/screens/MovieScreen';



var firebaseConfig = {
  apiKey: "AIzaSyCyKGTU1J4zC8v7dlo5YVD0Qb9RMaBGRdo",
  authDomain: "vovovote-b6c2f.firebaseapp.com",
  databaseURL: "https://vovovote-b6c2f.firebaseio.com",
  projectId: "vovovote-b6c2f",
  storageBucket: "vovovote-b6c2f.appspot.com",
  messagingSenderId: "61909851320",
  appId: "1:61909851320:web:2b430e4996fc8fe958284d",
  measurementId: "G-VVDRZ4HN87"
};
firebase.initializeApp(firebaseConfig);

const navigation = createStackNavigator(
  {
  Home : HomeScreen,
  Movie : MovieScreen

},
{
  initialRouteName : "Home",
    defaultNavigationOptions: {
      title: "Find Movie"
  }
}
);

export default createAppContainer(navigation);



