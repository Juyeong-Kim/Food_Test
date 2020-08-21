import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RESULT_LIST = [
  {
    title: "나쁜 편",
    content:
      "나쁜 식습관은 만성질병을 일으킬 수 있습니다. 식사지침의 키포인트를 항상 염두에 두시어 생활하시길 바라며, 식생활 전문가와 상담하시길 권장합니다.",
    image: "../assets/images/resultFirst.jpg",
  },
  {
    title: "보통",
    content:
      "좋은 식습관도 있지만 그렇지 않은 부분도 있습니다. 더 좋은 식생활을 위해 노력이 필요하며 식사지침의 키포인트를 항상 염두에 두시어 생활하시길 바랍니다.",
    image: "../assets/images/resultSecond.jpg",
  },
  {
    title: "좋은 편",
    content:
      "현재와 같은 식습관을 유지하시고 식사지침의 키포인트를 항상 염두에 두시어 생활하시길 바랍니다.",
    image: "../assets/images/resultThird.jpg",
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
          <BackgroundImage src={item.image} />
          <GrayScale />
          <Header />
          <TitleContainer>
            <TitleText>
              당신의 식습관은
              <br />
              <TitleEmphasisText>'{item.title}'</TitleEmphasisText> 입니다.
            </TitleText>
          </TitleContainer>
        </HeadContainer>
        <BodyContainer>
          <BodyLineContainer>
            <FaQuoteLeft size={55} style={{ color: "#ffffff" }} />
            <ContentsContainer>
              <ContentsText>{item.content}</ContentsText>
            </ContentsContainer>
            <FaQuoteRight size={55} style={{ color: "#ffffff" }} />
            <Link to="/">
              <GoHomeButton>처음으로</GoHomeButton>
            </Link>
          </BodyLineContainer>
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
  width: 600px;
  height: 1080px;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 600px;
  height: 320px;
`;

const BackgroundImage = styled.image`
  position: absolute;
  width: 600px;
  height: 320px;
  z-index: 0;
`;

const GrayScale = styled.div`
  background-color: black;
  position: absolute;
  opacity: 0.2;
  width: 600px;
  height: 320px;
  z-index: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 600px;
  height: 210px;
  z-index: 2;
  text-align: center;
`;

const TitleText = styled.span`
  font-family: NotoSansKR-Thin;
  font-size: 40px;
  color: #ffffff;
`;

const TitleEmphasisText = styled.span`
  font-family: NotoSansKR-Bold;
  font-size: 45px;
  color: #ffffff;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  width: 600px;
  height: 750px;
  border-radius: 50px 50px 0px 0px / 50px 50px 0px 0px;
  background-color: #3ab9fc;
  z-index: 2;
`;

const BodyLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 520px;
  height: 720px;
  border: solid 3px #ffffff;
  border-bottom: none;
  border-radius: 20px 20px 0px 0px / 20px 20px 0px 0px;
  background-color: #3ab9fc;
`;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 260px;
`;

const ContentsText = styled.span`
  align-self: flex-start;
  font-family: NotoSansKR-Bold;
  font-size: 23px;
  color: #ffffff;
`;

const GoHomeButton = styled.button`
  width: 300px;
  height: 80px;
  border: 0px;
  border-radius: 50px;
  background-color: #ffffff;
  font-family: NotoSansKR-Light;
  font-weight: normal;
  font-size: 35px;
  color: #3ab9fc;
  cursor: pointer;
`;
