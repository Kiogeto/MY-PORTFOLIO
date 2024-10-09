import './About.css'
import po2 from '../../assets/po2.jpeg'
import award from '../../assets/award.jpeg'

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
            <div className="a-right">
                <h1 className="a-title">About</h1>
                <p className="sub-desc">
                As a proficient IT professional, I leverage my expertise in web development,
                 UI/UX design, and content creation to deliver impactful digital solutions. 
                 
                </p>
                <p className="a-desc">Welcome to my portfolio! I am a dedicated developer
                     with a Bachelor’s degree in IT from Mount Kenya University and over 5
                      years of experience in the field. My expertise encompasses a range of
                       technologies, including React, Node.js, Python, PHP, and Django, 
                       allowing me to create innovative web applications that meet diverse
                        client needs. I am also skilled in UI/UX design, ensuring intuitive
                         and engaging user experiences. Additionally, my background in video
                          editing and writing enables me to produce captivating content that 
                          resonates with audiences. Explore my work to see how I can help 
                           your ideas to life through technology, creativity, and a commitment
                            to excellence.
                </p>
                <div className="a-award">
                    <img src={award} className="a-award-img"></img>
                    <div className="a-award-text">
                        <h4 className="a-award-title">Webby Awards</h4>
                        <p className="a-award-desc">
                        Honored to receive a Webby Award, recognizing my commitment to excellence
                         in digital creativity and innovative web experiences.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );

}
export default About