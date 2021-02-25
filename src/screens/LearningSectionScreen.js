import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Image,ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Card, Text, TopNavigationAction, Button, Divider, Icon, Layout, TopNavigation, useTheme } from '@ui-kitten/components';

export const LearningSectionScreen = ({ navigation }) => {
  const colors = useTheme();

  const MenuIcon = (props) => (
    <Icon {...props} name='menu-outline' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );

  const renderHomeAction = () => (
    <TopNavigationAction icon={MenuIcon}/>
  );
  const Header = (props) => (
    <View {...props}>
      <Text category='h5'>Letter {props.slovo}</Text>
      <Text category='s1'>Open for interactive course</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        accessoryLeft={renderHomeAction}
        alignment='center'
        title='LEARNING SECTION'
      />
      <Divider/>
      <Divider/>
      <ScrollView style={styles.scrollView}>
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