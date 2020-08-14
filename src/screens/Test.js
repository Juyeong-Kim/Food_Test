import React from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

const QUESTION_LIST = [
  "01. 규칙적인 시간에 3끼 식사를 한다.",
  "02. 매끼 골고루 식사를 하며 편식하지 않는다.",
  "03. 아침 식사는 꼭 먹는다.",
  "04. 식사량은 언제나 적당히 한다.",
  "05. 즐거운 마음으로 여유있게 식사를 한다.",
  "06. 1일 2끼이상 고기, 생선, 달걀, 콩, 두부 중 하나라도 섭취한다.",
  "07. 녹황색 채소(당근,시금치 등)를 섭취한다.",
  "08. 식물성 기름(들기름, 식용유 등)이 첨가된 음식 (나물, 볶음, 튀김)을 섭취한다.",
  "09. 우유나 유제품(요구르트, 요플레)을 먹는다.",
  "10. 과일이나 과일주스(무가당)를 섭취한다.",
  "11. 해조류(미역,김,다시마 등)를 섭취한다.",
  "12. 거의 매일 외식을 한다.",
  "13. 매일 가공식품(라면,과자 등)을 먹는다.",
  "14. 매일 동물성 기름이나 콜레스테롤이 많은 음식을 먹는다.",
  "15. 매일 짠 음식(젓갈,장아찌 등)이나 화학조미료를 섭취한다.",
  "16. 매일 단 음식(설탕,꿀,엿,콜라,단빵 등)을 섭취한다.",
  "17. 매일 카페인(커피,차류 등)이 든 음식을 하루 3잔 이상 마신다.",
  "18. 매일 과음 및 잦은 음주를 한다.",
  "19. 매일 담배를 피운다.",
  "20. 규칙적인 운동을 거의 하지 않는다.",
];

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
    };
    this.score = 0;
  }

  render() {
    return (
      <div className="test">
        <Header />
        <ProgressBar />
        <div className="test__question">
          <span className="question__text">
            {QUESTION_LIST[this.state.questionIndex]}
          </span>
        </div>
        <div className="test__answer">
          <div className="answer__box__1st">
            <span
              className="answer__text"
              onClick={() => {
                this.onClickAnswer(1);
              }}
            >
              2일 이하
            </span>
          </div>
          <div className="answer__box__2nd">
            <span
              className="answer__text"
              onClick={() => {
                this.onClickAnswer(2);
              }}
            >
              3~5일
            </span>
          </div>
          <div className="answer__box__3rd">
            <span
              className="answer__text"
              onClick={() => {
                this.onClickAnswer(3);
              }}
            >
              6일~7일
            </span>
          </div>
        </div>
      </div>
    );
  }

  onClickAnswer = (buttonIndex) => {
    this.sumScore(buttonIndex);

    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });

    if (this.state.questionIndex === QUESTION_LIST.length - 1) {
      this.props.history.push({
        pathname: "/result",
        score: this.score,
      });
    }
  };

  sumScore = (buttonIndex) => {
    switch (buttonIndex) {
      case 1:
        this.score += 1;
        break;
      case 2:
        this.score += 3;
        break;
      case 3:
        this.score += 5;
        break;
      default:
        break;
    }
  };
}
