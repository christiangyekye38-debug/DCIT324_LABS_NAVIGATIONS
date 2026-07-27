import { ScrollView, StyleSheet, Text, View } from 'react-native';

const faq = [
  {
    question: 'How do I edit my profile?',
    answer: 'Open the Profile tab and tap the Edit Profile button to update your name, bio, and programme.',
  },
  {
    question: 'Where do I see announcements?',
    answer: 'Open the Announcements screen from the drawer menu to view the latest campus news.',
  },
  {
    question: 'How do I see event details?',
    answer: 'Tap any event in the Home feed to view the full event details page.',
  },
];

export default function HelpScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Help & Support</Text>
      {faq.map((item, index) => (
        <View key={`faq-${index}`} style={styles.card}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
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
  question: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  answer: {
    fontSize: 15,
    color: '#333',
  },
});
