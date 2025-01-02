import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    // Navigate to the application home
    await page.goto('http://localhost:3000');

    // Perform login
    await page.fill('#email', 'user@ss.org'); 
    await page.fill('#password', 'Speedgolf1');       
    await page.click('#loginBtn');                       

    // Wait until login is complete
    await page.waitForSelector('#menuBtn');
    await page.click('#menuBtn');
});

test.describe('About Box Functionality', () => {
    test('should display the About box on clicking the About menu item', async ({page}) =>{

        // Click on the About Box
        await page.getByRole('menuitem', {name : 'About'}).click();

        // Verify the About Box is visible
        const aboutBox = page.locator('#aboutSpeedScore');
        await expect(aboutBox).toBeVisible();
    } );

    test('should hide the About Box when clicking the close (x) button', async ({page}) => {
       

        // Click on the About Box
        await page.getByRole('menuitem', {name : 'About'}).click();

        // Click the close button
        await page.click('.close-about-btn');

        // Verify the About Box is hidden
        const aboutBox = page.locator('#aboutSpeedScore');
        await expect(aboutBox).not.toBeVisible(); 
    });

    test('should hide the About Box when clicking on OK button', async ({page}) => {
       

        // Click on the About Box
        await page.getByRole('menuitem', {name : 'About'}).click();

        // Click on OK button
        await page.click('.close-about-btn') // OK button has the same class as close button

        // Verify the About Box is hidden
        const aboutBox = page.locator('#aboutSpeedScore');
        await expect(aboutBox).not.toBeVisible(); 
    });
});

