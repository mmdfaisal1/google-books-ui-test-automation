import { test, expect } from "@playwright/test";
import { BooksHomePage } from "../pages/BooksHomePage";
import { BookDetailsPage } from "../pages/BookDetailsPage";
import { LoginPage } from "../pages/LoginPage";
import Book from "../data/book.json";
//Using JSON instead of hard-coded value ("East of Eden") for re-use and maintainability
//Also makes extension easier. In futue more properties can be added to object, e.g. Book.author

test.describe("Google Books E2E Tests", () => {
  test.beforeEach("Search for book", async ({ page }) => {
    const booksHomePage = new BooksHomePage(page);
    await booksHomePage.goto();
    await booksHomePage.searchItem(Book.name);
  });

  test("Validate searched item is listed in search results", async ({
    page,
  }) => {
    const booksHomePage = new BooksHomePage(page);
    //I subscribe to the school of thought which advocates that POM methods should not return boolean as that gets into the logic of test validation
    //For example I did not write method booksHomePage.IsSearchItemVisible(item), returning boolean
    //Retrieving the item itself from the page class and doing validation at the test layer makes things more flexible
    //You can then perform ANY kind of validation on it, perform any action like click etc.
    await expect(
      booksHomePage.getFirstResultItem("East of Eden")
    ).toBeVisible();
  });

  test("Validate searched item can be added to library", async ({
    page,
    context,
  }) => {
    const booksHomePage = new BooksHomePage(page);
    await booksHomePage.getFirstResultItem(Book.name).click();
    const bookDetailsPage = new BookDetailsPage(page);
    //The following validates the condition from requirement (2) - "ensure you've made it to the correct book"
    await expect(bookDetailsPage.getBookHeading(Book.name)).toBeVisible();

    //Switching browser context, as the Google login opens in a new window
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      bookDetailsPage.addBookToMyLibrary(),
    ]);

    //Note that newPage (not page) is being passed as argument here
    const loginPage = new LoginPage(newPage);
    //Note that the url (e.g. accounts.google.com) is not used as validation condition
    //Because you can have the correct url but still get a 404
    //Using an essential input element on the page as validation condition that the page has loaded
    await expect(loginPage.getEmailOrPhoneField()).toBeVisible();
  });
});
