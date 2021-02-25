import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Image,ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Card, Text, TopNavigationAction, Button, Divider, Icon, Layout, TopNavigation, useTheme } from '@ui-kitten/components';
import Svg, { SvgText, Path } from 'react-native-svg';

export const LearningSectionScreen = ({ navigation }) => {
  const colors = useTheme();

  const MenuIcon = (props) => (
    <Icon style={{height: 24, width: 24, tintColor: colors['background-basic-color-1']}} name='menu-outline' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );

  const renderHomeAction = () => (
    <TopNavigationAction icon={MenuIcon}/>
  );
<<<<<<< HEAD

  const CourseItemHeader = (props) => (
    console.log(props),
    <View style={{backgroundColor: 'transparent', paddingHorizontal: 24, paddingVertical: 16}}>
      <Text category='h5'>{props.name}</Text>
=======
  const Header = (props) => (
    <View {...props}>
      <Text category='h5'>Letter {props.slovo}</Text>
>>>>>>> c6e498441b0800e8ceff0ac584c52b2813addbfb
      <Text category='s1'>Open for interactive course</Text>
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Svg width="500" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="250 320 550 450">
        <Path fill={colors['color-primary-default']} fill-opacity="0.5" d="M463.158,0.547 C528.839,2.315 588.950,12.214 653.427,40.697 C717.061,68.326 785.061,114.539 846.834,169.015 C972.289,279.777 1064.908,415.922 1017.305,469.359 C997.219,500.074 951.351,514.229 903.358,533.127 C854.559,551.158 803.634,573.933 754.757,601.879 C656.754,656.860 565.351,732.675 448.402,748.791 C333.158,766.828 218.637,725.566 135.519,656.965 C51.993,587.778 -0.130,491.251 -0.011,385.187 C-0.930,171.842 209.381,2.560 463.158,0.547"/>
      </Svg>
      <TopNavigation
        accessoryLeft={renderHomeAction}
        alignment='start'
        title={props => <Text style={{color: colors['background-basic-color-1'], textTransform: 'uppercase'}}>Learning Section</Text>}
        style={{ position: 'absolute', backgroundColor: 'transparent' }}
      />
      <Divider/>
      <ScrollView style={styles.scrollView}>
<<<<<<< HEAD
        <CourseItem name="Letter (A)" imageUrl="https://i.imgur.com/ZljNPkv.png"/>
        <CourseItem name="Letter (B)" imageUrl="https://i.imgur.com/ZljNPkv.png"/>
=======
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'A'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'B'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'C'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'D'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'E'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'F'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'G'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'H'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'I'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'J'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'K'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'L'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'M'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'N'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'O'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'P'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'Q'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'R'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'S'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'T'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'U'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'V'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'W'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'X'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'Y'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
      <View style={{flex:1, flexDirection:"row",maxHeight:100,marginBottom: 5, marginTop: 5}}>
      <Card style={styles.card}>
          <Header slovo={'Z'} />
            <View style={{ marginHorizontal: -24, marginVertical: -16 ,width: 100, height:100}}>
                <Image  source={{
            uri: 'https://i.imgur.com/ZljNPkv.png',
          }} style={styles.cover}/>
            </View>
            
        </Card>
      </View>
>>>>>>> c6e498441b0800e8ceff0ac584c52b2813addbfb
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      marginHorizontal: 10,
    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    cover: {
        position:'absolute',
        top:-50,
        left: 270,
        width: 100,
        height: 100,
    },
  });