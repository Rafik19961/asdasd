import { Link } from "react-router-dom";
import pic1 from "../../images/1.png";
import pic2 from "../../images/2.png";
import pic3 from "../../images/3.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="d1">
      <div>
      <h1 className="h1">{t('design')}</h1>
       <button className="bt">Our Works</button>
       <div className="ii"> <img src={pic1}  /> <img src={pic2} /> <img src={pic3}  /></div>
       </div>
       
    </div>
   
    
  );
};
export default Home;