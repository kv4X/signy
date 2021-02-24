import React from 'react';
import { Image, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Select, SelectItem, Datepicker, useTheme, Spinner, Button, Input, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);
export const SignUpScreen = ({ navigation }) => {
  const theme = useTheme();

  /* Fullname */
  const [fullname, setFullname] = React.useState('');
  const [showFullnameCaption, setShowFullnameCaption] = React.useState(false);

  const renderFullnameIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name={'person-outline'}/>
    </TouchableWithoutFeedback>
  );

  /* Date of birth */
  const [date, setDate] = React.useState(new Date());

  /* Gender */
  const [selectedIndex, setSelectedIndex] = React.useState();

  /* Email */
  const [email, setEmail] = React.useState('');
  const [showEmailCaption, setShowEmailCaption] = React.useState(false);

  const renderEmailIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name={'email-outline'}/>
    </TouchableWithoutFeedback>
  );

  /* Password */
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

  /* Login handler */
  const [loading, setLoading] = React.useState('');

  const loginHandler = () => {
    setLoading(false);
    if(fullname.length == 0) setShowFullnameCaption(true);
    if(email.length == 0) setShowEmailCaption(true);
    if(password.length == 0) setShowPasswordCaption(true);
    //date.toLocaleDateString()
    //    navigation.navigate("Dashboard");
  };

  const SignInIcon = (props) => (
    <Icon {...props} name='log-in-outline'/>
  );

  const navigateSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: theme['color-primary-default'] }}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{ marginTop: 20, color: theme['color-primary-100']}}>Sign up</Text>
      </Layout>
      <Layout style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
        <Input
          value={fullname}
          label='Fullname'
          placeholder='Enter your fullname'
          accessoryRight={renderFullnameIcon}
          onChangeText={nextValue => setFullname(nextValue)}
          captionIcon={showFullnameCaption ? AlertIcon: null}
          caption={showFullnameCaption ? 'Please enter fullname': null}
        />
        <Datepicker
          label='Date of birth'
          date={date}
          onSelect={nextDate => setDate(nextDate)}
          style={{width: '100%'}}
        />
        <Select
          style={{width:'100%'}}
          placeholder='Gender'
          label='Gender'
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
        >
          <SelectItem title='Male'/>
          <SelectItem title='Female'/>
        </Select>
        
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
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
        <Button style={{ marginTop: 10, width: '100%'}} status='primary' accessoryLeft={loading ? null : SignInIcon} onPress={loginHandler}>
          {loading ? <Spinner status='basic'/> : "Sign Up"} 
        </Button>
        <Text style={{ marginTop: 20, color: theme['text-hint-color']}} onPress={navigateSignIn}>Already have an account? Sign in</Text>
      </Layout>
    </SafeAreaView>
  );
};