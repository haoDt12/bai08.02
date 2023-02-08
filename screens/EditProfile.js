
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';
import React ,{ useState } from 'react';


const App = (props) => {
    // const route = props.route;
    const {route} = props;
    const {Update} = route.params;
    const nav = props.navigation;
    const Save = () => {
        Update(name, age, address, phone, Email);
         nav.navigate("Profile", {
          name: name,
          age: age,
          address: address,
          phone: phone,
          Email: Email,
          Update: Update,
        });
      };
      const [name, setName] = useState(route.params.name);
      const [age, setAge] = useState(route.params.age);
      const [address, setAddress] = useState(route.params.address);
      const [phone, setPhone] = useState(route.params.phone);
      const [Email, setEmail] = useState(route.params.Email);
return (
     <View style={styles.container}>
         <TextInput placeholder="Name" onChangeText={(text) => setName(text)} value={name} style={styles.input}/>
          <TextInput placeholder="Age" onChangeText={(text) => setAge(text)} value={age} style={styles.input}/>
          <TextInput placeholder="Address" onChangeText={(text) => setAddress(text)} value={address} style={styles.input}/>
          <TextInput placeholder="Phone" onChangeText={(text) => setPhone(text)} value={phone} style={styles.input}/>
          <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={Email} style={styles.input}/>
          <View style={styles.viewbt}>
            <Button title='Hủy'  
                onPress={()=> nav.navigate("Home")}/>
            <Button title='Lưu'  onPress={()=>Save()}/>
          </View>
    </View>
    );
};
export  default App;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },
    text:{
        color: 'green',
        fontWeight:"bold",
        fontSize: 25
    },
    input: {
        marginTop: 5,
        borderColor: "black",
        width: "90%",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      },
      viewbt: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 10,
      },

});