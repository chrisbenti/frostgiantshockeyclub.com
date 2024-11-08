import { css } from "@emotion/react";

function App() {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#282c34",
      })}
    >
      <img
        css={css({
          height: "40vmin",
          pointerEvents: "none",
        })}
        src="/logo.svg"
      />
    </div>
  );
}

export default App;
