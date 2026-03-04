import{test, expect} from "@playwright/test"

test(`Leafground Dropdown`,async({page})=>{

    await page.goto(`https://leafground.com/select.xhtml`)

    //Select your favorite UI automation tool using the different select options
    await page.selectOption(`(//h5[text()='Which is your favorite UI Automation tool?']/following::select)[1]`,{label:'Playwright'})
    await page.selectOption(`(//h5[text()='Which is your favorite UI Automation tool?']/following::select)[1]`,{value:'Playwright'})


   // Choose your preferred Country
    await page.locator(`//label[@id='j_idt87:country_label']`).click()
    await page.locator(`//li[text()='India']`).click()

    //Confirm Cities belongs to Country is loaded
    await page.locator(`//label[@id="j_idt87:city_label"]`).click()
     const dropdownOptions=await page.locator(`//ul[@id='j_idt87:city_items']/li`)
     const dropdownOptionsCount=await dropdownOptions.count()

     const dropdownvalues=[]
     for(let index=0;index<dropdownOptionsCount;index++)
     {
        console.log(await dropdownOptions.nth(index).innerText())
      dropdownvalues.push(await dropdownOptions.nth(index).innerText())
      
     }
    
   expect(dropdownvalues).toEqual(["Select City", "Bengaluru", "Chennai", "Delhi"])

   //Choose any three courses from the dropdown

   const courses=['AWS','Appium','Playwright']
    for(let index=0;index<courses.length;index++){
   await page.locator(`//input[@id="j_idt87:auto-complete_input"]`).fill(courses[index])
    await page.locator(`//button[@class='ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only']`).click()
   await page.locator(`//li[text()='${courses[index]}']`).click()
    }

    let language ='Tamil'
    //Choose a language and print all the values from the dropdown.
    await page.locator(`//label[@id="j_idt87:lang_label"]`).click()
     await page.locator(`//li[text()='${language}']`).click()

    // and print all the values from the dropdown.
    const dropdownOptions1= await page.locator(`//ul[@id="j_idt87:lang_items"]/li`)
const dropdownOptionsCount1=await dropdownOptions1.count()
for(let index=0;index<dropdownOptionsCount1;index++){
        console.log(await dropdownOptions1.nth(index).innerText() )
    }


     await page.locator(`//label[@id="j_idt87:value_label"]`).click()
    switch(language){

    case "English":
       
            await page.locator(`//li[text()='Two']`).click()
            break;

       case "Tamil":
       
            await page.locator(`//li[text()='இரண்டு']`).click()
            break;

        default:
              console.log("Invalid language chosen")

    }

    
})
