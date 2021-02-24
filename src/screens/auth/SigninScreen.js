import React from 'react';
import { Image, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useTheme, Spinner, Button, Input, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);
export const SigninScreen = ({ navigation }) => {
  const theme = useTheme();

  /* EMAIL */
  const [email, setEmail] = React.useState('');
  const [showEmailCaption, setShowEmailCaption] = React.useState(false);

  const renderEmailIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name={'email-outline'}/>
    </TouchableWithoutFeedback>
  );

  /* PASSWORD */
  const [password, setPassword] = React.useState('');
  const [securePasswordEntry, setSecurePasswordEntry] = React.useState(true);
  const [showPasswordCaption , setShowPasswordCaption] = React.useState(false);

  const toggleSecureEntry = () => {
    setSecurePasswordEntry(!securePasswordEntry);
  };

  const renderPasswordIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={securePasswordEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  /* LOGIN HANDLER */
  const [loading, setLoading] = React.useState('');

  const loginHandler = () => {
    setLoading(true);
    if(email.length == 0) setShowEmailCaption(true);
    if(password.length == 0) setShowPasswordCaption(true);

    //    navigation.navigate("Dashboard");
  };

  const SignInIcon = (props) => (
    <Icon {...props} name='log-in-outline'/>
  );

  const navigateSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme['color-primary-default'] }}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{ marginTop: 20, color: theme['color-primary-100']}}>Sign in to your account</Text>
      </Layout>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
        <Input
          value={email}
          label='Email'
          placeholder='Enter your email'
          accessoryRight={renderEmailIcon}
          onChangeText={nextValue => setEmail(nextValue)}
          captionIcon={showEmailCaption ? AlertIcon: null}
          caption={showEmailCaption ? 'Please enter email': null}
        />
        <Input
          value={password}
          label='Password'
          placeholder='Enter your password'
          accessoryRight={renderPasswordIcon}
          secureTextEntry={securePasswordEntry}
          onChangeText={nextValue => setPassword(nextValue)}
          captionIcon={showPasswordCaption ? AlertIcon: null}
          caption={showPasswordCaption ? 'Please enter password': null}
        />
      </Layout>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
        <Button style={{ marginTop: 10, width: '100%'}} status='primary' accessoryLeft={loading ? null : SignInIcon} onPress={loginHandler}>
          {loading ? <Spinner status='basic'/> : "Sign In"} 
        </Button>
        <Text style={{ marginTop: 20, color: theme['text-hint-color']}} onPress={navigateSignUp}>Don't have an account? Create</Text>
      </Layout>
    </SafeAreaView>
  );
};