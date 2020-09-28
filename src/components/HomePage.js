 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */

import React from 'react'; 
import { connect } from 'react-redux';
import highlightProject  from '../actions/portfolio';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import update from 'immutability-helper';
import { foreverMeDescription,payPalAPIDescription,
     googleSheetsAPIDescription,ocAPIDescription,shopifyAPIDescription,
     symbolSmithDescription, budgetAppDescription,
     nodeAppDescription, cssDescription, APIDescription
} from './projectContent';
export default class HomePage extends React.Component {
     constructor(props) {
          super(props);
     //<editor-fold defaultstate="collapsed" desc="constructor">
     this.foreverMe = React.createRef();
          this.github_1 =  React.createRef();
          this.budget = React.createRef();
          this.redux = React.createRef();
          this.jest = React.createRef();
          this.php = React.createRef();
          this.symbolSmith = React.createRef();
          this.github_2 = React.createRef();
          this.nodejs = React.createRef();
          this.css_logo = React.createRef();
//</editor-fold>


          //<editor-fold defaultstate="collapsed" desc="refs">
this.refs = [this.foreverMe,this.github_1,this.budget,this.redux,this.jest,
                         this.php,this.symbolSmith,this.github_2,this.nodejs,this.css_logo];
//</editor-fold>


          this.state = {
               foreverMe: "outer_hexagon_light",
               currentProject:"none",
               projects: [
                     {
                         title:"ForeverMe",
                         briefBody: "An online store built with React on the frontend and Open Cart on the back end.",
                         body:foreverMeDescription(),
                         className: "outer_hexagon_light",
                         leadClassName:"hexagon_light",
                         subClassName: "outer_hexagon_light",
                         leadSubClassName:"hexagon_light",
                    },
                   //<editor-fold defaultstate="collapsed" desc="state">
 {
                         title:"Budget App",
                         briefBody: "This an expenses planning app I created primarily to show proficiency in Redux,Jest and Enzyme.",
                         body: budgetAppDescription(),
                         className: "outer_hexagon_light",
                         leadClassName:"hexagon_light"
                    },
                    {
                         title:"SymbolSmith",
                         briefBody: "An ios digital reference app for silver hallmarks",
                         body: symbolSmithDescription(),
                         className: "outer_hexagon_light",
                         leadClassName:"hexagon_light"
                    },
                    {
                         title:"APIs",
                         briefBody: "The idea of these API calls is to allow a user to migrate their products from the subscription based Shopify platform to the opensource and free OpenCart platform.",
                         body: "Click on an API to learn more",
                         className: "outer_hexagon_light",
                         leadClassName:"hexagon_light",
                         subGroup: [
                              {title:"payPal", className:"hexagon_light",leadClassName : "hexagon_light",body:payPalAPIDescription()} ,
                              {title:"shopify",className:"hexagon_light",leadClassName : "hexagon_light",body:shopifyAPIDescription()},
                              {title:"oc_api",className:"hexagon_light",leadClassName : "hexagon_light",body:ocAPIDescription()},
                              {title:"google_sheets",className:"hexagon_light",leadClassName : "hexagon_light",body:googleSheetsAPIDescription()}
                         ]
                    },
                    {
                         title:"Node JS",
                         briefBody: "A simple note taking app and weather display app.",
                         body: nodeAppDescription(),
                         className: "outer_hexagon_light",
                         leadClassName:"hexagon_light"
                    },
                    {
                         title:"CSS",
                         briefBody: "A video of a college app I made showing a student schedule",
                         body: cssDescription(),
                         className: "outer_hexagon_light",
                         leadClassName:"hexagon_light"
                    }
//</editor-fold>

                    
               ]
          }
     }
               
          highlightProject = (id) => {
          console.log("id="+id);
           //access state
          const projects = this.state.projects;
          //find correct group
          const matchingGroup = projects.filter(
               (project) => project.title === id
          );
          const remainingGroup =  projects.filter(
               (project) => project.title !== id
          );
          //change property of matching group   
          //console.log('matching group body=  '+matchingGroup[0].body);
     
          matchingGroup[0].className = "outer_hexagon";
          matchingGroup[0].leadClassName = "hexagon_highlight";
          // change property of remaining group
               //iterate through array
          remainingGroup.map((group) => {
               group.className = "outer_hexagon_light";
               group.leadClassName = "hexagon_light";
               if(group.leadSubClassName){
                    group.leadSubClassName = "hexagon_light";
               }
          }
            );
          //create conditional to check if PHP is highlighted
          if(matchingGroup[0].title==="PHP"){
               //get subroup
              const subGroup = matchingGroup[0].subGroup;
              //iterate through subgroup and reset
              subGroup.map((group) => {
                             //get correct classnames
                        group.className = "hexagon_light";
                        group.leadClassName = "hexagon_light";
                   });
              //reasign subgroup property
              matchingGroup[0].subGroup = subGroup;    
          }          
          //spread array
          const updatedProjects = [...remainingGroup,matchingGroup[0]];
          //console.log('updated projects'+JSON.stringify(updatedProjects));
          //add array to state
          this.setState({projects:updatedProjects});
          };
          
          highlightSubProject = (id) => {
          //console.log("highlightSubProject ran"+id);
           //access state
          //<editor-fold defaultstate="collapsed" desc="matching/remaining group">
          const projects = this.state.projects;
          //find correct group
          const matchingGroup = projects.filter(
               (project) => project.title === id
          );
          const remainingGroup =  projects.filter(
               (project) => project.title !== id
          );
//</editor-fold>

          //change property of matching group   
          //console.log('matching group body=  '+matchingGroup[0].body);
          if(matchingGroup[0].leadClassName==="hexagon_highlight"){
               console.log("conditions met");
               //matchingGroup[0].subClassName = "outer_hexagon";
               matchingGroup[0].leadSubClassName = "subHexagon_highlight";
          }else{
               console.log("I aint doing jack");
               }
          // change property of remaining group
               //iterate through array
          remainingGroup.map((group) => {
               group.className = "outer_hexagon_light";
               group.leadClassName = "hexagon_light";
          }
            );
          //spread array
          const updatedProjects = [...remainingGroup,matchingGroup[0]];
          //console.log('updated projects'+JSON.stringify(updatedProjects));
          //add array to state
          this.setState({projects:updatedProjects});
          };
          
          highlightAPISubProject = (id,subProject) => {
          console.log(`highlightAPISubProject ran with id: ${id} and subProject ${subProject}`);
           //access state
          const projects = this.state.projects;
          //find correct group
          const matchingGroup = projects.filter(
               (project) => project.title === id
          );
          //define remaining group
          const remainingGroup =  projects.filter(
               (project) => project.title !== id
          );
          //change property of matching group   
          //console.log('matching group body=  '+matchingGroup[0].body);
          if(matchingGroup[0].leadClassName==="hexagon_highlight"){
               //console.log("subGroup conditions met");
               //find correct subProject via id
               const matchingSubGroup = matchingGroup[0].subGroup.filter(
               (project) => project.title === subProject
               );
               if (matchingSubGroup.length!==0) {
                    //console.log("subgroup match found");
               };
//               // change subgroup to new class
               matchingSubGroup[0].className = "subHexagon_highlight";
               matchingSubGroup[0].leadClassName = "hexagon_light";
//               //disable highlighting of remaining group
//                    //get remaining subgroups
               const remainingSubGroup = matchingGroup[0].subGroup.filter(
               (project) => project.title !== subProject
               );
//               if (remainingSubGroup.length!==0) {
//                    console.log("remaining subgroup matches found");
//               };
//                    //change remaining subgroup classnames
               remainingSubGroup.map((group) => {
//                         //get correct classnames
                    group.className = "hexagon_light";
                    group.leadClassName = "hexagon_light";
               });
//                         //spread array
               const updatedSubProjects = [...remainingSubGroup,matchingSubGroup[0]];
//                         //update subgroups array from matchingGroup
               matchingGroup[0].subGroup = updatedSubProjects;
//                         //return updated php project
               //return matchingGroup[0];
          }else{
               console.log("I aint doing jack");
               }
               
          // change property of remaining group
               //iterate through array
          remainingGroup.map((group) => {
               group.className = "outer_hexagon_light";
               group.leadClassName = "hexagon_light";
          }
            );
          //spread array
          const updatedProjects = [...remainingGroup,matchingGroup[0]];
          //console.log('updated projects'+JSON.stringify(updatedProjects));
          //add array to state
          this.setState({projects:updatedProjects});
          };
          
          displayClass = (id) => {
               //console.log('display class ran');
                //access state
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === id
               );
               return matchingGroup[0].className;
          };
          
          displayLeadClass = (id) => {
               //console.log('displayLeadClass ran');
                //access state
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === id
               );
               return matchingGroup[0].leadClassName;
          };
          
          displayLeadSubClass = (id) => {
               //console.log('displayLeadClass ran');
                //access state
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === id
               );
               return matchingGroup[0].leadSubClassName;
          };
          
          displayAPISubClasses = (id,subProject) => {
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === id
               );
               const subGroup = matchingGroup[0].subGroup;
//               if (subGroup.length!==0) {
//                    console.log("subgroup found");
//               }
               //console.log("subgroup="+JSON.stringify(subGroup));
               const matchingSubGroup = subGroup.filter(
                    (project) => project.title === subProject
               );
               return matchingSubGroup[0].className;
          };
          
          highlightSymbol = (id,highlightedSymbol, unhighlightedSymbol) => {
               //console.log('highlight symbol ran');
                //access state
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === id
               );
               if(matchingGroup[0].leadClassName==="hexagon_highlight"){
                return highlightedSymbol;     
               }else{
                    return unhighlightedSymbol;
               }
          }
          
          highlightSubSymbol = (id,highlightedSymbol, unhighlightedSymbol) => {
               //console.log('highlight symbol ran');
                //access state
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === id
               );
               if(matchingGroup[0].leadSubClassName==="subHexagon_highlight"){
                
                return highlightedSymbol;     
               }else{
                    return unhighlightedSymbol;
               }
          }

          showDescription = () => {
               //console.log('showDescription ran');
                //access state
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.leadClassName === "hexagon_highlight"
               );
               
               if(matchingGroup.length!==0){
                    return (
                       <div className="info_container">
                           <div className="info_title">
                              {matchingGroup[0].title}
                           </div>
                           <div className="info_brief_description">
                              {matchingGroup[0].briefBody}
                           </div>
                           <div className="arrow_container">
                              <div className="desc_arrow"></div>
                           </div>
                           <div className="more_info">
                              {matchingGroup[0].body} 
                           </div>
                    </div>)
               }
          }

          showDescriptionHandler = () => {
               const projects = this.state.projects;
               //find correct group
               const matchingGroup = projects.filter(
                    (project) => project.title === 'PHP'
               );
               if(matchingGroup[0].leadClassName==='hexagon_highlight'){
                  console.log("PHP Project Detected");
                  const subProjects = matchingGroup[0].subGroup;
                  //console.log("PHP Subprojects"+JSON.stringify(subProjects));
                  const highlightedSubProjects = subProjects.filter(
                    (project) => project.className === 'subHexagon_highlight'
                    );
                  //check subgroup for highlights. if not found run showDescription
                  if(highlightedSubProjects.length!==0){
                       console.log('highlighted subproject detected');
                       return(
                       <div className="info_container">
                           <div className="more_info">
                              {highlightedSubProjects[0].body} 
                           </div>
                       </div>);
                  }else{
                       //console.log('No highlighted subproject found');
                       return this.showDescription();
                  }
               }else{
                    return this.showDescription();
               };
          }; 
          
          fastCoding = () => (
            <div>
               <div>Picture of MVC Chart</div>
               <div>I use NetBeans and use tons of shortcuts and code templates. The less mouse use the better.</div>
               <div>keeping notes</div> 
               <div>recording bugs and how they were resolved</div>
               <div>Supplementary courses - Udemy</div>
               <div>Monolog was used for logging with PHP</div>
               <div>Within React I used traditional console.log with components passing their names to 
               functions they call and passing their names to the function they call.</div>
            </div>  
          );
          
          budgetAppDescription = () => (
            <div>
               <div>
                 This an expenses planning app I created primarily to show proficiency in Redux,Jest and Enzyme.
               </div>
               <p>new type of componen information handling; get name</p>
               <div>The App gives the user the ability to add, edit and remove expense. User can also
                search for Expenses by title, by date or within a date range with results filtered accordingly. 
               </div>
               <div>It features Spread Operators, implicitly returned JSX</div>
               <div>Libraries used include Moment, Sass ()</div>
               <p>contains server, development versiona and production version for fast deployment and local testing</p>

               <div>Heroku</div>
            </div>  
            );
          windowOpen = (link) => {
               window.open(link);
          };
          onDescriptionChange = (e) => {
              const description = e.target.value;
              this.setState(() => ({ description }));
          };
        
        render() {
          const uniqueMessage = 'HomePage: ';
          //console.log(uniqueMessage+'state is...'+JSON.stringify(this.state.projects));
          //const rerendered = console.log("rerendered");
          const foreverMe = this.state.projects[0].className;
          const foreverMeLeadClass = this.state.projects[0].leadClassName;
          const budgetLeadClass = this.state.projects[1].leadClassName;

          //console.log(uniqueMessage+budgetLeadClass);
          //const budget = this.state.projects.budget.className;
          const budget = "outer_hexagon";
          //console.log("class ="+this.state.projects[0].leadSubClassName);
          return(
          <div xmlns="http://www.w3.org/1999/xhtml">
              <div className='pyramidAndInfo_container' >
                    <div className="pyramid_container">
                         
                          <div className="portfolio_symbol_container">
                           <div className="hexagons_container" id="foreverMe"  onMouseOver={() => this.highlightProject("ForeverMe")}>
                                  <div className="outer_hexagon_container">
                                       <div className="outer_hexagon" ref={this.foreverMe}></div>
                                  </div>
                                  <div className="hexagon_container">
                                    <div className={this.displayLeadClass('ForeverMe')}>
                                         <div className="foreverMe symbol mouseOver">
                                                 <img src="assets/ForeverMe_logo_blue_1.png"/>
                                         </div>
                                         <div className="arrow_1_a">
                                         </div>
                                         <div className={this.highlightSymbol("ForeverMe","arrow_1_b visible","arrow_1_b invisible")}>
                                         
                                         </div>
                                    </div>
                                  </div>
                                  <div className='subProjectContainer'>
                                        <div className={this.highlightSymbol("ForeverMe","trello_container mouseOver","trello_container invisible")}
                                        onClick={()=>this.windowOpen('https://trello.com/b/SfBz7fXN/forever-me-app')}
                                        >
                                             <div className={this.highlightSymbol("ForeverMe","hexagons_container visible","hexagons_container invisible")} id="foreverMe"  onMouseOver={() => this.highlightProject("ForeverMe")}>
                                                  <div className="outer_hexagon_container">
                                                       <div className="outer_hexagon" ref={this.foreverMe}></div>
                                                  </div>
                                                  <div className="hexagon_container">
                                                       <div className="hexagon_light">
                                                            <div className="trello symbol">
                                                                 <img src="assets/trello_blue.png"/>
                                                            </div>
                                                            <div className="trelloLabel">Trello</div>
                                                       </div>
                                                  </div>
                                           </div>
                                        </div>
                                        <div className={this.highlightSubSymbol("ForeverMe","oc_container mouseOver","oc_container invisible")}>
                                             <div className={this.highlightSubSymbol("ForeverMe","hexagons_container visible","hexagons_container invisible")} id="foreverMe"  onMouseOver={() => this.highlightProject("ForeverMe")}
                                             onClick={()=>this.windowOpen('https://github.com/cloudyGamer/Open-Cart/commit/424a3aef5e679398d00bf0d9dcd53ca6e989b6cb#diff-76ee3de97a1b8b903319b7c013d8c877')}
                                             >
                                                  <div className="outer_hexagon_container">
                                                       <div className="outer_hexagon" ref={this.foreverMe}></div>
                                                  </div>
                                                  <div className="hexagon_container">
                                                       <div className="hexagon_light">
                                                            <div className="trello symbol">
                                                                 <img src="assets/opencart_logo_2.png"/>
                                                            </div>
                                                            <div className="ocLabel">Open Cart</div>
                                                       </div>
                                                  </div>
                                           </div>
                                        </div>
                                        <div className={this.highlightSubSymbol("ForeverMe","react_container mouseOver","react_container invisible")}
                                        onClick={()=>this.windowOpen('https://github.com/cloudyGamer/Forever-Me')}
                                        >
                                             <div className={this.highlightSubSymbol("ForeverMe","hexagons_container visible","hexagons_container invisible")} id="foreverMe"  onMouseOver={() => this.highlightProject("ForeverMe")}>
                                                  <div className="outer_hexagon_container">
                                                       <div className="outer_hexagon" ref={this.foreverMe}></div>
                                                  </div>
                                                  <div className="hexagon_container">
                                                       <div className="hexagon_light">
                                                            <div className="trello symbol">
                                                                 <img src="assets/react_logo_blue.png"/>
                                                            </div>
                                                            <div className={'reactLabel'}>React</div>
                                                       </div>
                                                  </div>
                                           </div>
                                        </div>
                                 </div>                        
                           </div>
                        </div>

                          <div className="portfolio_symbol_container">
                            <div className="hexagons_container mouseOver" onMouseOver={() => this.highlightProject("Budget App")}
                            onClick={()=>this.windowOpen('https://github.com/cloudyGamer/Budget-App')}
                            >
                                  <div className="outer_hexagon_container">
                                       <div className="outer_hexagon" ref={this.budget}></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className={this.displayLeadClass('Budget App')}>
                                            <div className="budget symbol">
                                                <img src="assets/budget_blue_1.png"/>
                                           </div>
                                            <div className="arrow_2_a">
                                            </div>
                                            <div className="arrow_2_b">
                                            </div>
                                            <div className={this.highlightSubSymbol("ForeverMe","arrow_2_c visible","arrow_2_c invisible")}>
                                            </div>
                                            <div className={this.highlightSubSymbol("ForeverMe","arrow_2_d visible","arrow_2_d invisible")}>
                                            </div>
                                        </div>
                                  </div>
                             </div>

                             <div className="hexagons_container" onMouseOver={() => this.highlightSubProject("ForeverMe")}>
                                  <div className="outer_hexagon_container">
                                       <div className={this.displayClass('ForeverMe')} ref={this.github_1}></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className={this.displayLeadSubClass('ForeverMe')}>
                                            <div className="github symbol">
                                                 <img src={this.highlightSymbol("ForeverMe","assets/github_blue_2.png","assets/github_light_blue.png")}/>
                                            </div>
                                            <div className={this.highlightSymbol("ForeverMe",'gitLabel_1 visible','gitLabel_1 invisible')}>Github</div>
                                       </div>
                                  </div>
                             </div>
                        </div>

                        <div className="portfolio_symbol_container">
                             <div  ref={this.redux} className={this.highlightSymbol("Budget App",'hexagons_container mouseOver','hexagons_container')}>
                                  <div className="outer_hexagon_container">
                                       <div className={this.displayClass('Budget App')}></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className="hexagon">
                                            <div className="redux symbol">
                                                <img src={this.highlightSymbol("Budget App","assets/redux_logo_blue.png","assets/redux_light_blue.png")}/>
                                           </div> 
                                           <div className={this.highlightSymbol("Budget App",'reduxLabel visible','reduxLabel invisible')}>Redux</div>
                                       </div>
                                  </div>
                             </div>

                             <div className={this.highlightSymbol("Budget App",'hexagons_container mouseOver','hexagons_container')} ref={this.jest}>
                                  <div className="outer_hexagon_container">
                                       <div className={this.displayClass('Budget App')}></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className="hexagon">
                                           <div className="jest symbol">
                                               <img src={this.highlightSymbol("Budget App","assets/jest_blue_2.png","assets/jest_light_blue.png")}/>
                                           </div> 
                                           <div className={this.highlightSymbol("Budget App",'jestLabel visible','jestLabel invisible')}>Jest</div>
                                        </div>
                                  </div>
                             </div>

                             <div className="hexagons_container" ref={this.php}>
                                  <div className="outer_hexagon_container">
                                       <div className="outer_hexagon" ></div>
                                  </div>
                                  <div className="hexagon_container" onMouseOver={() => this.highlightProject("PHP")}>
                                       <div className={this.displayLeadClass('PHP')}>
                                             <div className="php symbol">
                                                 <img src="assets/api_blue_2.png"/>
                                            </div>
                                          <div className={this.highlightSymbol("PHP","api_arrows_container visible z_index_front","api_arrows_container invisible z_index_back")}>
                                             <div className='arrow_google_sheet'></div>
                                             <div className='arrow_payPal'></div>
                                             <div className='arrow_shopify'></div>
                                             <div className='arrow_oc_api'></div>
                                          </div>
                                        </div>
                                  </div>
                                  <div className='subProjectContainer'>
                                        <div className={this.highlightSymbol("PHP","payPal_container visible z_index_front","payPal_container invisible z_index_back")}
                                             onClick={()=>this.windowOpen('https://github.com/cloudyGamer/portfolio/tree/master/Pay_Pal')}
                                          >
                                               <div className={"hexagons_container"} onMouseOver={() => this.highlightAPISubProject("PHP","payPal")}>
                                                    <div className="outer_hexagon_container">
                                                         <div className="outer_hexagon" ></div>
                                                    </div>
                                                    <div className="hexagon_container">
                                                         <div className={this.displayAPISubClasses('PHP','payPal')}>
                                                              <div className="payPal symbol">
                                                                   <img src="assets/paypal_logo_blue.png"/>
                                                              </div>
                                                         </div>
                                                    </div>
                                             </div>
                                          </div>
                                          <div className={this.highlightSymbol("PHP","google_sheet_container visible z_index_front","google_sheet_container invisible z_index_back")}
                                             onClick={()=>this.windowOpen('https://github.com/cloudyGamer/portfolio/blob/master/Google_Sheets/google_sheets_api_call.php')}
                                            >
                                             
                                               <div className={"hexagons_container"} onMouseOver={() => this.highlightAPISubProject("PHP","google_sheets")}>
                                                    <div className="outer_hexagon_container">
                                                         <div className="outer_hexagon" ></div>
                                                    </div>
                                                    <div className="hexagon_container">
                                                         <div className={this.displayAPISubClasses('PHP','google_sheets')}>
                                                              <div className="google_sheet symbol">
                                                                   <img src="assets/google_sheets_blue_2.png"/>
                                                              </div>
                                                         </div>
                                                    </div>
                                             </div>
                                          </div>
                                          <div className={this.highlightSymbol("PHP","shopify_container visible z_index_front","shopify_container invisible z_index_back")}
                                             onClick={()=>this.windowOpen('https://github.com/cloudyGamer/portfolio/tree/master/Shopify')}
                                          >
                                               <div className={"hexagons_container"} onMouseOver={() => this.highlightAPISubProject("PHP","shopify")}>
                                                    <div className="outer_hexagon_container">
                                                         <div className="outer_hexagon" ></div>
                                                    </div>
                                                    <div className="hexagon_container">
                                                         <div className={this.displayAPISubClasses('PHP','shopify')}>
                                                              <div className="shopify symbol">
                                                                   <img src="assets/shopify_logo_blue.png"/>
                                                              </div>
                                                         </div>
                                                    </div>
                                             </div>
                                          </div>
                                          
                                          <div className={this.highlightSymbol("PHP","oc_api_container visible z_index_front","oc_api_container invisible z_index_back")} 
                                             onClick={()=>this.windowOpen('https://github.com/cloudyGamer/portfolio/tree/master/Open_Cart')}
                                          >
                                               <div className={"hexagons_container"} onMouseOver={() => this.highlightAPISubProject("PHP","oc_api")}>
                                                    <div className="outer_hexagon_container">
                                                         <div className="outer_hexagon" ></div>
                                                    </div>
                                                    <div className="hexagon_container">
                                                         <div className={this.displayAPISubClasses('PHP','oc_api')}>
                                                              <div className="oc_api symbol">
                                                                   <img src="assets/opencart_logo_2.png"/>
                                                              </div>
                                                         </div>
                                                    </div>
                                             </div>
                                          </div>
                                  </div>         
                                          
                             </div>
                        </div>

                        <div className="portfolio_symbol_container">
                             <div className="hexagons_container mouseOver" ref={this.symbolSmith} onMouseOver={() => this.highlightProject("SymbolSmith")}>
                                  <div className="outer_hexagon_container">
                                       <div className="outer_hexagon"></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className={this.displayLeadClass('SymbolSmith')}>
                                            <div className="symbolsmith symbol">
                                                <img src="assets/symbolsmith_blue.png"/>
                                           </div> 
                                           <div className="arrow_4_a">
                                           </div>
                                        </div>
                                  </div>
                             </div>

                             <div className={this.highlightSymbol("SymbolSmith",'hexagons_container mouseOver','hexagons_container')} ref={this.github_2}
                              onClick={()=>this.windowOpen('https://github.com/cloudyGamer/SymbolSmith')}
                             >
                                  <div className="outer_hexagon_container">
                                       <div className={this.displayClass('SymbolSmith')}></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className="hexagon">
                                            <div className="github symbol">
                                                  <img src={this.highlightSymbol("SymbolSmith","assets/github_blue_2.png","assets/github_light_blue.png")}/>
                                            </div>
                                            <div className={this.highlightSymbol("SymbolSmith",'gitLabel_2 visible','gitLabel_2 invisible')}>Github</div>
                                       </div>
                                  </div>
                             </div>

                             <div className="hexagons_container mouseOver" ref={this.nodejs} onMouseOver={() => this.highlightProject("Node JS")}
                             onClick={()=>this.windowOpen('https://github.com/cloudyGamer/Node-Apps')}
                             >
                                  <div className="outer_hexagon_container">
                                       <div className="outer_hexagon"></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className={this.displayLeadClass('Node JS')}>
                                                 <div className="nodejs symbol">
                                                      <img src="assets/nodejs_blue.png"/>
                                                 </div>
                                       </div>
                                  </div>
                             </div>

                             <div className="hexagons_container mouseOver" ref={this.css_logo} onMouseOver={() => this.highlightProject("CSS")}>
                                  <div className="outer_hexagon_container">
                                       <div className="outer_hexagon"></div>
                                  </div>
                                  <div className="hexagon_container">
                                       <div className={this.displayLeadClass('CSS')}>
                                                 <div className="css_logo symbol">
                                                      <img src="assets/css_blue_2.png"/>
                                                 </div>
                                       </div>
                                  </div>
                             </div>
                        </div>
                    </div>
                    {this.showDescriptionHandler()}
               </div>
          </div>
            );
    }  
    
}