import { css } from "@emotion/react";
import styled from "@emotion/styled";

const FG_RED = "#ea3333";
// const FG_BLUE_1 = "#11143C";
// const FG_BLUE_2 = "#2B85C4";

const TitleText = styled.div`
  font-family: "Suwannaphum", serif;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-size: 3rem;
  text-align: center;

  text-shadow: ${FG_RED} 0px 0px 3px, ${FG_RED} 0px 0px 3px,
    ${FG_RED} 0px 0px 3px, ${FG_RED} 0px 0px 3px, ${FG_RED} 0px 0px 3px,
    ${FG_RED} 0px 0px 3px;
  -webkit-font-smoothing: antialiased;
`;

const Link = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  outline: 2px solid ${FG_RED};
  cursor: pointer;
  width: 15rem;
  text-align: center;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;

  border: 2px solid white;

  &:hover {
    background-color: ${FG_RED};
    color: white;
  }
`;

function App() {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100svh",
        margin: "1rem",
      })}
    >
      <TitleText>Frost Giants Hockey Club</TitleText>
      <img
        css={css({
          height: "20rem",
          pointerEvents: "none",
        })}
        src="/logo.svg"
      />
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          margin: "1rem",
        })}
      >
        <Link href="mailto:frostgiantscaptains@gmail.com">Contact</Link>
        <Link href="/stats">Schedule and Stats</Link>
      </div>
    </div>
  );
}

export default App;
