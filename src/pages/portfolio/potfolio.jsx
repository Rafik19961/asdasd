import { Link } from "react-router-dom";
import img from "../../images/asd.png";
import img1 from "../../images/hover.png";
import style from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className="vh-100">
      <h1>Portfolio</h1>
      <div className="container-fluid">
        <div className={style.img_prtfolio_main}>
          <img src={img} alt="" className={style.img_prtfolio} />
          <Link to="/create_product">
            <img src={img1} alt="" className={style.img_plus} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
