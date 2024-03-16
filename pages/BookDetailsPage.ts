import { _BasePage } from "./_BasePage";

export class BookDetailsPage extends _BasePage {
  private readonly addToMyLibrary = this.page.getByText("Add to my library");
  private readonly closePreview = this.page.locator(
    '[aria-label="Close preview dialog"]'
  );

  public getBookHeading(bookName: string) {
    return this.page.getByRole("heading", { name: `${bookName}` });
  }

  public async addBookToMyLibrary() {
    await this.addToMyLibrary.click();
  }

  public async closePreviewDialog() {
    await this.closePreview.click();
  }
}
