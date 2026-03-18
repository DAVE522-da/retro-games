import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RECENT_TOPICS = [
  { id: '1', title: 'Quadratic Equations', icon: 'calculator', progress: 0.75, color: '#6C63FF' },
  { id: '2', title: 'Trigonometry Basics', icon: 'triangle', progress: 0.4, color: '#FF6B6B' },
  { id: '3', title: 'Linear Algebra', icon: 'grid', progress: 0.9, color: '#4ECDC4' },
];

const DAILY_CHALLENGES = [
  { id: '1', title: 'Solve 3x + 7 = 22', difficulty: 'Easy', points: 10 },
  { id: '2', title: 'Find the derivative of x³ + 2x', difficulty: 'Medium', points: 25 },
  { id: '3', title: 'Evaluate ∫(2x + 1)dx', difficulty: 'Hard', points: 50 },
];

const STATS = [
  { label: 'Problems Solved', value: '247', icon: 'checkmark-circle' },
  { label: 'Current Streak', value: '12 days', icon: 'flame' },
  { label: 'Quiz Score', value: '85%', icon: 'trophy' },
  { label: 'Topics Done', value: '18', icon: 'library' },
];

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Good Morning! 👋</Text>
        <Text style={styles.greetingSubtext}>Ready to tackle some math today?</Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        {STATS.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <Ionicons name={stat.icon} size={22} color="#6C63FF" />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Continue Learning */}
      <Text style={styles.sectionTitle}>Continue Learning</Text>
      {RECENT_TOPICS.map((topic) => (
        <TouchableOpacity key={topic.id} style={styles.topicCard} activeOpacity={0.7}>
          <View style={[styles.topicIcon, { backgroundColor: topic.color + '20' }]}>
            <Ionicons name={topic.icon} size={24} color={topic.color} />
          </View>
          <View style={styles.topicInfo}>
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${topic.progress * 100}%`, backgroundColor: topic.color }]} />
            </View>
            <Text style={styles.progressText}>{Math.round(topic.progress * 100)}% complete</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
        </TouchableOpacity>
      ))}

      {/* Daily Challenges */}
      <Text style={styles.sectionTitle}>Daily Challenges</Text>
      {DAILY_CHALLENGES.map((challenge) => (
        <TouchableOpacity key={challenge.id} style={styles.challengeCard} activeOpacity={0.7}>
          <View style={styles.challengeLeft}>
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
            <View style={styles.challengeMeta}>
              <View style={[styles.difficultyBadge, {
                backgroundColor: challenge.difficulty === 'Easy' ? '#4ECDC420' :
                  challenge.difficulty === 'Medium' ? '#FFD93D20' : '#FF6B6B20'
              }]}>
                <Text style={[styles.difficultyText, {
                  color: challenge.difficulty === 'Easy' ? '#4ECDC4' :
                    challenge.difficulty === 'Medium' ? '#FFD93D' : '#FF6B6B'
                }]}>{challenge.difficulty}</Text>
              </View>
              <Text style={styles.pointsText}>+{challenge.points} pts</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.solveButton} activeOpacity={0.7}>
            <Text style={styles.solveButtonText}>Solve</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
    paddingHorizontal: 16,
  },
  greeting: {
    marginTop: 16,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  greetingSubtext: {
    fontSize: 15,
    color: '#8E8E93',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 10,
    color: '#8E8E93',
    marginTop: 2,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  topicCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topicIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#2A2A4A',
    borderRadius: 3,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  challengeCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  challengeLeft: {
    flex: 1,
    marginRight: 12,
  },
  challengeTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  challengeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
  },
  pointsText: {
    fontSize: 12,
    color: '#6C63FF',
    fontWeight: '600',
  },
  solveButton: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  solveButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  bottomSpacer: {
    height: 20,
  },
});
