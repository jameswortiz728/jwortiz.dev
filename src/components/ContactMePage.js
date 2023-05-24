import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactModal from './../components/ContactModal';

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
      return <p>Thanks for joining!</p>;
  }

  return (
        <div>
            <div id="contactme" className="spacer">
                <div className="page-header__main">
                    <div className="content-container">
                        <h1 className="page-header__title">Contact Me</h1>
                        <p>Fill out the below form to send me an email and get in contact</p>
                    </div>
                </div>
                <div className="content-container">
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
                        <button className="button" type="submit" disabled={state.submitting} onClick={openModal}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ContactModal open={open} closeModal={closeModal}/>
        </div>
    );
}

export default ContactMePage;