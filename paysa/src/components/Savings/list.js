import React,{useState} from 'react';
import { Text, List } from 'react-native-paper';
import {Icon} from 'react-native-vector-icons';

const deposits = ([
    { name: 'DepositName', id: 'ID1', date:'01-01-2000' },
    { name: 'DepositName', id: 'ID2', date:'02-01-2000' },
    { name: 'DepositName', id: 'ID3', date:'03-01-2000' },
    { name: 'DepositName', id: 'ID4', date:'04-01-2000' },
    { name: 'DepositName', id: 'ID5', date:'05-01-2000' },
    { name: 'DepositName', id: 'ID6', date:'06-01-2000' },
    { name: 'DepositName', id: 'ID7', date:'07-01-2000' },
	{ name: 'DepositName', id: 'ID8', date:'08-01-2000' },
    { name: 'DepositName', id: 'ID9', date:'09-01-2000'},
    { name: 'DepositName', id: 'ID10', date:'01-02-2000'},
    { name: 'DepositName', id: 'ID11', date:'02-02-2000' },
    { name: 'DepositName', id: 'ID12', date:'03-02-2000' },
    { name: 'DepositName', id: 'ID13', date:'04-02-2000' },
    { name: 'DepositName', id: 'ID14', date:'05-02-2000' },
	{ name: 'DepositName', id: 'ID15', date:'06-02-2000' },
    { name: 'DepositName', id: 'ID16', date:'07-02-2000' },
    { name: 'DepositName', id: 'ID17', date:'08-02-2000' },
    { name: 'DepositName', id: 'ID18', date:'09-02-2000' },
    { name: 'DepositName', id: 'ID19', date:'01-03-2000' },
    { name: 'DepositName', id: 'ID20', date:'02-03-2000' },
    { name: 'DepositName', id: 'ID21', date:'02-03-2000' },
  ]);

export function Lists(){
	return (
  			deposits.map((item,key) => ( 
  				<List.Item
	  				key={item.id}
    				title={item.name}
	  				description={item.id}
    				left={props => <List.Icon {...props} icon="bank" />}
					onPress={() => {
                alert('Deposit Details will be displayed');
              }}
  				/>
  			))
	);
}
