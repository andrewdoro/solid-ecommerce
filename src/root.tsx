// @refresh reload
import "./root.css";
import "@unocss/reset/tailwind.css";
import "uno.css";

import { Suspense, useContext } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  ServerContext,
  Title,
} from "solid-start";

import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core";
import { isServer } from "solid-js/web";
import { Layout } from "./components/Layout";
import { trpc, client, queryClient } from "~/utils/trpc";

export default function Root() {
  const event = useContext(ServerContext);

  const storageManager = cookieStorageManagerSSR(
    isServer ? event?.request.headers.get("cookie") ?? "" : document.cookie
  );
  return (
    <Html lang='en'>
      <Head>
        <Title>Create JD App</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
        <trpc.Provider client={client} queryClient={queryClient}>
          <ErrorBoundary>
            <ColorModeScript storageType={storageManager.type} />
            <Suspense>
              <ColorModeProvider storageManager={storageManager}>
                <Layout>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </Layout>
              </ColorModeProvider>
            </Suspense>
            <Scripts />
          </ErrorBoundary>
        </trpc.Provider>
      </Body>
    </Html>
  );
}
