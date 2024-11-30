"use client";
import React, { useState } from "react";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "[locale]/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST", // The method is POST because we are sending data.
      headers: {
        "Content-Type": "application/json", // Tell the server we're sending JSON.
      },
      body: JSONdata, // Body of the request is the JSON data we created above.
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16">
      {/* Outer container with white background, shadow, and padding */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left side - Social Links */}
              <div className="flex flex-col justify-center items-start">
                <h5 className="text-xl font-bold text-[#111111] my-2">Let’s connect</h5>
                <div className="socials flex flex-row gap-2">
                  <Link href="https://linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin icon" />
                  </Link>
                </div>
              </div>

              {/* Right side - Contact Form */}
              <div className="flex flex-col justify-center">
                {emailSubmitted ? (
                  <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                ) : (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="text-black block mb-2 text-sm font-medium"
                      >
                        Your email
                      </label>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-white border border-cyan-400 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="jacob@google.com"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="text-black block text-sm mb-2 font-medium"
                      >
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-white border border-cyan-400 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Just saying hi"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="text-black block text-sm mb-2 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="bg-white border border-cyan-400 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-cyan-200 hover:bg-cyan-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default EmailSection;
