import { SparklesSection } from '../components/SparklesSection';

interface RoleCard {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const ROLES: RoleCard[] = [
  {
    title: 'Full Stack Developer',
    description: 'Building scalable web applications from frontend to backend with modern technologies.',
    icon: 'fa-solid fa-code',
    tags: ['React', 'Node.js', 'TypeScript', 'Next.js',],
  },
  {
    title: 'UI/UX Designer',
    description: 'Crafting intuitive interfaces and delightful user experiences that blend form with function.',
    icon: 'fa-solid fa-palette',
    tags: ['Figma', 'Design Systems', 'User Research'],
  },
  {
    title: 'Product Building',
    description: 'Transforming ideas into reality through rapid prototyping and product iteration.',
    icon: 'fa-solid fa-rocket',
    tags: ['MVP', 'Agile', 'Product Strategy'],
  },
];

export function AboutMeSection() {
  return (
    <SparklesSection
      id="about"
      className="scroll-section relative bg-[var(--bg-color)] text-[var(--text-color)] py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-colors duration-300
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-sm:py-8
        max-[480px]:py-6 max-[480px]:px-3"
    >
      <div className="w-full max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-[var(--text-color)] tracking-[-0.025em]">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6
          max-sm:gap-3
          max-[480px]:gap-2.5"
        >
          {ROLES.map((role, index) => (
            <div
              key={index}
              className="group bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg overflow-hidden transition-all duration-300
                hover:border-[var(--accent-cyan)] hover:-translate-y-1"
            >
              {/* Icon Header */}
              <div className="relative h-24 bg-transparent flex items-center justify-center border-b border-[var(--border-color)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] transition-all duration-300
                  group-hover:scale-110 group-hover:border-[var(--accent-cyan)] group-hover:text-[var(--accent-cyan)]">
                  <i className={`${role.icon} text-xl`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 max-sm:p-4 max-[480px]:p-3">
                <h3 className="text-lg font-semibold text-[var(--text-color)] m-0 mb-2
                  max-sm:text-base
                  max-[480px]:text-sm"
                >
                  {role.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3
                  max-sm:text-[13px]
                  max-[480px]:text-xs"
                >
                  {role.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 bg-transparent text-[var(--text-muted)] border border-[var(--border-color)] rounded font-medium
                        max-sm:text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SparklesSection>
  );
}

