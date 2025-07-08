import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Menuiserie Joire</title>
      </head>
      <body class="bg-black min-h-screen text-white mx-auto">
        <Component />
      </body>
    </html>
  );
}
