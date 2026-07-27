import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

type EventParams = {
  title?: string;
  date?: string;
  description?: string;
};

export default function EventDetailsScreen() {
  const params = useLocalSearchParams<EventParams>();
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Event Details</Text>
      <Text style={styles.label}>Title</Text>
      <Text style={styles.value}>{params.title ?? 'No title provided'}</Text>
      <Text style={styles.label}>Date</Text>
      <Text style={styles.value}>{params.date ?? 'No date provided'}</Text>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.value}>{params.description ?? 'No description provided'}</Text>
      <View style={styles.button}>
        <Button title="Back" onPress={() => router.back()} />
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
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    marginTop: 28,
  },
});
