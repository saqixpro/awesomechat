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
  Filter,
} from './styles';
import Animated, {SlideInRight, Layout, FadeIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import screens from '../../constants/screens';
import { colors } from '../../constants/colors';
import { Spacer } from '../../components/StyledComponents';
const SplashScreen = () => {
  const navigation = useNavigation();

  const toLoginPage = useCallback(() => {
    navigation.navigate(screens.login);
  });

  return (
    <Container source={assets.COVER}>
      <Filter>
      <Spacer />
      <BodyContainer>
        <Animated.View
          style={{flex: 1}}
          layout={Layout.springify()}
          entering={FadeIn.delay(300)}>
          <TextContainer>
            <Text color={colors.icewhite} fontSize={38} fontWeight="700">
              Awesome Chat
            </Text>
            <Text color={colors.icewhite} fontSize={30} fontFamily="BeauRivage-Regular">
              Connect with style, Connect with Confidence!
            </Text>
          </TextContainer>
        </Animated.View>
        <ButtonContainer>
          <FullButton textColor={colors.icewhite} onPress={toLoginPage} title="Get Started" />
        </ButtonContainer>
      </BodyContainer>
      </Filter>
    </Container>
  );
};

export default SplashScreen;
