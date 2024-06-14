// Insatll bootsrap and react icons
//! npm i react-bootstrap bootstrap react-icons 
//import bootstrap in index.js file to porpoly work in the app
//! import 'bootstrap/dist/css/bootstrap.min.css';
//? Create componenets folder in src folder
    //? Create Header.jsx and Footer.jsx in the Componenets 
    //* import {Navbar, Nav, Container} from "react-bootstrap";
     //* import { FaShoppingCart, FaUser   } from "react-icons/fa";
      //* import { SiProton } from "react-icons/si";  
       //* useing const curentYear = new Date().getFullYear(); in footer also &copy;

//? Modified a Bootstrap css file and put with anthor custm css file in an assets folder insde src folder 
//? copy an images folder in public folder
//? cpoy a products file that contains the products Data and put in the src folder 
//? Craet a screens folder inside src folder
    //* Create HomeScreen.jsx  in the screens folder
     //* import { Link } from "react-router-dom";
     //* import { Row, Col } from "react-bootstrap";
      //* import product from "../product";
       //* map and show the data
//? Create a Product.jsx in components folder
     //* import {Card } from "react-bootstrap"
     //* Take the {product} as prop in Product function
     //* Layout the product function acording to design 


//! Install react-router-dom     
    //* npm i react-router-dom
    //* import { 
        //*BrowserRouter as Router, // This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
        //* Route,  // Routes are objects passed to the router creation functions:
        //*createRoutesFromElements, //  is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.
        //* RouterProvider //All data router objects are passed to this component to render your app and enable the rest of the data APIs.
        //* } from "react-router-dom";
        //* Monplite the the routing in index,js
        //? const router = createBrowserRouter(
        //?     createRoutesFromElements([
        //?       <Route path="/" element={<App />} >
        //?       <Route index={true} path="/" element={<HomeScreen />} />
        //?       </Route>,
        //?     ])
        //?   )
// Import the Outlet in the App.js
    // repalce the Home component with the Outlet
    // import {Link} from "react-router-dom"; in the pages with linkes
    //* int proudct page or page that has been replaced by Outlet we replace the <a herf="#"></a>  with <Link to="#"></Link>       
    //* npm i react-router-bootstrap
    //* import { LinkContainer } from "react-router-bootstrap";
    //* Rap the linkes with <LinkContainer to="#"></LinkContainer>

    //! Rating
        //* Crate Rating.jsx feil in components folder
        //* Create a rating function contuin 
    //?     <div className='rating'>
    //?     <span>{value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
    //?     <span>{value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
    //?     <span>{value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
    //?     <span>{value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
    //?     <span>{value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>   
    //?     <span className='rating-text'>{text && text}</span>    if text => show text, else => do nothing
    //? </div>
    //* import the Rating component in the product component and add it ..
    //? <Card.Text as='div'><Rating value={product.rating} text={`${product.numReviews} Reviews`} /> </Card.Text>
    //? <Card.Text as="h3">${product.price}</Card.Text>
    //* Make the name just one line using the flowing css
    //? .product-title {
    //?     height: 2.5em; /* Set a fixed height */
    //?     overflow: hidden; /* Hide overflow content */
    //?     text-overflow: ellipsis; /* Add ellipsis for long text */
    //?     white-space: nowrap; /* Prevent wrapping */
    //?   }

//! Creating the ProductScreen page
    //* Create a new ProductScreen in screens folder
    //* import { useParams } from 'react-router-dom' // to get the id from the url
    //* const { id:productid } = useParams(); // get the id with useParams fn and name it productid
    //* import the product from the products file
    //* const product = products.find((p) => p._id === id); // fin the id that much the product id
    //* import   ProductScreen from screen folder in index.js
    //* add a ProductScreen router  in router in index.js
    //? <Route path="/product/:id" element={<ProductScreen />} /> 
    //*  Creating the ProductScreen page
    //* Much like the Produc component
