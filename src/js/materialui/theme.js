import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    // ↑を有効にするとダークモード
    //
    // primary: {
    //   light: "#516a78",
    //   main: "#263f4c",
    //   dark: "#001924",
    //   contrastText: "#ffffff",
    // },
    // secondary: {
    //   light: "#62efff",
    //   main: "#00bcd4",
    //   dark: "#008ba3",
    //   contrastText: "#000000",
    // },
  },
});
