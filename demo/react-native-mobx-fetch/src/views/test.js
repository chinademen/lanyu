import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base'

export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
              <Image style={styles.back} source={require('@/assets/dh/images/ic_back_dark2.png')} />
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          
        </Content>
        <Footer>
          <FooterTab>
            
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 22,
    height: 22
  }
})