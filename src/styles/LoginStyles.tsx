import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    parentContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#fff",


    },
    container: {
        width: '80%', 
        maxWidth: 400, 
        flex: 1,
        height: 500,
        marginTop: '50%',
        alignItems: 'center',
    },
    image: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        borderRadius: 50
    },
    inputfields: {
        height: 90,
        width: "90%",
        marginBottom: 20,
      },
      username: {
        backgroundColor: "#f0f0f0",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
      },
      password: {
        backgroundColor: "#f0f0f0",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
      },
      redirect: {
        alignSelf: 'center',
        marginTop: 60,
        height: 40,
        width: '100%',
        alignItems: 'center'
      },
      bottomContainer: {
        position: 'absolute',
        marginTop: '180%',
        height: 90,
        width: '130%',
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonView: {
        marginTop: '65%',
        position: 'absolute',
        width: "70%",
        marginBottom: 1,
      },
      button: {
        backgroundColor: "green",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      title: {
        marginTop: '125%',
        position: 'absolute',
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
      },
      bottomText: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
        color: 'white',
        justifyContent: 'center',
        fontSize: 16
      },
      line: {
        height: 2,
        backgroundColor: '#ccc',
        marginVertical: 10,
      },
      registerText: {
        color: 'green',  
        margin: 2,
        textDecorationLine: 'underline', 
        fontSize: 16, 
      }

})