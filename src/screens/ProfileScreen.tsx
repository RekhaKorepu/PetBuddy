import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { launchImageLibrary } from "react-native-image-picker";
import getBaseURL from "../utils/getBaseURL";
import { useGlobalState } from "../StateContext/UserContext";
import { requestPhotoPermission } from "../utils/requestPermission";


export const Profile= ({navigation}: {navigation: any}) => {
  const [image, setImage]= useState("");
  const [userDetails, setUserDetails]= useState<any>([]);
  const {username}= useGlobalState();

  useEffect(()=> {
    getUserDetails();
  },[])

  const selectPhoto= async() => {
    const hasPermission = await requestPhotoPermission();  
    if (!hasPermission) {
      Alert.alert("Permission Required", "Please grant access to the photo library.");
      return;
    }
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true
      },
       (response: any)=> {
        if(response.assets && response.assets.length> 0){
           const base64Image= response.assets[0].base64;
           if(base64Image){
             setImage(base64Image);
           }else{
            console.log('The base 64 image string is empty.');
           }
        }else {
            console.log('No images found in the gallery');
        }
    })

    try{
      const baseUrl= getBaseURL();
      const response= await fetch(`${baseUrl}/users/addUserImage`, {
       method: 'PUT',
       headers: {
          'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           username: username,
           imageUrl: image
       })
      });
      if(response.status===201){
          await getUserDetails();
      }else if(response.status===500){
          Alert.alert('Failed to add image');
      }

  }catch(error: any){
      throw new Error('Failed to add pet image');
  }
}

const getUserDetails = async() => {
  try{
    console.log("hii", image);
    const baseUrl=getBaseURL();
    const res= await fetch(`${baseUrl}/users/getUserDetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify({
         username: username,
     })
    });
    const result= await res.json();
    if(res.status===200){
        console.log("hello", result.data.username);
        setUserDetails(result.data);
     }
}catch(error){
    throw new Error('Failed to retrieve user details');
  }
}
    return (
        <View style={styles.parentContainer}>
            <View style={styles.Container}>
        <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.profileImage} onPress= {()=> selectPhoto()}>
              {userDetails.image ? (
               <Image source={{uri: `data:image/jpeg;base64,${userDetails.image}`}} style={styles.image1}  />
              ):
              
               (
                <Image source={require("../../public/assets/userimage.jpeg")} style={styles.image}  />
               )
              }
               </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.usernameContainer}>
            
              <Text style={styles.Username}> {userDetails.username}</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={styles.signOut}>Sign Out</Text></TouchableOpacity>
              </View>
              <View style={styles.usernameContainer}>
                <Image source={require("../../public/assets/mail.png")} style={styles.mailPhone}/>
                <Text style={styles.email}>{userDetails.email}</Text>
              </View>
              <View style={styles.usernameContainer}>
                <Image source={require("../../public/assets/phone.png")} style={styles.mailPhone}/>
                <Text style={styles.email}>+91 {userDetails.mobile}</Text>
              </View>

            </View>
            <View style={styles.aboutContainer}>
              <TouchableOpacity>
            <View style={styles.details}>
                <Image source={require("../../public/assets/user.png")} style={styles.mailPhone}/>
                <Text style={styles.text}>About me</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('home')}>
              <View style={styles.details}>
                <Image source={require("../../public/assets/box.png")} style={styles.mailPhone}/>
                <Text style={styles.text}>My Pets</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.details}>
                <Image source={require("../../public/assets/location.png")} style={styles.mailPhone}/>
                <Text style={styles.text}>My Address</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('home')}>
              <View style={styles.details}>
                <Image source={require("../../public/assets/pawprint.png")} style={styles.mailPhone}/>
                <Text style={styles.text}>Add Pet</Text>
              </View>
              </TouchableOpacity>

            </View>
            
        </View>
        </View>
    )
}
const styles= StyleSheet.create({
  parentContainer: {
    flex: 1
  },
  imageContainer: {
    alignSelf: 'center',
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
    Container: {
     flex: 1,
     alignItems: 'center'
  },
  profileImage: {
    padding: 10,
    height: '100%',
    width: '60%',
    borderRadius: 100
  },
  image: {
    borderRadius: 100
  },
  detailsContainer: {
    margin: 10,
    flex: 0.25,
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 20
  },
  aboutContainer: {
    margin: 10,
    flex: 0.3,
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 20
  },
  image1: {
    height: 250,
    width: 250,
    borderRadius: 150
  },
  Username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20
    
  },
  usernameContainer: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  signOut: {
    marginLeft: '80%',
    color: 'red'
  },
  email: {
    marginTop: 5,
    fontSize: 18,
    marginLeft: 15
  },
  mailPhone: {
    height: 30,
    width: 30,
    marginLeft: 10
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:8,
    gap: 20
  },
  text: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 16

  }
});