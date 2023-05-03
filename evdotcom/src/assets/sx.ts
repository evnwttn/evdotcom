export const palette = {
  black: "#0D0D0D",
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
  nav: {
    ...noHighlight,
    display: "flex",
    flexFlow: "row nowrap",
    fontFamily: "owners-text, sans-serif",
    mt: "-2.4vw",
    paddingLeft: "0.65vw",
    fontWeight: weight.medium,
    fontSize: "2.2vw",
    letterSpacing: "0.45vw",
    textTransform: "uppercase",
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
  },
};

export const iconDiv = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-end",
  width: "54.9vw",
  mt: "0.45vw",
  icon: {
    ml: "0.75vw",
    fontSize: "1.95vw",
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
  },
  card: {
    width: "49vw",
    height: "auto",
    mb: "2vw",
  },
  title: {
    fontFamily: "eurostile-extended, sans-serif",
    letterSpacing: "0.22vw",
    fontWeight: weight.medium,
    fontSize: "1.6vw",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.9vw",
    mt: "-0.4vw",
    color: palette.yellow,
  },
  stack: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.8vw",
    mb: "0.4vw",
    color: palette.grey,
  },
  image: {
    width: "100%",
    height: "23vw",
    backgroundSize: "100%",
    mb: "0.4vw",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.8",
    },
  },
};

export const art = {
  cardDiv: {
    ...code.cardDiv,
  },
  card: {
    ...code.card,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    ...code.title,
  },
  subtitle: {
    ...code.subtitle,
  },
  stack: {
    ...code.stack,
  },
  image: {
    width: "37.5vw",
    height: "37.5vw",
    backgroundSize: "100%",
    mb: "0.4vw",
  },
};

export const audio = {
  cardDiv: {
    ...noHighlight,
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "45vw",
    height: "auto",
    mt: "2vw",
    padding: "0.5vw",
    border: `1px solid ${palette.slate}`,
  },
  art: {
    height: "15vw",
    width: "15vw",
    backgroundSize: "100% auto",
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
    ml: "2vw",
  },
  title: {
    fontFamily: "eurostile-extended, sans-serif",
    letterSpacing: "0.22vw",
    fontWeight: weight.medium,
    fontSize: "1.6vw",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.9vw",
    mt: "-0.4vw",
    color: palette.yellow,
  },
  stack: {
    fontFamily: "owners-text, sans-serif",
    letterSpacing: "0.05vw",
    fontWeight: weight.normal,
    fontSize: "0.8vw",
    color: palette.grey,
  },
};
