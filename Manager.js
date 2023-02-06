
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, FlatList, Button, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

const App = (props) => {
  // const route = props.route;
  const {route} = props;
  const nameAbout = route.params?.name || 'Truyền vào đồ ngu';

  const [isShowForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const[editId, setEditId] = useState(0);
  const [list, setList] = useState([]);
  

  const onClose = () =>{
    setShowForm(false); 
    setName(''); 
    setPrice(0);
    setEditId(0);
  }
  const onSave = () => {
    //0. Nếu có editId != 0 thì là đang chỉnh sửa
    if(editId !=0){
        const newEditList = list.map(item =>{
            if(item.id == editId){
              // Gấn giá trị mới = giá trị đã lưu ở state sau khi nhập
                item.name = name;
                item.price = price;
            }
            return item;
        });
        setList(newEditList);
        return onClose();
    }
    //1. cấu trúc dữ liệu obj mới để lưu
    const newItem = {
      id:list[list.length-1]?.id +1 || 1,
      name: name,
      price
    };
    //2. định nghĩa mảng dữ liệu mới rồi lưu
    const newList = [...list, newItem];
    setList(newList);
    //3. Đóng modal và đưa TextInput về giá trị mặc định
      // setShowForm(false); 
      // setName(''); 
      // setPrice(0);
      return onClose();
  };
  const onEdit = (editId) =>{
    //1. Mở model ra 
    setShowForm(true);
    //2. Tìm kiếm phần tử có id = editId
    const editItem = list.find(item => item.id == editId);
    //3. Hiển thị dữ liệu của phần tử vừa tìm được
    setName(editItem.name);
    setPrice(editItem.price);
    setEditId(editId); // setEditId(editItem.id);
}
  const onDelete = (itemId) =>{
    const newList = list.filter((item) =>{
      return item.id !== itemId;
    });
    setList(newList);


  }
  return (
    <View style={styles.container}>
      <Text>Tiểu nhị: {nameAbout}</Text>
      {isShowForm ? null :<Button title='Thêm mới'
        onPress={() => setShowForm(true)}
      />}
    <Modal visible={isShowForm} animationType="slide">
      <View>
        <Text>{name}-{price}</Text>
        <TextInput placeholder='Tên SP' style={styles.textIp}
            value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput placeholder='Giá SP' style={styles.textIp}
          keyboardType='numeric'
            value={price}
          onChangeText={(text) => setPrice(text)}
        />
    
        <Button title='Hủy' onPress={() =>onClose()} />
        <Button title='Lưu' onPress={() => onSave()} />
      </View> 
     </Modal>

      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>

            <Pressable onPress={() => onEdit(item.id)}>
              <Text>Sửa</Text>
            </Pressable>
            <Pressable onPress={() => onDelete(item.id)}>
              <Text>Xóa</Text>
            </Pressable>
            
          </View>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container:{
    marginTop: 100,
  },
  textIp: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 10
    
    
  }
})
export default App