import { Spinner } from "flowbite-react";
import { FC, Suspense } from "react";
import "../styles/globals.css";

const App: FC<unknown> = function ({ Component, pageProps }): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Spinner size="lg" /> Loading..
        </div>
      }
    >
      <Component {...pageProps} />
    </Suspense>
  );
};

export default App;
