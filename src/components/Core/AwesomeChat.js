import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: ${props => props.flex || 1};
  align-items: center;
  position: relative;
  justify-content: ${props => props.justify || 'center'};
`

const Text = styled.Text`
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;

const AwesomeChat = ({flex}) => (
    <Container flex={flex || 1.3}>
        <Text style={{fontSize: 80, shadowColor: '#acacac', shadowOpacity: 1, shadowOffset: {width: 10, height: 15}, position: 'absolute', top: 100, right: -80, fontFamily: "BeauRivage-Regular"}}>Awesome</Text>
        <Text style={{fontSize: 100, position: 'absolute', top: 150, right: -140, shadowColor: '#acacac', shadowOpacity: 1, shadowOffset: {width: 10, height: 15}, fontFamily: "BeauRivage-Regular"}}>Chat</Text>
      </Container>
)

export default AwesomeChat;