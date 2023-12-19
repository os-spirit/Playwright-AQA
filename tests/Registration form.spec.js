import {expect, test} from "@playwright/test";

test.describe('Registration form', () =>{


    test.beforeEach(async ({ page }) => {
       
        await page.goto('https://qauto.forstudy.space/');

    });

    test('Check registration form will be opened', async ({page})=>{
                
        const signInButton = page.locator('.hero-descriptor button');
        const headerRegistrationForm = page.locator('h4.modal-title');

        await signInButton.click()
        await expect(headerRegistrationForm).toBeVisible(); 

    });

    test('Check validation messages for mandatory fields + disable status of register button', async ({page})=>{
         
        const signInButton = page.locator('.hero-descriptor button');
        const registrButton = page.locator('.modal-footer button');
        const nameField = page.locator('#signupName');
        const lastName =page.locator('#signupLastName');
        const email = page.locator('#signupEmail');
        const password = page.locator('#signupPassword');
        const repeatPassword = page.locator('#signupRepeatPassword');
        
        await signInButton.click()
        await nameField.click();
        await lastName.click();
        await email.click();
        await password.click();
        await repeatPassword.click();
        await repeatPassword.blur();

        const validationErrorLocator = page.locator('.invalid-feedback p');
        
        const expectedErrorTexts = [
        'Name required',
        'Last name required',
        'Email required',
        'Password required',
        'Re-enter password required',
        ];
                
        for (let i = 0; i < expectedErrorTexts.length; i++) {
        
        const locator = validationErrorLocator.nth(i);
        await expect(locator).toHaveText(expectedErrorTexts[i]);

        }
              
        await expect(registrButton).toHaveAttribute('disabled');

    })

    test('Check validation when Password doesnt match', async ({page}) => {

        const signInButton = page.locator('.hero-descriptor button');
        const password = page.locator('#signupPassword');
        const repeatPassword = page.locator('#signupRepeatPassword');
        const validationErrorLocator = page.locator('.invalid-feedback p');

        await signInButton.click()
        await password.fill('v123456789V');
        await repeatPassword.fill('v1234567890V');
        await repeatPassword.blur();

        await expect(validationErrorLocator).toHaveText('Passwords do not match');


    });

    test('Check validation for wrong email format', async ({page}) => {

        const signInButton = page.locator('.hero-descriptor button');
        const email = page.locator('#signupEmail');
        const validationErrorLocator = page.locator('.invalid-feedback p');

        await signInButton.click()
        await email.fill('sdsdsadsadsa');
        await email.blur();

        await expect(validationErrorLocator).toHaveText('Email is incorrect');


    });

    test('Create user - possitive + delete user', async ({page}) =>{

        const signInButton = page.locator('.hero-descriptor button');
        const registrButton = page.locator('.modal-footer button');
        const nameField = page.locator('#signupName');
        const lastName =page.locator('#signupLastName');
        const email = page.locator('#signupEmail');
        const password = page.locator('#signupPassword');
        const repeatPassword = page.locator('#signupRepeatPassword');

        await signInButton.click();
        await nameField.fill('Val');
        await lastName.fill('Test');
        await email.fill('aqa-valentin.nalivayko@gmail.com');
        await password.fill('v12345678V');
        await repeatPassword.fill('v12345678V');
        await registrButton.click();

        const settingsButton = page.locator('a[routerlink="settings"]');
        const removeMyAccountButton = page.locator('.user-settings_form button.btn-danger-bg');
        const removeAcceptModalbutton = page.locator('.modal-footer button.btn-danger');
        
        await settingsButton.click();
        await removeMyAccountButton.click();
        await removeAcceptModalbutton.click();
        await expect(signInButton).toBeVisible();

    })
    
});