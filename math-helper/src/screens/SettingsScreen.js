import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PROFILE = {
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  grade: '11th Grade',
  streak: 12,
  joined: 'January 2026',
};

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [dailyReminder, setDailyReminder] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(false);
  const [haptics, setHaptics] = useState(true);

  const renderToggle = (label, value, onToggle, icon) => (
    <View style={styles.settingRow}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={20} color="#6C63FF" />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#2A2A4A', true: '#6C63FF' }}
        thumbColor="#FFFFFF"
      />
    </View>
  );

  const renderLink = (label, icon, detail) => (
    <TouchableOpacity style={styles.settingRow} activeOpacity={0.7}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={20} color="#6C63FF" />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      <View style={styles.settingRight}>
        {detail && <Text style={styles.settingDetail}>{detail}</Text>}
        <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>AJ</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{PROFILE.name}</Text>
          <Text style={styles.profileEmail}>{PROFILE.email}</Text>
          <View style={styles.profileMeta}>
            <View style={styles.profileBadge}>
              <Ionicons name="school-outline" size={12} color="#6C63FF" />
              <Text style={styles.profileBadgeText}>{PROFILE.grade}</Text>
            </View>
            <View style={styles.profileBadge}>
              <Ionicons name="flame" size={12} color="#FF6B6B" />
              <Text style={styles.profileBadgeText}>{PROFILE.streak} day streak</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="create-outline" size={22} color="#6C63FF" />
        </TouchableOpacity>
      </View>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.section}>
        {renderToggle('Push Notifications', notifications, setNotifications, 'notifications-outline')}
        {renderToggle('Daily Reminder', dailyReminder, setDailyReminder, 'alarm-outline')}
        {renderToggle('Dark Mode', darkMode, setDarkMode, 'moon-outline')}
        {renderToggle('Sound Effects', sound, setSound, 'volume-medium-outline')}
        {renderToggle('Haptic Feedback', haptics, setHaptics, 'phone-portrait-outline')}
      </View>

      {/* Study Settings */}
      <Text style={styles.sectionTitle}>Study Settings</Text>
      <View style={styles.section}>
        {renderLink('Difficulty Level', 'speedometer-outline', 'Intermediate')}
        {renderLink('Daily Goal', 'flag-outline', '30 min')}
        {renderLink('Focus Topics', 'list-outline', '4 selected')}
        {renderLink('Quiz Length', 'help-circle-outline', '10 questions')}
      </View>

      {/* Account */}
      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.section}>
        {renderLink('Edit Profile', 'person-outline')}
        {renderLink('Change Password', 'lock-closed-outline')}
        {renderLink('Linked Accounts', 'link-outline')}
        {renderLink('Export Data', 'download-outline')}
      </View>

      {/* Support */}
      <Text style={styles.sectionTitle}>Support</Text>
      <View style={styles.section}>
        {renderLink('Help Center', 'help-buoy-outline')}
        {renderLink('Send Feedback', 'chatbubble-outline')}
        {renderLink('Rate the App', 'star-outline')}
        {renderLink('Privacy Policy', 'shield-outline')}
        {renderLink('Terms of Service', 'document-text-outline')}
      </View>

      {/* Version */}
      <Text style={styles.versionText}>MathHelper v1.0.0 · Expo SDK 54</Text>

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutButton} activeOpacity={0.7}>
        <Ionicons name="log-out-outline" size={18} color="#FF6B6B" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

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
  profileCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileEmail: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
  },
  profileMeta: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A4A',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 4,
  },
  profileBadgeText: {
    fontSize: 11,
    color: '#A0A0B0',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 4,
  },
  section: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A4A',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  settingDetail: {
    fontSize: 14,
    color: '#8E8E93',
  },
  versionText: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#FF6B6B30',
  },
  signOutText: {
    color: '#FF6B6B',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 30,
  },
});
