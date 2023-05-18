import './LandingPage.css';

export function LandingPage() {
  return (
    <div className="LogoWrapper">
      <img
        className="Logo"
        src="full_logo.png"
        width={300}
        height={200}
        alt="BrewFinder logo"
      />
      <img className="LandingBanner" src="home_banner.jpg" />
      <div className="SloganWrapper">
        <div className="Slogan">Unlock the world of craft beer,</div>
        <div className="Slogan">one sip at a time</div>
        <div className="SubSlogan">Connecting you with the beers you love</div>
      </div>
    </div>
  );
}
