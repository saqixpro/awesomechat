import React from 'react'
import assets from '../../assets';
import FullButton from '../../components/Base/FullButton';
import { Container, Text, Image, ImageContainer, BodyContainer, TextContainer, ButtonContainer } from './styles'

const SplashScreen = () => {
    return (
        <Container>
           <ImageContainer>
            <Image source={assets.WELCOME} />
           </ImageContainer>
           <BodyContainer>
               <TextContainer>
               <Text fontSize={18} fontWeight="700">Welcome to Awesome Chat!</Text>
               <Text>We reinvented the chat with out innovative new idea, let's discover what's inside Awesome Chat!</Text>
               </TextContainer>
               <ButtonContainer>
                    <FullButton title="Get Started" />
               </ButtonContainer>
           </BodyContainer>
        </Container>
    )
}

export default SplashScreen;