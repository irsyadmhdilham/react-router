import React, {Component} from 'react';

import './Menu.css';
import '../assets/css/stylesheets.css';

import logoCrimescape from '../assets/img/icons/LogoCrimeScape1.png';
import cityHall from '../assets/img/menu/imgicon/city-hall.png';
import news from '../assets/img/menu/imgicon/news.png';
import forum from '../assets/img/menu/imgicon/forum.png';
import twitter from '../assets/img/menu/imgicon/twitter.png';
import predicIcon from '../assets/img/menu/imgicon/icon-brain.png';


//import cityhall from './../assets/img/menu/imgicon/city-hall.png';

class Menu extends Component {
    render(){
        return(
            <div className="container">
   <div className="row">
      <div className="col-md-12">
         {/* <nav className="navbar-"> */}
            
            <ul id="navigation" className="nav">
              
               <div className="col-md-8 col-sm-8 col-md-offset-19">
                  <div className="row">
                     <li className="titleurs">
                        <h2>&nbsp;</h2>
                        
                     </li>
                  </div>
               </div>
            </ul>
            <div className="col-sm-2 col-md-2 col-md-offset-10" id="control-my-profile-urs">
               <ul className="nav navbar-right">
                  <li>
                     {/* <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <img alt="" className="profile_img" src="./asset/img/icons/avatar.png"/>
                        <p  id="myvisitor">Visitor Name </p>
                        <b id="dropimg" className="caret"></b>
                        
                     </a> */}
                     <ul role="menu" className="dropdown-setting dropdown-menu">
                        <li  id="addadmin"> </li>
                        <li> <a data-toggle="modal" data-modal-id="change-password" href="#myModal" id="modellink"> <span className="icon-gear icon-color"></span>&#160;&#160;Change Password</a> </li>
                        <li><a target="_blank" href="../usermanual/index.html"><span className="icon-book icon-color"></span>&#160;&#160;User Manual</a></li>
                        <li className="divider"></li>
                        <li> <a href="#" onclick="logout(); return false;"> <span className="icon-signout icon-color"></span>&#160;&#160;Logout</a> </li>
                     </ul>
                  </li>
               </ul>
         {/* </nav> */}
         </div>
      </div>
   </div>
  
   <div className="title-text">
      <h2></h2>
   </div>
   
   <div className="col-sm-9 col-md-9 col-md-offset-22">
      <div className="row">
         
         <div className="bg_transparent">
            <span className="ctrl-logo">
                <img src={logoCrimescape} alt="CrimeScapeLogo" width="320" height="90"/>
            </span>
            <div className="ctrl-sub-title">
               <p className="ctrl-sub-title-m"><strong>Enter the keyword you want to search:</strong></p>
               <p id="warnsrch"></p>
               <span className="help-tip" title="Click for info" onclick="window.open('../help/index.html');">
                  <p>?</p>
               </span>
            </div>
            <form className="formmenu" action="" method="post">
               <div className="input-group add-on align-adjust">
                  <input type="text" name="keyword" id="keyword" onkeydown="validated()" className="search_field"/>
                  <div className="input-group-btn">
                     <button className="btng-reset" type="reset" onclick="resetall()"  title="Reset"><i className="icon-remove"></i></button>
                     <button value="search" className="menu-search-btn" type="submit" id="search" data-loading-text="<i className='icon-spinner icon-spin'></i>"><i className="icon-search"></i></button>
                  </div>
               </div>
            </form>
            
            <div className="ctrl-mrg-icon">
               
               <div id="click1" className="block-icon" onclick="window.location='../urs/urs01/index.html';">
                  <span id="badgec" className="badge1 badgeloc" data-badge="0" hidden="yes"></span> 
                  <i className="hovicon effect-4"><img src={cityHall} id="img-control"/></i>
                  <p id="info">Government Database Search</p>
               </div>
               <div id="click2" className="block-icon" onclick="window.location='../urs/urs02/index.html';">
                  <span id="badgec2" className="badge1 badgeloc" data-badge="0" hidden="yes"></span> 
                  <i className="hovicon effect-4 sub-b" onClick="location='../error/'">
                  <img src={news} id="img-control"/></i>
                  <p id="info">Local News<br/> Search</p>
               </div>
               <div id="click3" className="block-icon" onclick="window.location='../urs/urs03/index.html';">
                  <span id="badgec3"  className="badge1 badgeloc" data-badge="0" hidden="yes"></span> 
                  <i className="hovicon effect-4 sub-b" onClick="location='../error/'">
                  <img src={forum} id="img-control"/></i>
                  <p id="info">Local Forum<br/>  Search</p>
               </div>
               <div id="click4" className="block-icon" onClick="location='../urs/urs04/index.html';">
                  <span id="badgec4" className="badge1 badgeloc" data-badge="0" hidden="yes"></span> 
                  <i className="hovicon effect-4" onClick="location='../urs/urs04/index.html';">
                  <img src={twitter} id="img-control"/></i>
                  <p id="info">Twitter<br/> Search</p>
               </div>
               <div className="block-icon" onClick="location='../urs/urs05/index.html';">
                  <i className="hovicon effect-5 sub-b" onClick="location='../error/'"> 
                  <img src={predicIcon} id="img-control"/></i>
                  <p id="info">Website<br/> Prediction</p>
               </div>
            </div>
            
         </div>
      </div>
       
   </div>
   
   
</div>


// </div>
        )
    }
}

export default Menu;