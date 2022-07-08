import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {uniqid} from './helpers/helpers';
import Icons from 'react-native-vector-icons/AntDesign';
import Trash from 'react-native-vector-icons/Feather';

import EditModal from './components/EditModal';

const App = () => {
  const [editText, setEditText] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(null);

  const [text, setText] = useState('');

  const [list, setList] = useState([]);

  const addText = () => {
    if (text != undefined && text !== '' && text?.trim() != '') {
      setList([...list, {id: uniqid(), text: text}]);
      setText();
    }
  };

  const clearText = () => {
    setList([]);
  };

  const deleteText = id => {
    setList(list.filter(item => item.id !== id));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.note}>
        <Text style={styles.text}>{item.text}</Text>

        <View style={styles.icons}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              deleteText(item.id);
            }}>
            <Trash name="trash-2" size={25} color={'#465c7a'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setId(item.id);
              setModalVisible(true);
              setEditText(item.text);
            }}>
            <Icons name="edit" size={25} color={'#465c7a'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do App {list.length}</Text>
      <TextInput
        placeholder="enter text"
        backgroundColor={'#685d79'}
        placeholderTextColor={'#685d79'}
        onChangeText={value => setText(value)}
        style={styles.input}
        value={text}
      />

      <TouchableOpacity onPress={addText} style={styles.btn}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearText} style={styles.clearBtn}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        style={styles.listContainer}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Your List is empty</Text>
        )}
        contentContainerStyle={{paddingBottom: 40}}
      />
      <EditModal
        {...{
          isModalVisible,
          setModalVisible,
          id,
          list,
          setList,
          editText,
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 20,
    paddingLeft: 16,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
  },
  btn: {
    paddingVertical: 20,
    backgroundColor: '#ac6d83',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    width: '100%',
    borderRadius: 20,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#465c7a',
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
    flexShrink: 1,
    color: '#465c7a',
  },
  listContainer: {
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  clearBtn: {
    paddingVertical: 20,
    backgroundColor: '#d9727f',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width: '100%',
    borderRadius: 20,
  },
  icons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
    height: 80,
    maxHeight: 120,
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 100,
    borderRadius: 20,
    padding: 15,
    paddingLeft: 20,
    marginBottom: 10,
    backgroundColor: '#fcbb6d',
  },
});
