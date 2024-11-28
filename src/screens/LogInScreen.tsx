import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useGlobalState } from "../StateContext/UserContext";
import getBaseURL from "../utils/getBaseURL";
import { styles } from "../styles/LoginStyles";

export default function Login({navigation}: {navigation: any}): React.JSX.Element{
    const {username,setUsername,password, setPassword}= useGlobalState();
    const userLogin = async () => {
      console.log("user", username);
        const baseUrl= getBaseURL();
        const response = await fetch(`${baseUrl}/users/getCredentials`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        });
  
        const result = await response.json();
       if (response.status===200) {
          Alert.alert(`${username} Logged In`);
          navigation.navigate('tabs');
        } else if (response.status===404) {
          Alert.alert('Username is invalid');
        } else if(response.status=== 401){
          Alert.alert('Password is not correct');
        }
    }
    return(
        <View style={styles.parentContainer}>
            <View style={styles.container}>
            <Image source={require("../../public/assets/greennPaw.png")} style={styles.image}/>
            <View style={styles.inputfields}>
            <TextInput placeholder="Username" style={styles.username} onChangeText={setUsername}></TextInput>
            <TextInput placeholder="Password" style={styles.password} onChangeText={setPassword}></TextInput>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={()=> userLogin()}>
                 <Text style={styles.buttonText}>Login</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.redirect}> 
              <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
             <Text style={styles.registerText}> Don't have an account? Register </Text>
             </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <Text style={styles.title}>PetBuddy!</Text>
            <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>All rights reserved to PetBuddy-2022</Text>
            </View>
            </View>
        </View>
    ) 
}
