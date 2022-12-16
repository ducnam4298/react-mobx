import { alpha, Theme } from '@mui/material';

const Menu = (theme: Theme) => {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          padding: '16px 12px',
          maxHeight: 300,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 1,
            color: '#637381',
          },
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  };
};

export default Menu;
