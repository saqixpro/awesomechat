import { useNavigation } from '@react-navigation/native';
import { Formik, useFormik } from 'formik';
import React, { useCallback } from 'react'
import FullButton from '../../../components/Base/FullButton';
import ProfileImagePicker from '../../../components/Base/ProfileImagePicker';
import Input from '../../../components/Base/TextInput';
import {Container, LargeHeader, Spacer, Text, VStack} from '../../../components/StyledComponents'

const Profile = () => {
    const navigation = useNavigation();

    const onSubmit = useCallback((values) => {
        alert(JSON.stringify(values));
    }, [])

    return (
        <Formik onSubmit={onSubmit} initialValues={{fname: "", lname: ""}}>
           {({handleChange, handleSubmit, touched, errors}) => (
             <VStack>
                <Spacer />
                <LargeHeader>Send us your smiling face</LargeHeader>
                <Spacer />
                <VStack size={2} center justify-center>
                    <ProfileImagePicker />
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

export default Profile;