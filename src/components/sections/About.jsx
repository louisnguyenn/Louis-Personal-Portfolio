import { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({
	children,
	direction = 'up',
	distance = 50,
	duration = 0.8,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
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
	}, []);

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

const SkillBar = ({ skill, percentage, delay = 0 }) => {
	const [isVisible, setIsVisible] = useState(false);
	const skillBarRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (skillBarRef.current) {
			observer.observe(skillBarRef.current);
		}

		return () => {
			if (skillBarRef.current) {
				observer.unobserve(skillBarRef.current);
			}
		};
	}, [isVisible]);

	return (
		<div
			ref={skillBarRef}
			className="mb-6"
		>
			<div className="flex justify-between items-center mb-2">
				<span className="text-gray-300 text-sm font-medium">{skill}</span>
			</div>
			<div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
				<div
					className={`h-full bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-full transition-all duration-1000 ease-out ${
						isVisible ? 'translate-x-0' : '-translate-x-full'
					}`}
					style={{
						width: `${percentage}%`,
						transitionDelay: isVisible ? `${delay}ms` : '0ms',
					}}
				/>
			</div>
		</div>
	);
};

export const About = () => {
	const skills = [
		{ name: 'C', percentage: 100 },
		{ name: 'Python', percentage: 100 },
		{ name: 'JavaScript', percentage: 100 },
		{ name: 'HTML/CSS', percentage: 100 },
		{ name: 'SQL', percentage: 100 },
	];

	const technologies = [
		'React',
		'Tailwind CSS',
		'Node.js',
		'REST APIs',
		'OpenCV',
		'Flask',
		'Pandas',
		'NumPy',
		'scikit-learn',
		'PostgreSQL',
		'Vercel',
	];

	const tools = [
		'Git',
		'Jupyter Notebook',
		'Android Studio',
		'Linux',
		'VS Code',
		'Adobe After Effects',
	];

	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<div className="max-w-4xl mx-auto px-6">
				<ScrollReveal>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
							About{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] font-normal">
								Me
							</span>
						</h2>
						<div className="w-16 h-px bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto" />
					</div>
				</ScrollReveal>

				<ScrollReveal delay={0.2}>
					<div className="max-w-3xl mx-auto mb-20">
						<p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
							I am currently studying{' '}
							<a
								href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/"
								className="text-[#D4C4B0] hover:text-white transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Engineering Systems and Computing
							</a>{' '}
							at the{' '}
							<a
								href="https://www.uoguelph.ca/"
								className="text-[#D4C4B0] hover:text-white transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								University of Guelph
							</a>
							.
						</p>

						<p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
							I love to be physically active, whether that's powerlifting or
							playing sports like basketball, badminton, and volleyball.
						</p>

						<p className="text-gray-300 leading-relaxed text-lg font-light">
							I like to be creative by playing the guitar, video editing with
							Adobe After Effects, and some graphic design. Fun fact, I
							self-taught myself to play the guitar and work with digital motion
							softwares like Adobe After Effects and DaVinci Resolve.
						</p>

						<p className="text-gray-300 leading-relaxed text-lg font-light">
							<br />
							I'm passionate about continuous learning and creating innovative
							web applications. I aspire to become a multi-disciplinary engineer
							that can work and combine software and hardware to create
							innovative solutions for the modern world. I am especially
							interested in machine learning and robotics/automation.
						</p>
					</div>
				</ScrollReveal>

				<div className="grid md:grid-cols-2 gap-12">
					<ScrollReveal
						direction="right"
						delay={0.3}
					>
						<div>
							<h3 className="text-2xl font-light text-white mb-8">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
									Skills
								</span>
							</h3>
							<div className="space-y-4">
								{skills.map((skill, index) => (
									<SkillBar
										key={skill.name}
										skill={skill.name}
										percentage={skill.percentage}
										delay={index * 100}
									/>
								))}
							</div>
						</div>
					</ScrollReveal>

					<ScrollReveal
						direction="left"
						delay={0.4}
					>
						<div>
							<h3 className="text-2xl font-light text-white mb-8">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
									Technologies
								</span>
							</h3>
							<div className="space-y-6">
								<div>
									<h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
										Frameworks & Libraries
									</h4>
									<div className="flex flex-wrap gap-2">
										{technologies.map((tech) => (
											<span
												key={tech}
												className="text-gray-300 text-sm px-3 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div>
									<h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
										Tools
									</h4>
									<div className="flex flex-wrap gap-2">
										{tools.map((tool) => (
											<span
												key={tool}
												className="text-gray-300 text-sm px-3 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
											>
												{tool}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
};
