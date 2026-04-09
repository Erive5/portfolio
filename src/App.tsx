import {
  siDbeaver,
  siDocker,
  siFastapi,
  siGmail,
  siGithub,
  siGooglecloud,
  siPostgresql,
  siPostman,
  siPython,
  siVscodium,
  siWindsurf,
} from "simple-icons";
import { BadgeCheck, BrainCircuit, Eye, Workflow } from "lucide-react";

const linkedInPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.556V9h3.563v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const focusAreas = [
  {
    title: "Sistema educativo / onboarding",
    body:
      "Refactorización, corrección de bugs y pequeñas nuevas funcionalidades sobre microservicios de ingesta para audio, video, PDFs, documentos, imagen y speech-to-text. También tuve participación en flujos con agentes para flashcards y evaluaciones.",
  },
  {
    title: "Integración entre sistemas",
    body:
      "Migración y rediseño de una integración entre CRM y plataforma de email marketing, reconstruyendo la comunicación entre datos y moviendo el servicio desde una solución legacy hacia una arquitectura más actual en GCP.",
  },
  {
    title: "Señales comerciales con IA",
    body:
      "Refactorización de una POC orientada a alertas de churn y recomendaciones comerciales a partir de catálogo, clientes e historial de compras, con foco en lógica de negocio y un acercamiento práctico a LangGraph.",
  },
] as const;

const projects = [
  {
    title: "Eri",
    tag: "Proyecto destacado",
    body:
      "Una app de hábitos offline-first, sin cuenta y con datos locales. Nació desde una idea simple: una experiencia más calma, más privada y menos cargada.",
    cta: "Ver proyecto",
  },
  {
    title: "RAG documental",
    tag: "Próximo proyecto",
    body:
      "Ingesta, recuperación y respuestas trazables sobre documentos reales. La idea es trabajar sobre un caso pequeño, técnico y fácil de mostrar.",
    cta: "Próximamente",
  },
  {
    title: "Agente orientado a operaciones",
    tag: "En exploración",
    body:
      "Un flujo guiado para quitar trabajo repetitivo, reunir contexto y convertir reglas de negocio en acciones concretas.",
    cta: "En definición",
  },
] as const;

const experienceNotes = [
  "Refactorización de servicios existentes",
  "Debugging de integraciones en producción",
  "Mantenimiento de microservicios en Python",
  "Procesamiento documental y OCR",
  "Comunicación con clientes y proveedores",
  "Traducción de requerimientos a tareas técnicas",
  "Análisis de logs y seguimiento de incidencias",
  "Trabajo colaborativo y acompañamiento a soporte",
] as const;

const workHistory = [
  {
    role: "Backend Developer",
    company: "Seidor - AI Team",
    period: "Abril 2025 - Presente",
    body:
      "Trabajo sobre microservicios backend en Python, principalmente en tareas de refactorización, debugging, soporte a producción, pequeñas nuevas funcionalidades e integraciones con capacidades de IA.",
  },
  {
    role: "Customer Success Executive - AI Systems",
    company: "Seidor - AI Team",
    period: "Noviembre 2024 - Marzo 2025",
    body:
      "Me tocó coordinar requerimientos, seguimiento de problemas e integraciones con clientes comerciales y proveedores. Esa experiencia me dejó una base fuerte en comunicación, resolución de problemas y lectura operativa de sistemas.",
  },
  {
    role: "Practicante Business Intelligence",
    company: "Dimerc S.A.",
    period: "Julio 2024 - Septiembre 2024",
    body:
      "Trabajé en procesos ETL, SQL y revisión de datos para apoyar un dashboard ligado a logística, tiempos de entrega y consistencia de información entre fuentes.",
  },
] as const;

const education = [
  {
    title: "Título Técnico de Nivel Superior en Analista Programador",
    institution: "CFT INACAP",
    period: "2022 - 2024",
  },
  {
    title: "Título Profesional de Profesora de Inglés",
    institution: "Universidad Andrés Bello",
    period: "2013 - 2020",
  },
] as const;

const certifications = [
  {
    title: "CAE Results",
    href: "/certificates/1727807237521.jpg",
  },
  {
    title: "Diseño y Gestión de Bases de Datos",
    href: "/certificates/1727807595878.jpg",
  },
  {
    title: "Desarrollador Fullstack",
    href: "/certificates/1727807702462.jpg",
  },
  {
    title: "Diseño Ágil de Sistemas",
    href: "/certificates/1727807791180.jpg",
  },
  {
    title: "Título Técnico Analista Programador",
    href: "/certificates/1729181657821%20(1).jpg",
  },
  {
    title: "Título Profesional Profesora de Inglés",
    href: "/certificates/1728236398724.jpg",
  },
] as const;

const technologies = [
  { name: "Python", kind: "simple", icon: siPython },
  { name: "FastAPI", kind: "simple", icon: siFastapi },
  { name: "PostgreSQL", kind: "simple", icon: siPostgresql },
  { name: "Docker", kind: "simple", icon: siDocker },
  { name: "GCP", kind: "simple", icon: siGooglecloud },
  { name: "GitHub", kind: "simple", icon: siGithub },
  { name: "VS Code", kind: "simple", icon: siVscodium },
  { name: "Windsurf", kind: "simple", icon: siWindsurf },
  { name: "Postman", kind: "simple", icon: siPostman },
  { name: "DBeaver", kind: "simple", icon: siDbeaver },
  {
    name: "LangGraph",
    kind: "lucide",
    icon: Workflow,
    color: "#7cc9a7",
  },
  {
    name: "OpenAI APIs",
    kind: "lucide",
    icon: BrainCircuit,
    color: "#8dd3c7",
  },
] as const;

const socialLinks = [
  {
    name: "Gmail",
    href: "mailto:eriver.mm5@gmail.com",
    label: "eriver.mm5@gmail.com",
    kind: "simple",
    icon: siGmail,
  },
  {
    name: "GitHub",
    href: "https://github.com/Erive5",
    label: "GitHub",
    kind: "simple",
    icon: siGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/erika-veronica-mm",
    label: "LinkedIn",
    kind: "custom",
    path: linkedInPath,
    color: "#7ab6e6",
  },
] as const;

const quickFacts = [
  "Backend Developer - Applied AI",
  "Chile",
  "Inglés C1",
  "Microservicios e integraciones",
] as const;

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <div className="topbar-identity">
          <p className="eyebrow">Portafolio</p>
          <p className="brand-role">Backend Developer - Applied AI</p>
        </div>
        <nav className="topnav" aria-label="Principal">
          <a href="#career">Experiencia</a>
          <a href="#education">Formación</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero hero-profile">
          <article className="profile-card">
            <div className="profile-photo-wrap">
              <img
                src="/profilepicture.jpg"
                alt="Retrato de Erika Mejías"
                className="profile-photo"
              />
            </div>
            <div className="profile-copy">
              <p className="eyebrow">Perfil</p>
              <h1>Erika Mejías</h1>
              <p className="profile-role">Backend Developer - Applied AI</p>
              <ul className="profile-facts" aria-label="Resumen rápido">
                {quickFacts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="hero-summary">
            <p className="panel-label">Trabajo actual</p>
            <p className="hero-kicker">
              Trabajo sobre sistemas en producción, integraciones y soluciones
              con IA aplicada.
            </p>
            <p className="hero-text">
              Hoy mi trabajo se reparte entre mantenimiento y mejora de
              microservicios, migración de integraciones entre plataformas y
              refactorización de soluciones orientadas a negocio con apoyo de
              IA.
            </p>
            <ul className="signal-list">
              <li>Refactor, debugging y soporte sobre producción</li>
              <li>Procesamiento documental, OCR y speech-to-text</li>
              <li>Migración de integraciones entre plataformas externas</li>
              <li>Lógica de negocio aplicada a agentes y recomendaciones</li>
            </ul>
            <div className="hero-actions">
              <a className="button button-solid" href="#career">
                Ver experiencia
              </a>
              <a className="button button-ghost" href="#projects">
                Ver proyectos
              </a>
            </div>
          </article>
        </section>

        <section className="focus-grid" aria-label="Trabajo actual">
          {focusAreas.map((item) => (
            <article key={item.title} className="focus-card">
              <p className="card-index">{item.title}</p>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="tools-section" aria-label="Tecnologías">
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Herramientas y tecnologías</h2>
          </div>

          <div className="tools-grid">
            {technologies.map((tool) => (
              <article key={tool.name} className="tool-card">
                <span
                  className="tool-mark"
                  aria-hidden="true"
                  style={{
                    color:
                      tool.kind === "simple"
                        ? `#${tool.icon.hex}`
                        : tool.color,
                  }}
                >
                  {tool.kind === "simple" ? (
                    <svg viewBox="0 0 24 24" className="tool-icon">
                      <path d={tool.icon.path} fill="currentColor" />
                    </svg>
                  ) : (
                    <tool.icon className="tool-icon" strokeWidth={1.8} />
                  )}
                </span>
                <span className="tool-name">{tool.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="career" className="about-section">
          <div className="section-heading">
            <p className="eyebrow">Carrera</p>
            <h2>Experiencia profesional</h2>
          </div>

          <div className="about-layout">
            <article className="about-card">
              {workHistory.map((item) => (
                <div key={item.role + item.period} className="experience-item">
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-meta">
                    {item.company} <span>{item.period}</span>
                  </p>
                  <p>{item.body}</p>
                </div>
              ))}
            </article>

            <article className="notes-card">
              <p className="panel-label notes-heading">
                <BadgeCheck className="notes-icon" strokeWidth={1.8} />
                <span>Competencias desarrolladas</span>
              </p>
              <ul className="note-list">
                {experienceNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          id="education"
          className="about-section"
          aria-label="Educación y certificaciones"
        >
          <div className="section-heading">
            <p className="eyebrow">Formación</p>
            <h2>Educación y certificaciones</h2>
          </div>

          <div className="about-layout">
            <article className="about-card">
              {education.map((item) => (
                <div key={item.title + item.period} className="experience-item">
                  <p className="experience-role">{item.title}</p>
                  <p className="experience-meta">
                    {item.institution} <span>{item.period}</span>
                  </p>
                </div>
              ))}

              <div className="experience-item">
                <p className="experience-role">CAE Results</p>
                <p className="experience-meta">
                  Cambridge English <span>2019</span>
                </p>
                <p>Certificación de inglés con nivel C1.</p>
                <a
                  href="/certificates/1727807237521.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  <Eye className="certificate-eye" strokeWidth={1.8} />
                  <span>Ver certificado</span>
                </a>
              </div>
            </article>

            <article className="notes-card">
              <p className="panel-label">Certificaciones</p>
              <ul className="note-list">
                {certifications.slice(1).map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-link"
                    >
                      <Eye className="certificate-eye" strokeWidth={1.8} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Proyectos personales para desarrollo técnico</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={"project-card" + (index === 0 ? " project-card-featured" : "")}
              >
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <span className="project-cta">{project.cta}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="next-section">
          <div className="section-heading">
            <p className="eyebrow">Dirección</p>
            <h2>Siguientes pasos</h2>
          </div>

          <div className="next-grid">
            <article className="next-card">
              <h3>RAG y evaluación</h3>
              <p>
                Desarrollar sistemas simples para portafolio con recuperación, trazabilidad y formas más
                claras de medir respuestas de LLMs.
              </p>
            </article>
            <article className="next-card">
              <h3>Cloud, CI/CD y despliegue</h3>
              <p>
                Implementar una capa más ordenada de despliegue, automatización y trabajo
                con servicios en nube.
              </p>
            </article>
            <article className="next-card">
              <h3>Arquitectura aplicada</h3>
              <p>
                Solidificar fundamentos con el fin de mejorar el criterio para diseñar soluciones de IA que se sostengan
                bien en producción.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section" aria-label="Sobre mí">
          <div className="section-heading">
            <p className="eyebrow">Sobre mí</p>
            <h2>Contexto personal</h2>
          </div>

          <div className="focus-grid">
            <article className="focus-card">
              <p className="card-index">Fuera del código</p>
              <p className="card-body">
                Me interesan los proyectos personales tranquilos, las
                interfaces limpias y las herramientas que se sienten útiles en
                el día a día. Además, disfruto pasar tiempo al aire libre; me
                gusta leer, jugar en línea y andar en bicicleta.
              </p>
            </article>
            <article className="focus-card">
              <p className="card-index">Forma de trabajo</p>
              <p className="card-body">
                Me acomoda aprender desde la práctica, ordenar sistemas
                existentes y traducir necesidades concretas en soluciones
                técnicas claras. Me motivan los desafíos y me considero
                adaptable frente a nuevas tareas. También valoro los ambientes
                colaborativos y tranquilos.
              </p>
            </article>
            <article className="focus-card">
              <p className="card-index">Idiomas</p>
              <p className="card-body">
                Me ha interesado el aprendizaje de idiomas desde muy pequeña.
                El inglés ha sido una constante en ese camino, y en 2019
                obtuve la certificación CAE con nivel C1. Actualmente, también
                estoy aprendiendo italiano a nivel básico a través de una app.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Si tienes interés, conversemos</h2>
        </div>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="social-link"
            >
              <span
                className="social-icon"
                aria-hidden="true"
                style={{
                  color:
                    link.kind === "simple" ? `#${link.icon.hex}` : link.color,
                }}
              >
                {link.kind === "simple" ? (
                  <svg viewBox="0 0 24 24" className="tool-icon">
                    <path d={link.icon.path} fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="tool-icon">
                    <path d={link.path} fill="currentColor" />
                  </svg>
                )}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
