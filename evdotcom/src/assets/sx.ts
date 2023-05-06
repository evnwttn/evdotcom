export const palette = {
  black: "#161618",
  white: "#F6FDFF",
  yellow: "#EECA00",
  grey: "#B5BEBF",
  slate: "#3C3F40",
};

const weight = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const noHighlight = {
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};

export const container = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  width: "100%",
};

export const column = {
  display: "flex",
  flexFlow: "column nowrap",
  width: "56.25vw",
  height: "auto",
  "@media (max-width: 767px)": {
    width: "85.25vw",
    mr: "4vw",
  },
};

export const header = {
  ...noHighlight,
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  mt: "9.2vw",
  paddingLeft: "0.25vw",
  fontFamily: "owners-text, sans-serif",
  fontWeight: weight.black,
  fontSize: "6.45vw",
  letterSpacing: "0.55vw",
  color: palette.white,
  textTransform: "uppercase",
  "@media (max-width: 767px)": {
    mt: "12.5vw",
    fontSize: "10vw",
    paddingLeft: "0vw",
  },
  nav: {
    ...noHighlight,
    display: "flex",
    flexFlow: "row nowrap",
    fontFamily: "owners-text, sans-serif",
    mt: "-1.6vw",
    mb: "0.25vw",
    paddingLeft: "0.65vw",
    fontWeight: weight.medium,
    fontSize: "2.2vw",
    letterSpacing: "0.45vw",
    textTransform: "uppercase",
    "@media (max-width: 767px)": {
      justifyContent: "space-between",
      width: "83vw",
      ml: "0.5vw",
      fontSize: "6.5vw",
    },
    button: {
      "&:hover": {
        cursor: "pointer",
        opacity: "0.8",
      },
    },
  },
  divider: {
    width: "54.9vw",
    ml: "0.65vw",
    height: "2px",
    backgroundColor: palette.grey,
    "@media (max-width: 767px)": {
      width: "83vw",
    },
  },
};

export const iconDiv = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-end",
  width: "54.9vw",
  mt: "0.8vw",
  "@media (max-width: 767px)": {
    mt: "2.5vw",
    mb: "3.5vw",
    width: "83vw",
    justifyContent: "space-between",
  },
  "@media (min-width: 481px) and (max-width: 767px)": {
    justifyContent: "flex-end",
  },
  icon: {
    ml: "1.4vw",
    height: "2.5vw",
    width: "2.5vw",
    "@media (max-width: 480px)": {
      height: "7.5vw",
      width: "7.5vw",
    },
    "@media (min-width: 481px) and (max-width: 767px)": {
      height: "5vw",
      width: "5vw",
      ml: "4.75vw",
    },
    "&:hover": {
      cursor: "pointer",
      opacity: "0.8",
    },
  },
};

export const code = {
  cardDiv: {
    ...noHighlight,
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    width: "100%",
    mt: "2vw",
  },
  card: {
    width: "54.9vw",
    height: "auto",
    mb: "4vw",
    "@media (max-width: 767px)": {
      width: "83vw",
      mt: "3.5vw",
      mb: "7.5vw",
    },
  },
  title: {
    fontFamily: "eurostile-extended, sans-serif",
    letterSpacing: "0.22vw",
    fontWeight: weight.medium,
    fontSize: "1.6vw",
    textTransform: "uppercase",
    "@media (max-width: 767px)": {
      fontSize: "3.8vw",
    },
  },
  subtitle: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.9vw",
    mt: "0.1vw",
    color: palette.yellow,
    "@media (max-width: 767px)": {
      fontSize: "2.5vw",
    },
  },
  stack: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.8vw",
    mt: "0.5vw",
    mb: "1vw",
    color: palette.grey,
    "@media (max-width: 767px)": {
      fontSize: "2vw",
    },
  },
  image: {
    width: "100%",
    height: "25.25vw",
    backgroundSize: "100%",
    mb: "0.5vw",
    "@media (max-width: 767px)": {
      height: "39vw",
    },
  },
  links: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    justifyContent: "flex-end",
    mt: "1vw",
    icon: {
      "@media (max-width: 767px)": {
        height: "7.5vw",
        width: "7.5vw",
        mt: "2vw",
      },
      color: palette.white,
      height: "2.5vw",
      width: "2.5vw",
      "&:hover": {
        color: palette.yellow,
        cursor: "pointer",
      },
    },
  },
};

export const art = {
  cardDiv: {
    ...code.cardDiv,
    "@media (max-width: 767px)": {
      mt: "7.5vw",
    },
  },
  card: {
    ...code.card,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 767px)": {
      mb: "5.5vw",
    },
  },
  info: {
    display: "flex",
    width: "37.5vw",
    flexDirection: "column",
    "@media (max-width: 767px)": {
      width: "66vw",
    },
  },
  title: {
    ...code.title,
    "@media (max-width: 767px)": {
      fontSize: "3.8vw",
    },
  },
  subtitle: {
    ...code.subtitle,
    "@media (max-width: 767px)": {
      fontSize: "2.5vw",
    },
  },
  stack: {
    ...code.stack,
    "@media (max-width: 767px)": {
      fontSize: "2vw",
    },
  },
  image: {
    width: "37.5vw",
    height: "37.5vw",
    backgroundSize: "100%",
    mb: "0.4vw",
    "@media (max-width: 767px)": {
      width: "66vw",
      height: "66vw",
      mb: "3.5vw",
    },
  },
};

export const audio = {
  cardDiv: {
    ...noHighlight,
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    width: "100%",
    mt: "2vw",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "54.9vw",
    height: "auto",
    mt: "1.75vw",
    paddingTop: "1.5vw",
    paddingBottom: "1.5vw",
    border: `1px solid ${palette.slate}`,
    "@media (max-width: 767px)": {
      width: "83vw",
      mt: "5vw",
      mb: "10vw",
    },
  },
  art: {
    height: "17.5vw",
    width: "17.5vw",
    ml: "4.8vw",
    backgroundSize: "100% auto",
    "@media (max-width: 767px)": {
      width: "30vw",
      height: "30vw",
    },
    "&:hover": {
      cursor: "pointer",
      opacity: "0.8",
    },
  },
  info: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    ml: "4.8vw",
    "@media (max-width: 767px)": {
      ml: "4vw",
    },
  },
  title: {
    fontFamily: "eurostile-extended, sans-serif",
    letterSpacing: "0.22vw",
    fontWeight: weight.medium,
    fontSize: "1.6vw",
    textTransform: "uppercase",
    "@media (max-width: 767px)": {
      fontSize: "3.8vw",
    },
  },
  subtitle: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.9vw",
    color: palette.yellow,
    "@media (max-width: 767px)": {
      fontSize: "2.5vw",
    },
  },
  stack: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.8vw",
    mt: "0.4vw",
    color: palette.grey,
    "@media (max-width: 767px)": {
      mt: "0.5vw",
      fontSize: "2vw",
    },
  },
};

export const contact = {
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "54.8vw",
    justifyContent: "center",
    ml: "0.65vw",
    mt: "3.5vw",
    paddingTop: "1.5vw",
    paddingBottom: "1.5vw",
    border: `1px solid ${palette.slate}`,
    "@media (max-width: 767px)": {
      width: "83vw",
      mt: "5vw",
    },
  },
  about: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
    alignItems: "center",
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "1vw",
    mt: "1vw",
    a: {
      color: palette.yellow,
      textDecoration: "none",
      "&:hover": {
        color: palette.white,
      },
    },
    "@media (max-width: 767px)": {
      fontSize: "2vw",
      mt: "2vw",
    },
  },
  email: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.22vw",
    fontWeight: weight.medium,
    fontSize: "1.8vw",
    textTransform: "uppercase",
    textDecoration: "none",
    color: palette.white,
    "&:hover": {
      color: palette.yellow,
      cursor: "pointer",
    },
    "@media (max-width: 767px)": {
      mt: "5vw",
      fontSize: "5.5vw",
    },
  },
  coordinates: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.22vw",
    fontWeight: weight.medium,
    fontSize: "1vw",
    ml: "4.55vw",
    textTransform: "none",
    textDecoration: "none",
    color: palette.slate,
    "@media (max-width: 767px)": {
      fontSize: "3.5vw",
      ml: "14vw",
    },
    "&:hover": {
      opacity: "0.8",
    },
  },
  iconBox: {
    ...container,
    mt: "1.5vw",
    "@media (max-width: 767px)": {
      mt: "5vw",
    },
  },
  icon: {
    height: "2.5vw",
    width: "2.5vw",
    color: palette.white,
    mx: "0.9vw",
    "@media (max-width: 767px)": {
      height: "7.5vw",
      width: "7.5vw",
      mx: "3.5vw",
    },
    "&:hover": {
      color: palette.yellow,
      cursor: "pointer",
    },
  },
};
