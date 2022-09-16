import { Link } from "react-router-dom";
import pic from "../../images/Alexis.png";
import '../../App.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header = () => {

  const { t, i18n } = useTranslation();

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };


  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-light nn">
        <div className="container-fluid">
          

          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav aa ">
            <Link to = "/" > <img src={pic} className="logo" /> </Link>
            
            <Link to = "/about" className="color: $yellow-300"> About Us</Link>  
            <Link to = "/contact" > Contact </Link>
            <Link to = "/portfolio" > Portfolio </Link> 
            <Link to = "/registration" > Registration </Link> 
            <Link to = "/product" > Product </Link> 
            



            <li>
              <select
                className="form-select form-select-sm ms-5"
                aria-label=".form-select-sm example"
                name="language"
                onChange={onChange}
              >
                <option selected={"en" == i18n.language} value="en">
                  Eng
                </option>
                <option selected={"am" == i18n.language} value="am">
                  Arm
                </option>
                <option selected={"ru" == i18n.language} value="ru">
                  Rus
                </option>
              </select>
            </li>
               
            </div>
            

          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;