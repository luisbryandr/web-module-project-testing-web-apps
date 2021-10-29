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
});

//3) Test causing me to look up Docs/ reference material and VS code explanation
test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    //Arrange:
    render(<ContactForm />);
    const firstNameError = await screen.getByText(/first name/i);
     expect(firstNameError).toHaveErrorMessage;
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    //Arange
    render(<ContactForm />);
    //Act:
    // const fieldErrors = await screen.queryAllBy(i)
    const firstNameError = await screen.getByText(/first name/i);
    const lastNameError = await screen.getByText(/last Name/i);
    const emailError = await screen.getByText(/email/i);
    //Assert:
    expect(firstNameError).toHaveErrorMessage;
    expect(lastNameError).toHaveErrorMessage;
    expect(emailError).toHaveErrorMessage;
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});