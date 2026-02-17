import { ScrollReveal } from '../animations/ScrollReveal';

export const Contact = () => {
  return (
    <section id="contact" className="pt-4 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Let's Connect
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
