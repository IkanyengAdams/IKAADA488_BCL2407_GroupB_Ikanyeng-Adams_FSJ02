# SwiftCart E-Commerce Platform

SwiftCart is a responsive, dynamic e-commerce platform built with Next.js and React, offering a seamless shopping experience. The platform includes features like product listings, detailed product pages, . It’s designed to be intuitive, scalable, and customizable, making it suitable for any online retail business.

# Table of Contents
-Technologies Used

-Features

-Setup Instructions

-Usage Examples

# Technologies Used
This project utilizes a variety of modern technologies to ensure a smooth and efficient experience for both users and developers.

-Next.js: For building server-side rendered and statically generated pages.

-React.js: For creating interactive user interfaces with a component-based architecture.

-Tailwind CSS: For utility-first, responsive styling.

-React Icons: For adding dynamic icons to the interface.

-Vercel API: For fetching products from a mock API.

-Fa Icons (Font Awesome): For adding icons to the cart, wishlist, and user profile sections.

# Features
-Responsive Layout: Adapts to all screen sizes, from mobile to desktop.

-Product Listing: Displays a paginated list of products fetched from a remote API.

-Product Details: Includes detailed product information, such as price, description, and images.

-Carousel for Images: Enables users to navigate through product images.

-Error Handling: Custom error messages for scenarios where products or data cannot be fetched.

-Loading Spinner: Displays a spinner while content is loading.

-Reviews and Ratings: Displays customer reviews and ratings for each product.

# Setup Instructions
# Prerequisites
Before setting up the project, ensure you have the following installed:

-Node.js (v14.x or above)

-npm (v6.x or above)

-Git

# Steps to Run Locally
1.Clone the Repository:
  git clone [https://github.com/yourusername/swiftcart.git](https://github.com/IkanyengAdams/IKAADA488_BCL2407_GroupB_Ikanyeng-Adams_FSJ01.git)
  cd ./IKAADA488_BCL2407_GroupB_Ikanyeng-Adams_FSJ01
  
2.Install Dependencies Once inside the project directory, install the required packages:
  npm install
  
3.Run the Development Server After installing the dependencies, start the development server
  npm run dev
  
4.Open the Project in a Browser The app will run on http://localhost:3000 by default. Open this 
  URL in your web browser.

# Usage Examples
![Screenshot 2024-09-13 151312](https://github.com/user-attachments/assets/6c89d5cf-09cb-4b86-9455-3845ae95bd3c)
![Screenshot 2024-09-13 151407](https://github.com/user-attachments/assets/2af947c7-7008-45ae-8e3c-9c8d2169466f)
![Screenshot 2024-09-13 151452](https://github.com/user-attachments/assets/f7b6259d-e5b7-4b07-a4a9-dc48f6e4db9e)
# Product Listing Page
  When you first open the app, you’ll be greeted with a list of products. The list is 
  paginated, and you can navigate between pages using "Previous" and "Next" buttons.
  
# Product Details Page
  Clicking on any product from the listing will take you to the product details page. Here, you 
  can view the product’s description, price, category, and customer reviews.

# Loading States and Error Handling
  If the data takes time to load, a spinner will be displayed to the user. If no products are 
  found or there’s a network error, a custom error message will be shown.
