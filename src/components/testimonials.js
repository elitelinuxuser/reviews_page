import React, { Component } from "react";

//Importing icons
// import icon_alumni_db from "../assets/icon-alumni-database.png";
// import icon_reunion from "../assets/icon-reunion.png";
// import icon_student_wings from "../assets/icon-student-wings.png";
// import icon_trophy from "../assets/icon-trophy.png";
// import icon_email from "../assets/icon-email.png";
// import icon_network from "../assets/icon-network.png";

class Grids extends Component {
    state={
        selectedOption: 'option1'
    }

    handleChange = (e)=>{
        this.setState({
            selectedOption: e.target.value
        })
    }

  render() {
    return (
      
<div className="slider">
  <input type="radio" name="slider" title="slide1" value="option1" onChange={this.handleChange} checked={this.state.selectedOption === "option1"} className="slider__nav"/>
  <input type="radio" name="slider" title="slide2" value="option2" onChange={this.handleChange} checked={this.state.selectedOption === "option2"} className="slider__nav"/>
  <input type="radio" name="slider" title="slide3" value="option3" onChange={this.handleChange} checked={this.state.selectedOption === "option3"} className="slider__nav"/>
  <input type="radio" name="slider" title="slide4" value="option4" onChange={this.handleChange} checked={this.state.selectedOption === "option4"} className="slider__nav"/>
  <div className="slider__inner">
    <div className="slider__contents"><i className="slider__image fa fa-codepen"></i>
      <h2 className="slider__caption">Testimonials</h2>
      <p className="slider__txt">"Great services provided by your site. Thank you very much"</p>
    </div>
    <div className="slider__contents"><i className="slider__image fa fa-codepen"></i>
      <h2 className="slider__caption">Testimonials</h2>
      <p className="slider__txt">"Best service out there to get started good reviews on your app in Google Play"</p>
    </div>
    <div className="slider__contents"><i className="slider__image fa fa-codepen"></i>
      <h2 className="slider__caption">Testimonials</h2>
      <p className="slider__txt">"Really Awesome service! Boosted my reviews a lot in a minimum amount of time."</p>
    </div>
    <div className="slider__contents"><i className="slider__image fa fa-codepen"></i>
      <h2 className="slider__caption">Testimonials</h2>
      <p className="slider__txt">"Easy to get reviews to get started with your organisation. Thank you BuyReviews!"</p>
    </div>
  </div>
</div>
    );
  }
}

export default Grids;