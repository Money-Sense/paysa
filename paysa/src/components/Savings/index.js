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
	
	button: {
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
    	alignItems: 'center',
		justifyContent: 'center',
  },
	
  	buttonText: {
	  	fontSize:30,
    	color: 'white'
  },
});

export  class Savings extends Component {
	onPressButton() {
    alert('You tapped the button!')
  }
	render(){
  return (
	<View style={{flex:1,backgroundColor:'#fff'}}>
		<View style={styles.container}>
			<TouchableHighlight onPress={this.onPressButton} underlayColor="#fff">
			  <View style={styles.button}>
				<Text style={styles.buttonText}>View</Text>
				<Text style={styles.buttonText}>Balance</Text>
			  </View>
			</TouchableHighlight>
		</View>
	</View>
  );
}
}
