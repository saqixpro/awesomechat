import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Container = styled.View`
  flex: ${props => props.flex || 1};
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
`;

export const Text = styled.Text`
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;
