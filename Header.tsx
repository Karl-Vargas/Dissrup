import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  return (
    <header id="#">
      <section>
        <h5>Welcome to</h5>
        <h2>Dissrup Coffee </h2>

        <div className="container header__container">
          <div className="header__socials">
            <a href="#https://www.instagram.com/dissrup1/?hl=en" target="_blank">
              {" "}
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/yamboart/" target="_blank">
              <FacebookIcon />
            </a>
            <a href="https://dissrup.com/" target="_blank">
              <LanguageIcon />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
