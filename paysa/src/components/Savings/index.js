import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableHighlight,ScrollView} from 'react-native';
import {Colors} from 'react-native-paper';

import {commonStyles} from '../Common/common.styles';
import {BalanceButton} from '../Savings/balancebutton';
import {Lists} from '../Savings/list';
import {SaveButton} from '../Savings/savebutton';

const styles = StyleSheet.create({
	
	buttonContainer:{
		flex:1,
		flexDirection: 'column',
    	alignItems: 'center',
    	// justifyContent: 'center',
	},

	listContainer:{
		flex:1,
		margin:20,
		height:460,
		backgroundColor:'#fff',
		shadowColor:'black',
		borderRadius:10,
	  	elevation: 5,
	  	shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.8,
    	shadowRadius: 2,
	},
	
	historyContainer: {
		// flex: 1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#663BFF',
		borderTopLeftRadius:10,
		borderTopRightRadius:10,
		height:60,
	},
	
	historyText: {
		fontSize:25,
		color:'#fff',
	}
});

export function Savings(){
	
  return (
	  <View style={{flex:1,backgroundColor:"#fff"}}>
	  	<View style={styles.buttonContainer}>
			<BalanceButton/>
	  		<SaveButton/>
	  	</View>
			<View style = {styles.listContainer}>
	  			<View style = {styles.historyContainer}>
	  				<Text style={styles.historyText}>Savings History</Text>
	  			</View>
	  			<ScrollView>
					<Lists/>
	  			</ScrollView>
			</View>
	  </View>
  );

}