import { SparklesSection } from '../components/SparklesSection';

interface Skill {
  name: string;
  icon: string;
  link: string;
}

const SKILLS: Skill[] = [
  { name: 'JavaScript', icon: '/images/JavaScript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: '/images/TypeScript.svg', link: 'https://www.typescriptlang.org/' },
  { name: 'Python', icon: '/images/Python.png', link: 'https://www.python.org/' },
  { name: 'React', icon: '/images/React.svg', link: 'https://react.dev/' },
  { name: 'Node.js', icon: '/images/NodeJS.svg', link: 'https://nodejs.org/' },
  { name: 'Tailwind CSS', icon: '/images/TailwindCSS.svg', link: 'https://tailwindcss.com/' },
  { name: 'Bootstrap', icon: '/images/Bootstrap.svg', link: 'https://getbootstrap.com/' },
  { name: 'Firebase', icon: '/images/Firebase.png', link: 'https://firebase.google.com/' },
  { name: 'Supabase', icon: '/images/Supabase.svg', link: 'https://supabase.com/' },
  { name: 'MongoDB', icon: '/images/MongoDB.svg', link: 'https://www.mongodb.com/' },
  { name: 'PostgreSQL', icon: '/images/PostgresSQL.png', link: 'https://www.postgresql.org/' },
  { name: 'AWS', icon: '/images/AWS.png', link: 'https://aws.amazon.com/' },
  { name: 'Git', icon: '/images/Git.svg', link: 'https://git-scm.com/' },
  { name: 'Docker', icon: '/images/Docker.svg', link: 'https://www.docker.com/' },
  { name: 'Postman', icon: '/images/Postman.png', link: 'https://www.postman.com/' },
];

export function StackSection() {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <SparklesSection
      id="skills"
      className="scroll-section relative bg-[var(--bg-color)] text-[var(--text-color)] py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-colors duration-300 overflow-hidden
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-sm:py-8
        max-[480px]:py-6 max-[480px]:px-3"
    >
      <div className="w-full max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--text-color)] tracking-[-0.025em]">
          Stack
        </h2>

        {/* Marquee Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden py-4">
            <div className="flex gap-8 animate-marquee hover:pause-marquee">
              {duplicatedSkills.map((skill, index) => (
                <a
                  key={`${skill.name}-${index}`}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip={skill.name}
                  className="flex-shrink-0 flex items-center justify-center opacity-80 transition-all duration-200 hover:opacity-100 hover:scale-110 no-underline"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="w-12 h-12 object-contain max-sm:w-10 max-sm:h-10 max-[480px]:w-8 max-[480px]:h-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SparklesSection>
  );
}
