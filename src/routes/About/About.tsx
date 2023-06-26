import './About.css';
import { Paper } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      <Paper className="Paper">
        <div className="AboutBusinessHeader">About BrüFinder</div>
        <img
          className="ForBusinessImage"
          src="about.jpg"
          alt="About BrüFinder banner"
        />
        <div className="AboutTag">
          Whether it's to find an old favorite or a soon to be favorite,
          BrewFinder is here to help. Explore and discover numerous beers from
          craft breweries nationwide.
        </div>
        <div className="AboutSubtag">
          <Link className="AboutSubtag" to="/breweries">
            Get Started Now <ArrowForward />
          </Link>
        </div>
      </Paper>
      <Paper className="Paper">
        <div className="AboutBusinessHeader">BrüFinder for Business</div>
        <img
          className="ForBusinessImage"
          src="for_business.jpg"
          alt="BrüFinder for Business banner"
        />
        <div className="AboutTag">
          Own a craft brewery? Signup for BrüFinder today to showcase your
          product to the BrüFinder community. Generate new business and receive
          logistics on where people are looking for your beers!
        </div>
        <div className="AboutSubtag">
          <Link className="AboutSubtag" to="/join">
            More Information and Registration <ArrowForward />
          </Link>
        </div>
      </Paper>
    </div>
  );
}
