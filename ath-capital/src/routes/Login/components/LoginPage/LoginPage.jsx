import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button';
import { SIGNUP_PATH } from 'constants/paths';
import { useNotifications } from 'modules/notification';
import LoginForm from '../LoginForm';
import styles from './LoginPage.styles';
import { CUSTOMER } from 'constants/roles';

const useStyles = makeStyles(styles);

function LoginPage() {
	const classes = useStyles();
	const firebase = useFirebase();
	const firestore = useFirestore();
	const { showError } = useNotifications();

	function onSubmitFail(formErrs, dispatch, err) {
		return showError(formErrs ? 'Form Invalid' : err.message || 'Error');
	}

	function googleLogin() {
		let resolver;
		return firebase
			.login({ provider: 'google', type: 'popup' })
			.then(async (user) => {
				if (user.additionalUserInfo.isNewUser) {
					await firestore.collection('users').doc(user.user.uid).update({
						role: CUSTOMER,
						wallet: 0,
						level1: [],
						level2: [],
						level3: [],
						referrer: null,
						createdAt: firestore.Timestamp.now(),
					});
				}
			})
			.catch(function(error) {
				if (error.code === 'auth/multi-factor-auth-required') {
					resolver = error.resolver;
					// Ask user which second factor to use.
					if (resolver.hints[selectedIndex].factorId ===
						firebase.auth.PhoneMultiFactorGenerator.FACTOR_ID) {
						let phoneInfoOptions = {
							multiFactorHint: resolver.hints[selectedIndex],
							session: resolver.session
						};
						let phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
						// Send SMS verification code
						return phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
							.then(function(verificationId) {
								// Ask user for the SMS verification code.
								let cred = firebase.auth.PhoneAuthProvider.credential(
									verificationId, verificationCode);
								let multiFactorAssertion =
									firebase.auth.PhoneMultiFactorGenerator.assertion(cred);
								// Complete sign-in.
								return resolver.resolveSignIn(multiFactorAssertion)
							})
							.then(function(userCredential) {
								// User successfully signed in with the second factor phone number.
							});
					} else {
						showError('Unsupported second factor.')
						// Unsupported second factor.
					}
				}else{
					showError(err.message)
				}
			})
	}

	function emailLogin(creds) {
		let resolver;
		return firebase.login(creds).catch(function(error) {
			if (error.code === 'auth/multi-factor-auth-required') {
				resolver = error.resolver;
				// Ask user which second factor to use.
				if (resolver.hints[selectedIndex].factorId ===
					firebase.auth.PhoneMultiFactorGenerator.FACTOR_ID) {
					let phoneInfoOptions = {
						multiFactorHint: resolver.hints[selectedIndex],
						session: resolver.session
					};
					let phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
					// Send SMS verification code
					return phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
						.then(function(verificationId) {
							// Ask user for the SMS verification code.
							let cred = firebase.auth.PhoneAuthProvider.credential(
								verificationId, verificationCode);
							let multiFactorAssertion =
								firebase.auth.PhoneMultiFactorGenerator.assertion(cred);
							// Complete sign-in.
							return resolver.resolveSignIn(multiFactorAssertion)
						})
						.then(function(userCredential) {
							// User successfully signed in with the second factor phone number.
						});
				} else {
					showError('Unsupported second factor.')
					// Unsupported second factor.
				}
			}else{
				showError(err.message)
			}
		});
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.panel}>
				<LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
			</Paper>
			<div className={classes.orLabel}>или</div>
			<div className={classes.providers}>
				<GoogleButton onClick={googleLogin} data-test='google-auth-button' />
			</div>
			<div className={classes.signup}>
				<span className={classes.signupLabel}>У вас нет еще нет аккаунта?</span>
				<Link className={classes.signupLink} to={SIGNUP_PATH}>
					Зарегистрироваться
				</Link>
			</div>
		</div>
	);
}

export default LoginPage;
