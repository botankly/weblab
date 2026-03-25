import { useState, useEffect } from 'react'
import './App.css'
import profilResmi from './assets/hero.png'
import type { Project } from './types/project'

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>
      <header>
        <div className="header-container">
          <h1>Botan Külay | Portfolyo</h1>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure className="profile-figure">
            <img 
              src={profilResmi} 
              alt="Botan Külay'ın siyah beyaz profesyonel vesikalık fotoğrafı" 
              className="profile-img" 
            />
            <figcaption>Botan Külay - Bilgisayar Mühendisliği Öğrencisi</figcaption>
          </figure>
          <p>
            Merhaba! Ben Botan Külay. Bilgisayar Mühendisliği öğrencisiyim. 
            Web teknolojileri, veri analizi ve yazılım mimarileri üzerine çalışmalar yapıyorum.
            Aşağıda kullandığım teknolojileri görebilirsiniz:
          </p>
          <ul className="tech-list">
            <li>React & TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.id} className={`project-card ${project.featured ? 'featured-card' : ''}`}>
                <div className="project-sample">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                {project.featured && <div className="featured-badge">Öne Çıkan</div>}
                <h3>{project.title} <span className="project-year">({project.year})</span></h3>
                <p>{project.description}</p>
                <p><strong>Teknolojiler:</strong> {project.tech.join(', ')}</p>
                <figcaption>{project.title} görseli</figcaption>
              </article>
            ))}
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate className="contact-form">
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="submit-btn">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Botan Külay. Tüm hakları saklıdır.</p>
          <div className="social-links">
            <a href="https://github.com/botankly" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
