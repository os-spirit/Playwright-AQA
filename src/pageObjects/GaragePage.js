import BasePage from "./BasePage";



export default class GaragePage extends BasePage {
    constructor(page){

        super(page, '/panel/garage')
        this.url = ' /panel/garage '
        this.signInButton = page.locator('.hero-descriptor button');
        this.settingsButton = page.locator('a[routerlink="settings"]');
        this.removeMyAccountButton = page.locator('.user-settings_form button.btn-danger-bg');
        this.removeAcceptModalButton = page.locator('.modal-footer button.btn-danger');
                           
    }

       async deleteUser(){

        await this.settingsButton.click();
        await this.removeMyAccountButton.click();
        await this.removeAcceptModalButton.click();
        
    }

   
    }