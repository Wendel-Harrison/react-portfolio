import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/W.svg';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'n', 'd', 'e', 'l'];
    const jobArray = ['w', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    useEffect(() => {
        setTimeout(() => {
        return  setLetterClass('text-animate-hover')
        }, 4000)
      })
    
    

    return (
        <>
        <Loader type='pacman' /> 
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>O</span>
                <span className={`${letterClass} _12`}>l</span>
                <span className={`${letterClass} _13`}>á,</span>

                <br />
                <span className={`${letterClass} _14`}>E</span>
                <span className={`${letterClass} _15`}>u</span>
                <span className={`${letterClass} _16`}> </span>

                <span className={`${letterClass} _17`}>s</span>
                <span className={`${letterClass} _18`}>o</span>
                <span className={`${letterClass} _19`}>u</span>

                <img src={LogoTitle} alt="desenvolvedor" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={20} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={25} />
                </h1>
                <h2>Frontend Developer / JavaScript Beginner</h2>
                <Link to="/contact" className='flat-button'>CONTATO</Link>
            </div>
        </div>
        </>
    )
}

export default Home