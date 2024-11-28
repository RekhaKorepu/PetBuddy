import React, { useEffect, useState } from 'react';
import { Image,  Text, TextInput, TouchableOpacity, View, Modal, ScrollView, Alert } from "react-native";
import { useGlobalState } from "../StateContext/UserContext";
import { launchImageLibrary } from 'react-native-image-picker'; 
import getBaseURL from '../utils/getBaseURL';
import { requestPhotoPermission } from '../utils/requestPermission';
import { styles } from '../styles/HomeStyles';

const Home = ({navigation}: {navigation: any}) => {
  const { username } = useGlobalState();
  const [modalOpen, setModalOpen] = useState(false); 

  const [petDetails, setPetDetails]=useState([]);
  const [petInfo, setPetInfo] = useState({
    image: '',
    name: '',
    breed: '',
    age: '',
    weight: '',
    height: '',
    color: '',
    remarks: '',
    gender: 'Male',
    contact: '' 
  });
  
  const SetFieldValues = (field: any, value: any) => {
    setPetInfo({ ...petInfo, [field]: value });
  };

 
  const selectPetPhoto = async() => {
    const hasPermission = await requestPhotoPermission();  
    if (!hasPermission) {
      Alert.alert("Permission Required", "Please grant access to the photo library.");
      return;
    }
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response: any) => {
      if (response.assets && response.assets.length > 0) {
          const imageBase64 = response.assets[0].base64;
          if (imageBase64) {
            setPetInfo({
              ...petInfo,
              image: imageBase64,
            });
          } else {
            console.log('The image string is empty.');
          }
        } else {
          console.log('No images found in the gallery');
        }
      }
    );
  };

  async function registerPet(){
      const baseUrl= getBaseURL();
      const response= await fetch(`${baseUrl}/pets/addNewPet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          petInfo: petInfo
        })
      });
      if(response.status===201){
        Alert.alert('Pet added succesfuuly');
        getPetDetails();
        setModalOpen(false);
      }else if(response.status===409){
        Alert.alert('Pet already registered');
      }
  }
  async function getPetDetails(){
      const baseUrl= getBaseURL();
      const response= await fetch(`${baseUrl}/pets/getPetDetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
        })
      });
      const result= await response.json();
      if(response.status===200){
        setPetDetails(result.data);
    
      }
  }
function clearFields(){
  setPetInfo( {
    image: '',
    name: '',
    breed: '',
    age: '',
    weight: '',
    height: '',
    color: '',
    remarks: '',
    contact: '',
    gender: 'Male', 

})
setModalOpen(false);
}
useEffect(()=> {
    getPetDetails();
},[])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Hey {username},</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
        <Image
          source={require('../../public/assets/user.png')}
          style={styles.profileIcon}
        />
        </TouchableOpacity>
      </View>


      <View style={styles.input}>
        <Text style={styles.mypetText}>My Pets</Text>
      </View>
      <View style={styles.petsContainer}>
       {petDetails && petDetails.length > 0 ? (
         petDetails.map((pet: any, index)=> (
         
           <View key={index} style={styles.individualPet}>
   

              <TouchableOpacity onPress={()=> navigation.navigate('IndividualPet', {pet: pet})}>

            <Image  source={{ uri: `data:image/jpeg;base64,${pet.image[0]}` }} style={styles.petPhoto}/>
            </TouchableOpacity>
            <View style={styles.petContent}>
            <Text style={styles.petName}>{pet.petName}</Text>
            <Text style={styles.petBreed}>{pet.breed}</Text>
            </View>
           </View>
          
         ))
        ): (
          <View style={styles.noPet}>
            <Text style={styles.noPetText}>No pets registered</Text>
          </View>
        )}
      
      </View>
      <View style={styles.addPetBtn}>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Text style={styles.btnText}>Add Pet</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)} 
        role="dialog"
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Pet Details</Text>

        
            <View>
              <TouchableOpacity testID="select-photo-btn" onPress={()=> selectPetPhoto()}>
              {petInfo.image ? (
                <Image
                  source={{ uri: `data:image/jpeg;base64,${petInfo.image}` }} 
                  style={styles.petImage}
                />
              ): (
                <Image source= {require('../../public/assets/user.png')} style={styles.petImage}/>
              )}
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.inputField}
              placeholder="PetName"
              value={petInfo.name}
              onChangeText={(text) => SetFieldValues('name', text)}
              testID="pet-name-input" 
            />
            <TextInput
              style={styles.inputField}
              placeholder="Breed"
              value={petInfo.breed}
              onChangeText={(text) => SetFieldValues('breed', text)}
            />
            <TextInput
              style={styles.inputField}
              placeholder="age"
              value={petInfo.age}
              onChangeText={(text) => SetFieldValues('age', text)}
            />
            <TextInput
              style={styles.inputField}
              placeholder="weight"
              value={petInfo.weight}
              onChangeText={(text) => SetFieldValues('weight', text)}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Height"
              value={petInfo.height}
              onChangeText={(text) => SetFieldValues('height', text)}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Color"
              value={petInfo.color}
              onChangeText={(text) => SetFieldValues('color', text)}
            />
               <TextInput
              style={styles.inputField}
              placeholder="Emergency Contact"
              value={petInfo.contact}
              onChangeText={(text) => SetFieldValues('contact', text)}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Remarks"
              value={petInfo.remarks}
              onChangeText={(text) => SetFieldValues('remarks', text)}
            />

            
            <View style={styles.genderContainer}>

  <Text style={styles.genderTitle}>Gender : </Text>
  <TouchableOpacity
    style={styles.radioButtonContainer}
    onPress={() => SetFieldValues('gender', 'Male')}
  >
    <View style={[styles.radioButton, petInfo.gender === 'Male' && styles.radioButtonSelected]} />
    <Text style={styles.radioText}>Male</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.radioButtonContainer}
    onPress={() => SetFieldValues('gender', 'Female')}
  >
    <View style={[styles.radioButton, petInfo.gender === 'Female' && styles.radioButtonSelected]} />
    <Text style={styles.radioText}>Female</Text>
  </TouchableOpacity>
</View>

   
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={() => {
                  registerPet()
                  clearFields()
                
                }}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.closeButton]}
                onPress={() => setModalOpen(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

