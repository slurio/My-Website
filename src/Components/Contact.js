import React, {useState} from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from '../environment';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const [sentError, setSentError] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleChange = (e) => {
        switch(e.target.name){
            case 'firstName':
                setFirstName(e.target.value)
            break;
            case 'lastName':
                setLastName(e.target.value)
            break;
            case 'email':
                setEmail(e.target.value)
            break;
            case 'subject':
                setSubject(e.target.value)
            break;
            case 'message':
                setMessage(e.target.value)
            break;
            default:
            break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
        setSubjectError(false);
        setMessageError(false);

 
        if (e.target.firstName.value === '') {
            setFirstNameError(true);
        }
        if (e.target.lastName.value === '') {
        setLastNameError(true);
        }
        if (e.target.email.value === '') {
            setEmailError(true);
        }
        if (e.target.subject.value === '') {
            setSubjectError(true);
        }
        if (e.target.message.value === '') {
            setMessageError(true);
        }        

        if (e.target.firstName.value !== '' && e.target.lastName.value !== '' && e.target.email.value !== '' && e.target.subject.value !== '' && e.target.message.value !== '') {
            let templateParams = {
                name: firstName + ' ' + lastName,
                email: email,
                subject: subject,
                message: message,
            }
    
            emailjs.send( SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then((() => setEmailSent(true)),
            function(error) {
            setSentError(true)}
            );
            
            setFirstName('');
            setLastName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }

    }

    const handleNameError = () => {
        if (firstNameError && lastNameError) {
            return <ErrorMessage>Name Required</ErrorMessage>
        } else if (firstNameError) {
            return <ErrorMessage>First Name Required</ErrorMessage>
        } else if (lastNameError) {
            return <ErrorMessage>Last Name Required</ErrorMessage>
        }
    }

    return(
        <div >
            <Title>Contact Me</Title>
            {emailSent ? <EmailSucess>Email Sent ✔️</EmailSucess> : null}
            {sentError ? <EmailError>Email not able to send. Please try again.</EmailError> : null}
            <Form onSubmit={handleSubmit}>
                {handleNameError()}
                <Label>Name *</Label>
                <NameContainer>
                <NameInputContainer>
                    <FirstNameInput name='firstName' value={firstName} onChange={handleChange} firstNameError={firstNameError}></FirstNameInput>
                    <Span>First Name</Span>
                </NameInputContainer>
                <NameInputContainer>
                    <LastNameInput name='lastName' value={lastName} onChange={handleChange} lastNameError={lastNameError}></LastNameInput>
                    <Span>Last Name</Span>
                </NameInputContainer>
                </NameContainer>

                {emailError ? <ErrorMessage>Email Required</ErrorMessage> : null}
                <Label>Email Address *</Label>
                <EmailInput name='email' value={email} onChange={handleChange} emailError={emailError}></EmailInput>
                {subjectError ? <ErrorMessage>Subject Required</ErrorMessage> : null}
                <Label>Subject *</Label>
                <SubjectInput name='subject' value={subject} onChange={handleChange} subjectError={subjectError}></SubjectInput>
                {messageError ? <ErrorMessage>Message Required</ErrorMessage> : null}
                <Label>Message *</Label>
                <TextArea name='message' value={message} onChange={handleChange} messageError={messageError}></TextArea>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Contact;

const Title = styled.h3`
    font-family: Playfair Display;
    font-weight: 700;
    font-style: normal;
    line-height: .4em;
    font-size: 1.6em;
    text-transform: none;
    text-decoration: none;
    letter-spacing: .06em;
`

const Span = styled.span`
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    margin: 6px 0 4px;
    margin-bottom: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-family: Assistant;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    text-transform: none;
`

const NameInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
`

const EmailInput = styled.input`
    ${props => props.emailError ?
        `border: 1px solid red;
        width: 100%;
        padding: 12px;
        margin: 6px 0 4px;
        background: #fafafa;
        color: #000;
        font-family: sans-serif;
        font-size: 12px;
        line-height: normal;
        box-sizing: border-box;
        border-radius: 2px;
        margin-bottom: 24px;
        `
    : 
        `width: 100%;
        padding: 12px;
        margin: 6px 0 4px;
        border: 1px solid #ccc;
        background: #fafafa;
        color: #000;
        font-family: sans-serif;
        font-size: 12px;
        line-height: normal;
        box-sizing: border-box;
        border-radius: 2px;
        margin-bottom: 24px;`}
`

const FirstNameInput = styled(EmailInput)`
    margin-bottom: 0;
    ${props => props.firstNameError ?
        `border: 1px solid red;
        ` 
    : null}
`

const LastNameInput = styled(EmailInput)`
    margin-bottom: 0;
    ${props => props.lastNameError ?
        `border: 1px solid red;
        ` 
    : null}
`

const SubjectInput = styled(EmailInput)`
    ${props => props.subjectError ?
        `border: 1px solid red;
        ` 
    : null}
`

const TextArea = styled.textarea`
${props => props.messageError ?
    `border: 1px solid red;
    resize: vertical;
    width: 100%;
    padding: 12px;
    margin: 6px 0 4px;
    margin-bottom: 24px;
    background: #fafafa;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
    ` 
:
    `resize: vertical;
    width: 100%;
    padding: 12px;
    margin: 6px 0 4px;
    margin-bottom: 24px;
    border: 1px solid #ccc;
    background: #fafafa;
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;`}
`

const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    font-family: proxima-nova;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 150px;
    padding: 1em 2.5em;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    outline: none;
    font-size: 12px;
    color: #fff;
    background-color: #272727;
    border-color: #272727;
`

const ErrorMessage = styled.h6`
    margin: 0px;
    margin-top: 10px;
    color: red;
    font-size: 12px;
    text-align: center;
`

const EmailSucess = styled.h3`
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
`

const EmailError = styled.h3`
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: red;
`