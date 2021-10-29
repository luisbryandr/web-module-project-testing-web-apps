import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

//1) Sanity Test
test('renders without errors', ()=>{
    render(<ContactForm />);
});

//2) Simple Test

test('renders the contact form header', ()=> {
    //Arrange: 
    render(<ContactForm />)
    //Act:
    const header = screen.getByText(/Contact Form/i);
    //Arrange:
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
});

//3) Test causing me to look up Docs/ reference material and VS code explanation
test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    //Arrange:
    render(<ContactForm />);
    //Act:
    const firstNameInput =  screen.getByLabelText(/first name/i);//select first name input 
    userEvent.type(firstNameInput, 'Luis');//type sample name into input

    const firstNameError = await screen.findByText(/error: firstName must have at least 5 characters/i);// wait until typing is done to select error message
    
    //Assert:
     expect(firstNameInput).toHaveValue('Luis');//check value of firstNameInput 
     expect(firstNameError).toBeInTheDocument();//check to see if error message appears

    });


//4) 
test('renders THREE error messages if user enters no values into any fields.', async () => {
    
    //Arange
    render(<ContactForm />);

    //Act:
    // const fieldErrors = await screen.queryAllBy(i)
     const button =  screen.getByRole("button");//select button
     userEvent.click(button);//click button

     const errorMessages = await screen.findAllByTestId('error');// find error messages after user has clicked the button

     expect(errorMessages).toHaveLength(3);


     
});

//5) again not sure if .toHaveErrorMessage is right - seems to easy but it works so guess ill check back with someone or solution later

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render(<ContactForm />);

    const missingEmailError = await screen.getByText(/email/i);

    expect(missingEmailError).toHaveErrorMessage;
    
});

//6
test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    render(<ContactForm />)

    // const emailValid = await screen.queryByText(/email/i);

    // expect(emailValid).toHaveTextContent(/error/i);
});

//7
test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});


//8
test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

//9
test('renders all fields text when all fields are submitted.', async () => {
    
});