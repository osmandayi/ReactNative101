import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function ColorChange({ color, colorText, onIncrease, onDecrease }) {

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color }}>{colorText}</Text>
      <View style={styles.buttonContainer}>
        <Button title={`${colorText} Arttır`} onPress={() => onIncrease()} />
        <Button title={`${colorText} Azalt`} onPress={() => onDecrease()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 1.2,
  }
});
