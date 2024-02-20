// Accordion.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Accordion = () => {
  const [isSection1Open, setSection1Open] = useState(false);
  const [isSection2Open, setSection2Open] = useState(false);
  const [isSection3Open, setSection3Open] = useState(false);
  const [isSection4Open, setSection4Open] = useState(false);
  const [isSection5Open, setSection5Open] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case 1:
        setSection1Open(!isSection1Open);
        setSection2Open(false);
        setSection3Open(false);
        setSection4Open(false);
        setSection5Open(false);
        break;
      case 2:
        setSection2Open(!isSection2Open);
        setSection1Open(false);
        setSection3Open(false);
        setSection4Open(false);
        setSection5Open(false);
        break;
      case 3:
        setSection3Open(!isSection3Open);
        setSection1Open(false);
        setSection2Open(false);
        setSection4Open(false);
        setSection5Open(false);
        break;
      case 4:
        setSection4Open(!isSection4Open);
        setSection1Open(false);
        setSection2Open(false);
        setSection3Open(false);
        setSection5Open(false);
        break;
      case 5:
        setSection5Open(!isSection5Open);
        setSection1Open(false);
        setSection2Open(false);
        setSection3Open(false);
        setSection4Open(false);
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleSection(1)} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Disease-Modifying Therapies (DMTs):</Text>
      </TouchableOpacity>
      {isSection1Open && (
        <View style={styles.sectionContent}>
          <Text>Disease-modifying therapies are medications that can help modify the immune system and reduce inflammation, 
            which play a significant role in MS.These treatments are available in different forms,
             including injectable medications, oral medications</Text>
        </View>
      )}

      <TouchableOpacity onPress={() => toggleSection(2)} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Symptomatic Treatments:</Text>
      </TouchableOpacity>
      {isSection2Open && (
        <View style={styles.sectionContent}>
          <Text> MS symptoms can vary widely among individuals. Symptomatic treatments focus on managing specific symptoms and improving daily functioning. Medications may be prescribed to address symptoms such as fatigue, muscle stiffness, pain, bladder dysfunction, cognitive difficulties, and depression. In addition to medication, physical therapy,
</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => toggleSection(3)} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Rehabilitation Therapies:</Text>
      </TouchableOpacity>
      {isSection3Open && (
        <View style={styles.sectionContent}>
          <Text> Rehabilitation therapies play a crucial role in MS management. Physical therapy can help improve mobility, strength, and balance, while occupational therapy focuses on enhancing daily activities and maintaining independence. Speech therapy may be recommended to address speech and swallowing difficulties. These therapies can assist in maximizing functional abilities and adapting to changes caused by the disease.</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => toggleSection(4)} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Lifestyle Modifications:</Text>
      </TouchableOpacity>
      {isSection4Open && (
        <View style={styles.sectionContent}>
          <Text> In addition to medical treatments, certain lifestyle modifications can contribute to overall well-being and symptom management. Regular exercise tailored to individual abilities, a well-balanced diet, stress management techniques, and adequate rest and sleep are all important aspects to consider. These lifestyle modifications can help maintain physical and mental well-being, potentially reducing symptoms and improving overall quality of life.</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => toggleSection(5)} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Notes</Text>
      </TouchableOpacity>
      {isSection5Open && (
        <View style={styles.sectionContent}>
          <Text> treatment options should be discussed with healthcare professionals who specialize in MS management. They can provide personalized advice based on your specific situation and help develop a comprehensive treatment plan.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionHeader: {
    backgroundColor: '#001B79',
    padding: 16,
    marginBottom: 8,
    borderRadius:10
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  sectionContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
  },
});

export default Accordion;
