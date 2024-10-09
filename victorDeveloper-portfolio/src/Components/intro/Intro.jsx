import './Intro.css'
import victor from "../../assets/viki.jpg"

function Intro(){

    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello my name is</h2>
                    <h1 className="name">Victor Omondi</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">UI/UX Designer </div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Video Editor</div>
                            <div className="i-title-item">Cyber Security</div>
                            <div className="i-title-item">System Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        
                    Hello, I am a developer specializing in creating dynamic, user-friendly web applications. 
                    With expertise in PHP, JavaScript, and database integration, I deliver responsive designs,
                    modular code, and innovative solutions that meet client needs and ensure a professional,
                     feature-rich experience.
                    </p>
                </div>
            </div>
            
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={victor} className="i-img"></img>
            </div>
        </div>
    );

}
export default Intro