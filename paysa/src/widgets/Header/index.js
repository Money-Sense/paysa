import React from 'react';
import {Appbar} from 'react-native-paper';

export function Header() {
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction /> */}
      <Appbar.Content title="Money Sense" />
      <Appbar.Action icon="bell" />
      {/* <Appbar.Action icon="dots-vertical" /> */}
    </Appbar.Header>
  );
}
