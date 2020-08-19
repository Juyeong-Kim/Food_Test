import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RESULT_LIST = [
  {
    title: "당신은 식습관이 나쁜 편입니다.",
    content:
      "나쁜 식습관은 만성질병을 일으킬 수 있습니다. 식사지침의 키포인트를 항상 염두에 두시어 생활하시길 바라며, 식생활 전문가와 상담하시길 권장합니다.",
    image: "./assets/images/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg",
  },
  {
    title: "당신은 식습관은 보통입니다.",
    content:
      "좋은 식습관도 있지만 그렇지 않은 부분도 있습니다. 더 좋은 식생활을 위해 노력이 필요하며 식사지침의 키포인트를 항상 염두에 두시어 생활하시길 바랍니다.",
    image: "./assets/images/brooke-lark-4J059aGa5s4-unsplash.jpg",
  },
  {
    title: "당신은 식습관이 좋은 편입니다.",
    content:
      "현재와 같은 식습관을 유지하시고 식사지침의 키포인트를 항상 염두에 두시어 생활하시길 바랍니다.",
    image: "./assets/images/brooke-lark-JUPOXXRNdcA-unsplash.jpg",
  },
];

export default class Result extends React.Component {
  render() {
    const score = this.props.location.score;
    const resultItem = this.getResult(score);
    return <div className="get__result">{this.renderResult(resultItem)}</div>;
  }

  getResult = (score) => {
    if (score <= 49) {
      return RESULT_LIST[0];
    } else if (score <= 79) {
      return RESULT_LIST[1];
    } else {
      return RESULT_LIST[2];
    }
  };

  renderResult = (item) => {
    return (
      <ResultContainer>
        <HeadContainer>
          <Header />
          <TitleContainer>
            <TitleText>{item.title}</TitleText>
          </TitleContainer>
        </HeadContainer>
        <BodyContainer>
          <FaQuoteLeft size={60} style={{ color: "#ffffff" }} />
          <ContentsContainer>
            <ContentsText>{item.content}</ContentsText>
          </ContentsContainer>
          <FaQuoteRight size={60} style={{ color: "#ffffff" }} />
          <Link to="/">
            <GoHomeButton>처음으로</GoHomeButton>
          </Link>
        </BodyContainer>
      </ResultContainer>
    );
  };
}

// ResultStyle

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33vw;
  height: 100vh;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const TitleText = styled.span`
  font-family: NotoSansKR-Medium;
  font-size: 30px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  border-radius: 50px 50px 0px 0px / 50px 50px 0px 0px;
  background-color: #3ab9fc;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

const ContentsText = styled.span`
  align-self: flex-start;
  font-family: NotoSansKR-Bold;
  font-size: 30px;
  color: #ffffff;
`;

const GoHomeButton = styled.button`
  width: 100%;
  border: 0px;
  border-radius: 50px;
  background-color: #ffffff;
  font-family: NotoSansKR-Light;
  font-weight: normal;
  font-size: 35px;
  cursor: pointer;
`;
