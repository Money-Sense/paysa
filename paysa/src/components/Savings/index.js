import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableHighlight,
	   Button} from 'react-native';

import {commonStyles} from '../Common/common.styles';

const styles = StyleSheet.create({
	
	container: {
    	flex: 1,
    	alignItems: 'center',
    	margin: 20,
  },
 
  CircleShapeView: {
    	width: 200,
    	height: 200,
		borderRadius: 200/2,
		borderWidth:10,
		borderColor:'#663BFF',
		backgroundColor: '#663BFF',
	  	shadowColor:'black',
	  	elevation: 5,
	  	shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.8,
    	shadowRadius: 2,
  },
	
	view: {
		fontSize: 30,
		color: '#fff',
		marginLeft:53,
		marginTop:50,
	},
	
	balance:{
		fontSize: 30,
		color: '#fff',
		marginLeft:35,
	},
});

export function Savings() {
  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
	  
	  <View style={styles.container}>
	  	<View style={styles.CircleShapeView}>
	  		<Text style={styles.view}> View </Text>
	  		<Text style={styles.balance}> Balance </Text>
	  	</View>
	  </View>
	  <View style = {styles.container}>
	  	</View>
    </View>
  );
}
