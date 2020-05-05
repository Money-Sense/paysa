import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableHighlight} from 'react-native';
import {Colors} from 'react-native-paper';

import {commonStyles} from '../Common/common.styles';

const styles = StyleSheet.create({

	buttonContainer:{
		flex:1,
		flexDirection: 'row',
    	alignItems: 'center',
    	justifyContent: 'center',
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
	
	
});

export class BalanceButton extends Component {
	constructor(){
		super();
		this.state ={
			balanceStatus:false,
			textStatus:true,
			addStatus:false,
		}
  }
	
	onPressSaveButton = () =>{
    	if(this.state.balanceStatus === true)
		  {
			this.setState({balanceStatus: false})
			  this.setState({textStatus: true})
		  }
		  else
		  {
			this.setState({balanceStatus: true})
			  this.setState({textStatus: false})
		  }
  }
	
	render(){
  return (
		  <View>
				<TouchableHighlight onPress={this.onPressSaveButton} underlayColor='Colors.grey200'>
				  <View style={styles.button}>
	  				{
					this.state.textStatus ? <Text style={styles.buttonText}>View</Text> : null
	  				}
	  
	  				{
	  				this.state.balanceStatus ? <Text style= {styles.buttonText}>INR 6,234</Text> : null
	  				}
	  
	  				{
					this.state.textStatus ?<Text style={styles.buttonText}>Balance</Text> : null
	  				}
				  </View>
				</TouchableHighlight>
	  		</View>
  );
}
}