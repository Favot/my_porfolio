import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />

          <meta name="description" content="Corentin Favot Developer React" />
          <meta
            name="keywords"
            content="Full Stack Web Developer, Freelancer , React, Javascript ,  Nantes, Loire Atlantique"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
