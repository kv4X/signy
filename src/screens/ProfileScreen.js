import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, HelperText, Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const { colors } = useTheme();
  /* Fullname */
  const [fullname, setFullname] = React.useState('');
  const onChangeFullname = fullname => setFullname(fullname);
  const fullnameValidation = () => {
    var fullnameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    if(!fullnameRegex.test(fullname)){
      return true;
    }
    return false;
  };

  /* Email */
  const [email, setEmail] = React.useState('');
  const onChangeEmail = email => setEmail(email);
  const emailValidation = () => {
    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailRegex.test(email)){
      return true;
    }
    return false;
  };

  /* Address */
  const [address, setAddress] = React.useState('');
  const onChangeAddress = address => setAddress(address);
  const addressValidation = () => {
    return address.length == 0;
  };
  return (
    <View style={styles.container} >
      <View style={{alignItems: 'center'}}>
        <Avatar.Image size={120} source={{
          uri: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
        }} />
      </View>
      <View style={{paddingTop: 20}}>
        <View stlye={styles.input}>
          <TextInput
            mode="outlined"
            label="FULLNAME" 
            underlineColor={colors.nav} 
            selectionColor={colors.primary} 
            value={fullname} 
            onChangeText={onChangeFullname}
            left={
              <TextInput.Icon name={
                () => <Icon name={'person'} size={20} color={colors.primary} />} 
              />
            }
          />
          <HelperText type="error" visible={fullnameValidation()}>
            Fullname is invalid!
          </HelperText>
        </View>
        <View stlye={styles.input}>
          <TextInput
            mode="outlined"
            label="EMAIL" 
            underlineColor={colors.nav} 
            value={email} 
            onChangeText={onChangeEmail}
            left={
              <TextInput.Icon name={
                () => <Icon name={'md-mail'} size={20} color={colors.primary} />} 
              />
            }
          />
          <HelperText type="error" visible={emailValidation()}>
            Email address is invalid!
          </HelperText>
        </View>
        <View stlye={styles.input}>
          <TextInput
            mode="outlined"
            label="ADDRESS"
            underlineColor={colors.nav}
            value={address}
            onChangeText={onChangeAddress}
            left={
              <TextInput.Icon name={
                () => <Icon name={'md-location'} size={20} color={colors.primary} />} 
              />
            }
          />
          <HelperText type="error" visible={addressValidation()}>
            Address is invalid!
          </HelperText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  input: {
    height: 20,
    width: '100%'
  }
});
export default HomeScreen;