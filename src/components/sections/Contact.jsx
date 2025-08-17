import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  MessageCircle,
} from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#AA8F76] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white text-center">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto rounded-full mb-8 md:mb-12"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal direction="left" distance={80} duration={1.2}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-[#040718] border border-white/10 p-8 rounded-2xl hover:border-[#AA8F76]/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Me</h3>
                <p className="text-gray-400 mb-6">Let's start a conversation</p>
                <a
                  href="mailto:louis.nguyen550@gmail.com"
                  className="text-[#AA8F76] hover:text-white font-medium transition-colors duration-300 text-lg"
                >
                  louis.nguyen550@gmail.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={80} duration={1.4}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-[#040718] border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">LinkedIn</h3>
                <p className="text-gray-400 mb-6">Connect with me</p>
                <a
                  href="https://www.linkedin.com/in/louisnguyenn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white font-medium transition-colors duration-300 text-lg"
                >
                  /in/louisnguyenn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={80} duration={1.6}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-[#040718] border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Github size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">GitHub</h3>
                <p className="text-gray-400 mb-6">Check out my code</p>
                <a
                  href="https://github.com/louisnguyenn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white font-medium transition-colors duration-300 text-lg"
                >
                  /louisnguyenn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};
