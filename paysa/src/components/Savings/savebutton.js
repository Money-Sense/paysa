import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  findNodeHandle,
  Switch,
  View
} from "react-native";
import { TextInput } from 'react-native-paper';
import { BlurView } from '@react-native-community/blur';

import {Input} from '../Savings/textinput';

export function SaveButton () {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          <View style={styles.modalView}>
            <Input/>

            <TouchableHighlight underlayColor='Colors.grey200' 
              style={styles.openButton}
              onPress={() => {
                setModalVisible(modalVisible);
              }}
            >
              <Text style={styles.textStyle}>SAVE</Text>
            </TouchableHighlight>

			<TouchableHighlight underlayColor='Colors.grey200' 
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>CANCEL</Text>
            </TouchableHighlight>
          </View>
      </Modal>

      <TouchableHighlight underlayColor='Colors.grey200'
        onPress={() => {
          setModalVisible(true);
        }}
      >
		   <View style={styles.button}>
				<Text style={styles.buttonText}>Save</Text>
				<Text style={styles.buttonText}>Money</Text>
			</View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
	  alignItems:'center',
      justifyContent: "center",
  },
	
  modalView: {
    margin: 40,
	marginTop:350,
    backgroundColor: "white",
	justifyContent: "center",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
	shadowColor: '#000',
   	shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  openButton: {
    backgroundColor: "#663BFF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
	marginTop: 20,
  },
	
button: {
    	width: 170,
    	height: 170,
		margin: 20,
		borderRadius: 170/2,
		borderWidth:10,
		borderColor:'#663BFF',
		backgroundColor: '#663BFF',
	  	shadowColor:'black',
	  	elevation: 5,
	  	shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.8,
    	shadowRadius: 2,
    	alignItems: 'center',
		justifyContent: 'center',
  },
	buttonText: {
	  	fontSize:25,
    	color: 'white'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
	blurView: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});


