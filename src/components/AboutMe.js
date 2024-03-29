import imgMaria from '../images/MariaMolinaFoto.jpg';
import '../styles/aboutme.scss';

const AboutMe = ()=>{


    return (
        <div className='aboutme' id='aboutme'>
            <div className='aboutme__text'>
            <h2><i class="fas fa-laugh-beam"></i> Sobre mí / About me</h2>
            <p>Después de mas de 6 años dedicándome al cuidado de las mascotas, decidí que necesitaba un nuevo reto y que este año era perfecto para ello. Me decanté por el desarrollo web ya que siempre ha sido algo que me ha llamado mucho la atención, sobre todo cuando trabajé de Project Manager y veía el maravilloso trabajo que hacían mis compañeros. Tardé unos cuantos años en decidirme pero creo que he venido para quedarme.</p>
            </div>
            <div className='aboutme__image'>
                <img className='aboutme__image--photo' src={imgMaria} alt='' title='' width='200px'/>
            </div> 
            

        </div>
    )
}

export default AboutMe;