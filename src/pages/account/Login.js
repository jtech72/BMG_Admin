// @flow
import React, { useEffect } from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Logo } from '../../helpers/image';
//actions
import { resetAuth, loginUser } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components/';

import AccountLayout from './AccountLayout';
import { ButtonLoading } from '../../helpers/loader/Loading';

/* bottom link of account pages */
// const BottomLink = () => {
//     const { t } = useTranslation();

//     return (
//         <Row className="mt-3">
//             <Col className="text-center">
//                 <p className="text-muted">
//                     {t("Don't have an account?")}{' '}
//                     <Link to={'/account/register'} className="text-muted ms-1">
//                         <b>{t('Sign Up')}</b>
//                     </Link>
//                 </p>
//             </Col>
//         </Row>
//     );
// };

const Login = (): React$Element<any> => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const location = useLocation();
    const redirectUrl = location.state && location.state.from ? location.state.from.pathname : '/';

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, userLoggedIn, user, error } = useSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Please enter email')),
            password: yup.string().required(t('Please enter Password')),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData) => {
        dispatch(loginUser(formData['email'], formData['password']));
    };

    return (
        <>
            {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}

            {/* <AccountLayout bottomLinks={<BottomLink />}> */}
            <AccountLayout>
                <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('Log In')}</h4>
                    <p className="text-muted mb-4">
                        {t('Enter your email address and password to access admin panel.')}
                    </p>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                //  defaultValues={{ email: 'test', password: 'test' }}
                >
                    <FormInput
                        label={t('Email')}
                        type="text"
                        name="email"
                        placeholder={t('Enter your email')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        placeholder={t('Enter your password')}
                        containerClass={'mb-3'}>
                        {/* <Link to="/account/forget-password" className="text-muted float-end">
                            <small>{t('Forgot your password?')}</small>
                        </Link> */}
                    </FormInput>

                    <div className="mb-3 mb-0 text-center">
                        <Button style={{ backgroundColor: '#008003' }} className='shadow-none border-0' type="submit" disabled={loading}>
                            {!loading ? (<>{t('Log In')}</>) : (<ButtonLoading />)}
                        </Button>
                    </div>
                </VerticalForm>
            </AccountLayout>
        </>
    );
};

export default Login;
