import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Meus Desabafos" />
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:site_name" content="Meus Desabafos"></meta>
        <meta property="og:url" content="https://jaospace.vercel.app/" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Eu decidi criar este site pessoal para ter um espaço onde pudesse
            registrar meus desabafos e memórias de forma organizada. Sinto que
            compartilhar essas histórias e sentimentos me ajuda a lidar com meus
            pensamentos e emoções, além de permitir que eu volte no tempo e
            reviva momentos especiais da minha vida."
        ></meta>
        {/* <meta property="og:image" content="/icon.png" /> */}
        <meta name="theme-color" content="#19191e"></meta>
        <meta charSet="UTF-8"></meta>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
