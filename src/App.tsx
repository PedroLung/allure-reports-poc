import "./App.css";

type ProjectStatus = "done" | "progress" | "planned";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Meu site pessoal com informações sobre mim, habilidades e formas de contato.",
    tags: ["React", "TypeScript", "Vite"],
    status: "done",
    github: "https://github.com/seu-usuario/portfolio",
    demo: "https://seu-portfolio.com",
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "Aplicativo para gerenciamento de tarefas com drag and drop e categorias.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "progress",
    github: "https://github.com/seu-usuario/task-manager",
  },
  {
    id: 3,
    title: "E-commerce API",
    description:
      "API RESTful completa para uma loja virtual com autenticação e pagamentos.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    status: "done",
    github: "https://github.com/seu-usuario/ecommerce-api",
  },
  {
    id: 4,
    title: "Chat Realtime",
    description:
      "Aplicação de chat em tempo real com salas e mensagens privadas.",
    tags: ["React", "Socket.io", "Redis"],
    status: "planned",
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description:
      "Painel administrativo com gráficos e visualização de dados em tempo real.",
    tags: ["React", "Chart.js", "Firebase"],
    status: "progress",
    github: "https://github.com/seu-usuario/dashboard",
  },
  {
    id: 6,
    title: "Mobile App",
    description: "Aplicativo mobile multiplataforma para delivery de comida.",
    tags: ["React Native", "Expo", "TypeScript"],
    status: "planned",
  },
];

const statusLabels: Record<ProjectStatus, string> = {
  done: "Concluído",
  progress: "Em andamento",
  planned: "Planejado",
};

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          Allure Hub
        </div>

        <nav className="nav">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </header>

      <main className="main" id="projetos">
        <section className="hero">
          <h1>Meus Projetos</h1>
          <p>
            Uma coleção dos meus trabalhos e experimentos em desenvolvimento
          </p>
        </section>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="card-header">
                <h3>{project.title}</h3>
                <span className={`status-badge ${project.status}`}>
                  {statusLabels[project.status]}
                </span>
              </div>

              <p className="card-description">{project.description}</p>

              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Código
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>
          Feito com React + Vite |{" "}
          <a href="https://github.com/seu-usuario">@seu-usuario</a>
        </p>
      </footer>
    </>
  );
}

export default App;
