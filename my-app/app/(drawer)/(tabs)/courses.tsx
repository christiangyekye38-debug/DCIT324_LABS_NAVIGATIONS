import { ScrollView, StyleSheet, Text, View } from 'react-native';

const courses = [
  { code: 'CSC201', title: 'Data Structures', credits: 3 },
  { code: 'MAT211', title: 'Calculus II', credits: 3 },
  { code: 'ENG101', title: 'Academic Writing', credits: 2 },
  { code: 'PHY203', title: 'Physics for Engineers', credits: 3 },
  { code: 'HIS220', title: 'African History', credits: 2 },
];

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Enrolled Courses</Text>
      {courses.map((course) => (
        <View key={course.code} style={styles.card}>
          <Text style={styles.courseCode}>{course.code}</Text>
          <Text>{course.title}</Text>
          <Text>{course.credits} credit hours</Text>
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
  courseCode: {
    fontWeight: '700',
    marginBottom: 4,
  },
});
