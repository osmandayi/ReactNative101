import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1,justifyContent: 'flex-end'}}>
      <View style={styles.buttonContainer}>
      <Button
        title="Courses"
        color={'#2196F3'}
        onPress={() => navigation.navigate('Courses')}
      />
      <Button
        title="Courses Information"
        color={'#b81645'}
        onPress={() => navigation.navigate('Courses Information')}
      />
      <Button
        title="Counter App"
        color={'#4516b8'}
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Random Box App"
        color={'#45b816'}
        onPress={() => navigation.navigate('Random Box App')}
      />
      <Button
        title="Try Something"
        color={'#b8aa55'}
        onPress={() => navigation.navigate('Try Something')}
      />
      <Button
        title="Change Color Box Screen"
        color={'#3f6912'}
        onPress={() => navigation.navigate('Change Color Box')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  buttonTest: {
    marginBottom: 10
  }
});
