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
          <h2 className="text-5xl font-bold mb-8 text-white text-center">Let's <span className="text-[#AA8F76]">Connect</span></h2>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
            Feel free to reach out, I'd love to hear from you!
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="pt-8">
                <h4 className="text-2xl font-semibold mb-6 flex justify-center">Connect with Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="mailto:louis.nguyen550@gmail.com" target="_blank" className="hover:text-[#AA8F76] hover:-translate-y-1 transition-all">
                    <Mail size={25} />
                  </a>
                  <a href="https://www.linkedin.com/in/louisnguyenn/" target="_blank" className="hover:text-[#AA8F76] hover:-translate-y-1 transition-all">
                    <Linkedin size={25} />
                  </a>
                  <a href="https://github.com/louisnguyenn" target="_blank" className="hover:text-[#AA8F76] hover:-translate-y-1 transition-all">
                    <Github size={25} />
                  </a>
                </div>
              </div>
            </div>

            {/* contact form */}
            <div className="bg-[#05091e] border border-white/10 p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6 flex justify-center">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-1 focus:ring-[#AA8F76] bg-[#05091e] relative" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-1 focus:ring-[#AA8F76] bg-[#05091e] relative" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" required placeholder="Your message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-1 focus:ring-[#AA8F76] bg-[#05091e] relative resize-none h-48" />
                </div>

                <button type="submit" className="w-full bg-[#AA8F76] text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
