import './Breweries.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IBrewery } from '../../interfaces/IBreweries';
import { AlphabetMap } from '../../components';
import { getBreweries } from '../../api/google';

export function Breweries() {
  const [breweries, setBreweries] = React.useState<IBrewery[]>([]);

  React.useEffect(() => {
    getBreweries().then(setBreweries);
  }, []);

  let usedLetters: string[] = [];

  const renderDividers = (prevIndex: IBrewery, currIndex: IBrewery) => {
    if (!prevIndex || prevIndex.value.charAt(0) !== currIndex.value.charAt(0)) {
      usedLetters.push(currIndex.value.charAt(0).toLocaleUpperCase());
      return (
        <div
          id={currIndex.value.charAt(0).toLocaleUpperCase()}
          key={currIndex.value.charAt(0)}
          className="LetterDivider"
        >
          {currIndex.value.charAt(0).toLocaleUpperCase()}
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
            <>
              {renderDividers(breweries[index - 1], brewery)}
              <Link
                className="Breweries"
                key={brewery.value}
                to={`/finder?brewery=${brewery.value}`}
              >
                <div key={brewery.value}>{brewery.displayName}</div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
