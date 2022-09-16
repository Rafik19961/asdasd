import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="about">
      <div className="ab1"></div>
      <div className="ab2">
        {" "}
        <h1>{t('about_us')}</h1>{" "}
        <p>
            {t('about_us_text')}
        </p>
        <div className="b">
          <div className="b1"></div>
          <div className="b2"></div>
          <div className="b3"></div>
          <div className="b4"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
