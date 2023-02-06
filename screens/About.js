import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { exp } from 'react-native/Libraries/Animated/Easing';

const App = (props) => {
    // const route = props.route;
    const {route} = props;
    const nameAbout = route.params?.nameAbout || 'Chưa truyền';
    const msvAbout = route.params?.msvAbout || 'Chưa truyền';
return (
     <View style={styles.container}>
        <Text style={styles.text}>Họ tên: {nameAbout}</Text>
        <Text style={styles.text}>Mã SV: {msvAbout}</Text>
          
    </View>
    );
};
export  default App;
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    text:{
        color: 'green',
        fontWeight:"bold",
        fontSize: 25
    }

});