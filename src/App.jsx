import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [ setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="animated-bg"></div>
          <div className="floating-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Build <span className="gradient-text">Lightning Fast</span> Web Apps
            </h1>
            <p className="hero-subtitle">
              Experience the power of Vite and React. Next-generation web development starts here.
            </p>
            
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>

            <div className="tech-stack">
              <div className="tech-item slide-in-1">
                <img src={reactLogo} alt="React" />
                <span>React 19</span>
              </div>
              <div className="tech-item slide-in-2">
                <img src={viteLogo} alt="Vite" />
                <span>Vite</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title fade-in-up">Why Choose Us?</h2>
        <p className="section-subtitle fade-in-up">Cutting-edge technology for modern web development</p>
        
        <div className="features-grid">
          <div className="feature-card fade-in-up">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Speed</h3>
            <p>Instant server start and blazingly fast HMR. Experience development like never before.</p>
          </div>
          
          <div className="feature-card fade-in-up">
            <div className="feature-icon">🎯</div>
            <h3>Simple API</h3>
            <p>Lightweight and easy to use. Get started in minutes, not hours.</p>
          </div>
          
          <div className="feature-card fade-in-up">
            <div className="feature-icon">🚀</div>
            <h3>Production Ready</h3>
            <p>Optimized builds with zero configuration. Deploy with confidence.</p>
          </div>
          
          <div className="feature-card fade-in-up">
            <div className="feature-icon">🌐</div>
            <h3>Full Framework Support</h3>
            <p>Works seamlessly with React, Vue, Angular, and more frameworks.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item fade-in-up">
            <div className="stat-number">100K+</div>
            <div className="stat-label">Developers</div>
          </div>
          <div className="stat-item fade-in-up">
            <div className="stat-number">50M+</div>
            <div className="stat-label">NPM Downloads</div>
          </div>
          <div className="stat-item fade-in-up">
            <div className="stat-number">⚡</div>
            <div className="stat-label">10x Faster HMR</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content fade-in">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join thousands of developers using Vite for their next project</p>
          <button className="btn btn-large">Start Building Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Documentation</h4>
            <ul>
              <li><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite Guide</a></li>
              <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React Docs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://chat.vite.dev/" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://x.com/vite_js" target="_blank" rel="noopener noreferrer">X.com</a></li>
              <li><a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noopener noreferrer">Bluesky</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Vite & React. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App

