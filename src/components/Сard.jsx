//import './Card.css';

function Hero(props) {
    return (
        <div className='wraper'>
            <img src={props.src} alt="" />
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">{props.universe}</div>
            <div className="hero-alterego">{props.alterEgo}</div>
            <div className="hero-occupation">{props.occupation}</div>
            <div className="hero-friends">{props.friends}</div>
            <div className="hero-powers">{props.superPowers}</div>

        </div>
    )
}


export default Hero;
