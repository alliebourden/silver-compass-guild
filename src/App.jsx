import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import "./App.css";

export default function App() {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined">Welcome!</Sheet>
    </CssVarsProvider>
  );
}
