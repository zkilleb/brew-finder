import './RegistrationForm.css';
import React from 'react';
import { TextField, InputLabel, Button } from '@mui/material';
import { IValidation } from '../../interfaces/IValidation';
import { AddressAutoComplete, Notification } from '..';

export function RegistrationForm() {
  const [validation, setValidation] = React.useState<IValidation | undefined>();
  const [open, setOpen] = React.useState<boolean>(false);
  const [breweryName, setBreweryName] = React.useState<string>();
  const [address, setAddress] = React.useState<string>();
  const [phone, setPhone] = React.useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidation(undefined);
    setOpen(false);
    switch (event.target.id) {
      case 'brewery':
        setBreweryName(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
    }
  };

  const handleAddressChange = (tempAddress?: string) => {
    setValidation(undefined);
    setOpen(false);
    if (tempAddress) setAddress(tempAddress);
  };

  const validateForm = () => {
    if (address && breweryName) {
      return true;
    } else {
      setValidation({
        message: 'Please fill out all required fields',
        severity: 'error',
      });
      setOpen(true);
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('submit');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='MoreInfoHeader'>Please Provide Us With Some Additional Information</div>
      {validation && open && (
        <Notification
          message={validation.message}
          severity={validation.severity}
          open={open}
          handleClose={handleClose}
        />
      )}
      <div className="FirstRow">
        <div className="RegistrationField">
          <InputLabel error={validation !== undefined}>
            Brewery Name *
          </InputLabel>
          <TextField
            error={validation !== undefined}
            placeholder="Enter brewery name"
            id="brewery"
            value={breweryName}
            onChange={handleChange}
          />
        </div>
        <AddressAutoComplete
          handleChange={handleAddressChange}
          error={validation !== undefined}
        />
      </div>
      <div className="SecondRow">
        <div className="RegistrationField">
          <InputLabel error={validation !== undefined}>
            Phone Number *
          </InputLabel>
          <TextField
            error={validation !== undefined}
            placeholder="Enter phone number"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
