import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useProfile } from '../context/ProfileContext';

type Params = {
  name?: string;
  bio?: string;
  programme?: string;
};

export default function EditProfileScreen() {
  const params = useLocalSearchParams<Params>();
  const router = useRouter();
  const { profile, updateProfile } = useProfile();

  const [name, setName] = useState(params.name ?? profile.name);
  const [bio, setBio] = useState(params.bio ?? profile.bio);
  const [programme, setProgramme] = useState(params.programme ?? profile.programme);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <Text style={styles.label}>Bio</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} placeholder="Bio" multiline />
      <Text style={styles.label}>Programme</Text>
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} placeholder="Programme" />
      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          onPress={() => {
            updateProfile({ name, bio, programme });
            router.back();
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    marginTop: 24,
  },
});
