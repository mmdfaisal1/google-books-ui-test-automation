import { _BasePage } from "./_BasePage";

export class LoginPage extends _BasePage {
  private readonly emailOrPhoneField = this.page.locator('[id="identifierId"]');

  public getEmailOrPhoneField() {
    return this.emailOrPhoneField;
  }
}
