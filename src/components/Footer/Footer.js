import './Footer.css'

export default function Footer(){
    return(
        <div className='footer'>
           <div className='top' >
             <div>
                <h1>Trippy</h1>
                <p>Choose your favorite destination</p>
             </div>
             <div>
                <a href='/' >
                 <i className='fa-brands fa-facebook-square' />
                </a>
                <a href='/' >
                 <i className='fa-brands fa-instagram-square' />
                </a>
                <a href='/' >
                 <i className='fa-brands fa-behance-square' />
                </a>
                <a href='/' >
                 <i className='fa-brands fa-twitter-square' />
                </a>
             </div>
           </div>
           <div className='bottom' >
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
           
            <div>
                <h4>Help</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
           
            <div>
                <h4>Other</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
           
           </div>
        </div>
    )
}