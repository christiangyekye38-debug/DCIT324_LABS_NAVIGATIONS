import { router } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useProfile } from '../../../context/ProfileContext';

export default function ProfileScreen() {
  const { profile } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.field}>Name: {profile.name}</Text>
      <Text style={styles.field}>Index Number: {profile.indexNumber}</Text>
      <Text style={styles.field}>Programme: {profile.programme}</Text>
      <Text style={styles.field}>Level: {profile.level}</Text>
      <View style={styles.button}>
        <Button
          title="Edit Profile"
          onPress={() =>
            router.push({
              pathname: '/edit-profile',
              params: {
                name: profile.name,
                bio: profile.bio,
                programme: profile.programme,
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 18,
  },
  field: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: '60%',
  },
});
