import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Download, Code2, Database,
  Cloud, Workflow, Bot, Plug, Layout, Sparkles, Globe2
} from "lucide-react";
import Image from "next/image";
import { skills, experiences, aiProjects, aiWorkflow, stats, profile } from "@/lib/portfolio-data";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";

const skillIcons = [Code2, Bot, Plug, Layout, Database, Cloud];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark">MB</span><span>maksud<span className="muted">.dev</span></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#ai">AI</a><a href="#projects">Projects</a><a href="#experience">Experience</a></div>
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight size={16}/></a>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> OPEN TO REMOTE &amp; INTERNATIONAL ROLES</div>
          <h1>Scalable backends.<br/><span className="gradient">Intelligent automation.</span></h1>
          <p className="hero-lead">I&apos;m <strong>{profile.name}</strong> — a {profile.role} building Laravel and Node.js APIs, SaaS platforms and <strong>AI-powered automation</strong> with OpenAI, Claude and Gemini.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button secondary" href={profile.cv} download>Download CV <Download size={16}/></a>
            <a className="button secondary" href={`mailto:${profile.email}`}>Get in touch <Mail size={16}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15}/> {profile.location}</span><span><Code2 size={15}/> 3+ years experience</span><span><Globe2 size={15}/> Remote-friendly</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><div className="photo-inner"><Image src="/maksud.png" alt={profile.name} width={800} height={800} priority/><div className="photo-fade"/></div><span className="chip chip-a"><Sparkles size={13}/> AI &amp; Agentic Automation</span><span className="chip chip-b"><span className="status-dot"/> Backend Developer</span></div>
          <div className="hero-card">
            <div className="card-top"><span className="window-dots"><i/><i/><i/></span><span>backend-engineer.ts</span><span className="live">● LIVE</span></div>
            <pre><code><span className="code-purple">const</span> developer = {"{"}{"\n"}  name: <span className="code-green">&quot;Maksud Bhuiyan&quot;</span>,{"\n"}  role: <span className="code-green">&quot;Backend Engineer&quot;</span>,{"\n"}  stack: [<span className="code-green">&quot;Laravel&quot;</span>, <span className="code-green">&quot;Node.js&quot;</span>,{"\n"}          <span className="code-green">&quot;MySQL&quot;</span>, <span className="code-green">&quot;n8n&quot;</span>],{"\n"}  focus: <span className="code-green">&quot;APIs + AI agents&quot;</span>,{"\n"}  mindset: <span className="code-green">&quot;Always learning&quot;</span>{"\n"}{"}"};</code></pre>
            <div className="code-footer"><span><span className="status-dot"/> Open to opportunities</span><span>UTF-8</span></div>
          </div>
        </div>
        <div className="hero-glow"/>
      </section>

      <section className="stats wrap">
        {stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
      </section>

      <section className="section wrap" id="about">
        <Reveal><div className="section-heading"><span className="kicker">01 / ABOUT</span><h2>Engineering with purpose.</h2></div></Reveal>
        <div className="about-grid">
          <Reveal><p className="about-big">I turn complex requirements into <span className="gradient">maintainable software</span> and practical AI automation that solves real problems.</p></Reveal>
          <Reveal><div className="about-text">
            <p>I&apos;m a backend-focused software engineer with professional experience building web applications, REST APIs, SaaS platforms and third-party integrations. I enjoy designing clean backend architecture, improving performance and connecting services into dependable workflows.</p>
            <p>Alongside backend engineering, I build AI agents and automation — WhatsApp and email assistants, multi-step research workflows and LLM integrations — and I use AI tools to move faster while staying responsible for architecture, testing, security and deployment.</p>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
            </div>
          </div></Reveal>
        </div>
      </section>

      <section className="section wrap" id="skills">
        <Reveal><div className="section-heading"><span className="kicker">02 / TOOLKIT</span><h2>Technologies I work with.</h2><p className="section-sub">A practical toolkit for building, shipping and maintaining products.</p></div></Reveal>
        <div className="skill-grid">
          {skills.map((group, i) => { const Icon = skillIcons[i] ?? Workflow; return (
            <Reveal key={group.title}><div className="skill-card"><div className="skill-icon"><Icon/></div><h3>{group.title}</h3><div className="tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></div></Reveal>
          ); })}
        </div>
      </section>

      <section className="section wrap" id="ai">
        <Reveal><div className="section-heading"><span className="kicker">03 / AI ENGINEERING</span><h2>AI agents &amp; automation.</h2><p className="section-sub">Practical AI applications built on real APIs, databases and business tools. These are personal projects currently in development.</p></div></Reveal>
        <div className="ai-grid">
          {aiProjects.map((p, i) => (
            <Reveal key={p.name}><article className="ai-card">
              <div className="ai-top"><span className="ai-index">0{i + 1}</span><span className="status-pill"><span className="status-dot"/> In development</span></div>
              <h3>{p.name}</h3>
              <p className="ai-summary">{p.summary}</p>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="project-tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
            </article></Reveal>
          ))}
        </div>
        <Reveal><div className="ai-workflow">
          <div><span className="kicker">AI-ASSISTED ENGINEERING</span><p>AI speeds up my work. I stay responsible for architecture, implementation, testing, security and deployment.</p></div>
          <ul>{aiWorkflow.map((w) => <li key={w}>{w}</li>)}</ul>
        </div></Reveal>
      </section>

      <section className="section wrap" id="projects">
        <Reveal><div className="section-heading section-row"><div><span className="kicker">04 / SELECTED WORK</span><h2>Projects in the wild.</h2><p className="section-sub">Live websites, web apps, mobile apps and an open-source package.</p></div><span className="project-count">18+ PROJECTS</span></div></Reveal>
        <Projects />
      </section>

      <section className="section wrap" id="experience">
        <Reveal><div className="section-heading"><span className="kicker">05 / EXPERIENCE</span><h2>Where I&apos;ve contributed.</h2></div></Reveal>
        <div className="timeline">
          {experiences.map((exp) => (
            <Reveal key={exp.company}>
              <div className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-date">{exp.period}{exp.current && <span className="now-pill">CURRENT</span>}</div>
                <div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <ul className="timeline-list">{exp.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta wrap">
        <div className="cta-glow"/>
        <span className="kicker">06 / NEXT STEP</span><h2>Have a product to build?</h2><p>Let&apos;s discuss your idea and turn it into a reliable, scalable solution.</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17}/></a>
          <a className="button secondary" href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
          <a className="button secondary" href={profile.cv} download><Download size={16}/> Download CV</a>
        </div>
      </section>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">MB</span><span>maksud<span className="muted">.dev</span></span></a><span>© {new Date().getFullYear()} {profile.name}. Built with care.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
