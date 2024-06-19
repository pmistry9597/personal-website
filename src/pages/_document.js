import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Edu+TAS+Beginner:wght@400..700&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
