import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{backgroundColor:"#dddfde",}}>
        <Main />
        <NextScript />
        <div id="photo-picker-element"></div>
      </body>
    </Html>
  );
}
