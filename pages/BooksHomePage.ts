import { _BasePage } from "./_BasePage";

export class BooksHomePage extends _BasePage {
  //Title is one of the more stable and recommended locators to use
  //https://playwright.dev/docs/locators#quick-guide
  private readonly searchFiled = this.page.getByTitle("Search Books");
  //private - so that only the class itself can access this property, as per OOP principle of encapsulation / data hiding
  //readonly - as there is no need to ever modify it, even within this class

  public async goto() {
    await this.page.goto("/");
  }

  public async searchItem(itemName: string) {
    await this.searchFiled.fill(itemName);
    await this.page.keyboard.press("Enter");
    //The above will trigger a page navigation, hence we wait for navigation to complete.
    //Previously the recommended method was page.waitForNavigation(), but it is now depreceated.
    //https://playwright.dev/docs/api/class-page#page-wait-for-navigation
    //await this.page.waitForURL(/^.*search.*$/);
  }

  public getFirstResultItem(itemName: string) {
    return this.page.locator('[id="search"]').getByText(itemName).first();
    //The above is chaining of locators
    //The reason for starting with id=search is that the web page has another element containing itemName as innerText (the search field itself) which is not part of search results
    //Instead of chaining of locators, the CSS descendent combinator can also be used
    //https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator
  }
}
