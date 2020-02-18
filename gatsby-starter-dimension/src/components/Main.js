import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Hi! My name is Jonathan Nocek and I am currently a senior at Illinois Wesleyan 
            University pursuing a major in Computer Science with a minor in Data Science.
          </p>
          <p>
            This past summer, I worked at Discover Financial Services as a Data Engineering Intern 
            in the Advanced Analytics department. After graduation, I will be returning to Discover 
            to continue my work as a Data Engineer.
          </p>
          <p>
            Outside of school and work, I am a member of the Men's Golf Team at IWU where we 
             won the 2019 Division III NCAA Men's Golf Championship!
          </p>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <b>Discover Financial Services </b> | Riverwoods, Illinois <br />
          Data Enginner &bull; August 2020 
            <ul>
              <li>Continuing work on Cloud Data Enablement team</li>
              <li>Starting full-time in August 2020</li>
            </ul>
          Data Enginnering Intern &bull; May 2019 - August 2020 
						<ul>
							<li>Worked on an Agile Software Development team as part of Cloud Data Enablement</li> 
							<li>Designed a CI/CD Curator function utilizing AWS (S3, Lambda, DynamoDB), Terraform, and Jenkins which migrates avro files between S3 buckets - Used in production</li>
							<li>Revitalized team documentation into central site using Sphinx to generate and Jenkins for automated deployment – Used in production</li>
						</ul>
					<b>Geneva National Resort </b> | Lake Geneva, Wisconsin <br />
          Assistant Golf Professional &bull; May 2018 - August 2018
						<ul>
							<li>One of four interns selected to assist with management and operation of 54-hole resort with 300+ members</li>
 							<li>Planned and executed corporate outings with up to 400 golfers</li>
							<li>Managed outdoor service staff of nearly 100 employees</li>
						</ul>
          <b>Illinois Wesleyan University </b> | Bloomington, Illinois <br />
            Teaching Assistant: CS125 - Intro to Data Science &bull; February 2020 - Present 
            <ul>
              <li>Assist students with Python, Pandas, Numpy, and various other Data Science tools</li>
            </ul>
            Athletic Facility Control &bull; August 2017 - Present 
            <ul>
              <li>Responsible for operation of Shirk Athletic Center including opening and closing</li>
            </ul>
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Education</h2>  
								<p><b>Illinois Wesleyan University - </b>B.S. Computer Science
                <ul>
									<li>Minor in Data Science</li>
									<li>Men's Golf Team - 2019 NCAA DIII National Champions</li>
									<li>Member of Student-Athlete Advisory Committee (SAAC)</li>
                </ul>
                </p>
								<b>Coursework</b>
								<ul>
									<li>Algorithm Design and Analysis</li>
									<li>Applied Data Analysis</li>
									<li>Artificial Intelligence</li>
									<li>Calculus I, II, III</li>
									<li>Computer Networking</li>
									<li>Capstone: Data Science</li>
									<li>Database Systems</li>
                  <li>Discrete Math</li>
                  <li>Linear Algebra</li>
									<li>Models of Computing</li>
                  <li>Probability</li>
									<li>Programming Languages</li>
									<li>Software Development</li>
								</ul>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Personal Projects</h2>  
            <h3>Data Analysis</h3>
            <p><b><a href="https://github.com/jonathannocek/twitter-analysis" target="_blank">Twitter Analysis:</a></b> Real-time streaming and analysis of Tweets 
              <ul>
                <li>Python</li>
                <li>AWS S3</li>
                <li>AWS EC2</li>
                <li>AWS Kinesis Firehose</li> 
                <li>AWS Lambda</li>
                <li>AWS Comprehend</li>
                <li>Elasticsearch</li>
                <li>Kibana</li>
              </ul>
            </p>

            <p><b><a href="https://github.com/jonathannocek/pga-data-analysis" target="_blank">PGA TOUR Data Analysis:</a></b> What separates the best players on Tour? 
              <ul>
                <li>Python</li>
                <li>Pandas</li>
                <li>NumPy</li> 
                <li>Matplotlib</li>
                <li>Seaborn</li>
              </ul>
            </p>
          <h3>Web Development</h3>
            <p>
              <b><a href="https://github.com/jonathannocek/personal-website" target="_blank">Personal Website:</a></b> Hosted using AWS S3 and CloudFront
                <ul>
                  <li>GatsbyJS</li>
                  <li>HTML</li>
                  <li>CSS</li> 
                  <li>S3</li>
                  <li>CloudFront</li>
                  <li>Route 53</li>
                </ul>
            </p>
          {close}
        </article>

        <article
          id="interests"
          className={`${this.props.article === 'interests' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Interests</h2>  
            <h3>Golf</h3>
              <p>
                I am currently a member of the Men's Golf Team at Illinois Wesleyan University. In May 2019, our team
                captured the program's first NCAA DIII Men's Golf Championship in Lexington, Kentucky. 
              </p>
            <h3>Travel</h3>
              <p>
                One of my favorite things to do is see all of things the world has to offer. A few items on my bucket list include:
                <li>The Inca Trail at Machu Picchu</li>
                <li>The Summit of Mount Kilimanjaro</li>
                <li>The Pyramids</li>
              </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Click on one of the icons below to find my Linkedin, Email, GitHub, or Resume.
          </p>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/jonathan-nocek-6a0615152/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="mailto:jnocek@iwu.edu" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonathannocek"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonathannocek/personal-website/blob/master/images/jonathan_nocek.pdf"
                className="icon fa-file-text"
              >
                <span className="label">Resume</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
