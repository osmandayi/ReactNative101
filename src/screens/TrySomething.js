import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
  } from 'react-native';
import React from 'react'

export default function TrySomething() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {refreshing && <Text>Selam Çukulatam</Text>}
      <Text>Pull down to see RefreshControl indicator</Text>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
        backgroundColor: '#b8aa55',
        alignItems: 'center',
        justifyContent: 'center',
      },
})