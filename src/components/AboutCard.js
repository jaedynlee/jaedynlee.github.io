import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const AboutCard = ({ darkMode }) => {
    const textColor = darkMode ? 'text-light' : 'text-dark'

    return (
        <Card className="mb-3" bg={darkMode ? 'dark' : 'white'} border={darkMode ? 'secondary' : ''}>
            <Card.Body>
                <h2 className='mb-3 pl-1'>Jaedyn Lee</h2>
                <div className={`mb-1 ${textColor}`}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className='pl-2'>Arlington, VA, USA</span>
                </div>

                <div className='mb-1'>
                    <Card.Link className={textColor} href='https://github.com/jaedynlee' target='blank'>
                        <FontAwesomeIcon icon={faGithub} />
                        <span className='pl-2'>github.com/jaedynlee</span>
                    </Card.Link>
                </div>

                <div className='mb-1'>
                    <Card.Link className={textColor} href='https://linkedin.com/in/jaedynlee' target='blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className='pl-2'>linkedin.com/in/jaedynlee</span>
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AboutCard