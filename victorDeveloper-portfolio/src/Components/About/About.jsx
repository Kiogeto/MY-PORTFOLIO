import './About.css'
import po2 from '../../assets/po2.jpeg'

function About(){

    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card"></div>

                <img className="a-img"
                    src={po2}>
                        
                </img>
            </div>
            <div className="a-right"></div>
        </div>
    );

}
export default About