import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from './EditProfile'
import Profile from './Profile';
import { View,Text, Button,Image,StyleSheet} from "react-native";
import React ,{useState} from "react";

const Stack = createNativeStackNavigator();

// Tạo ra thêm 1 màn hình About để quản lý
const Home = (props) =>{
    const [name, setName] = useState("Đinh Trọng Hào");
    const [age, setAge] = useState("21");
    const [address, setAddress] = useState("Hà Nội");
    const [phone, setPhone] = useState("0999999999");
    const [Email, setEmail] = useState("hao@gmail.com");
    const Update = (name, age, address, phone, Email) => {
    setName(name);
    setAge(age);
    setAddress(address);
    setPhone(phone);
    setEmail(Email);
    };
    const nav = props.navigation;
   return (<View>
        <View style={styles.viewbt}>
             <Button 
                title="Thông tin cá nhân"
                onPress={() => nav.navigate(
                    'Profile',
                    {name: name, age: age, address: address, phone: phone, Email: Email, Update: Update}
                    )}
             />
        </View>
       
    </View>);
};
const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name= "Profile" component={Profile}
            />
             <Stack.Screen
                name='EditProfile' component={EditProfile}
            />
            <Stack.Screen
                name='Home' component={Home}
            />

        </Stack.Navigator>
    </NavigationContainer>
)};
export default App;

const styles = StyleSheet.create({
   viewbt:{
    flexDirection:"row",
    alignSelf: "center",
    margin: 20,
    marginRight: 20,
    paddingRight: 20,
    paddingLeft: 20,
   },
});