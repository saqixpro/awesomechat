import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Container = styled.View`
  flex: ${props => props.flex || 1};
  align-items: center;
  position: relative;
  background-color: ${colors.dark};
  justify-content: ${props => props.justify || 'center'};
`;

export const Text = styled.Text`
  color: ${colors.textColor};
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;

export const LargeHeader = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${colors.textColor};
  font-size: 38px;
  width: 100%;
  padding: 10px;
  margin-top: 10%;
  margin-bottom: 10%;
`

export const VStack = styled.View`
    flex: ${props => props.size ?? 1};
    width: 100%;
    background-color: ${props => props.background ? props.background : colors.dark};
    align-items: ${props => props.center ? "center" : 'flex-start'};
    justify-content: ${props => props["justify-center"] ? "center" : props["space-between"] ? "space-between" : 'flex-start'};
`

export const HStack = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
`

export const Spacer = styled.View`
    flex: ${props => props.size ?? 1};
`