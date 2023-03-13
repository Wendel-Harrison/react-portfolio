import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () =>  {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
        return  setLetterClass('text-animate-hover')
        }, 3000)
      })
      
    
    return (
        <>
        <div className="container about-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
                        idx={15}
                    />
                </h1>
                <p>Eu sou desenvolvedor Full-Stack, tenho mais conhecimento em Front-end e estou aprendendo Back-end também. Sou muito ambicioso e com sede de aprendizado, apaixonado por tecnologia.</p>
                <p>Hoje faço parte do Instituto PROA como estudante, no curso desenvolvedor JAVA Web. Sempre buscando conhecimento pela internet à fora.</p>
                <p>Estou em busca de uma oportunidade profissional para mostrar meu potencial, aprender mais, me aprimorar e continuar desenvolvendo aquilo que amo. </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                    </div>
                </div>

            </div>
            
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About 