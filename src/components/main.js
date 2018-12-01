import React, { Component } from "react";
import Form from "./form";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import google from "../images/google.svg";
import Testimonials from './testimonials';

const theme = {
  botBubbleColor: "#0063f8",
  headerBgColor: "#0063f8",
  background: "#f5f8fb",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botFontColor: "#fff",
  userBubbleColor: "#fff"
};

const steps = [
  {
    id: "0",
    message: "Hey, there! How can I help you?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "1"
  },
  {
    id: "1",
    message:
      "Please send your contact details with email id and we will get back to you soon",
    trigger: "3"
  },
  {
    id: "3",
    message: "Thanks for your time.",
    trigger: "4"
  },
  {
    id: "4",
    message: "Have a great day!",
    trigger: "2"
  }
];

configureAnchors({ offset: -60, scrollDuration: 280 });

class Main extends Component {
  render() {
    return (
      <main>
        <ScrollableAnchor id={"about"}>
          <section className="intro">
            <h2>About Us</h2>
            <div>
              <p>
                We provide genuine positive reviews on various platforms such as
                Facebook, Youtube, PlayStore, Twitter and Instagram so that you
                don't have to worry about it. We take care of it for you so that
                your organisation can grow faster.
              </p>
            </div>
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={"services"}>
          <div>
            <div className="services">
              <div className="service-one">
                <p className="service-icon">
                  <i
                    style={{ color: "#395498" }}
                    className="fab fa-facebook-f"
                  />
                </p>
                <p className="service-title">Facebook</p>
                <p>
                  Reviews on Facebook are very important for any organisation to
                  grow with the help of digital marketing as it defines the
                  quality of the organisation. We provide valuable reviews for
                  your Facebook pages and groups.{" "}
                </p>
              </div>
              <div className="service-two">
                <p className="service-icon">
                  <i style={{ color: "#CD2F2A" }} className="fab fa-youtube" />
                </p>
                <p className="service-title">Youtube</p>
                <p>
                  If you own a Youtube channel and are struggling to get reviews
                  as your viewership is really small. You don't need to worry
                  anymore. We will take care of it for you. We provide genuine
                  reviews on Youtube for you to grow.
                </p>
              </div>
              <div className="service-three">
                <p className="service-icon">
                  <img
                    src={google}
                    style={{ height: 43.2 }}
                    alt="playstore-logo"
                  />
                </p>
                <p className="service-title">PlayStore</p>
                <p>
                  You launched a new app and are thriving and asking users to
                  rate your app, but the users are ignoring becasue its what
                  they do. Let us take care of it for you. We provide PlayStore
                  ratings and reviews.
                </p>
              </div>
            </div>
          </div>
        </ScrollableAnchor>

        <Testimonials />

        <div className="gallery">
          <div className="gallery-item-one" />
          <div className="gallery-item-two" />
          <div className="gallery-item-three" />
          <div className="gallery-item-four" />
          <div className="gallery-item-five" />
          <div className="gallery-item-six" />
        </div>

        

        {/* <section>
          <h2>Our Mission</h2>
          <div>
            <p>
              Integer sit amet venenatis erat. Cras elementum tortor odio, sit
              amet euismod nunc cursus ut. Donec sollicitudin orci sed enim
              volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar
              sit amet dignissim in, consectetur eget nulla. Etiam ac turpis
              augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna.
              Nulla dapibus convallis luctus.{" "}
            </p>
            <p>
              Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis
              sem fringilla, tincidunt nisi non, congue libero. Etiam cursus
              nulla quis sapien varius, eget accumsan augue mattis. Cras
              accumsan sapien nulla, eu eleifend odio tempus sit amet.
              Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque
              eget. Aliquam eleifend velit vel libero elementum, vitae
              consectetur nisl sollicitudin. Suspendisse volutpat fringilla
              vehicula.
            </p>
          </div>
        </section> */}
        <ScrollableAnchor id={"contact"}>
          <section>
            <h2>Contact Us</h2>
            <Form />
          </section>
        </ScrollableAnchor>

        <ThemeProvider theme={theme}>
          <ChatBot floating steps={steps} />
        </ThemeProvider>
      </main>
    );
  }
}

export default Main;
