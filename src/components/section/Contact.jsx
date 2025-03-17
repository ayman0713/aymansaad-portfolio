import { useState } from "react"
import {RevealOnScroll} from "../RevealOnScroll"
import emailjs from 'emailjs-com'


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            e.target, 
            PUBLIC_KEY
        )
        .then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""});
        })
        .catch(() => alert ("Oops! Something went wrong. Please try again."))
    };


    return <section id="contact" className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12">
    <RevealOnScroll>
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get in touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </RevealOnScroll>
  </section>
  
}