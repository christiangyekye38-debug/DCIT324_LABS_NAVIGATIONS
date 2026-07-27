import { ScrollView, StyleSheet, Text, View } from 'react-native';

const timetable = [
  { day: 'Monday', time: '09:00 - 10:30', course: 'Data Structures', venue: 'B101' },
  { day: 'Tuesday', time: '11:00 - 12:30', course: 'Calculus II', venue: 'A204' },
  { day: 'Wednesday', time: '14:00 - 15:30', course: 'Academic Writing', venue: 'C303' },
  { day: 'Thursday', time: '08:00 - 09:30', course: 'Physics for Engineers', venue: 'D105' },
  { day: 'Friday', time: '10:00 - 11:30', course: 'African History', venue: 'E202' },
];

export default function TimetableScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Weekly Timetable</Text>
      {timetable.map((item, index) => (
        <View key={`${item.day}-${index}`} style={styles.card}>
          <Text style={styles.course}>{item.course}</Text>
          <Text>{item.day}</Text>
          <Text>{item.time}</Text>
          <Text>{item.venue}</Text>
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  course: {
    fontWeight: '700',
    marginBottom: 4,
  },
});
