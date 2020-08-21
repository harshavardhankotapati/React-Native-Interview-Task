import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Item, Input, Left, Body, Thumbnail, Separator } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const defaultImage = require('../images/logo.png');


class ListPage extends Component {

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={'#59ABE3'} barStyle="light-content" />
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Employee Directory</Text>
            </View>
            <View style={styles.headerRightAlignment}>
              <TouchableOpacity >
                <Icon name="power-off" size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <Item style={styles.itemStyle}>
              <Icon name="search" size={20} color={'#252625'} />
              <Input style={styles.searchText} placeholder="Search ...." />
            </Item>
          </View>
        </View>
        <Content>
          <List>
            <Separator >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>A</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Thumbnail source={defaultImage} style={styles.profilePic} />
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Anne Green</Text>
                  <Text note style={{ fontSize: 14 }}>Vp Product Management</Text>
                  <Text note style={{ fontSize: 12 }}>Advisory</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Thumbnail source={defaultImage} style={styles.profilePic} />
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Allan Collins</Text>
                  <Text note style={{ fontSize: 14 }}>Vp Product Management</Text>
                  <Text note style={{ fontSize: 12 }}>Advisory</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <Separator >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>C</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Thumbnail source={defaultImage} style={styles.profilePic} />
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Kumar Pratik</Text>
                  <Text note style={{ fontSize: 14 }}>Vp Product Management</Text>
                  <Text note style={{ fontSize: 12 }}>Advisory</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Thumbnail source={defaultImage} style={styles.profilePic} />
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Douglas Hills</Text>
                  <Text note style={{ fontSize: 14 }}>Vp Product Management</Text>
                  <Text note style={{ fontSize: 12 }}>Sales</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <Separator >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>D</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Thumbnail source={defaultImage} style={styles.profilePic} />
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Kumar Pratik</Text>
                  <Text note style={{ fontSize: 14 }}>Vp Product Management</Text>
                  <Text note style={{ fontSize: 12 }}>Sales</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Thumbnail source={defaultImage} style={styles.profilePic} />
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity onPress={() => Actions.details()} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Kumar Pratik</Text>
                  <Text note style={{ fontSize: 14 }}>Vp Product Management</Text>
                  <Text note style={{ fontSize: 12 }}>Sales</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default ListPage;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#59ABE3'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#59ABE3'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
  headerRightAlignment: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
  },
  headerTextContainer: {
    alignSelf: 'center',
    marginLeft: 100
  },
  itemStyle: {
    width: '100%',
    borderWidth: 10,
    borderColor: '#59ABE3',
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  searchText: {
    alignSelf: 'center',
    width: 280
  },
  profilePic: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    borderRadius: 50
  },
})