import React, {useState, useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  FAB,
  TextInput,
  Colors,
  Checkbox,
} from 'react-native-paper';

import {commonStyles} from '../Common/common.styles';
import {styles} from './home.styles';

export function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <View style={commonStyles.screenLayout}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Payment Screen</Text>
        </View>
        <View style={styles.fabContainer}>
          <FAB
            icon="plus"
            onPress={() => setVisible((prev) => !prev)}
            label={'Make Payment'}
          />
        </View>
      </View>
      <PaymentModal visible={visible} setVisible={setVisible} />
    </React.Fragment>
  );
}

function PaymentModal(props) {
  const {visible, setVisible} = props;

  const [payeeName, setPayeeName] = useState('');
  const [payeeNumber, setPayeeNumber] = useState('');
  const [payeeAmount, setPayeeAmount] = useState('');
  const [isRoundOff, setIsRoundOff] = useState(false);
  const [roundedAmount, setRoundedAmount] = useState(100);

  const handlePayment = () => {
    let data = {
      payerName: 'JohnDoe',
      payerMobileNum: '919874125636',
      payerAddress: 'johndoe@axis',
      payerAccType: 'SAVINGS',
      payerAccNum: '050000',
      payerIfsc: 'IFSC3567655',
      amount: payeeAmount,
      payeeName: payeeName,
      payeeMobileNum: '91' + payeeNumber,
      payeeAddress: 'johndoe@boi',
    };
    fetch('http://b2bcda7c.ngrok.io/pay/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setVisible(false);
        setPayeeName('');
        setPayeeNumber('');
        setPayeeAmount('');
        Alert.alert(
          'Hooray!',
          'Payment has been done successfully and the rounded off amount has been added to your wallet',
          [
            {
              text: 'OK',
              onPress: () => null,
              style: 'cancel',
            },
          ],
        );
      }
    });
  };

  return (
    <Modal
      contentContainerStyle={styles.modalContainer}
      visible={visible}
      onDismiss={() => setVisible(false)}>
      <ScrollView>
        <View style={styles.modalContent}>
          <Text
            style={{
              textAlign: 'center',
              paddingBottom: 20,
              color: Colors.grey100,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Payment
          </Text>
          <TextInput
            style={{marginBottom: 20}}
            label="Payee Name"
            value={payeeName}
            onChangeText={setPayeeName}
          />
          <TextInput
            style={{marginBottom: 20}}
            label="Payee Mobile Number"
            value={payeeNumber}
            onChangeText={setPayeeNumber}
          />
          <TextInput
            style={{marginBottom: 20}}
            label="Amount"
            value={payeeAmount}
            onChangeText={setPayeeAmount}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <Checkbox
              status={isRoundOff ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsRoundOff((prev) => !prev);
              }}
            />
            <Text style={{color: Colors.grey100}}>Round off amount</Text>
          </View>
          {isRoundOff && (
            <View style={{flexDirection: 'column', paddingBottom: 20}}>
              <Text style={{color: Colors.grey100}}>
                The Rounded off amount {roundedAmount}
              </Text>
            </View>
          )}

          <Button
            contentStyle={{height: 50}}
            icon="send"
            mode="contained"
            onPress={handlePayment}>
            Send
          </Button>
        </View>
      </ScrollView>
    </Modal>
  );
}
