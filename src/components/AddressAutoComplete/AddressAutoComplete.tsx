import './AddressAutoComplete.css';
import { usePlacesWidget } from 'react-google-autocomplete';
import { InputLabel, TextField } from '@mui/material';

export function AddressAutoComplete({
  error,
  address,
  handleChange,
}: {
  error: boolean;
  address?: string;
  handleChange: (address?: string) => void;
}) {
  const { ref } = usePlacesWidget({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    onPlaceSelected: (place) => handleChange(place.formatted_address),
    options: {
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address'],
      types: ['address'],
    },
  });

  return (
    <div className="RegistrationField">
      <InputLabel error={error}>Address *</InputLabel>
      <TextField
        error={error}
        inputRef={ref}
        id="address"
        placeholder="Enter brewery address"
        value={address}
      />
    </div>
  );
}
