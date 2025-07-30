import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
     <p>
I’m a Digital Marketing Expert and founder of Magic Design — a creative agency helping brands grow across Egypt and the Gulf. With over 5 years of hands-on experience, I’ve led 150+ successful projects in industries like F&B, e-commerce, education, and travel.

I focus on results-driven marketing, not theory. My campaigns have generated over 2M EGP in revenue across Egypt, Saudi Arabia, and Sudan, built on data-backed strategies and proven results.

If you're looking to turn your idea into growth — let’s make it happen.
</p>

    );
  
     const two = (
      <p>
    Outside of work, I enjoy exploring marketing trends, building businesses, and sharing insights on social media.
      </p>
    );

    const tech_stack = [ "Meta Ads",
       "Google Ads" ,
       "SEO & SEM",
       "Content Strategy",
       "Branding & Visual Design"

     
    ];

   return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
            
             
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;