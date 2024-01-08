import {expect, test} from "@playwright/test";
import WelcomePage from "../src/pageObjects/WelcomePage";
import SignUpPopUp from "../src/components/SignUpPopUp";
import GaragePage from "../src/pageObjects/GaragePage";




test.describe('Registration form', () =>{
    
    let welcomePage;
    let signUpPopUp;
    let garagePage;

    test.beforeEach(async ({ page }) => {
       
        welcomePage = new WelcomePage(page);
        await welcomePage.visit();
        await welcomePage.signInButton.click()

        signUpPopUp = new SignUpPopUp(page);
        

    });
    

    test('Check registration form will be opened', async ({page})=>{

        await expect(signUpPopUp.headerRegistrationForm).toBeVisible(); 

    });
    

    test('Check validation when Password doesnt match', async ({page}) => {
            
        await signUpPopUp.password.fill('v123456789V');
        await signUpPopUp.repeatPassword.fill('v1234567890V');
        await signUpPopUp.repeatPassword.blur();
        await expect (signUpPopUp.validationErrorLocator).toHaveText('Passwords do not match'); 

    });
    

    test('Check validation for wrong email format', async ({page}) => {

        await signUpPopUp.email.fill('asdasdsadasd');
        await signUpPopUp.email.blur();
        await expect(signUpPopUp.validationErrorLocator).toHaveText('Email is incorrect');


    });


    test('Create user - possitive + delete user', async ({page}) =>{
        
        garagePage = new GaragePage(page);

        await signUpPopUp.nameField.fill('Val');
        await signUpPopUp.lastName.fill('Test');
        await signUpPopUp.email.fill('aqa-valentin.nalivayko+3@gmail.com');
        await signUpPopUp.password.fill('v12345678V');
        await signUpPopUp.repeatPassword.fill('v12345678V');
        await signUpPopUp.registrButton.click();
                
        await garagePage.deleteUser();
            
        await expect(welcomePage.signInButton).toBeVisible();

    })
    
});