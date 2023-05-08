import './AlphabetMap.css';

export function AlphabetMap({usedLetters}: {usedLetters: string[]}) {
  return (
    <div className="AlphabetWrapper">
      {LETTERS.map((letter) => (
        <a key={letter} className={usedLetters.includes(letter) ? 'Letter' : 'DisabledLetter'}>
          {letter}
        </a>
      ))}
    </div>
  );
}

const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
