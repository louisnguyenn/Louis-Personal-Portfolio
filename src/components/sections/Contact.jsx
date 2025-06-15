import emailjs from 'emailjs-com'
import { Github, Linkedin, Mail } from 'lucide-react';
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
      setFormData({ name: "", email: "", message: "" })
    }).catch(() => alert.apply("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Let's Connect</h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
          Feel free to reach out, I'd love to hear from you! I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="pt-8">
              <h4 className="font-medium mb-4 flex justify-center">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="mailto:louis.nguyen550@gmail.com" target="_blank">
                  <Mail />
                </a>
                <a href="https://www.linkedin.com/in/louisnguyenn/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/louisnguyen7" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
