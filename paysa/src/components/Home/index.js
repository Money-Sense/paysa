import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {commonStyles} from '../Common/common.styles';

export function Home() {
  return (
    <View style={commonStyles.screenLayout}>
      <Text>Home Screen</Text>
    </View>
  );
}
