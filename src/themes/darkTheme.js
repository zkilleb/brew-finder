import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    background: {
      default: '#1b2127',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#14181c',
          borderBottom: 'solid 1px black',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        colorPrimary: {
          color: 'black',
          backgroundColor: 'white',
          border: 'solid 1px black',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          background: '#1b2127',
          '&.Mui-focused': {
            color: `white`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: `white`,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: 'black',
        },
        icon: {
          color: '#000000',
        },
        select: {
          color: '#000000',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
  },
});
