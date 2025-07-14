import { SparklesSection } from '../components/SparklesSection';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Developer',
    company: 'Tech Company',
    period: 'Jan 2024 - Present',
    description: 'Building scalable web applications and leading frontend architecture decisions.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Startup Inc',
    period: 'Jun 2023 - Dec 2023',
    description: 'Developed responsive web interfaces and improved user experience metrics by 40%.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: '3',
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: 'Jan 2023 - May 2023',
    description: 'Assisted in building client websites and learned modern web development practices.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
];

export function ExperienceSection() {
  return (
    <SparklesSection
      id="experience"
      className="scroll-section relative bg-[var(--bg-color)] text-[var(--text-color)] py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-colors duration-300
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-sm:py-8
        max-[480px]:py-6 max-[480px]:px-3"
    >
      <div className="w-full max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--text-color)] tracking-[-0.025em]">
          Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[var(--border-color)] max-sm:left-[6px]" />

          {/* Experience Items */}
          <div className="space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <div key={experience.id} className="relative pl-10 max-sm:pl-8">
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-[6px] w-4 h-4 rounded-full border-2 border-[var(--accent-cyan)] transition-all duration-300
                  max-sm:w-3 max-sm:h-3
                  ${index === 0 ? 'bg-[var(--accent-cyan)]' : 'bg-[var(--bg-color)]'}`} 
                />

                {/* Content Card */}
                <div className="group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-5 transition-all duration-300
                  hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]
                  max-sm:p-4">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-color)] m-0 mb-1
                        max-sm:text-base">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] m-0
                        max-sm:text-[13px]">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] opacity-70 font-mono
                      max-sm:text-[11px]">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4
                    max-sm:text-[13px]">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-1 text-xs bg-transparent text-[var(--text-muted)] border border-[var(--border-color)] rounded font-medium
                          max-sm:text-[11px] max-sm:px-2 max-sm:py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SparklesSection>
  );
}

