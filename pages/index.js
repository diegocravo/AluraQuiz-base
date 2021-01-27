import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget/index";
import Footer from "../src/components/Footer/index";
import GitHubCorner from "../src/components/GitHubCorner/index";
import QuizBackground from "../src/components/QuizBackground/index";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Paragraph = styled.p`
  font-size: 50px;
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-repeat: repeat;
  background-size: auto;
  background-position: 50% 50%;
  height: 100vh;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Portugues</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <h1>Portugues</h1>
          <p>lorem ipsum</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/diegocravo" />
    </QuizBackground>
  );
}
