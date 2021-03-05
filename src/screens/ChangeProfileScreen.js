import React from 'react';
import { Image, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Select, SelectItem, Datepicker, useTheme, Spinner, Button, Input, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Svg, { SvgText, Path } from 'react-native-svg';
import Toast from 'react-native-toast-message';
import * as api from "../services/UserService";

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);

const SaveIcon = (props) => (
    <Icon {...props} name='save'/>
);
export const ChangeProfileScreen = ({ navigation }) => {
  const colors = useTheme();
  const BackIcon = (props) => (
    <Icon style={{height: 24, width: 24, tintColor: colors['background-basic-color-1']}} name='arrow-back' onPress={() => navigation.goBack()}/>
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon}/>
  );

  /* Fullname */
  const [fullname, setFullname] = React.useState('');
  const [fullnameCaption, setFullnameCaption] = React.useState('');

  const renderFullnameIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name={'person-outline'}/>
    </TouchableWithoutFeedback>
  );

  /* Date of birth */
  const [date, setDate] = React.useState(new Date());

  /* Gender */
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [genderCaption, setGenderCaption] = React.useState('');

  /* Email */
  const [email, setEmail] = React.useState('');

  const renderEmailIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name={'email-outline'}/>
    </TouchableWithoutFeedback>
  );


  /* Login handler */
  const [loading, setLoading] = React.useState('');

  async function updateProfile(){
    try{
      setFullnameCaption('');
      setGenderCaption('');
      setLoading(true);
      let response =  await api.updateProfile(
        {
          fullname: fullname,
          gender: selectedIndex.row,
          dateBirth: date.getMonth() + "/" + (date.getDate() + 1) + "/" + date.getFullYear()
        }
      );

      if(response.message == "PROFILE_UPDATED"){
        Toast.show({
          type: 'success',
          text1: 'Successed',
          text2: 'Profile updated!',
          visibilityTime: 5000,
        });
      }
      setLoading(false);
    }catch(error){
      if(error.message == "VALIDATION_ERROR"){
        Object.entries(error.data.errors).forEach(([key, value]) => {
          if(key == "fullname") setFullnameCaption(value);
          if(key == "gender") setGenderCaption(value);
        });
      }else if(error.message == "ERROR"){
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: 'Unknown error!',
          visibilityTime: 5000,
        });
      }else if(error.message == "UNAUTHORIZED"){
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: 'Please login again!',
          visibilityTime: 5000,
        });
      }
      setLoading(false);
    }
    //date.toLocaleDateString()
    //    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors['background-basic-color-1'] }}>
      <Svg width="500" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="250 320 550 450">
        <Path fill={colors['color-primary-default']} fill-opacity="0.5" d="M463.158,0.547 C528.839,2.315 588.950,12.214 653.427,40.697 C717.061,68.326 785.061,114.539 846.834,169.015 C972.289,279.777 1064.908,415.922 1017.305,469.359 C997.219,500.074 951.351,514.229 903.358,533.127 C854.559,551.158 803.634,573.933 754.757,601.879 C656.754,656.860 565.351,732.675 448.402,748.791 C333.158,766.828 218.637,725.566 135.519,656.965 C51.993,587.778 -0.130,491.251 -0.011,385.187 C-0.930,171.842 209.381,2.560 463.158,0.547"/>
      </Svg>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <TopNavigation
        accessoryLeft={BackAction}
        alignment='start'
        title={props => <Text style={{color: colors['background-basic-color-1'], textTransform: "uppercase"}}>Profile settings</Text>}
        style={{ position: 'absolute', backgroundColor: 'transparent', textTransform: 'uppercase' }}
      />
      <ScrollView>
        <Layout style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
        <Text>TODO: isipisati podatke u inpute, napraviti rutu na backendu za profile info</Text>
          <Input
            value={fullname}
            label='Fullname'
            placeholder='Enter your fullname'
            accessoryRight={renderFullnameIcon}
            onChangeText={nextValue => setFullname(nextValue)}
            captionIcon={fullnameCaption.length ? AlertIcon: null}
            caption={fullnameCaption.length ? fullnameCaption: null}
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
            captionIcon={genderCaption.length ? AlertIcon: null}
            caption={genderCaption.length ? genderCaption: null}
            value={selectedIndex.row == 0 ? "Male" : "Female"}
          >
            <SelectItem title={evaProps => <Text {...evaProps}>Male</Text>} />
            <SelectItem title={evaProps => <Text {...evaProps}>Female</Text>} />
          </Select>
        </Layout>
        <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
          <Button style={{ marginTop: 10, width: '100%'}} status='primary' accessoryLeft={loading ? null : SaveIcon} onPress={updateProfile}>
            {loading ? <Spinner status='basic'/> : "Save"} 
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};