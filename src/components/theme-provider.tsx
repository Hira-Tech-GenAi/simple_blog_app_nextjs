"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"; //? Import ThemeProvider from 'next-themes' to manage theme context

//*  Custom ThemeProvider component that wraps around children components to provide theme context
export function ThemeProvider({
  children, //* The child components that will have access to the theme context
  ...props //* Spread operator to include any additional props passed to the ThemeProvider
}: React.ComponentProps<typeof NextThemesProvider>) {
  //? React.ComponentProps extracts the prop types of the NextThemesProvider for strong typing
  return (
    <NextThemesProvider {...props}>
      {/* Pass all received props to the NextThemesProvider */}
      {children} {/* Render the child components inside the provider */}
    </NextThemesProvider>
  );
}
