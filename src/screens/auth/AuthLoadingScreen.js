import React, {useEffect} from 'react';
import { View } from 'react-native';
import { Spinner, Text} from '@ui-kitten/components';
import { useAuth } from "../../providers/AuthProvider";

export const AuthLoadingScreen = ({ navigation }) => {
 const { getAuthState } = useAuth();

 useEffect(() => {
  initialize()
 }, []);

 async function initialize() {
  try {
   const {user} = await getAuthState();
   if (user) {
    let username = !!(user.username);
    if (username) navigation.navigate("Home")
   } else navigation.navigate('SignIn');
  } catch (e) {
    navigation.navigate('SignIn');
  }
 }

 return (
  <View style={{backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1}}>
   <Spinner status='basic'/>
   <Text>Loading...</Text>
  </View>
 );
};