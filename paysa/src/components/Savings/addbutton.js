import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

export function AddButton () {
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight underlayColor='Colors.grey200'
        onPress={() => {
          setModalVisible(true);
        }}
      >
		   <View style={styles.button}>
				<Text style={styles.buttonText}>Add</Text>
				<Text style={styles.buttonText}>Money</Text>
			</View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
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
  }
});


