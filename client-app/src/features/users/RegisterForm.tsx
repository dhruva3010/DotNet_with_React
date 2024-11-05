import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInputs";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import ValidationError from "../errors/ValidationError";

function RegisterForm() {
    const { userStore } = useStore();
    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => setErrors({ error }))}
            validationSchema={Yup.object({
                displayName: Yup.string().required('The display name is required'),
                username: Yup.string().required('The username is required'),
                email: Yup.string().required('The email is required').email('Email is invalid'),
                password: Yup.string().required('The password is required'),
            })}
        >
            {({ handleSubmit, isSubmitting, isValid, dirty, errors }) => (
                <Form className="ui form error" onSubmit={handleSubmit} autoComplete="off">
                    <Header as='h2' content='Sign up to Reactivities' color='teal' textAlign='center' />
                    <MyTextInput name="displayName" placeholder="Display Name" />
                    <MyTextInput name="username" placeholder="Username" />
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type="password" />
                    <ErrorMessage name="error" render={() => 
                        <ValidationError errors={errors.error as unknown as string[]} />} />
                    <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} type="submit" positive content="Register" fluid />
                </Form>
            )}
        </Formik>
    )
}

export default observer(RegisterForm);