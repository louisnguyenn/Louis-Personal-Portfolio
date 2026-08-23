import { Github, Linkedin, Mail } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

export const Contact = () => {
  const links = [
    {
      label: 'Email',
      href: 'mailto:lnguye25@uoguelph.ca',
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/louisnguyenn/',
      icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/louisnguyenn',
      icon: Github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-24 mb-20">
      <div className="w-full px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="mb-12 text-base font-medium tracking-[0.2em] text-gray-400">
            GET IN TOUCH
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-gray-300">
            I&apos;m always interested in opportunities to drive innovation, build things that move the world, and work with teams that combine
            engineering and creativity to build better ways of doing things. If
            that&apos;s you, or you just want to talk shop, feel free to reach
            out.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap gap-4">
          {links.map((item, index) => (
            <ScrollReveal key={item.label} delay={0.2 + index * 0.05}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 rounded-full border border-white/10 py-2.5 pl-2.5 pr-5 text-gray-400 transition-all duration-300 hover:border-white/30 hover:text-[#D4C4B0]"
              >
                <item.icon size={17} />

                <span className="text-sm">{item.label}</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
