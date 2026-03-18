import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
  {
    id: '1',
    title: 'Algebra',
    icon: 'calculator',
    color: '#6C63FF',
    lessons: 24,
    completed: 18,
    topics: ['Linear Equations', 'Quadratics', 'Polynomials', 'Inequalities'],
  },
  {
    id: '2',
    title: 'Geometry',
    icon: 'shapes',
    color: '#4ECDC4',
    lessons: 20,
    completed: 12,
    topics: ['Triangles', 'Circles', 'Area & Volume', 'Proofs'],
  },
  {
    id: '3',
    title: 'Trigonometry',
    icon: 'triangle',
    color: '#FFD93D',
    lessons: 18,
    completed: 7,
    topics: ['Unit Circle', 'Identities', 'Graphs', 'Applications'],
  },
  {
    id: '4',
    title: 'Calculus',
    icon: 'trending-up',
    color: '#FF6B6B',
    lessons: 30,
    completed: 10,
    topics: ['Limits', 'Derivatives', 'Integrals', 'Series'],
  },
  {
    id: '5',
    title: 'Statistics',
    icon: 'bar-chart',
    color: '#A78BFA',
    lessons: 16,
    completed: 5,
    topics: ['Probability', 'Distributions', 'Hypothesis Testing', 'Regression'],
  },
  {
    id: '6',
    title: 'Linear Algebra',
    icon: 'grid',
    color: '#F472B6',
    lessons: 22,
    completed: 3,
    topics: ['Vectors', 'Matrices', 'Eigenvalues', 'Transformations'],
  },
];

const FEATURED = {
  title: 'Calculus Fundamentals',
  subtitle: 'Master limits, derivatives, and integrals',
  lessons: 12,
  duration: '6 hours',
  level: 'Intermediate',
};

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Featured Course */}
      <TouchableOpacity style={styles.featuredCard} activeOpacity={0.7}>
        <View style={styles.featuredBadge}>
          <Ionicons name="star" size={14} color="#FFD93D" />
          <Text style={styles.featuredBadgeText}>Featured</Text>
        </View>
        <Text style={styles.featuredTitle}>{FEATURED.title}</Text>
        <Text style={styles.featuredSubtitle}>{FEATURED.subtitle}</Text>
        <View style={styles.featuredMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="book-outline" size={14} color="#A0A0B0" />
            <Text style={styles.metaText}>{FEATURED.lessons} lessons</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#A0A0B0" />
            <Text style={styles.metaText}>{FEATURED.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="speedometer-outline" size={14} color="#A0A0B0" />
            <Text style={styles.metaText}>{FEATURED.level}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton} activeOpacity={0.7}>
          <Text style={styles.startButtonText}>Start Learning</Text>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Browse Topics</Text>
      {CATEGORIES.map((cat) => (
        <TouchableOpacity key={cat.id} style={styles.categoryCard} activeOpacity={0.7}>
          <View style={[styles.catIcon, { backgroundColor: cat.color + '20' }]}>
            <Ionicons name={cat.icon} size={26} color={cat.color} />
          </View>
          <View style={styles.catInfo}>
            <Text style={styles.catTitle}>{cat.title}</Text>
            <Text style={styles.catLessons}>{cat.completed}/{cat.lessons} lessons</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, {
                width: `${(cat.completed / cat.lessons) * 100}%`,
                backgroundColor: cat.color,
              }]} />
            </View>
            <View style={styles.topicTags}>
              {cat.topics.map((topic, i) => (
                <Text key={i} style={styles.topicTag}>{topic}</Text>
              ))}
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
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
  featuredCard: {
    backgroundColor: '#1E1E3A',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#6C63FF40',
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 10,
  },
  featuredBadgeText: {
    color: '#FFD93D',
    fontSize: 12,
    fontWeight: '700',
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  featuredSubtitle: {
    fontSize: 14,
    color: '#A0A0B0',
    marginTop: 4,
  },
  featuredMeta: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#A0A0B0',
  },
  startButton: {
    backgroundColor: '#6C63FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 16,
    gap: 6,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  categoryCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  catIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  catTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  catLessons: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#2A2A4A',
    borderRadius: 2,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  topicTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 6,
  },
  topicTag: {
    fontSize: 10,
    color: '#8E8E93',
    backgroundColor: '#2A2A4A',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  bottomSpacer: {
    height: 20,
  },
});
