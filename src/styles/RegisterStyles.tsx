import { StyleSheet } from "react-native";

export const Astyles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
 },
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    marginTop: '5%',
    // position: 'absolute',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  inputfields: {
    height: 80,
    width: "90%",
    marginBottom: 20,
  },
  signIn: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#444",
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
  confirm: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  email: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  mobile: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonView: {
    marginTop: '50%',
    width: "80%",
    marginBottom: -10,
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
  bottomText: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    color: 'white',
    justifyContent: 'center',
    fontSize: 16
  },
  footer: {
    fontSize: 12,
    color: "gray",
    marginTop: 20,
  },
  redirect: {
    alignSelf: 'center',
    // marginTop: 10,
    height: 40,
    width: '100%',
    alignItems: 'center'
  },
  bottomContainer: {
    bottom: 0,
    height: 90,
    width: '120%',
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center'
},
registerText: {
  color: 'green', 
  margin: 2,
  textDecorationLine: 'underline', 
  fontSize: 16,
},
});

export default Astyles;
