import { useNavigation } from '@react-navigation/native';
import { Formik, useFormik } from 'formik';
import React, { useCallback } from 'react'
import FullButton from '../../../components/Base/FullButton';
import Input from '../../../components/Base/TextInput';
import {Container, LargeHeader, Spacer, Text, VStack} from '../../../components/StyledComponents'
import screens from '../../../constants/screens';

const PersonalInfo = () => {
    const navigation = useNavigation();

    const validate = (values, props) => {
        const errors = {};
        if(!values.fname){
            errors.fname = "First Name is a Required Field";
        }

        if(values.fname.match(/\s/)){
            errors.fname = "First Name must not contain any white spaces";
        }

        if(!values.lname){
            errors.lname = "Last Name is a Required Field";
        }

        if(values.lname.match(/\s/)){
            errors.lname = "Last Name must not contain any white spaces";
        }
        return errors;
    }

    const onSubmit = useCallback((values) => {
        navigation.navigate(screens.signup.profile, {data: values})
    }, [])

    return (
        <Formik onSubmit={onSubmit} validate={validate} initialValues={{fname: "", lname: ""}}>
           {({handleChange, handleSubmit, touched, errors}) => (
             <VStack>
                <Spacer />
                <LargeHeader>Tell us about yourself</LargeHeader>
                <Spacer />
                <VStack size={2} center space-between>
                    <Input error={touched["fname"] && errors["fname"]} onChangeText={handleChange("fname")} margin={10} placeholder="First Name" />
                    <Input error={touched["lname"] && errors["lname"]} onChangeText={handleChange("lname")} margin={10} placeholder="Last Name" />
                </VStack>
                <Spacer size={2} />
                <VStack center>
                    <FullButton onPress={handleSubmit}  title="Next"/>
                </VStack>
                <Spacer size={2} />
            </VStack>
           )}
        </Formik>
    )
}

export default PersonalInfo;