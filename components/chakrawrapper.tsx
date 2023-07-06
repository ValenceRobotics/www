"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function ChakraWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = extendTheme({
    fonts: {
      logo: "Orbitron, sans-serif",
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
