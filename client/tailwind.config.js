/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chat-background": "url('/chat-bg.png')",
      },
      colors: {
        "secondary": "#8696a0",
        "teal-light": "#7ae3c3",
        "wool" : "#EDD8E2",
        "cold-sky" : "#365a72",
        "caramel" : "DFB8CC",
        "frost" : "#9B5372",
        "cookies" : "#D895B1",
        "breeze" : "#CC7229",
        "photopicker-overlay-background": "rgba(30,42,49,0.8)",
        "dropdown-background": "#233138",
        "dropdown-background-hover": "#182229",
        "input-background": " #2a3942",
        "primary-strong": "#e9edef",
        "panel-header-background": "#6991aa",
        "panel-header-icon": "#aebac1",
        "icon-lighter": "#8696a0",
        "icon-green": "#00a884",
        "search-input-container-background": "#2a4f65",
        "conversation-border": "rgba(134,150,160,0.15)",
        "conversation-panel-background": "#a29f8d",
        "background-default-hover": "#202c33",
        "incoming-background": "#433D8B",
        "outgoing-background": "#2E236C",
        "bubble-meta": "hsla(0,0%,100%,0.6)",
        "icon-ack": "#53bdeb",

      },
      gridTemplateColumns: {
        main: "1fr 2.4fr",
      },
    },
  },
  plugins: [],
};
