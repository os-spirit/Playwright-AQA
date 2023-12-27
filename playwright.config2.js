const { devices } = require('@playwright/test');
require('dotenv').config();

module.exports = {
    projects: [
        {
            name: 'my-hm_project_2',
            use: { ...devices['Desktop Chrome'] },
            baseURL: process.env.BASE_URL_PROJECT2,
            httpCredentials: {
                username: process.env.HTTP_USERNAME_PROJECT2 ,
                password: process.env.HTTP_PASSWORD_PROJECT2 ,
            },
        },
    ],
};