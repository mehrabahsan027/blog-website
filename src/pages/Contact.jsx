import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="my-8 px-4">
      <div className="mb-8">
        <h1 className="text-center text-2xl lg:text-4xl font-semibold dark:text-yellow-200">
          Connect With Us
        </h1>
        <hr className="w-16 border-2 mx-auto mt-1" />
      </div>

      <div className="lg:px-24 flex flex-col lg:flex-row justify-between gap-x-8">
        <div className="w-full pb-8 ">
          <img src="contact_us.svg" alt="" className="w-full h-full" />
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-3 ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 bg-transparent py-3 border rounded-xl w-full outline-none focus:outline-yellow-600"
              type="text"
              placeholder="Enter Your Email"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write Your Message"
              className="w-full bg-transparent p-3 rounded-xl border outline-none focus:outline-yellow-600"
              rows={"10"}
            ></textarea>
            <div>
              <button className="btn-one">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
