import {expect, test} from "@playwright/test";
import WelcomePage from "../src/pageObjects/WelcomePage";

test.describe('Registration form', () =>{

    let welcomePage;

    test.beforeEach(async ({ page }) => {
       
        welcomePage = new WelcomePage(page);
        await welcomePage.visit();
        await welcomePage.signInButton.click()

    });
    

    test('Check registration form will be opened', async ({page})=>{

        await expect(welcomePage.headerRegistrationForm).toBeVisible(); 

    });
    

    test('Check validation when Password doesnt match', async ({page}) => {
                
        await welcomePage.password.fill('v123456789V');
        await welcomePage.repeatPassword.fill('v1234567890V');
        await welcomePage.repeatPassword.blur();
        await expect (welcomePage.validationErrorLocator).toHaveText('Passwords do not match'); 

    });
    

    test('Check validation for wrong email format', async ({page}) => {

        await welcomePage.email.fill('asdasdsadasd');
        await welcomePage.email.blur();
        await expect(welcomePage.validationErrorLocator).toHaveText('Email is incorrect');


    });


    test('Create user - possitive + delete user', async ({page}) =>{
        
        await welcomePage.nameField.fill('Val');
        await welcomePage.lastName.fill('Test');
        await welcomePage.email.fill('aqa-valentin.nalivayko+3@gmail.com');
        await welcomePage.password.fill('v12345678V');
        await welcomePage.repeatPassword.fill('v12345678V');
        await welcomePage.registrButton.click();
                
        await welcomePage.deleteUser();
            
        await expect(welcomePage.signInButton).toBeVisible();

    })
    
});