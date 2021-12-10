import { Provider } from "react-redux";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { store } from "../app/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Provider store={store}>
//         <Component {...pageProps} />;
//       </Provider>
//     </SessionProvider>
//   );
// }

// export default MyApp;
