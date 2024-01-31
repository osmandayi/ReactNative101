import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useReducer, useState } from "react";
import ColorChange from "../../components/ColorChange";

const reducer = (state, action) => {
  console.log("STATE :", state);
  switch (action.type) {
    case "ChangeRed":
        if(state.r + action.payload <= 255 && state.r + action.payload >= 0){
            return { ...state, r: state.r + action.payload };
        }
        console.log("Lütfen Red değerini 0 ile 255 arasında giriniz !");
        return state
    case "ChangeGreen":
        if(state.g + action.payload <= 255 && state.g + action.payload >= 0){
            return { ...state, g: state.g + action.payload };
        }
        console.log("Lütfen Green değerini 0 ile 255 arasında giriniz !");
        return state
    case "ChangeBlue":
        if(state.b + action.payload <= 255 && state.b + action.payload >= 0){
            return { ...state, b: state.b + action.payload };
        }
        console.log("Lütfen Blue değerini 0 ile 255 arasında giriniz !");
        return state
    default:
      return state;
  }
};

export default function ChangeBoxColor() {
  // const [colors, setColors] = useState([]);
  const [state, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <View>
        <ColorChange color="Kırmızı" onIncrease={() => dispatch({ type: "ChangeRed", payload: 10 })} onDecrease={() => dispatch({ type: "ChangeRed", payload: -10 })}/>
        <ColorChange color="Yeşil" onIncrease={() => dispatch({ type: "ChangeGreen", payload: 10 })} onDecrease={() => dispatch({ type: "ChangeGreen", payload: -10 })}/>
        <ColorChange color="Mavi" onIncrease={() => dispatch({ type: "ChangeBlue", payload: 10 })} onDecrease={() => dispatch({ type: "ChangeBlue", payload: -10 })}/>
     
      
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.r},${state.g}, ${state.b})`,
          marginVertical: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
