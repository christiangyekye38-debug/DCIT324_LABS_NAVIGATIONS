import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.description}>Campus Connect is a simple student app demonstrating stack, drawer, and tab navigation.</Text>
      <View style={styles.profile}>
        <Text style={styles.profileText}>Name: Christian Gyekye</Text>
        <Text style={styles.profileText}>Student ID: 10912345</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  profile: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  profileText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
