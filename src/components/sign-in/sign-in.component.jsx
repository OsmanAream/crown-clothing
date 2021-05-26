import React from 'react'
import { useState } from 'react'

import FormInput from '../form-input/form-input.component'

import CustomButton from '../custom-button/custom-button.component'


import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss'
import { connect } from 'react-redux'



const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email:'' , password:''})
    const{email,password} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        emailSignInStart(email,password)
    }

    const handleChange = event => {
        const {value, name } = event.target
        
        setCredentials({...userCredentials , [name]: value})
    }

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                 <FormInput 
                 name='email' 
                 type='email' 
                 value={email} 
                 handleChange={handleChange} 
                 label='email'
                 required 
                 />
                
                 <FormInput 
                 name='password' 
                 type='password' 
                 value={password}
                 handleChange={handleChange} 
                 label='password'
                 required 
                 />
                <div className='buttons'>
                    <CustomButton type='submit'>
                    SIGN IN
                    </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                    SIGN IN WITH GOOGLE
                    </CustomButton>
                </div>
                </form>
            </div>
        );
    }


const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)