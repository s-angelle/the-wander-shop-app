## Welcome to The Wander Shop Co where adventures become wild, extreme, and super tun!

This website is my first completed CRUD application for my imaginary company: The Wander Shop Co. Here are the routes I utilized:

### Adventures

| Verb   | Path                 | Description                  |
| ------ | -------------------- | ---------------------------- |
| GET    | /adventures          | index of photos              |
| GET    | /adventures/new      | page to add photo            |
| DELETE | /adventures/:id      | delete a photo               |
| PUT    | /adventures/:id      | update a photo               |
| POST   | /adventures          | add a photo                  |
| GET    | /adventures/:id/edit | page to edit a photo         |
| GET    | /adventures/new      | show page for selected photo |
| GET    | /about               | render about page            |
| GET    | /contact-page        | render contact page          |

#### Project Goals

1. Index Page

   - The app should have an index page where all products are displayed.
   - Product images must link to the product's show page where there should be a link to add a new product.

2. Show Page

   - The show page should display a product with a link back to the products, a link to edit the product (goes to the edit page), and a delete button that deletes the product.
   - There should also be a number for the amount of items remaining in stock.

3. New & Edit Page

   - These views should render forms and submit to the appropriate routes.

4. Redirects

   - The create route should redirect to the index.
   - The delete route should redirect to the index.
   - The updated route should redirect back to the product's show page.

5. Technical Requirements

   - The app MUST run without syntax errors.
   - Must contain all 7 Restful Routes.
   - Must be styled and look like a store.

#### Areas of Improvement:

1. Enable the updated route to redirect back to the product's show page, instead of the index.

2. Provide Buy button/stock on show page with functionality.

3. Update the form submission for new / edit page to accept commas between numbers
