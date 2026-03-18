import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SAVED_ITEMS = [
  {
    id: '1',
    type: 'formula',
    title: 'Quadratic Formula',
    content: 'x = (-b ± √(b²-4ac)) / 2a',
    category: 'Algebra',
    color: '#6C63FF',
    date: 'Mar 15, 2026',
  },
  {
    id: '2',
    type: 'note',
    title: 'Derivative Rules',
    content: 'Power Rule: d/dx(xⁿ) = nxⁿ⁻¹\nProduct Rule: (fg)\' = f\'g + fg\'',
    category: 'Calculus',
    color: '#FF6B6B',
    date: 'Mar 14, 2026',
  },
  {
    id: '3',
    type: 'problem',
    title: 'Integration by Parts',
    content: '∫u dv = uv - ∫v du — Solved example with step-by-step',
    category: 'Calculus',
    color: '#FF6B6B',
    date: 'Mar 13, 2026',
  },
  {
    id: '4',
    type: 'formula',
    title: 'Pythagorean Theorem',
    content: 'a² + b² = c²',
    category: 'Geometry',
    color: '#4ECDC4',
    date: 'Mar 12, 2026',
  },
  {
    id: '5',
    type: 'note',
    title: 'Unit Circle Values',
    content: 'sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = √3/3',
    category: 'Trigonometry',
    color: '#FFD93D',
    date: 'Mar 11, 2026',
  },
  {
    id: '6',
    type: 'problem',
    title: 'Matrix Multiplication',
    content: '2x2 matrix multiplication example with solution',
    category: 'Linear Algebra',
    color: '#A78BFA',
    date: 'Mar 10, 2026',
  },
];

const FILTERS = ['All', 'Formulas', 'Notes', 'Problems'];

const TYPE_ICONS = {
  formula: 'flask',
  note: 'document-text',
  problem: 'bulb',
};

export default function SavedScreen() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? SAVED_ITEMS
    : SAVED_ITEMS.filter(item => {
        if (activeFilter === 'Formulas') return item.type === 'formula';
        if (activeFilter === 'Notes') return item.type === 'note';
        if (activeFilter === 'Problems') return item.type === 'problem';
        return true;
      });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Filter Tabs */}
      <View style={styles.filters}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterTab, activeFilter === filter && styles.filterTabActive]}
            onPress={() => setActiveFilter(filter)}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Count */}
      <Text style={styles.countText}>{filteredItems.length} saved items</Text>

      {/* Saved Items */}
      {filteredItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.7}>
          <View style={styles.cardHeader}>
            <View style={[styles.typeIcon, { backgroundColor: item.color + '20' }]}>
              <Ionicons name={TYPE_ICONS[item.type]} size={20} color={item.color} />
            </View>
            <View style={styles.cardHeaderText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.cardMeta}>
                <View style={[styles.categoryBadge, { backgroundColor: item.color + '20' }]}>
                  <Text style={[styles.categoryText, { color: item.color }]}>{item.category}</Text>
                </View>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="bookmark" size={22} color="#6C63FF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.cardContent} numberOfLines={2}>{item.content}</Text>
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
  filters: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    gap: 8,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#1A1A2E',
  },
  filterTabActive: {
    backgroundColor: '#6C63FF',
  },
  filterText: {
    color: '#8E8E93',
    fontSize: 13,
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  countText: {
    color: '#8E8E93',
    fontSize: 13,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeaderText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  cardContent: {
    fontSize: 14,
    color: '#A0A0B0',
    marginTop: 12,
    lineHeight: 20,
    fontFamily: 'monospace',
  },
  bottomSpacer: {
    height: 20,
  },
});
