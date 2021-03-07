import React, {useState} from 'react';
import styled from 'styled-components';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

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
        }
    }

    const handleSubmit = (e) => {
        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
        setSubjectError(false);
        setMessageError(false);

        e.preventDefault();
        if (e.target.firstName.value === '') {
            setFirstNameError(true)
        }
        if (e.target.lastName.value === '') {
           setLastNameError(true)
        }
        if (e.target.email.value === '') {
            setEmailError(true)
        }
        if (e.target.subject.value === '') {
            setSubjectError(true)
        }
        if (e.target.message.value === '') {
            setMessageError(true)
        }
    }

    const handleNameError = () => {
        if (firstNameError && lastNameError) {
            return <h6>Name Required</h6>
        } else if (firstNameError) {
            return <h6>First Name Required</h6>
        } else if (lastNameError) {
            return <h6>Last Name Required</h6>
        }
    }

    return(
        <div >
            <Title>Contact Me</Title>
            <Form onSubmit={handleSubmit}>
                <Label>Name *</Label>
                <NameContainer>
                {handleNameError()}
                <NameInputContainer>
                    <FirstNameInput name='firstName' onChange={handleChange} firstNameError={firstNameError}></FirstNameInput>
                    <Span>First Name</Span>
                </NameInputContainer>
                <NameInputContainer>
                    <LastNameInput name='lastName' onChange={handleChange} lastNameError={lastNameError}></LastNameInput>
                    <Span>Last Name</Span>
                </NameInputContainer>
                </NameContainer>

                <Label>Email Address *</Label>
                {emailError ? <h6>Email Required</h6> : null}
                <EmailInput name='email' onChange={handleChange} emailError={emailError}></EmailInput>
                <Label>Subject *</Label>
                {subjectError ? <h6>Subject Required</h6> : null}
                <SubjectInput name='subject' onChange={handleChange} subjectError={subjectError}></SubjectInput>
                <Label>Message *</Label>
                {messageError ? <h6>Message Required</h6> : null}
                <TextArea name='message' onChange={handleChange} messageError={messageError}></TextArea>
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
    width: 12%;
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