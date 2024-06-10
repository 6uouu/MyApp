import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Hellow from './src/components/Hellow'


export default function App() {
  return (
    <View style={styles.container}>
      <Hellow>World</Hellow>
      <Hellow style={{fontSize:16}}>
        World
      </Hellow>
      <Text>Hi! Minji</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
