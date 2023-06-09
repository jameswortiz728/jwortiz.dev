import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactModal from './../components/ContactModal';
import handleScrollTo from '../functions/handleScrollTo';

const ContactMePage = () => {
    const [state, handleSubmit] = useForm("mlekkjze");
    const [open, setOpen] = useState(true);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    if (state.succeeded) {
        return (
            <div id="contactme">
                <div className="content-container">
                    <div className="section">
                        <div>
                            <h1 className="page-header__big page-header__big--contactme">Contact me</h1>
                        </div>
                        <div className="content-container__split content-container__split--contactbackground">
                            <h1>An email has been sent to James@jwortiz.dev</h1>
                            <button onClick={() => handleScrollTo('dashboard')} className="button button--contactme">Next Section: Welcome</button>
                        </div>
                    </div>
                </div>
                <ContactModal open={open} closeModal={closeModal}/> 
            </div>      
        ) 
    }

    return (
        <div id="contactme">
            <div className="content-container">
                <div className="section">
                    <div>
                        <h1 className="page-header__big page-header__big--contactme">Contact me</h1>
                    </div>      
                    <div className="content-container__split content-container__split--contactbackground">                
                        <form className="form" onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                Your email address:
                            </label>
                            <input
                                className="text-input"
                                placeholder="Your email: e.g. abc@gmail.com"
                                id="email"
                                type="email" 
                                name="email"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="message">
                                and your message for me:
                            </label>
                            <textarea
                                className="textarea"
                                placeholder='Your message for me: e.g. "Awesome Portfolio!"'
                                id="message"
                                name="message"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                            <button className="button button--contactme" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div id="contactme" className="spacer">
    //         <div className="page-header__main">
    //             <div className="content-container">
    //                 <h1 className="page-header__title">Contact Me</h1>
    //                 <p>Fill out the below form to send me an email and get in contact</p>
    //             </div>
    //         </div>
    //         <div className="content-container">
    //             <form className="form" onSubmit={handleSubmit}>
    //                 <label htmlFor="email">
    //                     Your email address:
    //                 </label>
    //                 <input
    //                     className="text-input"
    //                     placeholder="Your email: e.g. abc@gmail.com"
    //                     id="email"
    //                     type="email" 
    //                     name="email"
    //                 />
    //                 <ValidationError 
    //                     prefix="Email" 
    //                     field="email"
    //                     errors={state.errors}
    //                 />
    //                 <label htmlFor="message">
    //                     and your message for me:
    //                 </label>
    //                 <textarea
    //                     className="textarea"
    //                     placeholder='Your message for me: e.g. "Awesome Portfolio!"'
    //                     id="message"
    //                     name="message"
    //                 />
    //                 <ValidationError 
    //                     prefix="Message" 
    //                     field="message"
    //                     errors={state.errors}
    //                 />
    //                 <button className="button" type="submit" disabled={state.submitting}>
    //                     Submit
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );
}

export default ContactMePage;