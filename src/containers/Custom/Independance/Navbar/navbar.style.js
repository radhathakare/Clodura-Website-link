import styled from 'styled-components';



export const Navbarwrapper = styled.div`

.menu-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.menu-trigger {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto; /* Strictly for positioning */
  }
  
  
  .menu-trigger span {
    vertical-align: middle;
    margin-left: 2px;
    margin-right: 10px; 
  }
  
  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }
  
  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    border-bottom: 1px solid #dddddd;
  }
  
  .menu li a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
  .menubar{
    display: flex;
    margin: 20px;
  }
  .menubutton{
    display:flex;
    margin:20px;
  }
  .App {
    text-align: center;
    font-size: 35px;
    margin-top: 10vh;
  }
  
  .App-title {
    font-size: 50px;
    margin-top: 60px;
  }
  
  .clock {
    display: inline;
    margin: 10px;
  }
  
  .event-input {
    font-size: 25px;
    margin: 5px;
  }
  
  .form {
    margin-top: 60px;
  }
  
`;


export default Navbarwrapper;
