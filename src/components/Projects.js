import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "Media Store - Saudi Arabia": {
        desc:
          "Led comprehensive marketing strategy as Marketing Manager. Boosted social media engagement by 300% and increased ad-driven sales by 180% in the first 3 months. Developed content and ad packages specifically tailored to the Saudi market.",
        techStack: "Meta Ads, Google Ads, Social Media Management, Market Research",
        
        results: "300% engagement boost, 180% sales increase"
      },
      "Etqan Academy - Saudi Arabia": {
        desc:
          "Worked as Marketing Consultant to create complete marketing strategy. Successfully helped enroll over 1,000 students through the first ad campaign and built a strong online presence and brand identity from scratch.",
        techStack: "Digital Strategy, Brand Identity, Lead Generation, Content Marketing",
       
        results: "1,000+ student enrollments"
      },
      "Magic Design Agency - Egypt": {
        desc:
          "Founded and led creative agency specializing in advertising and marketing. Managed 80+ small and medium businesses, generating over 2 million EGP in total revenue through strategic ad campaigns and brand development.",
        techStack: "Business Development, Team Leadership, Campaign Management, Brand Strategy",
       
        results: "2M+ EGP revenue generated"
      },
      "Alexandria Restaurant Campaign": {
        desc:
          "Developed and executed a complete marketing campaign for a restaurant in Alexandria. Created targeted ad strategy, engaging content, and optimized delivery systems resulting in exceptional customer acquisition.",
        techStack: "Local Marketing, Facebook Ads, Content Creation, Performance Analytics",
        
        results: "3,000+ orders in first month"
      },
      "Travel Office Brand Launch": {
        desc:
          "Created complete brand identity and launch strategy for a travel office. Developed comprehensive marketing approach including visual identity, content strategy, and targeted advertising to maximize reach and engagement.",
        techStack: "Brand Identity, Launch Strategy, Multi-Platform Advertising, Audience Targeting",
      
        results: "100,000+ people reached in 5 days"
      },
      "Personal Brand Development": {
        desc:
          "Specialized consulting for trainers, public figures, and product creators. Developed customized strategies to help personal brands reach their ideal audience through authentic messaging and targeted campaigns.",
        techStack: "Personal Branding, Audience Development, Content Strategy, Influence Marketing",
       
        results: "Multiple successful brand launches"
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ featured projects</span>
        </div>
        
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <div className="project-role">
                      {projects[key]["role"]}
                    </div>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-results">
                    <strong>Results: </strong>{projects[key]["results"]}
                  </div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>

        {/* Contact CTA Section */}
        <FadeInSection delay="700ms">
          <div className="contact-cta">
            <div className="cta-content">
              <h2 className="cta-title">Contact Me Now</h2>
              <p className="cta-subtitle">Let's work together</p>
              <p className="cta-description">
                Ready to boost your business with proven marketing strategies? 
                Let's discuss how we can achieve exceptional results for your brand.
              </p>
              <button className="cta-button" onClick={() => window.open('https://wa.me/201114582074', '_blank')}>
                Get In Touch
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Projects;