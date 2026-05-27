import {
  Github,
  ExternalLink,
  Ticket,
  Code2,
  Database,
  Video,
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Eventify | Book Events Easily',
      description:
        'MERN event booking platform with user & admin dashboard, auth, and email system..',
      image:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['React', 'Node.js','Express.js', 'MongoDB', 'Tailwind CSS','JWT','Nodemailer', 'Redux Toolkit'],
      github: 'https://github.com/sourabh433',
      live: 'https://eventify-phi-six.vercel.app/',
      icon: <Ticket size={18} className="text-indigo-400" />,
    },
    {
  id: 2,
  title: 'DoConnect',
  description:
    'Real-time video conferencing and chat application enabling seamless live meetings with integrated audio/video communication.',
  image:
    'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  tech: ['React', 'Node.js','Express.js', 'MongoDB', 'Socket.io', 'WebRTC', 'Tailwind'],
  github: 'https://github.com/sourabh433/DoConnect',
  live: 'https://do-connect-alpha.vercel.app', // update if your actual deployed URL is different
  icon: <Video size={18} className="text-blue-400" />,
},
    {
      id: 3,
      title: 'MERN Blog Platform',
      description:
        'Blog platform with JWT authentication, CRUD posts, comments, and admin panel.',
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
      tech: ['MERN', 'JWT', 'REST API'],
      github: 'https://github.com/your-username/mern-blog',
      live: 'https://mern-blog.vercel.app',
      icon: <Code2 size={18} className="text-yellow-400" />,
    },
    {
      id: 4,
      title: 'AI Chat UI',
      description:
        'Modern AI chat interface with responsive layout and clean UX design.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      tech: ['React', 'Tailwind', 'API'],
      github: 'https://github.com/your-username/ai-chat-ui',
      live: 'https://ai-chat-ui.vercel.app',
      icon: <Database size={18} className="text-pink-400" />,
    },
  ];

  return (
    <section id="projects" className="w-full py-16 sm:py-20 md:py-24 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Real-world full-stack applications built with modern technologies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  {project.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mt-2 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto flex items-center gap-2 text-xs sm:text-sm px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;