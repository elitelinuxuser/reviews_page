import React, { Component } from "react";
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="intro" id="about">
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

        <div>
          <div className="services">
            <div className="service-one">
              <p className="service-icon">
                <i className="fab fa-facebook-f" />
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
                <i className="fab fa-youtube" />
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
                <i class="fab fa-google-play" />
              </p>
              <p className="service-title">PlayStore</p>
              <p>
                You launched a new app and are thriving and asking users to rate
                your app, but the users are ignoring becasue its what they do.
                Let us take care of it for you. We provide PlayStore ratings and
                reviews.
              </p>
            </div>
          </div>
        </div>

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

        <section>
          <h2>Contact Us</h2>
          <Form />
        </section>
      </main>
    );
  }
}

export default Main;
