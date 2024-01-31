import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
    return (
        <View
            style={styles.mainView}
        // style={styles.container}
        >
            <View style={{ ...styles.cornerBoxes, ...styles.redBox }}>
                {/* <Text>Red</Text> */}
            </View>
            <View style={{ ...styles.cornerBoxes, ...styles.blueBox }}>
                {/* <Text>Blue</Text> */}
            </View>
            <View style={{ ...styles.cornerBoxes, ...styles.greenBox }}>
                {/* <Text>Green</Text> */}
            </View>
            <View style={{ ...styles.cornerBoxes, ...styles.yellowBox }}>
                {/* <Text>Yellow</Text> */}
            </View>
            {/* <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
            <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
            <View style={{ width: 150, height: 150, backgroundColor: 'blue' }} /> */}
            {/* <Text style={{ ...styles.mainText, ...styles.mainTextOne }}>1</Text> */}
            {/* <Text style={{ ...styles.mainText, ...styles.mainTextTwo }}>2</Text>
            <Text style={{ ...styles.mainText, ...styles.mainTextThree }}>3</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    mainView: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: "grey",
    },
    mainText: {
        borderWidth: 1,
        borderColor: "red",
        margin: 10,
        padding: 20,
        borderRadius: 5,
        // paddingHorizontal: 20,
        // paddingVertical: 20,
        // marginHorizontal: 30,
        // marginVertical: 30,
    },
    cornerBoxes: {
        width: "25%",
        height: "25%",
        position: 'absolute',
    },
    redBox: {
        top: 0,
        left: 0,
        backgroundColor: 'red'
    },
    blueBox: {
        top: 0,
        right: 0,
        backgroundColor: 'blue'
    },
    greenBox: {
        bottom: 0,
        left: 0,
        backgroundColor: 'green'
    },
    yellowBox: {
        bottom: 0,
        right: 0,
        backgroundColor: 'yellow'
    },
    mainTextOne: {
        position: "absolute",
        bottom: 20,
        right: 20,
        top: 20,
        left: 20,
        // alignSelf: 'flex-end', // sadece 1 bileşenin hizasını değiştirmek istiyorsan alignSelf ile yapabilirsin.
        // flex: 4, // total flex = 10, kullanılan toplam flex in yüzdesel alanını alır.
        // Örneğin flex 4 ve flex 1 kullanılmış. Kullanılan toplam flex 5, %100 olarak alınır. ve %80 genişlik-uzunluk verir.
    },
    // mainTextTwo: {
    //     alignSelf: 'flex-start',
    //     // top: 10,
    //     // flex: 5,
    // },
    // mainTextThree: {
    //     alignSelf: 'center',
    //     // flex: 1,
    // },
});
