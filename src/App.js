import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false
    }
  }
  playVideo = () => {
    this.setState({ isPlay: true })
  }
  render() {
    return (
      <main className="root">
        <div className="main">
          <div className="block header">
            <div className="header-button-group row justify-content-end" style={{ "marginRight": "-1%" }}>
              <div className="button button-discord">
                <img alt="Cant find File!" src="/assets/Discord Icon.png"></img>
              </div>
              <div className="button button-twitter">
                <img alt="Cant find File!" src="/assets/Twitter Icon.png"></img>
              </div>
            </div>
          </div>
          <img
            alt="Cant find File!"
            className="body"
            src="assets/top-border.png"
            style={{ width: "100%" }}
          ></img>
          <img alt="Cant find File!" className="header-logo" src="/assets/logo 1.png"></img>
          {/* <img
            alt="Cant find File!"
            className="body"
            src="assets/gif/main.gif"
            style={{ width: "100%" , marginTop: "-5%", position: "relative" ,  zIndex: "-2"}}
          ></img> */}
          <img
            alt="Cant find File!"
            className={"body " + this.state.isPlay ? "gif-style" : ""}
            src={this.state.isPlay ? "assets/gif/main.gif" : "assets/map.png"}

          ></img>
          {!this.state.isPlay && <img alt="Cant find File!" onClick={this.playVideo} className="play-button" src="/assets/play.png"></img>}
        </div>
        <div className="custom-border" style={{ "zIndex": "11" }}>
          <div className="background-boder">
            <img alt="Cant find File!" src="assets/custom-border-bottom-only.png" style={{marginTop: '-1vh'}}></img>
          </div>
        </div>
        <div className="story">
          <div
            className=" sidebar-border custom-left-border "
            style={{ left: "0px" }}
          >
            <div className="shellboarder-left"></div>
            {/* <img alt="Cant find File!" src="assets/shellboarder-left.png"></img> */}
          </div>

          <div className="content">
            <div className="block block-second row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                <img
                  alt="Cant find File!"
                  src="/assets/gif/MintSection_Image.gif"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div className="Text-Section col-lg-7 col-md-7 col-sm-7 col-xl-7">
                <div className="message row">
                  <img
                    alt="Cant find File!"
                    src="/assets/TextBubble.png"
                    style={{ width: "100%", float: "left", zIndex: "1" }}
                  ></img>
                </div>
                <div className="mint-button row">
                  <img
                    alt="Cant find File!"
                    src="/assets/MintSection_Button.png"
                  ></img>
                </div>
              </div>
            </div>
            <div className="custom-border">
              <div className="background-boder">
                <img alt="Cant find File!" src="assets/custom-border.png"></img>
              </div>
            </div>
            <div className="block-third">
              <img
                alt="Cant find file!"
                src="/assets/BlackGradient.png"
                style={{ width: "100%" }}
              ></img>
              <div className="title">
                <img alt="Cant find File!" src="/assets/TheTimeline.png"></img>
              </div>
              <div className="TimeLine_Phase">
                <div className="step first-step">
                  <img
                    alt="Cant find File!"
                    className="phase"
                    src="/assets/TimeLine_Phase.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    src="assets/gif/nickturtlevideo-2.gif"
                    className="animation"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="pond"
                    src="/assets/Pond.png"
                  ></img>
                </div>
                <div className="sign">
                  <img
                    alt="Cant find file!"
                    src="/assets/Sign1.png" className="sign-1"></img>
                </div>
              </div>
              <div className="TimeLine_Phase ">
                <div className="sign ">
                  <img
                    alt="Cant find file!"
                    src="/assets/Sign2.png" className="sign-2"></img>
                </div>
                <div className="step second-step">
                  <img
                    alt="Cant find File!"
                    className="phase"
                    src="/assets/TimeLine_Phase.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    src="assets/gif/nickturtlevideo-3.gif"
                    className="animation"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="pond"
                    src="/assets/Pond.png"
                  ></img>
                </div>
              </div>
              <div className="TimeLine_Phase" style={{ marginBottom: "30%" }}>
                <div className="step third-step">
                  <img
                    alt="Cant find File!"
                    className="phase"
                    src="/assets/TimeLine_Phase.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    src="assets/maxresdefault 1.png"
                    className="animation"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="pond"
                    src="/assets/Pond.png"
                  ></img>
                </div>
                <div className="sign">
                  <img
                    alt="Cant find file!"
                    src="/assets/Sign3.png" className="sign-1"></img>

                </div>
                <img
                  alt="Cant find file!"
                  src="/assets/BlackGradient-2.png"
                  style={{ width: "100%", zIndex: "2" }}
                ></img>
                <img
                  alt="Cant find file!"
                  className="gif-lock" src="/assets/gif/lock.gif"></img>
              </div>
            </div>
            <div className="custom-border">
              <div className="background-boder">
                <img alt="Cant find File!" src="assets/custom-border.png"></img>
              </div>
            </div>
            <div className="block-forth">
              <img
                alt="Cant find file!"
                src="/assets/BlackGradient.png"
                style={{ width: "100%" }}
              ></img>
              <img
                alt="Cant find File!"
                className="title"
                src="/assets/block-forth-title.png"
              ></img>
              <div className="item item-first">
                
                <div className="item-top-part">
                  <div>
                    <img
                      alt="Cant find File!"
                      className="item-title item-title-stoneage"
                      src="/assets/stoneage.png"
                    ></img>
                    <img
                      alt="Cant find File!"
                      className="item-title-end item-title-common"
                      src="/assets/common.png"
                    ></img>
                  </div>

                  <img
                    alt="Cant find File!"
                    className="item-description"
                    src="/assets/gif/COutfit.gif"
                  ></img>
                </div>
                <div className="item-bottom-part">
                  <img
                    className="left"
                    alt="Cant find File!"
                    src="/assets/gif/StoneAge_Turtle_Icon.gif"
                  ></img>
                  <img
                    className="right"
                    alt="Cant find File!"
                    src="/assets/stoneagehome.png"
                  ></img>
                </div>
              </div>
              <div className="item item-second">
                
                <div className="item-top-part">
                  <div>
                    <img
                      alt="Cant find File!"
                      className="item-title item-title-egyptian"
                      src="/assets/egyptian.png"
                    ></img>
                    <img
                      alt="Cant find File!"
                      className="item-title-end item-title-uncommon"
                      src="/assets/uncommon.png"
                    ></img>
                  </div>

                  <img
                    alt="Cant find File!"
                    className="item-description"
                    src="/assets/gif/EOutfit.gif"
                  ></img>
                </div>
                <div className="item-bottom-part">
                  <img
                    className="left"
                    alt="Cant find File!"
                    src="/assets/gif/Egyptian_Turtle_Icon.gif"
                  ></img>
                  <img
                    className="right"
                    alt="Cant find File!"
                    src="/assets/egyptianhome.png"
                  ></img>
                </div>
              </div>
              <div className="item item-third">
                
                <div className="item-top-part">
                  <div>
                    <img
                      alt="Cant find File!"
                      className="item-title item-title-renaissance"
                      src="/assets/renaissance.png"
                    ></img>
                    <img
                      alt="Cant find File!"
                      className="item-title-end item-title-rare"
                      src="/assets/rare.png"
                    ></img>
                  </div>

                  <img
                    alt="Cant find File!"
                    className="item-description"
                    src="/assets/gif/ROutfit.gif"
                  ></img>
                </div>
                <div className="item-bottom-part">
                  <img
                    className="left"
                    alt="Cant find File!"
                    src="/assets/gif/Renaissance_Turtle_Icon.gif"
                  ></img>
                  <img
                    className="right"
                    alt="Cant find File!"
                    src="/assets/renaissancehome.png"
                  ></img>
                </div>
              </div>
              <div className="item item-forth">
                
                <div className="item-top-part">
                  <div>
                    <img
                      alt="Cant find File!"
                      className="item-title item-title-modern"
                      src="/assets/modern.png"
                    ></img>
                    <img
                      alt="Cant find File!"
                      className="item-title-end item-title-epic"
                      src="/assets/epic.png"
                    ></img>
                  </div>
                  <img
                    alt="Cant find File!"
                    className="item-description"
                    src="/assets/gif/MOutfit.gif"
                  ></img>
                </div>
                <div className="item-bottom-part">
                  <img
                    className="left"
                    alt="Cant find File!"
                    src="/assets/gif/Modern_Turtle_Icon.gif"
                  ></img>
                  <img
                    className="right"
                    alt="Cant find File!"
                    src="/assets/modernhome.png"
                  ></img>
                </div>
              </div>
              <div className="item item-fifth">
                
                <div className="item-top-part">
                  <div>
                    <img
                      alt="Cant find File!"
                      className="item-title item-title-future"
                      src="/assets/future.png"
                    ></img>
                    <img
                      alt="Cant find File!"
                      className="item-title-end item-title-legenoary"
                      src="/assets/legenoary.png"
                    ></img>
                  </div>
                  <img
                    alt="Cant find File!"
                    className="item-description"
                    src="/assets/gif/FOutfit.gif"
                  ></img>
                </div>
                <div className="item-bottom-part">
                  <img
                    className="left"
                    alt="Cant find File!"
                    src="/assets/gif/Future_Turtle_Icon.gif"
                  ></img>
                  <img
                    className="right"
                    alt="Cant find File!"
                    src="/assets/futuristichome.png"
                  ></img>
                </div>
              </div>
              <div className="item item-sixth">
                
                <div className="item-bottom-part">
                  <div className="left">
                    <img alt="Cant find File!" 
                    src="/assets/meta.png"></img>
                  </div>
                  <div className="right">
                    <div>
                      <img
                        alt="Cant find File!"
                        className="item-title item-title-meta"
                        src="/assets/meta-title.png"
                      ></img>
                      <img
                        alt="Cant find File!"
                        className="item-title-end item-title-question3"
                        src="/assets/question3.png"
                      ></img>
                    </div>
                    <img
                      alt="Cant find File!"
                      className="item-description"
                      src="/assets/gif/MEutfit.gif"
                    ></img>
                  </div>
                </div>
              </div>
              {/* <img
                alt="Can't find file!"
                src="/assets/BlackGradient-2.png"
                style={{ width: "100%", position: "absolute" , marginTop : "-1%" }}
              ></img> */}

              <div className="footer">
                <img alt="Cant find File!" src="/assets/BottomTurtles.png"></img>

              </div>
            </div>
          </div>

          <div
            className=" sidebar-border custom-right-border"
            style={{ right: "0px" }}
          >
            <div className="shellboarder-right"></div>
            {/* <img alt="Cant find File!" src="assets/shellboarder-right.png"></img> */}
          </div>
        </div>

        <div className="border-bottom">
          <div className="shellboarder-bottom"></div>
          {/* <img alt="Cant find File!" src="assets/shellboarder-right.png"></img> */}
        </div>

        <div className="footer-group">
          <div className="button-group ">
            <div className="button button-discord">
              <img
                alt="Cant find File!"
                src="/assets/Discord Icon.png"
              ></img>
            </div>
            <div className="button button-twitter">
              <img
                alt="Cant find File!"
                src="/assets/Twitter Icon.png"
              ></img>
            </div>
          </div>
          <div className="mark-end"><small>Ⓒ 2021 Time Turtle</small></div>

        </div>

      </main>
    );
  }
}

export default App;
