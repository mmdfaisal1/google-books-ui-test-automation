import { Page } from "@playwright/test";

export class _BasePage {
  //This is a TypeScript shortcut
  //Using access modifier in the constructor parameter, hence we don't need to explicity define page:Page as a class property
  //In tsconfig.json, "useDefineForClassFields" needs to be set to false. See https://www.typescriptlang.org/tsconfig#useDefineForClassFields
  constructor(readonly page: Page) {
    this.page = page;
  }
}
