import React from 'react';
import handleScrollTo from '../functions/handleScrollTo';

const AboutMePage = () => {
    return (
        <div id="aboutMe" className="spacer">
            <div className="content-container">
                <div className="section">
                    <h1 className="page-header__big page-header__big--aboutme">About me</h1> 
                    <div className="content-container__split content-container__split--background">                
                        <p className="text__indent">
                            I am a Software Engineer with experience in JavaScript and Java. I graduated from Pace University with a Bachelor's in Computer Science. 
                            As a kid I built Legos, currently I build web applications, and in the future? Potentially building one for you too.
                        </p>
                        <button onClick={() => handleScrollTo('projects')} className="button button--aboutme">Next Section: Projects</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

// const AboutMePage = () => {
//     return (
//         <div id="aboutMe" className="spacer">
//             <div>
//                 <div className="page-header__main">
//                     <div className="content-container">
//                         <h1 className="page-header__title">About me</h1>
//                     </div>
//                 </div> 
//                 <div className="content-container">
//                     <p>
//                             I am a Software Engineer with experience in JavaScript and Java. I graduated from Pace University with a Bachelor's in Computer Science. 
//                             As a kid I built Legos, currently I build web applications, and in the future? Potentially building one for you too.
//                     </p>
//                     <button onClick={() => handleScrollTo('projects')} className="button">Next Section: Projects</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default AboutMePage;