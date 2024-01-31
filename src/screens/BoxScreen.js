import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {...state, colors: [...state.colors, action.payload]};
    default:
      return state;
  }
};

export default function BoxScreen() {
  // const [colors, setColors] = useState([]);
  const [state, dispatch] = useReducer(reducer, {colors: []})

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View>
      <Button
        title="Kutu Ekle"
        onPress={() => {
          // setColors([...colors, randomColor()]);
          dispatch({type: "add", payload: randomColor()})
        }}
      />
      <FlatList
        data={state.colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 150,
                width: 150,
                backgroundColor: item,
                marginVertical: 20,
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
