import './Footer.css';
import { Link } from 'react-router-dom';
import { Twitter, Email } from '@mui/icons-material';

export function Footer() {
  return (
    <div className="Footer">
      <div className="FooterLogo">
        <Link to="/">
          <img
            src="full_logo.png"
            width={75}
            height={50}
            alt="BrewFinder logo"
          />
        </Link>
        <hr />
        <div>Connecting you with the beers you love</div>
      </div>
      <div className="SocialsWrapper">
        <div className="SocialHeader">Connect With Us</div>
        <div className="SocialIcons">
          <Twitter className="SocialIcons" />
          <Email className="SocialIcons" />
        </div>
      </div>
    </div>
  );
}
