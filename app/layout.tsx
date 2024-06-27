import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

export const metadata = {
  title: "School Day",
  description: "A live clock for tracking classes in a school day, assuming each day is the same.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications position="bottom-left" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
