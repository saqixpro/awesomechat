import {Formik} from 'formik';
import React, {useState} from 'react';
import FullButton from '../../components/Base/FullButton';
import Input from '../../components/Base/TextInput';
import {Container, Text} from './style';
import {View, Pressable} from 'react-native';
import Animated, {FadeInUp, FadeOutDown, Layout} from 'react-native-reanimated';
const LoginScreen = () => {
  const validate = (values, props) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is a required field';
    }

    if (values.email?.indexOf('@') == -1) {
      errors.email = 'Provided Email is not valid';
    }

    if (!values.password) {
      errors.password = 'Password is a required field';
    }

    return errors;
  };

  return (
    <Container>
      <Container flex={1.3}>
        <Text style={{fontSize: 40, fontWeight: '600'}}>Awesome Chat!</Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'BeauRivage-Regular',
            marginTop: 10,
            fontWeight: '300',
          }}>
          Experience the innovation... Connect with the world!
        </Text>
      </Container>
      <Formik
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
        validate={validate}
        initialValues={{email: '', password: ''}}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <>
            <Animated.View
              entering={FadeInUp}
              exiting={FadeOutDown}
              layout={Layout.springify()}
              style={{
                flex: 0.9,
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Input
                placeholder="Enter Your Name"
                value={values.email}
                onChangeText={handleChange('email')}
                error={touched.email && errors.email}
              />
              <Input
                placeholder="Enter Password"
                password
                value={values.password}
                onChangeText={handleChange('password')}
                error={touched.password && errors.password}
              />
              <Pressable>
                <Text>Forgot Password?</Text>
              </Pressable>
            </Animated.View>
            <Container>
              <FullButton onPress={handleSubmit} title="Login" />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '70%',
                  alignItems: 'center',
                  marginTop: 50,
                }}>
                <Text>Don't Have an Account?</Text>
                <Pressable>
                  <Text fontWeight="600">Sign Up</Text>
                </Pressable>
                <Text>Here</Text>
              </View>
            </Container>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default LoginScreen;
