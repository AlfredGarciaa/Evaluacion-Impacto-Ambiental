import React, {useState, useEffect, useRef} from 'react';
import user from '../Assets/Perfil.png';
import edit from '../Assets/edit.png';
import inbox from '../Assets/envelope.png';
import settings from '../Assets/settings.png';
import help from '../Assets/question.png';
import logout from '../Assets/log-out.png';
import '../Styles/Perfil.css';

const Perfil = () => {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
  
    return (
      <div className="App">
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={user} alt="Imagen de usuario"></img>
          </div>
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <h3>Web Visitor<br/><span>user.password@gmail.com</span></h3>
            <ul>
              <DropdownItem img = {user} text = {"My Profile"}/>
              <DropdownItem img = {edit} text = {"Edit Profile"}/>
              <DropdownItem img = {inbox} text = {"Inbox"}/>
              <DropdownItem img = {settings} text = {"Settings"}/>
              <DropdownItem img = {help} text = {"Helps"}/>
              <DropdownItem img = {logout} text = {"Logout"}/>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
  
export default Perfil;
