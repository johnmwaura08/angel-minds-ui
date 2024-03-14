
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "theme";

export const useIntakeAssessmentStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      // color: "black",
      fontWeight: "bold",
      marginBottom: theme.spacing(2.5),
    },
    headerLink: {
      paddingLeft: 0,
      color: "#2185D0",
      fontWeight: "bold",
      "& svg": {
        fontSize: "1.1em",
        marginRight: 5,
        color: "#2185D0",
      },
      marginBottom: "1rem",
    },
    h2: {
      fontWeight: "bold",
      color: "#2185D0",
      marginBottom: 20,
    },
    container: {
      flexBasis: 0,
    },
    section: {
      marginTop: "39px",
      marginBottom: "39px",
      paddingLeft: "49px",
    },
    quarterField: {
      width: "25%",
      "& div": {
        width: "100%",
      },
      "& > label": {
        // color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: "5px",
        display: "block",
      },
    },
    halfField: {
      width: "50%",
      "& div": {
        width: "100%",
      },
      "& > label": {
        // color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: "5px",
        display: "block",
      },
    },
    fullField: {
      width: "100%",
      "& div": {
        width: "100%",
      },
      "& > label": {
        // color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: "5px",
        display: "block",
      },
    },
    buttonContainer: {
      float: "right",
    },
    saveAndRequestButton: {
      marginRight: 10,
      paddingLeft: 30,
      paddingRight: 30,
    },
    attachment: {
      background:
        "transparent radial-gradient(closest-side at 50% 50%, #F9FAFB 0%, #F2F3F4 100%) 0% 0% no-repeat padding-box",
      height: 110,
      padding: 19,
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 0px 2px #00000029",
      border: "1px solid #E9EAEB",
      borderRadius: 4,
    },
    tabTitle: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    divider: {
      marginTop: 10,
      marginBottom: 20,
    },
    searchCard: {
      maxWidth: 360,
    },
    disabled: {
      "& .MuiAutocomplete-endAdornment": {
        display: "none",
      },
    },
    select: {
      minWidth: 250,
    },
    link: {
      color: theme.palette.primary.main,
      paddingLeft: "0px",
    },
    formInput: {
      width: "100%",
    },

    root: {
      padding: "0 20px",
      "& h1": {
        paddingTop: 10,
        paddingBottom: 20,
      },
    },
    tabs: {
      display: "flex",
      justifyContent: "space-between",
    },

    copiedFromLink: {
      fontWeight: "bold",
    },

    copiedFromContainer: {
      display: "flex",
      width: "50%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "flex-end",
    },
    cancelButtonContainer: {
      float: "right",
    },
    editButton: {
      background: theme.palette.primary.main,
      color: "white",
      margin: "10px",
      width: "100px",
      "&:hover": {
        background: theme.palette.primary.main,
      },
    },
    classDetailsButton: {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      margin: "10px",
    },
  })
);