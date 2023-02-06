import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Manager from '../Manager'; // file app cũ
import About from './About'
import Manage_extra from './Manage_extra';
import { View,Text, Button,Image,StyleSheet} from "react-native";

const Stack = createNativeStackNavigator();
const list = [
    {
        id: 1,
        name: 'Nguyễn A',
        msv: 'PH99999',
    },
    {
        id: 2,
        name: 'Nguyễn B',
        msv: 'PH12345'
    },
    {
        id: 3,
        name: 'Nguyễn C',
        msv: 'PH11111'
    },
]
// Tạo ra thêm 1 màn hình About để quản lý
const Home = (props) =>{
    const nav = props.navigation;
   return (<View>
        <Image
            style={{ width: 90, height: 90 ,borderRadius: 100, backgroundColor: "grey", justifyContent: "center", alignSelf: 'center'}}
            source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.u-H2-2_iEVauQyoG745pUQHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110' }}
          />
        <View style={styles.viewbt}>
             <Button 
                title="Quản lý"
                onPress={() => nav.navigate(
                    'Manage_extra',
                    {data: list},
                    )}
             />
             <Button 
                title="About"
                onPress={() => nav.navigate(
                    'About',
                    {nameAbout: 'Đinh Trọng Hào', msvAbout: 'PH27524'},
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
                name= "Manage_extra" component={Manage_extra}
            />
             <Stack.Screen
                name='About' component={About}
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