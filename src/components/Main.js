import React from "react";
import Hello from "./Hello";



/**
 * Membuat Component Main
 */
function Main() {
  return (
    <div>
      <main>
        <Hello name="sinka" />
        <Hello name="indah" />
        <Hello name="melody" />
        <Hello name="naomi" />
        <Hello name="shani" />
      </main>
    </div>
  );
}

// export Component Main
export default Main;