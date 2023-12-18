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

        const validationErrorElements = await page.$$('.invalid-feedback p');
        const expectedErrorTexts = [
        'Name required',
        'Last name required',
        'Email required',
        'Password required',
        'Re-enter password required',
        ];
                
        for (let i = 0; i < validationErrorElements.length; i++) {
        const actualText = await validationErrorElements[i].textContent();
        expect(actualText).toBe(expectedErrorTexts[i]);
        }
        
        await expect(registrButton).toHaveAttribute('disabled');

    })

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