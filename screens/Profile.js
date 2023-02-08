
import { StyleSheet,FlatList, Text, View, Button,Image } from 'react-native';
import { useState } from 'react';
const App = (props) => {
    // const route = props.route;
    const {route} = props;
    // const list = route.params.data;
    // const [info, setinfo] = useState(list);
    const nav = props.navigation;
return (
     <View style={styles.container}>
             <Image 
                style={{ width: 90, height: 90 ,borderRadius: 100, backgroundColor: "grey", justifyContent: "center", alignSelf:'center'}}
                source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.JEoI6ka4QZU1pkpDpq6rwgAAAA&pid=Api&P=0' }}
            />
            <View style={styles.viewbt}>
                 <Button          
                    title="Sửa"
                    onPress={()=> nav.navigate(
                        "EditProfile",{...route.params}
                )}    />
            </View>
            
                <View style={styles.info}>
                    <Text style={styles.text}>Họ tên: {route.params.name}</Text>
                    <Text style={styles.text}>Tuổi: {route.params.age}</Text>
                    <Text style={styles.text}>Địa chỉ: {route.params.address}</Text>
                    <Text style={styles.text}>SĐT: {route.params.phone}</Text>
                    <Text style={styles.text}>Email: {route.params.Email}</Text>
                </View>
            </View>
    );
};
export  default App;
const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    info: {
        alignItems: 'center',
        marginTop: 30
    },
    viewbt: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        marginTop: 10,
        paddingRight: 50
      },


});