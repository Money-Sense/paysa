import React,{Component} from 'react';
import { TextInput } from 'react-native-paper';

export class Input extends Component {
  state = {
    text: ''
  };

  render(){
    return (
      <TextInput
        selectionColor='#663BFF'
		mode='outlined'
        label='Enter Amount'
        value={this.state.text}
		onChangeText={text => this.setState({ text })}
      />
    );
  }
}