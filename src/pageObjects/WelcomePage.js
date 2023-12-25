


export default class WelcomePage {
    constructor(page){
        this.page = page
        this.url = ' / '
        this.signInButton = page.locator('.hero-descriptor button');

        // Registration form locators
        this.headerRegistrationForm = page.locator('h4.modal-title');

        this.nameField = page.locator('#signupName');
        this.lastName =page.locator('#signupLastName');
        this.password = page.locator('#signupPassword');
        this.repeatPassword = page.locator('#signupRepeatPassword');
        this.email = page.locator('#signupEmail');
        this.registrButton = page.locator('.modal-footer button');

        this.validationErrorLocator = page.locator('.invalid-feedback p');

        // Delete user locators

        this.settingsButton = page.locator('a[routerlink="settings"]');
        this.removeMyAccountButton = page.locator('.user-settings_form button.btn-danger-bg');
        this.removeAcceptModalbutton = page.locator('.modal-footer button.btn-danger');
    }

    async visit(){
        
        await this.page.goto(this.url)

    }

    async deleteUser(){

        await this.settingsButton.click();
        await this.removeMyAccountButton.click();
        await this.removeAcceptModalbutton.click();
        
    }

}

