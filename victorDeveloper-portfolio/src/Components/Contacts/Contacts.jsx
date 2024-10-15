import './Contacts.css'
import phone from '../../assets/phone.png'

function Contacts(){


    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's know about yuor project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={phone} className='c-icon'/>
                            </div>
                        </div>
                </div>
                <div className="c-right"></div>
            </div>
        </div>

    );

}
export default Contacts