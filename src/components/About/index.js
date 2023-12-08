import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

	    
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
		          'A', 'b', 'o', 'u', 't', ' ', 'm', 'e', ' ', 'a', 'n', 'd', ' ', 's', 't', 'o', 'r', 'y', 
		           ' ', ',', 'o', 'f', ' ', 'I', 't', 'z', 'e', 'n', 'c', 'a'
              ]}
	                
              idx={15}
            />
          </h1>
	  <p>
	    Itzenca is a nostalgic project. It reminds me of when my siblings and I wanted to start our own website. We had 
	    planned the features and even came up with the name but we didn't know where to start. We were just told that domain 
	    hosting and internet are expensive and that discouraged us. With this tool Itzenca can help one search for domians and 
	    get started on building their website(s). At least they'll not get stuck where we did. We didn't have grit then but am 
	    grateful for ALX for giving me and other students an opportunity to empower us with knowledge and for me to revive 
	    my childhood dream. 
	  </p>
          <p>
            I'm a  Software developer looking for a role in an
            established or start-up IT company with the opportunity to work on the latest
            technologies, but mostly technologies that'll help create a balance to humanities/life's problems.
          </p>
          <p align="LEFT">
            I'm always willing to learn new things, am strong willed, and always optimistic when approaching
	    every situation in programming and life because everything is half false/true thus I believe everyone 
	    can will to do anything.
          </p>
          <p>
            One word that can define me is I'm family-oriented. Family gives me meaning and that's 
	    the first link that fully connects one to existence. I like reading books, playing sports,
            gaming, and technology :/). 
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
