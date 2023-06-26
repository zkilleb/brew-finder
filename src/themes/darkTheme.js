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
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: '2px solid white',
          borderRadius: '10px',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          background: '#445566',
          borderBottom: '1px solid white',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          background: '#14181c',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          background: 'none',
          color: 'white',
        },
      },
    },
  },
});
