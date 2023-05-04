import ao1 from "../img/code/ao1.png";
import ao2 from "../img/code/ao2.png";
import mpw1 from "../img/code/mpw1.png";
import mpw2 from "../img/code/mpw2.png";
import mpw3 from "../img/code/mpw3.png";
import mpc from "../img/code/mpc.png";
import ptk from "../img/code/ptk.png";
import tfu from "../img/code/tfu.png";

export const codeCardData = [
  {
    key: "co4",
    title: "Upcoming Web App",
    subtitle: "Full-Stack Development",
    info: "This is an ongoing project for the St. John's based AbbaTek Group: a SaaS platform designed to streamline and de-skill microplastic analysis.",
    stack:
      "Stack: TypeScript, Node, Express, React, MUI, Postgres, Mapbox, AWS, XD",
    repo: "https://github.com/AbbaTek-Group",
    link: "https://github.com/AbbaTek-Group",
    image: [mpc],
  },
  {
    key: "co3",
    title: "Album Organizer",
    subtitle: "Full-Stack Development",
    info: "A tactile project management toolkit for recording projects. I designed the UI to reflect some of my favorite outboard recording gear, while having the feel of a beat sequencer.",
    stack:
      "Stack: TypeScript, Next 13, Node, Express, React, MUI, Router, Postgres, Vercel, XD",
    repo: "https://github.com/evnwttn/ao",
    link: "https://ao-demo.vercel.app/",
    image: [ao1, ao2],
  },
  {
    key: "co2",
    title: "MPConnect Homepage",
    subtitle: "Web Development",
    info: "A custom React webpage for the AbbaTek Group's flagship service, MPConnect. Many of the design choices were made to reflect the UI of the application itself, coupled with a modern vertical flow.",
    stack: "Stack: TypeScript, React, MUI, XD",
    repo: "https://github.com/AbbaTek-Group/",
    link: "https://mpconnect.io/",
    image: [mpw1, mpw2, mpw3],
  },
  {
    key: "co1",
    title: "Punch The Keys",
    subtitle: "Web Component Development",
    info: "A polyphonic browser based keyboard that started as a quirky synthesizer and ended up being a reusable web component  that anyone can drop into their site with 2 lines of code. This was my first project in the Get Coding program and an excellent education in modern JavaScript.",
    stack: "Stack: JavaScript, Vite, Lit, Tone.js",
    repo: "https://github.com/evnwttn/punch-the-keys",
    link: "https://evnwttn.github.io/punch-the-keys/",
    image: [ptk],
  },
  {
    key: "co0",
    title: "TFU",
    subtitle: "Front-End Development",
    info: "This is a randomizer project I whipped up for my partner and I to tackle date night indecisiveness. [Y/N] returns either Yes or No, [INPT] accepts values and returns one of them, [OTPT] returns the name of one of our favourite restaurants.",
    stack: "Stack: Vanilla JavaScript",
    repo: "https://github.com/evnwttn/tfu",
    link: "https://evnwttn.github.io/tfu/",
    image: [tfu],
  },
];
