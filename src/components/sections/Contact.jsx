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
            I&apos;m always interested in opportunities to ship software that makes a real impact. I&apos;m drawn to teams that combine engineering and innovation to build better ways of doing things. If that&apos;s you, or you just want to talk
            shop, feel free to reach out.
          </p>
        </ScrollReveal>

        <div className="flex gap-4">
          {links.map((item, index) => (
            <ScrollReveal key={item.label} delay={0.2 + index * 0.05}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 group-hover:border-white/30 group-hover:text-[#D4C4B0] group-hover:scale-110">
                  <item.icon size={22} />
                </div>
                <span className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-[#D4C4B0]">
                  {item.label}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
