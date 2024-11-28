import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { styles } from '../styles/TrainingStyles';

export default function Trainings(): React.JSX.Element {
  const redirect = (url: string) => {
    return Linking.openURL(url).catch((error: any) => {
      throw new Error(`An error occurred while redirecting to url: ${error.message}`);
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={require('../../public/assets/dogTraining.jpg')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Articles</Text>
        <Text style={styles.sectionDescription}>
          Please go through the articles to learn more about training.
        </Text>
        <TouchableOpacity onPress={() => redirect('https://www.sniffspot.com')}>
          <Text style={styles.link}>https://www.sniffspot.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => redirect('https://roguepetscience.com')}>
          <Text style={styles.link}>https://roguepetscience.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Video References</Text>
        <Text style={styles.sectionDescription}>Refer to these videos:</Text>
        <TouchableOpacity onPress={() => redirect('https://youtu.be/4dbzPoB7AKk')}>
          <Text style={styles.link}>https://youtu.be/4dbzPoB7AKk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => redirect('https://youtu.be/2jH7--ovgNM')}>
          <Text style={styles.link}>https://youtu.be/2jH7--ovgNM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Training Blogs</Text>
        <Text style={styles.sectionDescription}>
          Go through these to know more about training:
        </Text>
        <TouchableOpacity onPress={() => redirect('https://www.petbusinessinsurance.co.uk/news/Dog-Training-Blogs-to-Follow-in-2022/')}>
          <Text style={styles.link}>Pet Business Insurance Provider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => redirect('https://www.royalcanin.com/in')}>
          <Text style={styles.link}>Royal Canin IN: Tailored Health Nutrition For Cats & Dogs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
