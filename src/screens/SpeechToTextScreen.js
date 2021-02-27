import React, {useState, useEffect, Component} from 'react';
import { StatusBar, ImageBackground, SafeAreaView, View, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Button, Text, TopNavigationAction, Divider, Icon, Card, Layout, TopNavigation, useTheme, Menu, MenuItem } from '@ui-kitten/components';
import Svg, { SvgText, Path } from 'react-native-svg';
import Voice from 'react-native-voice';
export default class VoiceTest extends Component {
  state = {
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: false,
    results: [],
    partialResults: [],
  };

  constructor() {
    super();
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
    this.setState({
      started: true,
    });
  };

  onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };
}


export const SpeechToTextScreen = ({ navigation }) => {
  const p = new VoiceTest();
  const colors = useTheme();

  const MenuIcon = (props) => (
    <Icon style={{height: 24, width: 24, tintColor: colors['background-basic-color-1']}} name='menu-outline' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );

  const renderHomeAction = () => (
    <TopNavigationAction icon={MenuIcon}/>
  );

  const CourseItemHeader = (props) => (
    console.log(props),
    <View style={{backgroundColor: 'transparent', paddingHorizontal: 24, paddingVertical: 16}}>
      <Text category='h5'>{props.name}</Text>
      <Text category='s1'>Press to start audio recording</Text>
    </View>
  );
  
  const CourseItem = (props) => (
    <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card} header={propsa => <CourseItemHeader name={props.name}/>}>
        <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
          <Image  source={{uri: props.imageUrl}} style={styles.cover}/>
        </View>
      </Card> 
    </View>
  );
  const ForwardIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward'/>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors['background-basic-color-1'] }}>
      <Svg width="500" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="250 320 550 450">
        <Path fill={colors['color-primary-default']} fill-opacity="0.5" d="M463.158,0.547 C528.839,2.315 588.950,12.214 653.427,40.697 C717.061,68.326 785.061,114.539 846.834,169.015 C972.289,279.777 1064.908,415.922 1017.305,469.359 C997.219,500.074 951.351,514.229 903.358,533.127 C854.559,551.158 803.634,573.933 754.757,601.879 C656.754,656.860 565.351,732.675 448.402,748.791 C333.158,766.828 218.637,725.566 135.519,656.965 C51.993,587.778 -0.130,491.251 -0.011,385.187 C-0.930,171.842 209.381,2.560 463.158,0.547"/>
      </Svg>
      <TopNavigation
        accessoryLeft={renderHomeAction}
        alignment='start'
        title={props => <Text style={{color: colors['background-basic-color-1'], textTransform: "uppercase"}}>Speech to ASL converter</Text>}
        style={{ position: 'absolute', backgroundColor: 'transparent', textTransform: 'uppercase' }}
      />
      <Layout style={{flex: 1, margin: 15,justifyContent: 'center', alignItems: 'center'}}>
        <View style={{alignSelf: 'stretch',height:300,justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{resizeMode: 'stretch', width: 200, height: 200,position:'absolute', top:0}}
          source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} />
          <Text style={{position:'absolute', top:210}}>Press to replay animation</Text>
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={p._startRecognizing.bind()}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      </Layout>
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Svg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="-120 -30 600 400">
          <Path fill={colors['color-primary-default']} fill-opacity="1" d="M778.685,703.473 C715.236,720.422 655.671,729.413 584.942,718.991 C515.199,709.108 433.568,678.382 346.628,624.731 C259.212,571.613 166.432,493.363 98.081,420.943 C30.038,348.699 -13.575,282.285 4.462,256.890 C15.009,224.985 70.261,222.142 123.930,214.694 C179.012,208.514 233.470,199.059 277.434,185.815 C320.966,172.582 356.545,157.144 378.142,141.619 C400.302,125.771 408.481,109.836 410.212,88.170 C413.031,67.288 414.032,41.034 451.005,22.995 C485.853,4.814 556.673,-5.151 650.047,3.274 C742.143,10.803 851.192,35.504 934.643,71.022 C1019.557,106.548 1078.873,152.892 1105.290,203.875 C1132.351,255.409 1131.782,307.446 1120.863,358.112 C1109.324,408.740 1087.434,457.997 1057.512,503.098 C1027.435,548.203 989.334,589.152 941.882,623.247 C894.746,657.386 838.258,684.670 778.685,703.473"/>
        </Svg>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
},
cover: {
  position:'absolute',
  top:0,
  left: 20,
  width: 100,
  height: 100,
},
button: {
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 10
}
});