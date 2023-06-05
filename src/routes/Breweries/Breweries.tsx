import './Breweries.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IBrewery } from '../../interfaces/IBreweries';
import { AlphabetMap } from '../../components';
import { getBreweries } from '../../api';

export function Breweries() {
  const [breweries, setBreweries] = React.useState<IBrewery[]>([]);

  React.useEffect(() => {
    getBreweries().then(setBreweries);
  }, []);

  let usedLetters: string[] = [];

  const renderDividers = (prevIndex: IBrewery, currIndex: IBrewery) => {
    if (!prevIndex || prevIndex.name.charAt(0) !== currIndex.name.charAt(0)) {
      usedLetters.push(currIndex.name.charAt(0).toLocaleUpperCase());
      return (
        <div
          id={currIndex.name.charAt(0).toLocaleUpperCase()}
          key={currIndex.name.charAt(0)}
          className="LetterDivider"
        >
          {currIndex.name.charAt(0).toLocaleUpperCase()}
          <hr />
        </div>
      );
    }
  };

  return (
    <>
      <div className="BreweriesHeader">Breweries</div>
      <AlphabetMap usedLetters={usedLetters} />
      <div className="BreweriesWrapper">
        {breweries.map((brewery, index) => {
          return (
            <React.Fragment key={brewery.formattedName}>
              {renderDividers(breweries[index - 1], brewery)}
              <Link
                className="Breweries"
                to={`/finder?brewery=${brewery.name}`}
              >
                <div>{brewery.formattedName}</div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
