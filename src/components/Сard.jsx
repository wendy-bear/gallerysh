//import './Card.css';

function Hero(props) {
    return (
        <div className='wraper'>
            <img src={props.src} alt="" />
            <div className="hero-name"><b>Имя:</b> {props.name}</div>
            <div className="hero-universe"><b>Вселенная:</b> {props.universe}</div>
            <div className="hero-alterego"><b>Альтер Эго:</b> {props.alterEgo}</div>
            <div className="hero-occupation"><b>Род деяельности:</b> {props.occupation}</div>
            <div className="hero-friends"><b>Друзья:</b> {props.friends}</div>
            <div className="hero-powers"><b>Суперсилы:</b> {props.superPowers}</div>

        </div>
    )
}


export default Hero;
