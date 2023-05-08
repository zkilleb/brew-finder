import './ZipCodeField.css';
import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export function ZipCodeField({
  callback,
}: {
  callback: (zip: string, product: string) => void;
}) {
  const [zip, setZip] = React.useState<string>();
  const [error, setError] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<string>('All Products');

  const options = ['All Products', 'IPA', 'Lager', 'Pilsner', 'Stout'];

  const handleZipChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (error) setError(false);
    if (event.target.value.toString().length <= 5) {
      setZip(event.target.value);
    }
  };

  const handleClick = () => {
    if (zip && zip.match(/^[0-9]*$/) && zip.length === 5) {
      callback(zip, product);
    } else setError(true);
  };

  const handleProductChange = (event: SelectChangeEvent) => {
    setProduct(event.target.value);
  };

  return (
    <>
      <div className="ZipOuterWrapper">
        <img className="MapLogo" src="full_logo.png" width={150} height={100} />
        <TextField
          className="ZipTextField"
          value={zip}
          onChange={handleZipChange}
          placeholder="Enter ZIP Code"
        />
        <Select
          className="ProductSelect"
          value={product}
          onChange={handleProductChange}
        >
          {options.map((option) => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          className="FindButton"
          variant="contained"
          onClick={handleClick}
        >
          Find
        </Button>
      </div>
      <div className="ErrorWrapper">
        {error && <Typography>Invalid ZIP Code</Typography>}
      </div>
    </>
  );
}
