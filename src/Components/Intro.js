import React from 'react';

const Intro = props => {
	return (
		<div className="section-1">
			<div className="portfolio-photo col">
			<img src="http://jjs.life/pic.png" width="450" height="600" />
		</div>
		<div className="portfolio-summary col">
			<div>
			<div className="name">
				John Williamson.
			</div>
			<div className="summary">
				Front-end web developer in Melbourne. I enjoy the abstraction coding can bring between human and machine. Specialising in React, Node & Rails.
			</div>
			        <div className="social-icons">
          <a href="http://jjs.life" target="_blank"><i className="fa social-icon fa-globe fa-2x" aria-hidden="true"></i></a>
          <a href="http://facebook.com/John.J.95" target="_blank"><i className="fa social-icon fa-facebook-official fa-2x" aria-hidden="true"></i></a>
          <a href="https://github.com/velua" target="_blank"><i className="fa social-icon fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/jjwilliamson" target="_blank"><i className="fa social-icon fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/velua" target="_blank"><i className="fa social-icon fa-twitter fa-2x" aria-hidden="true"></i></a>
        </div>
		</div>
		</div>

		</div>
		)
}

export default Intro;