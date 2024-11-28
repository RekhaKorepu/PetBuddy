import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#f9f9f9',
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    sectionContainer: {
      marginBottom: 25,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    sectionDescription: {
      fontSize: 16,
      color: '#666',
      marginBottom: 15,
    },
    link: {
      fontSize: 16,
      color: '#007BFF',
      textDecorationLine: 'underline',
      marginBottom: 10,
    },
  });
  