import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useGlobalState } from "../StateContext/UserContext";
import Astyles from "../styles/RegisterStyles";
import getBaseURL from "../utils/getBaseURL";

export default function Register({navigation}: {navigation: any}): React.JSX.Element{
     const [confirm, setConfirm]=useState("");
    const {username, setUsername, password, setPassword,email, setEmail,mobile, setMobile, address, setAddress}= useGlobalState();
    const handleRegister = async () => {
      if (password !== confirm) {
        console.warn('Passwords do not match.');
        return;
      }
      
      const baseUrl= getBaseURL();
        const res = await fetch(`${baseUrl}/users/createNewUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            mobile: mobile,
            address: address
          })
        });
       if (res.status===201) {
          Alert.alert('User registered successfully');
          navigation.navigate('tabs');
        } else if (res.status===409) {
          Alert.alert('Username already exists');
        } else {
          Alert.alert('User registration failed');
        }
    }
    return(
        <View style={Astyles.parentContainer}>
            <View style={Astyles.container}>
          <Image source= {require('../../public/assets/user.png')} style={Astyles.image} />
            <View style={Astyles.inputfields}>
            <TextInput placeholder="Username" style={Astyles.username} onChangeText={setUsername}></TextInput>
            <TextInput placeholder="Password" style={Astyles.password} onChangeText={setPassword}></TextInput>
            <TextInput placeholder="confirm password" style={Astyles.confirm} onChangeText={setConfirm}></TextInput>
            <TextInput placeholder="email" style={Astyles.email} onChangeText={setEmail}></TextInput>
            <TextInput placeholder="mobile" style={Astyles.mobile} onChangeText={setMobile}></TextInput>
            <TextInput placeholder="address" style={Astyles.mobile} onChangeText={setAddress}></TextInput> 
            </View>
            <View style={Astyles.buttonView}>
                <TouchableOpacity style={Astyles.button} onPress={()=> handleRegister()} >
                 <Text style={Astyles.buttonText}>Register</Text> 
                </TouchableOpacity>
            </View>
            <View style={Astyles.redirect}>
            
              <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
             <Text style={Astyles.registerText}> Already have a account? Login </Text>
             </TouchableOpacity>
      
              </View>
            <Text style={Astyles.title}>PetBuddy!</Text>
            <View style={Astyles.bottomContainer}>
            <Text style={Astyles.bottomText}>All rights reserved to PetBuddy-2022</Text>
            </View>
              </View>
        </View>
    )
}