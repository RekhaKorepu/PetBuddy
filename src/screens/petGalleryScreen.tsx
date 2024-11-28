import { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalState } from "../StateContext/UserContext";
import getBaseURL from "../utils/getBaseURL";
import { requestPhotoPermission } from "../utils/requestPermission";



export const PetGallery= ({route}: {route: any})=> {
    const [image, setImage]= useState("");
    const[petImages, setPetImages]=useState([]);
    const {username}= useGlobalState();
    const {pet}= route.params;
    useEffect(()=> {
        getPetImages();
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
                 addPhoto();
               }else{
                console.log('The base 64 image string is empty.');
               }
            }else {
                console.log('No images found in the gallery');
            }
        })
    }
    const addPhoto= async()=> {
        
        try{
            const baseUrl= getBaseURL();
            const response= await fetch(`${baseUrl}/pets/addPetImage`, {
             method: 'PUT',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 username: username,
                 petname: pet.petName,
                 imageUrl: image
             })
            });
            if(response.status===201){
                getPetImages();
                Alert.alert('Image added');
              
            }else if(response.status===500){
                Alert.alert('Failed to add image');
            }

        }catch(error: any){
            throw new Error('Failed to add pet image');
        }
    }
    const getPetImages= async()=> {
        try{
            const baseUrl= getBaseURL();
            const response= await fetch(`${baseUrl}/pets/getPetImages`, {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 username: username,
                 petname: pet.petName,
             })
            });
            const images= await response.json();
            
            if(response.status===200){
                setPetImages(images.data);
            }

        }catch(error: any){
            throw new Error('Failed to add pet image');
        }   
    }


  return(
    <SafeAreaView style={styles.parentContainer}>
        <ScrollView style={styles.imageContainer}>
        <View  style={styles.imagebox}>
        {petImages && petImages.length > 0 ? (
            petImages.map((image: any, index: any) => (
               
                 <Image source={{ uri: `data:image/jpeg;base64,${image}` }} key={index} style={styles.image}/>
            
            ))
        ):(
          <View>
          <Text>No images added</Text>
          </View>
        )}
           </View>

        </ScrollView>
        <View style={styles.addPhotoContainer}>
            <TouchableOpacity onPress={()=> selectPhoto()}>
                <Text style={styles.addphotoText}>Add photo</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    imageContainer: {
        flex:0.9,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
      
    },
    image: {
        height: 100,
        width: 100,
        borderRadius:10
    },
    addPhotoContainer:{
      alignSelf: 'center',
      backgroundColor: 'green',
      height: 40,
      width: 100,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    addphotoText: {
      color: 'white',
      fontSize: 16
    },
    imagebox: {
        flexWrap: 'wrap',
        margin: 20,
        gap: 10,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})