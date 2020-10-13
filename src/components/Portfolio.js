
import React from 'react'; 

export class Portfolio extends React.Component {
     
     render() {
     
       return (
          <div>
             <h1>Portfolio</h1>
             <div>
             <h2>Forever Me</h2>
             <p>2020</p>
             <p>Forever me is a cosmetics franchise with three shops in Ireland. The company focuses on
             Bathbombs handmade with natural ingredients.
             </p>
            </div>
             <div>
               <h2>Silver Smith</h2>
               <p>2018</p>
               <p>
                    I created an App for ios named Symbol Smith as part of my Masters. 
                    Symbol Smith is a digital reference app that allows the user to identify the year in which a silver antique was made via its hallmarks.  
                    I had heavy engagement in every step of the design process: conception, design, testing and implementation. 
                    This has given me a good balance of Information Modelling, Back and front-end development and UX design skills.
               </p>
               <iframe width="420" height="315"
               src="https://www.youtube.com/watch?v=5vjE9gCgR-s">
               </iframe>
             </div>             
         </div>
      );
     }
};
