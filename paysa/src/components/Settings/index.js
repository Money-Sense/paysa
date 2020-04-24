import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {commonStyles} from '../Common/common.styles';

export function Settings() {
  return (
    <View style={commonStyles.screenLayout}>
      <Text>Settings Screen</Text>
    </View>
  );
}
