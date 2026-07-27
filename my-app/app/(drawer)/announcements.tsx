import { ScrollView, StyleSheet, Text, View } from 'react-native';

const announcements = [
  { title: 'Campus Fair', date: 'Aug 5', text: 'Join the campus fair for clubs, food, and student events.' },
  { title: 'Library Hours', date: 'Aug 6', text: 'The library is open until 10 PM during the exam week.' },
  { title: 'Sports Tryouts', date: 'Aug 8', text: 'Tryouts for the football and basketball teams start next week.' },
  { title: 'Guest Lecture', date: 'Aug 10', text: 'Don’t miss the guest lecture on mobile development in room B201.' },
  { title: 'Registration', date: 'Aug 12', text: 'Course registration for next semester opens online tomorrow.' },
];

export default function AnnouncementsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Announcements</Text>
      {announcements.map((item, index) => (
        <View key={`${item.title}-${index}`} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text>{item.text}</Text>
        </View>
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
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    color: '#666',
    marginBottom: 4,
  },
});
