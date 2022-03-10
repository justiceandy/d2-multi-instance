//@ts-nocheck

import { createTheme } from '@mui/material'


export const Switch = createTheme({
    components: {
      Mui: {
        styleOverrides: {
          "root": {
            "&.Mui-checked": {
              "color": "#1976d2"
            }
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          thumb: {
            color: '#404040',
          },
          track: {
            backgroundColor: '#525252',
          },
        },
      },
     
    },
  });
