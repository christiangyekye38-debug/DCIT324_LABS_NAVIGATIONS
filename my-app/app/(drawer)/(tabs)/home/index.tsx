import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const events = [
  {
    id: '1',
    title: 'Campus Welcome Party',
    date: 'Aug 3',
    description: 'A celebration for all new and returning students on the main lawn.',
  },
  {
    id: '2',
    title: 'Tech Club Meetup',
    date: 'Aug 7',
    description: 'Join the tech club for networking and project demos.',
  },
  {
    id: '3',
    title: 'Library Study Night',
    date: 'Aug 9',
    description: 'Extended library hours with free snacks and study support.',
  },
  {
    id: '4',
    title: 'Career Fair',
    date: 'Aug 11',
    description: 'Meet employers and learn about internship opportunities.',
  },
  {
    id: '5',
    title: 'Sports Day',
    date: 'Aug 15',
    description: 'Competitions and games for all students in the sports complex.',
  },
];

export default function FeedScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Campus Feed</Text>
      {events.map((event) => (
        <Pressable
          key={event.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: `/(drawer)/(tabs)/home/${event.id}`,
              params: {
                title: event.title,
                date: event.date,
                description: event.description,
              },
            })
          }
        >
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.date}>{event.date}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 18,
  },
  card: {
    marginBottom: 14,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  date: {
    color: '#666',
  },
});
