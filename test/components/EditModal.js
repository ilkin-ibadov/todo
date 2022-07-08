import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const EditModal = ({
  isModalVisible,
  setModalVisible,
  id,
  list,
  setList,
  editText,
}) => {
  const [editedText, setEditedText] = useState();
  const addEditedText = () => {
    let arr = list;
    arr.forEach(item => {
      if (item.id === id && editedText !== '' && editedText?.trim() != '') {
        item.text = editedText;
      }
    });
    setList(arr);
    setModalVisible(false);
  };

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalCss}>
          <TextInput
            placeholder="edit text"
            backgroundColor={'#685d79'}
            placeholderTextColor={'#685d79'}
            onChangeText={value => setEditedText(value)}
            style={styles.modalInput}
            defaultValue={editText}
          />
          <TouchableOpacity onPress={addEditedText} style={styles.modalEditBtn}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default EditModal;

const styles = StyleSheet.create({
  modalCss: {
    alignItems: 'center',
    width: '100%',
  },
  modalInput: {
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
    color: 'black',
  },
  modalEditBtn: {
    paddingVertical: 20,
    backgroundColor: '#685d79',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    width: '100%',
    borderRadius: 20,
  },
});
