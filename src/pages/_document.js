import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Edu+TAS+Beginner:wght@400;700&family=Orbitron:wght@400;700;800;900&family=Oswald:wght@200;400;600;700&family=Rokkitt:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
