import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Main(props) {
  const { theme } = useContext(ThemeContext);
  return (

        <main className={`${theme}-theme`}>
          <h1>Much todo About Nada</h1>
        </main>
      )}


export default Main;
