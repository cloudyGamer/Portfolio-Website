import React from 'react'; 

//export const foreverMeDescription = () => (
//  <div>random content</div>  
//  );
const windowOpen = (link) => {
               console.log("window open fired");
               window.open(link);
          };
export const setProject = (project) => {
     return{activeProject:project};
     };

export const foreverMeDescription = () => (
               <div>
                    <div className='subHeading'>About The Business</div>
                    <p className='note'>Please Note: As my employer has not yet uploaded his entire inventory; this website is functional but in demo mode. Purchases
                    are sent to the PayPal sandbox API.</p>

                    <p>ForeverMe Cosmetics is an online and brick-and-mortar retailer
                    with three stores in Ireland focusing primarily on bath and shower products. I worked in the office upstairs
                    on digital tasks for half the day and in store as a salesperson for the other. This was a great way to 
                    get to know the business and work closely with my employer.
                    </p>
                    <p>
                    I worked closely with my employer who wanted a modern design that demonstrated the strenghts of the
                    business: all natural ingredients and cruelty free products. 
                    </p>

                    <div className='subHeading'> Features</div>
                    <p>
                    It was important that the final product required no coding from my employer. The software automatically
                    searches for natural ingredients and highlights them in green with some ingredients displayed with 
                    graphics and descriptions of it's natural therapeutic uses. Each product category has different css considerations, such as
                    image height which are dealt with automatically.
                    </p>
                    <p>
                    The previous website had a laborious payment process whereby many
                    personal details had to be reentered. The new payment process saves and remembers details such as address, name and email
                    and automatically enters the billing address as shipping address as default. All payment details and personal information
                    are then validated. The information is then sent to 
                    PayPal via the API which ,for security purposes, handles the card payment details. Integration with the PayPal API
                    involved alteration of the backend PHP opencart code.
                    </p>

                    <p>I created the ability to pull product data from the existing Shopify store and upload it en-mass to
                         Opencart. The OpenCart API was altered to allow en-mass uploading of products.
                    </p>
                    <p>The website is optimised for both desktop and mobile use</p>
                    <p>
                    I also managed the advertising of the store across google ads and merchant centre; running multiple campaigns and
                    ensuring that the most cost effective keywords and bidding prices were used. Our ads were consistently
                    the number one google search result for Bath Bombs; our primary product.
                    </p>
                    <div className='subHeading'>Technical Aspects</div>

                    <div className='mvc_image'>
                         <div><img src='assets/mvc_5.png'/></div>
                         <div className='mvc_caption'>Understanding Opencart's MVC</div>
                    </div>
                    <p>I worked on this project alone. This was my first time working with React. I had only a very
                     basic knowledge with PHP and none with a large MVC framework like Open Cart. It was an excellent
                     learning experience and having no technical superior taught me to be creative and self-reliant in my problem 
                     solving.
                    </p>
                    <p>My employer wanted to keep the backend he was familiar with (Open Cart) but give it a new front end.
                    I altered the Open Cart MVC to work with a new React front-end. This involved gaining a good working knowledge
                    of both PHP,SQL and Open Cart it's self. I spent 80 hours studying the Open Cart source code and completely cut
                    out and replaced its front-end. This was a great way to learn about both using and writing API's. 
                    </p>
                    <p>The front end requests are made using fetch and the ansychronicity of the
                     promises handled with Await. Requests are sent to PHP files which access the OpenCart MVC via cURL. Requests
                     forward the parameters and the corresponding OpenCart route url packaged within FormData. The cURL request then
                     attaches the parameters to the route url e.g</p>
                     <p className="php_url">index.php?route=/api/shipping/methods&api_token=343sdd44454</p>
                     <p>The correct handling of ansynchronous calls is essential to the app as many OpenCart functions are reliant on the
                     output of previous ones to function e.g payments cannot be processed without postage type having been selected
                     ; which in itself in preceeded by supply of a valid shipping address. Separate PHP functions -
                    </p>
                    <div className='flex_center'>
                         <div className='phpFunctions'>
                         <div className="phpFunction">&#8226; Generates an API user token to allow customer tracking</div>
                         <div className="phpFunction">&#8226; and access to to OpenCart's API and functions</div>
                         <div className="phpFunction">&#8226; Get product categories</div>
                         <div className="phpFunction">&#8226; Get products corresponding to categories</div>
                         <div className="phpFunction">&#8226; Add item to cart</div>
                         <div className="phpFunction">&#8226; Get cart contents</div>
                         <div className="phpFunction">&#8226; Display items in cart</div>
                         <div className="phpFunction">&#8226; Create a new customer and register name, email and phone number</div>
                         <div className="phpFunction">&#8226; Add shipping address</div>
                         <div className="phpFunction">&#8226; Get available shipping methods</div>
                         <div className="phpFunction">&#8226; Set shipping method</div>
                         <div className="phpFunction">&#8226; Add payment address</div>
                         <div className="phpFunction">&#8226; Add payment method</div>
                         <div className="phpFunction">&#8226; Create order</div>
                         <div className="phpFunction">&#8226; Forward payment information to PayPal</div>
                         <div className="phpFunction">&#8226; Redirect user to payment portal</div>
                         </div>
                    </div>
                    

                    <p></p>
                    <div className='react_image'>
                         <div ><img src='assets/react_diagram_blue.png'/></div>
                         <div className='mvc_caption'>Life Before Redux</div>
                    </div>

                    <div>You can visit the GitHub link and view commit history to see the changes made to the OpenCart backend. 
                    Notable file/folders are uploaded which contains php files handling all of the requests coming from the front end and
                    connects them with PHP functions (previously existing, modified or created) in the back end). Only files that were added,
                    modified or demonstrate understanding of the backend have been uploaded.
                    </div>

                    <p>Organising and tracking my work was very important to me and so I set up a Trello board and
                    time tracked every task from the inception of the project. You can visit my Trello link and 
                    even sort by kind of task (i.e front-end, back-end, PHP, CSS, resolving a bug, planning and research).
                    </p>

             </div>  
          );
  
export const payPalAPIDescription = () => {
            return(
            <div>
               <div className='link' 
               onClick={()=>windowOpen('https://github.com/cloudyGamer/portfolio/tree/master/Pay_Pal')}>
                 <img src="assets/link_symbol.png"/>
                 <div >Link</div>
               </div>
               <div className="info_title">
                             PayPal
               </div>
               <div>
                 This function takes all of the product data and customer details from Opencart, verifies
                 that it is correct and
                 forwards it to the PayPal API for checkout. It is fully integrated into the OpenCart MVC Backend.
               </div>
            </div>);
            };

export const shopifyAPIDescription = () => {
            return(
            <div>
               <div className='link' onClick={()=>windowOpen('https://github.com/cloudyGamer/portfolio/tree/master/Shopify')}>
                      <img src="assets/link_symbol.png"/>
                      <div >Link</div>
               </div>
               <div className="info_title">
                    <div>Shopify</div>
                    
               </div>
               <div>This makes a call to the Shopify API requesting a specific collection of products using that
               collection's ID. It then iterates through each product ID in that collection, fetches the product
               information and saves it to a JSON file.</div>
            </div>);
            };
            
export const ocAPIDescription = () => {
            return(
            <div>
               <div className='link' 
               onClick={()=>windowOpen('https://github.com/cloudyGamer/portfolio/tree/master/Open_Cart')}>
                 <img src="assets/link_symbol.png"/>
                 <div >Link</div>
               </div>
               <div className="info_title">
                             Open Cart
               </div>
               <div>
                 This function manages the massupload of products to the Open Cart backend from the JSON data passed to it via
                 the shopify API. It reads from the collections.json file and extracts the product id.
                 
                 It checks the product ingredients against a json list of natural ingredients for matches.
                 
                 It takes all relevant product data and refactors and formats it so that it will be recognised by the Open Cart Backend.
               </div>
            </div>);
            };
            
export const googleSheetsAPIDescription = () => {
            return(
            <div>
               <div className='link' 
               onClick={()=>windowOpen('https://github.com/cloudyGamer/portfolio/blob/master/Google_Sheets/google_sheets_api_call.php')}>
                 <img src="assets/link_symbol.png"/>
                 <div >Link</div>
               </div>
               <div className="info_title">
                             Google Sheets
               </div>
               <p style={{"textAlign":"center"}}>An alternative way to download product data from google's merchant centre feed. Images are downloaded from src's 
               and base 64 encoded.
               </p>
            </div>);
            };
            
export const symbolSmithDescription = () => (
               <div className='ssDescription'>
                
                    <div className='ssVid'>
                      <iframe width="355rem" height="315rem" 
                      src="https://www.youtube.com/embed/5vjE9gCgR-s" 
                      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                      gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                   <div> 
                         <p>This is an App I produced for my Masters in Creative Digital Media. It allows users to identify the date and origin
                         of British and Irish antique silver via the symbols impressed on it. The App makes use of the iphone's camera and allows users to save their
                         results with notes for future reference. The app references approximately 15,000 Hallmarks. 
                         </p>
                         <p>This App was built using JQuery,Cordova,PHP and SQL. The Hallmarks and user information
                              was held on an Amazon Cloud Relational Database running on an AWS t1.1 instance. Image data
                              was held in an S3 Bucket.
                         </p>
                    </div>
               </div>  
  );

export const cssDescription = () => (
               <div className='ssDescription'>
                
                    <div className='ssVid'>
                      <iframe width="355rem" height="315rem" 
                      src="https://www.youtube.com/embed/3QNy7P0jbxw" 
                      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                      gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                   <div> 
                         <p>This App was built using JQuery,PHP and SQL.</p>
                    </div>
               </div>  
  );

export const budgetAppDescription = () => (
            <div>
               <div className='subHeading_budget'>Features</div>
               <div className='text_section'>The App gives the user the ability to add, edit and remove expense. Users can also
                search for Expenses by title, by date or within a date range with results filtered accordingly. 
               </div>
               
               <div className='subHeading'>General</div>
               <div className='flex_center'>
                    <div className='phpFunctions'>
                    <div className="phpFunction">&#8226;Routing</div>
                    <div className="phpFunction">&#8226;ES6 Object and Array Destructuring</div>
                    <div className="phpFunction">&#8226;Implicitly returned JSX </div>
                    <div className="phpFunction">&#8226;Sass </div>
                    <div className="phpFunction">&#8226; Deployment via Heroku and Node</div>
                    <div className="phpFunction">&#8226; Libraries used include Moment</div>
                    <div className="phpFunction">&#8226; contains server, development version and production version for fast deployment and local testing</div>
                    </div>
               </div>
               
               
               <div className='subHeading'>Redux</div>
               <div className='flex_budget'>
                    <div className='phpFunctions'>
                    <div className="phpFunction">&#8226; Higher order components</div>
                    <div className="phpFunction">&#8226; Actions</div>
                    <div className="phpFunction">&#8226; Reducers</div>
                    <div className="phpFunction">&#8226; Combiner</div>
                    <div className="phpFunction">&#8226; Selectors</div>
                    <div className="phpFunction">&#8226; Connected Store</div>
                    </div>
               </div>
               
               
       <div className='subHeading' >Jest & Enzyme</div>
               <div className='flex_budget'>
                    <div className='phpFunctions jest_list'>
                    <div className="phpFunction">&#8226; Fixtures</div>
                    <div className="phpFunction">&#8226; Mocked Libraries</div>
                    <div className="phpFunction">&#8226; Snapshot testing</div>
                    <div className="phpFunction">&#8226; Spies</div>
                    <div className="phpFunction">&#8226; Testing of User Interaction,</div>
                    <div className="phpFunction">Combiners,</div>
                    <div className="phpFunction">Reucers,</div>
                    <div className="phpFunction">Actions,</div>
                    <div className="phpFunction">Filters,</div>
                    <div className="phpFunction">Selectors,</div>
                    <div className="phpFunction">Adding, editing and filtering expenses</div>

                    </div>
               </div>
               
            </div>  
            );
          
export const nodeAppDescription = () => (
     <div>
        <div className='subHeading'>Features</div>
        <div className='flex_center'>
          <div className='phpFunctions'>
               <div className="phpFunction">&#8226;Handling User Input</div>
               <div className="phpFunction">&#8226;Argument parsing with Yargs</div>
               <div className="phpFunction">&#8226;Creating, reading, listing and removing user notes</div>
               <div className="phpFunction">&#8226;Debugging</div>
               <div className="phpFunction">&#8226;Asynchronous API calls</div>
               <div className="phpFunction">&#8226;Modules</div>
               <div className="phpFunction">&#8226;Error Handling</div>
               <div className="phpFunction">&#8226;Callback Chanining</div>
          </div>
        </div>
        

     </div>  
            );

 