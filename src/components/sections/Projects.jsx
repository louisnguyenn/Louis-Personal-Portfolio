import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// cSpell:ignore Percepta GDSC Gemify scikit Matplotlib Seaborn

const ScrollReveal = ({
	children,
	direction = 'up',
	distance = 50,
	duration = 0.8,
	delay = 0,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setIsVisible(true), delay * 1000);
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [delay]);

	const getTransform = () => {
		if (!isVisible) {
			switch (direction) {
				case 'up':
					return `translateY(${distance}px)`;
				case 'down':
					return `translateY(-${distance}px)`;
				case 'left':
					return `translateX(${distance}px)`;
				case 'right':
					return `translateX(-${distance}px)`;
				default:
					return `translateY(${distance}px)`;
			}
		}
		return 'translateY(0)';
	};

	return (
		<div
			ref={ref}
			style={{
				transform: getTransform(),
				opacity: isVisible ? 1 : 0,
				transition: `all ${duration}s ease-out`,
			}}
		>
			{children}
		</div>
	);
};

export const Projects = () => {
	const projects = [
		{
			title: 'SmartCV',
			description:
				'An AI-powered web app that helps you create, tailor, and polish your resume and cover letter for any job posting. Built with React, Express.js, and the Gemini API, SmartCV makes job applications smarter and more personalized, increasing your chances of landing a job.',
			technologies: [
				'React',
				'JavaScript',
				'Tailwind CSS',
				'Node.js',
				'Express.js',
				'Gemini API',
			],
			githubLink: 'https://github.com/louisnguyenn/SmartCV',
		},
		{
			title: 'Percepta',
			description:
				'A full-stack web application that uses your webcam or uploaded recordings to detect unauthorized human presence in real-time. Designed with home and office security in mind, it captures video frames and logs intrusions.',
			technologies: [
				'JavaScript',
				'React',
				'Tailwind CSS',
				'Node.js',
				'Python',
				'Flask',
				'OpenCV',
				'REST APIs',
			],
			githubLink: 'https://github.com/louisnguyenn/Percepta',
		},
		{
			title: 'Electron Collision Predictor',
			description:
				'Using linear regression to predict the invariant mass resulting from CERN electron collision data. The project includes data cleaning, exploratory visualization, model training, and performance evaluation, all conducted in an interactive Jupyter Notebook environment.',
			technologies: [
				'Python',
				'Pandas',
				'NumPy',
				'scikit-learn',
				'Matplotlib',
				'Seaborn',
				'Jupyter Notebook',
			],
			githubLink:
				'https://github.com/louisnguyenn/Electron_Collision_Predictor',
		},
	];

	return (
		<section
			id="projects"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<div className="max-w-6xl mx-auto px-6">
				<ScrollReveal>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
							My{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] font-normal">
								Projects
							</span>
						</h2>
						<div className="w-16 h-px bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto" />
					</div>
				</ScrollReveal>

				<div className="space-y-12">
					{projects.map((project, index) => (
						<ScrollReveal
							key={index}
							direction="up"
							distance={30}
							duration={0.6}
							delay={index * 0.1}
						>
							<div className="group">
								<div className="bg-[#040718] border-l-2 border-gray-700 hover:border-[#AA8F76] transition-colors duration-300 pl-8">
									<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border border-white/10 p-5 rounded-xl">
										{/* Project Info */}
										<div className="flex-1 space-y-4">
											<h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-[#D4C4B0] transition-colors duration-300">
												{project.title}
											</h3>

											{/* Technologies */}
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, techIndex) => (
													<span
														key={techIndex}
														className="text-gray-400 text-sm px-3 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
													>
														{tech}
													</span>
												))}
											</div>

											<p className="text-gray-300 leading-relaxed font-light max-w-3xl">
												{project.description}
											</p>
										</div>

										{/* Project Links */}
										<div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:items-end">
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors duration-300 group/link"
											>
												<Github size={18} />
												View Code
												<ArrowRight
													size={16}
													className="transform group-hover/link:translate-x-1 transition-transform duration-300"
												/>
											</a>

											{project.liveLink && (
												<a
													href={project.liveLink}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-[#AA8F76] hover:text-[#8B7355] font-medium transition-colors duration-300 group/link"
												>
													<ExternalLink size={18} />
													Live Demo
													<ArrowRight
														size={16}
														className="transform group-hover/link:translate-x-1 transition-transform duration-300"
													/>
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
};
