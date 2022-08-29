import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function openRegisterScreen(){
    navigation.navigate('Register');
  }

  function signin(){
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('List')
      })
      .catch((error) => {
        navigation.navigate('List')
      })
  }

  return (
    <View style={styles.container}>
      <Input placeholder="Enter your email" label="Email" leftIcon={{ type: "material", name: "email" }} value={email} onChangeText={ text => setEmail(text) } />
      <Input placeholder='Enter your password' label='Password' leftIcon={{ type: 'material', name: 'lock' }} value={password} onChangeText={text => setPassword(text)} secureTextEntry />
      <Button title="sign in" style={styles.button} onPress={signin}/>
      <Button title="register" style={styles.button} onPress={openRegisterScreen}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 100
  },
  button: {
    width: 370,
    marginTop: 10
  }
});

export default Login;