import * as React from 'react';


const SendMessageSection = () => {
  return (
    <div>
      <h2>Send Us a Message</h2>
      <p>We’re here to help and answer any questions you might have. Fill out the form below to send us a message and we will get back to you soon.</p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="What's your email address" />
        <label htmlFor="message">Message</label>
        <textarea placeholder="What's on your mind?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SendMessageSection;
