import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../styles/IndividualPetStyles";
export const IndividualPet= ({route, navigation}: {route: any, navigation: any}) => {
    const {pet}= route.params;
    const [isModalOpen, setIsModalOpen]= useState(false);
    return(
        <View style={styles.parentContainer}>
            <Image source={{ uri: `data:image/jpeg;base64,${pet.image[0]}` }} style={styles.image}/>
            <View style={styles.contentContainer}>
            <View>
            <Text style={styles.petName}>{pet.petName}</Text>
            <Text style={styles.petBreed}>{pet.breed}</Text>
            <Text style={styles.petContact}>+91 {pet.emergencyContact}</Text>
            </View>
            {pet.gender==='Male' ? (
            <Image source={require('../../public/assets/maleIcon.png')} style={styles.genderIcon} testID="gender-icon"/>):
            (
                <Image source={require('../../public/assets/femaleIcon.png')} style={styles.genderIcon} testID="gender-icon"/>)
             }
            </View>
            <Text style={styles.aboutContainer}>About {pet.petName}</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsContent}>
                    <Text style={styles.contentHeading}>Age</Text>
                    <Text style={styles.content}>{pet.age} yrs</Text>
                </View>
                <View style={styles.detailsContent}>
                    <Text style={styles.contentHeading}>Weight</Text>
                    <Text style={styles.content}>{pet.weight} kg</Text>
                </View>
                <View style={styles.detailsContent}>
                    <Text style={styles.contentHeading}>Height</Text>
                    <Text style={styles.content}>{pet.height} cm</Text>
                </View>
                <View style={styles.detailsContent}>
                    <Text style={styles.contentHeading}>Color</Text>
                    <Text style={styles.content}>{pet.color}</Text>
                </View>
            </View>
            <Text style={styles.remarks}>Remarks</Text>
            <Text style={styles.remarksContent}>{pet.remarks}</Text>
            <View style={styles.galleryContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('PetGallery', {pet: pet})}>
                    <Text style={styles.galleryText}>Gallery</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.TrackButton}>
                <TouchableOpacity onPress={()=> setIsModalOpen(true)}>
                    <Text style={styles.galleryText}>Track</Text>
                </TouchableOpacity>
            </View>
            <Modal
             animationType="slide"
             transparent={true}
             visible={isModalOpen}
            //  onRequestClose={() => setIsModalOpen(false)} 
             testID="track-modal" 
             >
             
         <View style={styles.modalOverlay}>
          <View style={styles.trackModal}>
   
            <TouchableOpacity
              style={styles.modalButton}
              onPress={()=> {navigation.navigate('Remainders'), setIsModalOpen(false)}}
            >
              <Text style={styles.modalButtonText}>Reminders</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              
            >
              <Text style={styles.modalButtonText}>Activities</Text>
            </TouchableOpacity>
          </View>
        </View>
            </Modal>
            
        </View>
    )
}
