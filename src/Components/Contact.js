import React from 'react';
import styled from 'styled-components';

function Contact() {
    return(
        <div >
            <Title>Contact Me</Title>
            <Form>
                <Label>Name *</Label>
                <NameContainer>
                <NameInputContainer>
                    <NameInput></NameInput>
                    <Span>First Name</Span>
                </NameInputContainer>
                <NameInputContainer>
                    <NameInput></NameInput>
                    <Span>Last Name</Span>
                </NameInputContainer>
                </NameContainer>

                <Label>Email Address *</Label>
                <Input></Input>
                <Label>Subject *</Label>
                <Input></Input>
                <Label>Message *</Label>
                <TextArea></TextArea>
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

const Input = styled.input`
    width: 100%;
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
    margin-bottom: 24px;
`

const TextArea = styled.textarea`
    resize: vertical;
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
    border-radius: 2px;
`

const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const NameInput = styled(Input)`
    margin-bottom: 0;
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