import './Hero.css'

export default function Hero(props) {

    const sub_container_class_name = props.sub_container ? 
    props.sub_container : 'hero-sub1-container'
    
    return (
        <div id="hero" className={props.Cname}
        >
            <img className='hero-img-con'
                alt='cannot load image'
                src={props.hero_img}
            />
            <div className={sub_container_class_name}>
                <h1 className='hero-h1'>{props.title}</h1>
                <p className='hero-h6'>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.btnTxt}
                </a>
            </div>

        </div>
    )
}