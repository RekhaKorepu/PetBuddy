import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Welcome({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.welcome}>Hey! Welcome</Text>
        <Text style={styles.welcomeContent} >
          while you sit and stay - we'll go out and play
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1, 
    height: '100%',
    width: '100%',
  },
  image: {
    height: 900,
    width: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    bottom: 0,
    height: 250,
    width: '100%',
    position: 'absolute',
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, 
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 5
  },
  welcomeContent: {
    color: 'grey',
    fontSize: 17,
    margin: 20,
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
     color: 'white',
     fontSize: 18
  }
})
  
