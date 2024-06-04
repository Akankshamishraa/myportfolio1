import React from "react";
import "./Card.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h2>Project | Amazon Clone</h2>
        <p className="card-content">
        <b>Amazon-like Product Catalogue:</b> 
         Designed a dynamic product catalogue with features such as product search, filtering, and sorting, inspired by Amazon’s interface.
 
<br></br><br></br>
 <b>Shopping Cart:</b> Implemented a shopping cart feature to allow users to add products, update quantities, and remove
 items before checkout.<br></br><br></br>
 <b>Checkout Process:</b> Integrated a checkout process with address form validation and order summary display, similar
 to Amazon’s checkout flow.<br></br><br></br>
 <b>Redux State Management:</b> Utilized Redux for managing the application’s state, including user authentication,
 product data, and shopping cart items.<br></br><br></br>
 <b>Responsive Design:</b> Ensured the application’s responsiveness across various devices. and screen sizes using CSS
 Grid and Flexbox.<br></br><br></br>
 <b>Technologies Used:</b> React, Redux, React Router, Material-UI (for UI components), HTML5, CSS3, JavaScript
 ES6+ .<br></br><br></br>
 <b>Other Tools:</b> Git for version control, npm for pakage management.
        </p>
      </div>
      <div className="card">
        <h2>Project | My Portfolio</h2>
        <p className="card-content"> 
        <b>Portfolio Structure and Navigation:</b> Designed and implemented a multi-page portfolio including Home, Experience, Skills, Projects, Education, and Contact Me sections, with a user-friendly navigation system ensuring seamless transitions between pages.<br></br><br></br>
 <b>Interactive Features:</b>
Created custom accordion components to display content under headers, enhancing user engagement and content organization, and integrated social media links for direct redirection to respective platforms, increasing connectivity and networking opportunities.<br></br><br></br>
 <b>Technical Skills Demonstrated:</b> Showcased proficiency in web development technologies and frameworks (e.g., HTML, CSS, JavaScript, React). .</p>
      </div>
    </div>
  );
};

export default Cards;