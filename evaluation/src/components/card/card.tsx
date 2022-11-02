import './card.css';
import Instagram from '../../assets/icons/Instagram.png';
import copy from '../../assets/icons/copy.png';

const Card = () => {
    return <div className='card-full-container'>
        <div className="card-container">
            <div className="card-margin">
                <div className='social-media-part'>
                    <div className="media-logo">
                        <img src={Instagram} alt="" />
                        <div className="social-media-name">Instagram</div>
                    </div>

                    <div className="same-line">
                        
                        <div className="copy">
                            <div className="copyimg">
                                <img src={copy} alt="" />
                            </div>
                            <div className="copy-text">copy password</div>
                       
                    </div>

                </div>

                <div className="link-part">
                    <div className="actualLink">www.Instagram.com
                    </div>
                    </div>
            </div>
        </div>
        
        </div>

            // </div>
    
}

export default Card;