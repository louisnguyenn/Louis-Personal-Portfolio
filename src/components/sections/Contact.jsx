import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from '../ScrollReveal'

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!")

        // when there's a success then the form will reset to it's default state (name, email, and message will be empty strings)
        setFormData({ name: "", email: "", message: "" })
      }).catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-5xl font-bold mb-4 text-white text-center">Let's <span className="text-[#AA8F76]">Connect</span></h2>
          <hr className="h-1 w-14 m-auto bg-white border-0" />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-muted-foreground mb-12 mt-5 max-w-2xl mx-auto text-gray-400'>
            Feel free to reach out, I'd love to hear from you!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="pt-8">
              <h4 className="text-2xl font-semibold mb-6 flex justify-center">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <ScrollReveal direction="up" distance={50} duration={0.8}>
                  <a href="mailto:louis.nguyen550@gmail.com" target="_blank" className="text-[#AA8F76] hover:text-white">
                    <Mail size={28} className="hover:-translate-y-1 transition-all duration-300"/>
                  </a>
                </ScrollReveal>
                <ScrollReveal direction="up" distance={50} duration={1.0}>
                  <a href="https://www.linkedin.com/in/louisnguyenn/" target="_blank" className="text-[#AA8F76] hover:text-white">
                    <Linkedin size={28} className="hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </ScrollReveal>
                <ScrollReveal direction="up" distance={50} duration={1.2}>
                  <a href="https://github.com/louisnguyenn" target="_blank" className="text-[#AA8F76] hover:text-white">
                    <Github size={28} className="hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* contact form */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="bg-[#040718] border border-white/10 p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6 flex justify-center">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-1 focus:ring-[#AA8F76] bg-[#040718] relative" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-1 focus:ring-[#AA8F76] bg-[#040718] relative" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" required placeholder="Your message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-1 focus:ring-[#AA8F76] bg-[#040718] relative resize-none h-48" />
                </div>

                <button type="submit" className="w-full bg-[#AA8F76] text-white py-3 px-6 rounded-full font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 flex items-center justify-center gap-2 hover:bg-[#8A6F56] hover:cursor-pointer">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
