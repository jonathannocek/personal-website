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
              <p>To be updated...</p>
            <h3>Travel</h3>
              <p>To be updated...</p>
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
                href="https://s3.us-east-2.amazonaws.com/jonathannocek.com/jonathan_nocek.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLWVhc3QtMiJHMEUCIES2QngDpMbPexg52uJ6DcZ9yr0V0AJaitwM%2BKXp2AnIAiEAj2k8YKj5wPYRHBWcBpdikvnwdX2B%2FQsuh0WNpzdTJ54qjQIIGBAAGgwxMzk4Mjk2MjMxMTIiDEZJDvPVgJhPIKHMMirqAWH2mA5CNTvOB32wxOmH6UCO%2FU8TX3eAWvI52oYZ4tWcI%2B2WaXB5BTPiGxGmK1nwAbcb8hJyeuwYLZng3HYieJYXWawP%2BGe2qsGpoSUFjt4P6ECXpFD5tSj3SUdS6GuYhqqTBt4ZnXOG0kJOv6VvFWK6%2Fj0AfR1PH2ecnlTNK859r4EBfE7Dme1ri9t8rYyHhmYBi1MYa7Vt0u9DUxrZX4LHOhdrza5bAAf6CTpn9S5%2FZdd8ZjChcJK1N15U3ohcBdc0DulPuK91vaW1fCdiMtz44kGZhkY9Tf4zd8CdXsttgBmkKe3%2BFQ3qJTDsjYPyBTqCAxAZAXhv%2FLswqpdVj8mjjt%2BhYRSAbhHg050akjBNuFGR1WjvcoKQZAmo%2Fbz3wivuuW%2FHIX9F8QuXhLYirzJC79mTt8zBBx3rNxIBPhjFcw2fWKRCIzfUsoUtgbEO8uhPTHV2F0MNyj0Dj9MA6WR7Mu8qZYjSnFDZgYMowa9MIGug%2FMb296H0xYd%2F6PV47jd8sLJTVTLSTHzmLMk9bTDl%2Bd3g%2BYcOgU6IWOu%2FnXgzOWw99D%2FJllmhXcx0kCH5wcDAz1N8ZO%2BZ7hbR48lsVulSQi3ciza9KzV%2FWXcZB5es9DFTaP0s%2FoKN8wzgTlrRqQ%2FK56jX7XgerChAMNy00qS%2FDoN453Wsx8xOtBxTI4KXsYDNomIIYFv3Dggt3n3uRNmvjRFgMYpo%2BcCX4s7chH04rKaKdTNh1xoo9yUqBYX9s1X6qYBF08oK4kYvt%2B2cOsWzvXri7aov4OPm%2BRCIi19A162qRx7wnMmZShHXsEYWcssKhzwV0o5FiR%2BYUvKmo5729Kgq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200210T143010Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBDT6XFEBHSXQTML%2F20200210%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=82202e470bedf193b80c49512f92970fcb1cac610101852138f746eed57b82e5"
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
