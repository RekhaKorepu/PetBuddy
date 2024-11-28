import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';
import getBaseURL from "../utils/getBaseURL";

export default function Services(): React.JSX.Element {
  const vetImages=[];
   const  [isVeterinary, setIsVeterinary]=useState(true);
   const[veterinary, setVeterinary]= useState([]);
   const [groomingdata, setGroomingData]=useState([]);
   useEffect(()=>{
     getPetServices();
   })

   async function getPetServices(){
    
    try{
      const baseUrl= getBaseURL();
      const response= await fetch(`${baseUrl}/pets/getPetServices`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result= await response.json();
      if(response.status===200){
        setVeterinary(result.veterinarians);
        setGroomingData(result.grooming);
      }
    }catch(error){
       throw new Error('Error adding a new pet');
    }
  }
 
    return (
      <View style={styles.parentContainer}>
        <Text style={styles.titleContent}>Hello, How may I help you ?</Text>
        <View style={styles.serviceImages}>
            <TouchableOpacity onPress={()=> setIsVeterinary(true)} >
          <View style={styles.VetContainer}>
            <Image source={require('../../public/assets/vet.png')} style={styles.vet} />
            <Text style={styles.vText}>Veterinary</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setIsVeterinary(false)}>
          <View style={styles.VetContainer}>
            <Image source={require('../../public/assets/dog.png')} style={styles.vet} />
            <Text style={styles.vText}>Grooming</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        {isVeterinary? 
        <Text style={styles.vHeading}> Nearby Veterinarian</Text>
         :
         <Text style={styles.vHeading}> Nearby Grooming Centers</Text>
         }
         {isVeterinary ? (
        <View style={styles.vHolder}>
          {veterinary.map((vet: any, index: number) => (
            <View style={styles.vContainer} key={vet._id}>
              <View style={styles.vetContent}>
              <Image
                source={{
                  uri: vet.image
                }}
                style={styles.doctorImage}
              />
              <View>
              <Text style={styles.vetName}>{vet.name}</Text>
              <Text>{vet.speciality}</Text>
              <Text>⭐⭐⭐️⭐⭐{vet.rating}   {vet.numberOfReviews} reviews </Text>
               </View>
              </View>
              <View style={styles.vetContent}>
              <Text style={styles.time}>{vet.experience} years of experience</Text>
              <Text style={styles.time}>{vet.distance}</Text>
              <Text style={styles.time}>{vet.consultationFee}$</Text>
              </View>
              <Text style={styles.time}>Monday-Friday  {vet.timings}</Text>
            </View>
          ))}
        </View>
       ): 
         (
          <View style={styles.vHolder}>
          {groomingdata.map((center: any, index: number) => (
            <View style={styles.vContainer} key={center._id}>
              <View style={styles.vetContent}>
              <Image
                source={{
                  uri: center.image
                }}
                style={styles.doctorImage}
              />
              <View>
              <Text style={styles.vetName}>{center.name}</Text>
              <Text>⭐⭐⭐️⭐⭐{center.rating}   {center.numberOfReviews} reviews </Text>
               </View>
              </View>
              <View style={styles.services}>
              <Text>Available Services</Text>
                {center.services.map((item: any)=> (
                  <><Text style={styles.serviceNames}>{item.serviceName} - {item.price}$</Text></>

                ))}
              </View>
              <Text style={styles.time}> {center.distance}  Monday-Friday  {center.timings}</Text>
            </View>
          ))}
        </View>

         )
       }
       
      </View>
    );
  }


const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,

  },
  title: {
    alignItems: 'center',
    // marginBottom: 10,
    height: 80,
    width: '150%',

  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
  },
  titleContent: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 15,
  },
  serviceImages: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  VetContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E8F5E9',  
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000',  
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  vet: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  vText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50', 
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  vHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  vHolder: {
    marginTop: 10,
  },
  vContainer: {
    backgroundColor: '#FAFAFA',  
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  vetContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  vetName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#777',
  },
  services: {
    marginTop: -10,
    marginLeft: '30%',
    marginBottom: 10
    },
  serviceNames:{
    color: 'grey'
  }
});


