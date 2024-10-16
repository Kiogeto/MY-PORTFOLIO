import './Contacts.css'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import location from '../../assets/loc.png'

function Contacts(){
    uugfyfufy


    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's know about your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={phone} className='c-icon'/>
                                +254729507962
                            </div>
                            <div className="c-info-item">
                                <img src={email} className='c-icon'/>
                                
                            </div>
                            <div className="c-info-item">
                                <img src={location} className='c-icon'/>
                                
                            </div>
                        </div>
                </div>
                <div className="c-right"></div>
            </div>
        </div>

    );

}
export default Contacts