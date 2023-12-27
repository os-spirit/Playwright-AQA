

export default class SignUpPopUp {
    constructor(page){
       
        
        this.headerRegistrationForm = page.locator('h4.modal-title');
        this.nameField = page.locator('#signupName');
        this.lastName =page.locator('#signupLastName');
        this.password = page.locator('#signupPassword');
        this.repeatPassword = page.locator('#signupRepeatPassword');
        this.email = page.locator('#signupEmail');
        this.registrButton = page.locator('.modal-footer button');

        this.validationErrorLocator = page.locator('.invalid-feedback p');

       
    }
}
