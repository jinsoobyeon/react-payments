import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CardContext } from "../Payments";
import Title from "../components/Title";
import CompletedCard from "../components/CompletedCard";
import UnderlineInput from "../components/UnderlineInput";
import Button from "../components/Button";

function CompleteCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cards, setCards } = useContext(CardContext);

  const { state: recentCard } = location;

  const [nickName, setNickName] = useState("클린카드");
  const [cardsLessRecent, SetCardsLessRecent] = useState([]);

  const handleSetState = (event, setState) => {
    setState(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    setCards([...cardsLessRecent, { ...recentCard, nickName }]);
    navigate("/list");
  };

  useEffect(() => {
    SetCardsLessRecent(cards.filter((card) => card.id !== recentCard.id));
  }, [cards, recentCard]);

  return (
    <Root>
      <App flexColumnCenter>
        <FlexCenter>
          <Title marginBottom="2.5rem">카드등록이 완료되었습니다.</Title>
        </FlexCenter>
        <CompletedCard completedCard={recentCard} big textBig bigChip />
        <Form onSubmit={submit}>
          <InputContainer flexCenter width="100%">
            <UnderlineInput
              type="text"
              placeholder="카드 별칭 (선택)"
              onChange={(event) => handleSetState(event, setNickName)}
              maxLength="10"
              width="75%"
            />
          </InputContainer>
          <Button marginTop="11.5rem">다음</Button>
        </Form>
      </App>
    </Root>
  );
}

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const App = styled.div`
  height: 100%;
  padding: 16px 24px;
  ${(props) =>
    props.flexColumnCenter &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 16px 0;
  ${(props) =>
    props.flexCenter &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default CompleteCard;