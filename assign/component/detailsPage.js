import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image, TouchableOpacity, BackHandler } from 'react-native';
import { Container, Content, Tabs, Tab, Thumbnail, ListItem, List, Right, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const defaultImage = require('../images/logo.png');


class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.dashBoardList();
            return true;
        });
    }

    render() {
        return (
            <Container>
                <ScrollView contentContainerStyle={styles.mainContainer}>
                    <StatusBar backgroundColor={'#59ABE3'} barStyle="light-content" />
                    <Content style={styles.defaultContainer}>
                        <View style={styles.imageView}>
                            <Image source={require('../images/background.jpg')} style={styles.image} />
                            <View style={styles.overlay}>
                                <TouchableOpacity style={{ margin: 10 }} onPress={() => Actions.dashBoardList()}>
                                    <Icon name="chevron-left" color="green" size={25} />
                                </TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={styles.touchableStyle} >
                                        <Thumbnail source={defaultImage} style={styles.profilePic} />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontSize: 18 }}>Anne Green</Text>
                                    <Text style={{ color: 'green', fontSize: 12, fontWeight: 'bold' }}>Project Management</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Tabs tabBarUnderlineStyle={{ borderWidth: 1, backgroundColor: 'black' }}>
                                <Tab tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black', fontWeight: 'normal' }} heading="Details">
                                </Tab>
                                <Tab tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black', fontWeight: 'normal' }} heading="Heiarchy">
                                </Tab>
                            </Tabs>
                        </View>
                        <List>
                            <ListItem itemHeader first>
                                <Text>Title</Text>
                            </ListItem>
                            <ListItem style={{ marginTop: -35 }} >
                                <Text>Vp Product Management</Text>
                            </ListItem>
                            <ListItem itemHeader >
                                <Text >Reporting To</Text>
                            </ListItem>
                            <ListItem style={{ marginTop: -35 }} >
                                <Body>
                                    <Text>John Smith</Text>
                                </Body>
                                <Right>
                                    <Thumbnail style={{ width: 25, height: 25 }} source={defaultImage} />
                                </Right>
                            </ListItem>
                            <ListItem itemHeader>
                                <Text >Department</Text>
                            </ListItem>
                            <ListItem style={{ marginTop: -35 }} >
                                <Text>Release Management</Text>
                            </ListItem>
                            <ListItem itemHeader>
                                <Text >Emp Type</Text>
                            </ListItem>
                            <ListItem style={{ marginTop: -35 }} >
                                <Text>Customer Facing</Text>
                            </ListItem>
                            <ListItem itemHeader>
                                <Text >Wiki</Text>
                            </ListItem>
                            <ListItem style={{ marginTop: -35 }} >
                                <Text>D7-132</Text>
                            </ListItem>
                        </List>
                    </Content>
                </ScrollView>
            </Container >
        );
    }
}

export default DetailsPage;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    defaultContainer: {
        flex: 1
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 175
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    profilePic: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    touchableStyle: {
        alignItems: 'center'
    }
})