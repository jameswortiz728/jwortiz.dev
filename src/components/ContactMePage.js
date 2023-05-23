import React from 'react';

const ContactMePage = () => {
    return (
        <div id="contactme" className="spacer">
            <div className="page-header__main">
                <div className="content-container">
                    <h1 className="page-header__title">Contact Me</h1>
                </div>
            </div>
            <div className="content-container">
                <form
                    action="https://formspree.io/f/mlekkjze"
                    method="POST"
                >
                    <label>
                        Your email:
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Your message:
                        <textarea name="message"></textarea>
                    </label>  
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMePage;