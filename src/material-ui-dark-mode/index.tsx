import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from "@material-ui/core/styles";
import { teal, red } from "@material-ui/core/colors";
import { useTheme } from "@material-ui/core/styles";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const ThemeDispatchContext = React.createContext<any>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const themeInitialOptions = {
    paletteType: "dark",
  };

  const [themeOptions, dispatch] = React.useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "changeTheme":
          return {
            ...state,
            paletteType: action.payload,
          };
        default:
          throw new Error();
      }
    },
    themeInitialOptions
  );

  const memoizedTheme = React.useMemo(() => {
    return createMuiTheme({
      ...theme,
      palette: {
        type: themeOptions.paletteType,
        primary: {
          main: theme.palette.type === "dark" ? teal[200] : teal[300],
        },
        secondary: {
          main: theme.palette.type === "dark" ? red[200] : red.A700,
        },
      },
      overrides: {
        MuiButton: {
          root: {
            textTransform: "none",
          },
        },
        MuiChip: {
          root: {
            marginRight: theme.spacing(0.5),
            marginTop: theme.spacing(0.5),
          },
        },
        MuiLinearProgress: {
          root: {
            height: theme.spacing(0.5),
          },
        },
        MuiAvatar: {
          colorDefault: {
            backgroundColor:
              theme.palette.type === "dark" ? teal[200] : teal[300],
          },
        },
      },
    });
  }, [theme, themeOptions.paletteType]);

  return (
    <MuiThemeProvider theme={memoizedTheme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

export const useChangeTheme = () => {
  const dispatch = React.useContext(ThemeDispatchContext);
  const theme = useTheme();
  const changeTheme = React.useCallback(
    () =>
      dispatch({
        type: "changeTheme",
        payload: theme.palette.type === "light" ? "dark" : "light",
      }),
    [theme.palette.type, dispatch]
  );

  return changeTheme;
};
