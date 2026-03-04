import { LeadPage } from "./04-leadPage";
import {faker} from "@faker-js/faker"

export class CreateLeadPage extends LeadPage{


    async enterMandatoryDetails(){
        await this.lppage.locator(`#createLeadForm_companyName`).fill(faker.company.buzzNoun());
        await this.lppage.locator(`#createLeadForm_firstName`).fill(faker.person.firstName())
        await this.lppage.locator(`#createLeadForm_lastName`).fill(faker.person.lastName())
        return this
    }
    
    async clickSubmit(){
        await this.lppage.locator(`.smallSubmit`).click()
        return this
    }
}