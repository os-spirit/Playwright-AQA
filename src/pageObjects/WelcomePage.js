import BasePage from "./BasePage";



export default class WelcomePage extends BasePage {
    constructor(page){

        super(page, '/')
        this.url = ' / '
        this.signInButton = page.locator('.hero-descriptor button');
                           
    }

    async visit(){
        
        await this.page.goto(this.url)

    }

   
    }



