import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactMePage = ()=> {
  const [state, handleSubmit] = useForm("mlekkjze");

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
        <div id="contactme" className="spacer">
            <div className="page-header__main">
                <div className="content-container">
                    <h1 className="page-header__title">Contact Me</h1>
                    <p>Fill out the below form to send me an email and get in contact</p>
                </div>
            </div>
            <div className="content-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMePage;