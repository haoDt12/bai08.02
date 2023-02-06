import { StatusBar } from 'expo-status-bar';
import { StyleSheet,FlatList, Text, View, Button,Image } from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = (props) => {
    // const route = props.route;
    const {route} = props;
    const list = route.params?.data || 'Chưa truyền';
return (
     <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({ item }) => <View style={styles.container_1}>
            {/* <Image 
                style={{ width: 90, height: 90 ,borderRadius: 100, backgroundColor: "grey", justifyContent: "center", alignItems:"flex-end"}}
                source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.JEoI6ka4QZU1pkpDpq6rwgAAAA&pid=Api&P=0' }}
            /> */}
             <Image 
                style={{ width: 90, height: 90 ,borderRadius: 100, backgroundColor: "grey", justifyContent: "center", alignItems:"flex-end"}}
                source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.JEoI6ka4QZU1pkpDpq6rwgAAAA&pid=Api&P=0' }}
            />
            <View style={styles.info}>
                <Text>Họ tên: {item.name}</Text>
                <Text>Mã SV: {item.msv}</Text>
            </View>
            </View>}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
};
export  default App;
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    container_1:{
        width: "90%",
        borderWidth: 2,
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent :"center",
        alignSelf :"center"
    },
    info:{
        alignItems:"flex-end",
        justifyContent:"space-evenly",
        marginHorizontal: 5
     }
});