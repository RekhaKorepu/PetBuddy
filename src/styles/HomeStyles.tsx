import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      height: 100,
      width: '100%',
      backgroundColor: '#4CAF50', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    greeting: {
      color: '#FFF',
      fontSize: 20,
      marginTop: 40,
      fontWeight: 'bold',
    },
    profileIcon: {
      width: 50,
      height: 50,
      marginTop: 40,
    },
    content: {
      flex: 1,
      backgroundColor: '#F5F5F5', 
    },
    mypetText: {
      fontWeight: '900',
      fontSize: 16,
      marginLeft: 40,
    },
    input: {
      marginTop: 10,
      backgroundColor: 'white',
      height: 50,
      width: '90%',
      borderRadius: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    petsContainer: {
      flex: 0.98,
      backgroundColor: '#AAEAAA',
      borderRadius: 20,
      width: '95%',
      alignSelf: 'center',
    },
    addPetBtn: {
      marginTop: 10,
      marginRight: 10,
      height: 50,
      width: 120,
      backgroundColor: 'green',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
    },
    btnText: {
      color: 'white',
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      marginTop: 100,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalContent: {
      backgroundColor: 'white',
      margin: 20,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    inputField: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#f9f9f9',
    },
    genderTitle: {
      fontSize: 18,
      marginBottom: 10,
      alignSelf: 'flex-start',
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 20,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#4CAF50',
      marginRight: 8,
    },
    radioButtonSelected: {
      backgroundColor: '#4CAF50',
    },
    radioText: {
      fontSize: 16,
    },
    
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '45%',
      alignItems: 'center',
    },
    submitButton: {
      backgroundColor: '#4CAF50',
    },
    closeButton: {
      backgroundColor: '#4CAF50',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    petImage: {
      height: 100,
      width: 100,
      marginBottom: 10,
      borderRadius: 50
    },
    petPhoto: {
      height: 220,
      width: 180,
      borderRadius: 20
    },
    individualPet: {
      margin: 20,
      height: 200,
      width: 200,
      flexDirection: 'row'
    },
    petContent: {
      height: 120,
      width: 140,
      alignSelf: 'center',
      backgroundColor: 'white',
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
  
    },
    petName: {
      fontWeight: '700',
      fontSize: 18,
      padding: 10
  
    },
    petBreed: {
      fontSize: 16,
      paddingLeft: 10
    },
    noPet: {
      paddingTop: 50,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    noPetText: {
      fontSize: 20,
      color: 'grey'
  
    }
  });
  
  