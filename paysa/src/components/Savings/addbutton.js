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

export function AddButton () {
	state = {
    text: ''
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          <View style={styles.modalView}>
            <TextInput
				selectionColor='#663BFF'
				underlineColor='#663BFF'
				mode='outlined'
        		label='Enter Amount'
        		value={this.state.text}
				onChangeText={text => this.setState({ text })}
      		/>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#663BFF" }}
              onPress={() => {
                setModalVisible(modalVisible);
              }}
            >
              <Text style={styles.textStyle}>SAVE</Text>
            </TouchableHighlight>

			<TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#663BFF" }}
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
	  flex:1,
	  
    justifyContent: "center",
  },
	
  modalView: {
    margin: 35,
	marginTop:330,
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
    backgroundColor: "#F194FF",
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


