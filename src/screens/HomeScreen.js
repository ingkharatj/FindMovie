import React from "react";
import { Text, StyleSheet, View, TouchableOpacity,TextInput,Image } from "react-native";
import firebase from 'firebase';
import { Button } from 'react-native-elements';



class HomeScreen extends React.Component {
    state = {
        email: '',
        password: '',
      }
    


    componentDidMount() {
      this.authSubscription = firebase.auth().onAuthStateChanged(user => {
        this.setState({
          loading: false,
          user
        });
      });
    }
    componentWillUnmount() {
      this.authSubscription();
    }

    
    onSignUpPress = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            alert('Sign up Success')
          })
          .catch(msgError => {
            alert('Sign up error')
          })
      }
      onSigninPress = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            this.props.navigation.navigate('Movie')
          })
          .catch(msgError => {
            alert('Login error please check your email or password.')
          })
      }

    
    

  render(){
      return(

    <View style = {styles.backgroundStyle}>
        <View >
        <Image source = {require('../components/smile.jpg')} style = {styles.imageStyle} />

        </View>
        <View>
        <Text style = {{right : 100,top :-90,color: 'pink',fontSize:20}}>Email :</Text>
        <Text style = {{right : 100,top :-65,color: 'pink',fontSize:20}}>Password :</Text>

            
        </View>
        
     
      <TextInput 

            style={styles.email} 
            autoCapitalize = "none"
            autoCorrect = {false}
            placeholder = "  Enter your email"
            onChangeText={str => this.setState({email:str})}


            />
        <TextInput
        style={styles.input} 
        autoCapitalize = "none"
        autoCorrect = {false}
        placeholder = "  Enter your password"
        secureTextEntry={true}

        onChangeText= {password => this.setState({password})}
        style={styles.password}

    
              />
        
        
      <View style = {styles.signin}>
      <Button title = 'SignIn'
            buttonStyle={{
              backgroundColor: "#DA9898"
           }}
           
           onPress={this.onSigninPress}
           
                />
      </View>
      <View style = {styles.signup}>
      <Button title = 'SignUp'
            success
            buttonStyle={{
              backgroundColor: "#DA9898"
           }}
            onPress={this.onSignUpPress}
              
                />
      </View>
     
    </View>
    
  )
      }
};


const styles = StyleSheet.create({
  text: {
    fontSize: 35.4667,
    fontWeight: "bold",
    color : '#D78686'
    
  },
  backgroundStyle : {
    backgroundColor: '#2E2B2A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
signin : {
    right : 50,
    top : 33,
    fontWeight : 'bold',
    fontSize:20
},
signup :{
    left : 50 ,
    top : -7,
    fontWeight : 'bold',
    fontSize:20,


},
imageStyle : {
    resizeMode : 'contain',
    width : 150,
    height: 150 ,
    top : -180,
    borderRadius: 150,
},
email : {
    position : 'absolute',
    width : 170,
    height: 27,
    left : 150,
    top: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
},
password : {
    position : 'absolute',
        width : 170,
        height: 27,
        left : 150,
        top: 330,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
}


});

export default HomeScreen;


