import React, {useCallback, useState} from 'react';
import assets from '../../assets';
import FullButton from '../../components/Base/FullButton';
import {
  Container,
  Text,
  Image,
  ImageContainer,
  BodyContainer,
  TextContainer,
  ButtonContainer,
} from './styles';
import Animated, {SlideInRight, Layout, FadeIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import screens from '../../constants/screens';
const SplashScreen = () => {
  const navigation = useNavigation();

  const toLoginPage = useCallback(() => {
    navigation.navigate(screens.login);
  });

  return (
    <Container>
      <ImageContainer>
        <Animated.View entering={SlideInRight} layout={Layout.springify()}>
          <Image source={assets.WELCOME} />
        </Animated.View>
      </ImageContainer>
      <BodyContainer>
        <Animated.View
          style={{flex: 1}}
          layout={Layout.springify()}
          entering={FadeIn.delay(300)}>
          <TextContainer>
            <Text fontSize={18} fontWeight="700">
              Welcome to Awesome Chat!
            </Text>
            <Text fontSize={20} fontFamily="BeauRivage-Regular">
              We reinvented the chat with out innovative new idea, let's
              discover what's inside Awesome Chat!
            </Text>
          </TextContainer>
        </Animated.View>
        <ButtonContainer>
          <FullButton onPress={toLoginPage} title="Get Started" />
        </ButtonContainer>
      </BodyContainer>
    </Container>
  );
};

export default SplashScreen;
