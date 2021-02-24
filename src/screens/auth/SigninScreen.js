import React from 'react';
import { Image, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useTheme, Spinner, Button, Input, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Svg, { Path } from 'react-native-svg';


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
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="250 300 550 450">
          <Path fill={theme['color-primary-default']} fill-opacity="1" d="M463.158,0.547 C528.839,2.315 588.950,12.214 653.427,40.697 C717.061,68.326 785.061,114.539 846.834,169.015 C972.289,279.777 1064.908,415.922 1017.305,469.359 C997.219,500.074 951.351,514.229 903.358,533.127 C854.559,551.158 803.634,573.933 754.757,601.879 C656.754,656.860 565.351,732.675 448.402,748.791 C333.158,766.828 218.637,725.566 135.519,656.965 C51.993,587.778 -0.130,491.251 -0.011,385.187 C-0.930,171.842 209.381,2.560 463.158,0.547"/>
        </Svg>
      </Layout>
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
       <Image
          style={{resizeMode: 'stretch', width: 100, height: 100}}
          source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }}
        />
      </Layout>
      {/*
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme['color-primary-default'] }}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{ marginTop: 20, color: theme['color-primary-100']}}>Sign in to your account</Text>
      </Layout>
      */}
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
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Svg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="-120 -30 600 400">
          <Path fill={theme['color-primary-default']} fill-opacity="1" d="M778.685,703.473 C715.236,720.422 655.671,729.413 584.942,718.991 C515.199,709.108 433.568,678.382 346.628,624.731 C259.212,571.613 166.432,493.363 98.081,420.943 C30.038,348.699 -13.575,282.285 4.462,256.890 C15.009,224.985 70.261,222.142 123.930,214.694 C179.012,208.514 233.470,199.059 277.434,185.815 C320.966,172.582 356.545,157.144 378.142,141.619 C400.302,125.771 408.481,109.836 410.212,88.170 C413.031,67.288 414.032,41.034 451.005,22.995 C485.853,4.814 556.673,-5.151 650.047,3.274 C742.143,10.803 851.192,35.504 934.643,71.022 C1019.557,106.548 1078.873,152.892 1105.290,203.875 C1132.351,255.409 1131.782,307.446 1120.863,358.112 C1109.324,408.740 1087.434,457.997 1057.512,503.098 C1027.435,548.203 989.334,589.152 941.882,623.247 C894.746,657.386 838.258,684.670 778.685,703.473"/>
        </Svg>
      </Layout>
    </SafeAreaView>
  );
};