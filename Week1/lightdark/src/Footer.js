import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Footer(props) {
  const { theme } = useContext(ThemeContext);
  return (
        <footer className={`${theme}-theme`}>
          <h4>this is a foot 2021</h4>
        </footer>
      )}

export default Footer;
