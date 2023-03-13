import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
        return  setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_twscpdn',
                'template_srlsmd6',
                form.current,
                'QvFlwtRn1vtxo3gtc'
            )
            .then(
                () => {
                    alert('Sua mensagem foi enviada!')
                    .window.location.reload(false)
                },
                () => {
                    alert('Erro ao enviar mensagem, tente novamente por favor!')
                }
            )
        }
    
    return(
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={[
                            'E', 
                            'n', 
                            't', 
                            'r', 
                            'e', 
                            ' ', 
                            'e', 
                            'm', 
                            ' ', 
                            'C', 
                            'o', 
                            'n', 
                            't', 
                            'a', 
                            't', 
                            'o'
                            ]}
                            idx={15} />
                    </h1>
                    <p>Estou interessado em entrar no mercado da tecnologia e poder desenvolver-me cada vez mais. Em busca de uma oportunidade de trabalho. Aberto há propostas para Freelance - Conto com sua ajuda para divulgar meu portfolio. Obrigado!</p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Nome:' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email:' required/>
                                </li>
                                <li>
                                    <input placeholder='Assunto' type="text" name='subject' required/> 
                                </li>
                                <li>
                                    <textarea placeholder='Mensagem:' name='message' required></textarea>
                                </li>
                                <li>
                                    <input  type="submit" className='flat-button' value='ENVIAR'/> 
                                </li>
                            </ul>
                        </form>
                    </div>
                    
                </div>
                <div className='info-map'>
                    Brasil,
                    <br />
                    São Paulo,
                    <br />
                    São Mateus (zona leste), <br />
                    Rua Pierrot Apaixonado, 21 <br />
                    <span>wendel.wdhr@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-23.60690, -46.44624]} zoom={13}>
                        <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-23.60690, -46.44624]}>
                            <Popup>Wendel mora aqui, venha tomar um café com ele!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact