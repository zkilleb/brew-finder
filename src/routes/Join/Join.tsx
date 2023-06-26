import './Join.css';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

export function Join() {
  return (
    <div>
      <Paper className="Paper">
        <div className="AboutBusinessHeader">Ready to join now?</div>
        <img className="ForBusinessImage" src="map.jpg" alt="Map banner" />
        <div className="AboutTag">
          Registration is a quick and easy process. After your brewery is
          verified, you will immeditately be able to start using all of Brü
          Finder's features.
        </div>
        <div className="AboutSubtag">
          <Link className="AboutSubtag" to="/breweries">
            Begin Sign Up <ArrowForward />
          </Link>
        </div>
      </Paper>
      <Paper className="Paper">
        <div className="AboutBusinessHeader">Why Join BrüFinder?</div>
        <img
          className="ForBusinessImage"
          src="join.jpg"
          alt="Join BrüFinder banner"
        />
        <div className="AboutTag">
          Looking to grow your business? Joining BrüFinder allows you to feature
          your brewery alongside other favorites nationwide. Allow users view
          your product offerings and where to find them.
        </div>
      </Paper>
      <Paper className="Paper">
        <div className="AboutBusinessHeader">Personalized Metrics</div>
        <img
          className="ForBusinessImage"
          src="metrics.jpg"
          alt="Metrics banner"
        />
        <div className="AboutTag">
          Gain access to our personalized, interactive analytics dashboards to
          see how often users and looking for your beer and where they are
          looking at.
        </div>
      </Paper>
      <Paper className="Paper">
        <div className="AboutBusinessHeader">Additional Questions?</div>
        <img
          className="ForBusinessImage"
          src="questions.jpg"
          alt="Additional questions banner"
        />
        <div className="AboutTag">
          Have additional questions? Feel free to reach out to our support email
          and support@brufinder.com or visit our FAQ page for more commonly
          asked questions.
        </div>
        <div className="AboutSubtag">
          <Link className="AboutSubtag" to="/faq">
            Visit FAQ Page <ArrowForward />
          </Link>
        </div>
      </Paper>
    </div>
  );
}
