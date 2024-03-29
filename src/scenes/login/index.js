import React, { Component } from "react";
import Header from "../../components/header";
import SubHeading from "../../components/subheading";
import SmallCarousel from "../../components/smallCarousel";
import Carousel from "../../components/carousel";
import "./style.css";

const constants = require("./constant");
const Data = require("../../utilities/constants");

export default class Login extends Component {
  renderTopView() {
    return (
      <div style={{ flex: 1 }}>
        <div className="backgroundImage">
          <div className="headerView">
            <Header data={Data.MENU_ITEM} />
          </div>
          <div>
            <div className="burgerImageContainer">
              <img
                src={require("../../assets/Group 1312.png")}
                alt=""
                className="burgerImage"
                srcSet="../../assets/Group 1312@2x.png 2x,../../assets/Group 1312@3x.png 3x"
              />
            </div>
            <div className="middleTextContainer">
              <p className="partyText">{constants.PARTY_TEXT}</p>
              <div className="orangeImageContainer">
                <p className="offerText">
                  {constants.TOP_CONTAINER_SUBHEADING}
                </p>
              </div>
              <div className="buttonContainer">
                <p className="orderNowText">{constants.ORDER_NOW_TEXT}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src={require("../../assets/Group 1390.png")}
          className="separator"
          alt=""
        /> */}
      </div>
    );
  }

  renderUpperMiddleView() {
    return (
      <div className="upperMiddleOuterContainer">
        <div>
          <SubHeading
            heading={constants.WANT_TO_EAT_TEXT}
            subHeading={constants.SUBHEADING_TEXT}
          />
        </div>
        <div style={{ marginTop: "10%" }}>
          <SmallCarousel data={Data.CAROUSEL_DATA} />
        </div>
      </div>
    );
  }

  renderBottomMiddleView() {
    return (
      <div style={{ marginTop: "3%" }}>
        {/* <img
          src={require("../../assets/Group 1397.png")}
          className="bmvImage"
          alt=""
        /> */}
        <div className="carouselView">
          <Carousel data={Data.CONTENT} />
        </div>
        {/* <img
          src={require("../../assets/Group 1419.png")}
          className="bmvImage"
          alt=""
        /> */}
      </div>
    );
  }

  renderComments() {
    return (
      <div className="outerCommentView">
        <span className="leftView">
          <img
            src={require("../../assets/beautiful-young-healthy-woman-holds-tasty-big-burger-with-beef-cutlet-concept-nourishing-food_152625-788.png")}
            alt=""
            className="ladyImage"
          />
          <div className="rectangle"></div>
        </span>
        <span className="rightView">
          <img
            src={require("../../assets/Group 1346.png")}
            alt=""
            className="convoImage"
          />
          <p className="convoText">{constants.COMMENT_TEXT}</p>
          <p className="nameText">{constants.NAME}</p>
          <p className="companyText">{constants.COMPANY}</p>
          <div className="indexView">
            <div className="orangeIndex"></div>
            <div className="whiteIndex"></div>
            <div className="whiteIndex"></div>
          </div>
        </span>
      </div>
    );
  }

  renderBottomView() {
    return (
      <div style={{ flex: 1 }}>
        <div>
          <SubHeading
            heading={constants.TESTIMONIAL_TEXT}
            subHeading={constants.SUBHEADING_TEXT}
          />
          {this.renderComments()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        {this.renderTopView()}
        {this.renderUpperMiddleView()}
        {this.renderBottomMiddleView()}
        {this.renderBottomView()}
      </div>
    );
  }
}
