import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QUIZ_CATEGORIES = [
  { id: '1', title: 'Quick Practice', icon: 'flash', color: '#FFD93D', desc: '5 random questions', time: '3 min' },
  { id: '2', title: 'Topic Review', icon: 'book', color: '#6C63FF', desc: 'Choose a specific topic', time: '10 min' },
  { id: '3', title: 'Challenge Mode', icon: 'flame', color: '#FF6B6B', desc: 'Timed hard questions', time: '15 min' },
  { id: '4', title: 'Exam Prep', icon: 'school', color: '#4ECDC4', desc: 'Full practice exam', time: '60 min' },
];

const RECENT_QUIZZES = [
  { id: '1', title: 'Algebra Basics', score: 9, total: 10, date: 'Today', grade: 'A' },
  { id: '2', title: 'Trig Identities', score: 7, total: 10, date: 'Yesterday', grade: 'B' },
  { id: '3', title: 'Derivatives', score: 8, total: 10, date: 'Mar 15', grade: 'A-' },
  { id: '4', title: 'Probability', score: 6, total: 10, date: 'Mar 14', grade: 'B-' },
];

const LEADERBOARD = [
  { rank: 1, name: 'You', score: 2450, avatar: '🧑‍💻' },
  { rank: 2, name: 'MathWhiz42', score: 2380, avatar: '🧙' },
  { rank: 3, name: 'CalcKing', score: 2210, avatar: '👑' },
  { rank: 4, name: 'AlgebraAce', score: 2050, avatar: '🎯' },
  { rank: 5, name: 'TrigStar', score: 1980, avatar: '⭐' },
];

export default function QuizScreen() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Quiz Modes */}
      <Text style={styles.sectionTitle}>Choose a Mode</Text>
      <View style={styles.modesGrid}>
        {QUIZ_CATEGORIES.map((quiz) => (
          <TouchableOpacity key={quiz.id} style={styles.modeCard} activeOpacity={0.7}>
            <View style={[styles.modeIcon, { backgroundColor: quiz.color + '20' }]}>
              <Ionicons name={quiz.icon} size={28} color={quiz.color} />
            </View>
            <Text style={styles.modeTitle}>{quiz.title}</Text>
            <Text style={styles.modeDesc}>{quiz.desc}</Text>
            <View style={styles.modeTime}>
              <Ionicons name="time-outline" size={12} color="#8E8E93" />
              <Text style={styles.modeTimeText}>{quiz.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Toggle */}
      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[styles.toggleBtn, !showLeaderboard && styles.toggleBtnActive]}
          onPress={() => setShowLeaderboard(false)}
          activeOpacity={0.7}
        >
          <Text style={[styles.toggleText, !showLeaderboard && styles.toggleTextActive]}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleBtn, showLeaderboard && styles.toggleBtnActive]}
          onPress={() => setShowLeaderboard(true)}
          activeOpacity={0.7}
        >
          <Text style={[styles.toggleText, showLeaderboard && styles.toggleTextActive]}>Leaderboard</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Quizzes */}
      {!showLeaderboard && RECENT_QUIZZES.map((quiz) => (
        <TouchableOpacity key={quiz.id} style={styles.resultCard} activeOpacity={0.7}>
          <View style={styles.resultLeft}>
            <Text style={styles.resultTitle}>{quiz.title}</Text>
            <Text style={styles.resultDate}>{quiz.date}</Text>
          </View>
          <View style={styles.resultRight}>
            <View style={[styles.gradeBadge, {
              backgroundColor: quiz.grade.startsWith('A') ? '#4ECDC420' : '#FFD93D20'
            }]}>
              <Text style={[styles.gradeText, {
                color: quiz.grade.startsWith('A') ? '#4ECDC4' : '#FFD93D'
              }]}>{quiz.grade}</Text>
            </View>
            <Text style={styles.scoreText}>{quiz.score}/{quiz.total}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Leaderboard */}
      {showLeaderboard && LEADERBOARD.map((entry) => (
        <View key={entry.rank} style={[styles.leaderRow, entry.rank === 1 && styles.leaderRowFirst]}>
          <Text style={[styles.rankText, entry.rank <= 3 && styles.rankTextTop]}>
            {entry.rank <= 3 ? ['🥇', '🥈', '🥉'][entry.rank - 1] : `#${entry.rank}`}
          </Text>
          <Text style={styles.avatar}>{entry.avatar}</Text>
          <View style={styles.leaderInfo}>
            <Text style={[styles.leaderName, entry.rank === 1 && styles.leaderNameFirst]}>
              {entry.name}
            </Text>
            <Text style={styles.leaderScore}>{entry.score.toLocaleString()} pts</Text>
          </View>
          {entry.rank === 1 && (
            <View style={styles.youBadge}>
              <Text style={styles.youBadgeText}>You</Text>
            </View>
          )}
        </View>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 12,
  },
  modesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  modeCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  modeIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  modeTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  modeDesc: {
    fontSize: 11,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 4,
  },
  modeTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  modeTimeText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  toggleRow: {
    flexDirection: 'row',
    backgroundColor: '#1A1A2E',
    borderRadius: 10,
    padding: 3,
    marginBottom: 16,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleBtnActive: {
    backgroundColor: '#6C63FF',
  },
  toggleText: {
    color: '#8E8E93',
    fontWeight: '600',
    fontSize: 14,
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },
  resultCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultLeft: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  resultDate: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  resultRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  gradeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  gradeText: {
    fontSize: 14,
    fontWeight: '700',
  },
  scoreText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  leaderRow: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  leaderRowFirst: {
    borderWidth: 1,
    borderColor: '#6C63FF40',
    backgroundColor: '#1E1E3A',
  },
  rankText: {
    fontSize: 16,
    color: '#8E8E93',
    width: 36,
    textAlign: 'center',
    fontWeight: '700',
  },
  rankTextTop: {
    fontSize: 20,
  },
  avatar: {
    fontSize: 24,
    marginRight: 12,
  },
  leaderInfo: {
    flex: 1,
  },
  leaderName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  leaderNameFirst: {
    color: '#6C63FF',
  },
  leaderScore: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  youBadge: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  youBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: 20,
  },
});
