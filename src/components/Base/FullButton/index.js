import React from 'react'
import { BtnText, ButtonContainer } from './styles';

const FullButton = ({title, onPress, ...props}) => {
    return (
        <ButtonContainer onPress={onPress} {...props}>
            <BtnText>{title}</BtnText>
        </ButtonContainer>
    )
}

export default FullButton;