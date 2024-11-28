import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    parentContainer: {
      flex: 1
    },
    image: {
      padding: 20,
      height: 250,
      width: '100%',
      borderRadius: 10
    },
    contentContainer: {
      margin: 10,
      height: 140,
      width: '85%',
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 10,
      flexDirection: 'row'
    },
    petName: {
      margin: 15,
      fontWeight:'800',
      fontSize: 22,
    },
    petBreed: {
      marginLeft: 15,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#228B8B',
  
  
    },
    petContact: {
      marginTop: 10,
      marginLeft: 15,
      fontWeight: 'bold',
      fontSize: 17,
      color: '#228B8B',
    },
    genderIcon: {
      height: 40,
      width: 40,
      alignSelf: 'center',
      marginLeft: 90
    },
    aboutContainer: {
      paddingLeft : 20,
      fontSize: 20,
      fontWeight: '700'
    },
    detailsContainer: {
      flexDirection: 'row'
    },
    detailsContent: {
      margin: 5,
      height: 70,
      width: '22%',
      backgroundColor: '#AAEAAA',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    contentHeading:{
      fontSize: 16
    },
    content: {
      color: '#228B8B',
      fontSize: 16,
      fontWeight: 'bold'
    },
    remarks: {
      fontWeight: '800',
      margin: 10,
      fontSize: 20
    },
    remarksContent: {
      fontSize: 16,
      marginLeft: 10
    },
    galleryContainer: {
      margin: 10,
      height: 40,
      width: 100,
      backgroundColor: 'green',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    galleryText: {
       fontSize: 16,
       fontWeight: 'bold',
       color: 'white'
    },
    TrackButton: {
      margin: 10,
      height: 40,
      width: 130,
      backgroundColor: 'green',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    },
  
  
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    trackModal: {
      height: 100,
      backgroundColor: 'white',
      borderRadius: 10,
      width: 300,
      alignItems: 'center',
    },
  
    modalButton: {
  
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
    },
    modalButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeButton: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'gray',
      borderRadius: 8,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
  })