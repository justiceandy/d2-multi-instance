import { createTheme } from '@mui/material'


export const DropDown = createTheme({
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            background: '#121212',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            color: '#8d8d8d',
            fontSize: '0.8em',
            marginTop: '1px',
          },
          "iconOutlined": {
            color: 'rgb(133 133 133)',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          "root": {
            color: 'rgb(133 133 133)',
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            marginTop: '-12px',
            borderRadius: '0px',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: 'white',
          },
          notchedOutline: {
            borderWidth: '0px !important',
          }
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: 'white',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color : 'blue',
          },
          formControl: {
            color: 'white',
            height: '45px',
          }
        },
      }
    },
  });
