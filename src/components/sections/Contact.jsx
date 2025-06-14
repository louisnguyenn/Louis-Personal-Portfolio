import emailjs from 'emailjs-com'
import { useState } from 'react';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITETEMPLATE_ID, e.target, import.meta.env.VITEPUBLIC_KEY).then((result) => {
      alert("Message Sent!")

      // when there's a success then the form will reset to it's default state (name, email, and message will be empty strings)
      setFormData({name: "", email: "", message: ""})
    }).catch(() => alert.apply("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Let's Connect</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* name input box */}
          <div className="relative">
            <input type="text" id="name" name="name" required placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
          </div>

          {/* email input box */}
          <div className="relative">
            <input type="email" id="email" name="email" required placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
          </div>

          {/* message input box */}
          <div className="relative">
            <textarea id="message" name="message" required rows={5} placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
          </div>

          {/* submit button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
