import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../../constants/colors';

const Container = styled.View`
  flex: ${props => props.flex || 1};
  align-items: center;
  position: relative;
  justify-content: ${props => props.justify || 'center'};
`

const Text = styled.Text`
  color: ${colors.textColor};
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;

const AwesomeChat = ({flex}) => (
    <Container flex={flex || 1.3}>
        <Text fontFamily="Poppins-Bold" style={{fontSize: 45, shadowColor: '#888', shadowOffset: {width: 10, height: 10}, shadowOpacity: 0.5, shadowRadius: 10}}>Awesome Chat</Text>
    </Container>
)

export default AwesomeChat;