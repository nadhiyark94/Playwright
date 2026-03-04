import { test, expect } from '@playwright/test';
import path from 'path';

test('File Upload & Download', async ({ page }) => {

  // ---------- FILE UPLOAD ----------
  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = path.join(__dirname,'../../../Data/learningFileUpload.jpeg');

  // Upload WITHOUT clicking upload button
  await page.setInputFiles('#file-upload', filePath);

  // Click submit button
  await page.click('#file-submit');

  // Assert upload success
  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toContainText('learningFileUpload.jpeg');



  // ---------- DRAG & DROP IMAGE UPLOAD ----------
  await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent("filechooser"); // listner for upload action

    await page.locator(`//div[@id="drag-drop-upload"]`).click();

     const fileUpload = await filePromise

    await fileUpload.setFiles(path.join(__dirname,'../../../Data/learningFileUpload.jpeg'))
    
    await page.waitForTimeout(3000)



   // ---------- FILE DOWNLOAD ----------
  await page.goto('https://the-internet.herokuapp.com/download');

  // Start download listener
  const downloadPromise = page.waitForEvent('download');

  // Click file.json
  await page.click('text=file.json');

  const download = await downloadPromise;

  // Save to required path
  const savePath = path.join(__dirname, '../downloads/file.json');
  await download.saveAs(savePath);

  // Assert file downloaded
  expect(download.suggestedFilename()).toBe('examplefile.json'); 



});


