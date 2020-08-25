import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const defaultImage = require('../images/logo.png');
import { Picker } from '@react-native-community/picker';
import data from '../data.json'

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      list: [],
      result: []
    };
  }

  componentDidMount() {
    this.setState({ list: this.state.list.concat(data.user) })
  }

  filter = (v) => {
    let arr = []
    data.user.map((a, b) => {
      if (v.toString().toLowerCase() === a.key.toString().toLowerCase()) {
        arr.push(a)
      }
    })
    if (arr.length !== 0) {
      this.setState({ result: this.state.result.concat(arr) })
      this.setState({ list: [] })
      this.setState({ list: arr })
    }
  }

  render() {
    const list = this.state.list.map((a, b) => {
      return (
        <ListItem avatar key={b}>
          <Left>
            <TouchableOpacity onPress={() => Actions.details({ a: a })} >
              <Thumbnail source={defaultImage} style={styles.profilePic} />
            </TouchableOpacity>
          </Left>
          <Body>
            <TouchableOpacity onPress={() => Actions.details({ a: a })} >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{a.name}</Text>
              <Text note style={{ fontSize: 14 }}>{a.age}</Text>
              <Text note style={{ fontSize: 12 }}>{a.key}</Text>
            </TouchableOpacity>
          </Body>
        </ListItem>
      );
    });

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
            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue) => { this.filter(itemValue), this.setState({ language: itemValue }) }
              }>
              <Picker.Item label="All" value="ALL" />
              <Picker.Item label="Mobile Developper" value="Mobile Developper" />
              <Picker.Item label="Frontend Developper" value="Frontend Developper" />
              <Picker.Item label="Backend Developper" value="Backend Developper" />
            </Picker>
          </View>
        </View>
        <Content>
          <List>
            {list}
          </List>
        </Content>
      </Container >
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
  profilePic: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    borderRadius: 50
  },
})