import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  fabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2.8),
  },
  modalContainer: {
    // flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: Colors.grey700,
  },
  modalContent: {
    padding: 20,
  },
});
