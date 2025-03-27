import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import CustomTabs from '@/components/CustomTabs'

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false}} tabBar={CustomTabs}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Dailysales" />
      <Tabs.Screen name="ExpenseSummary" />
      <Tabs.Screen name="Expensetracker" />
    </Tabs> 
  )
}

export default _layout

const styles = StyleSheet.create({})