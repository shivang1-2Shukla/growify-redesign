import './App.css'

function App() {

  return (
    <>
      <header>
        <a href='/' className='logo'> GROWIFY 
        </a>

        <nav>
          <a href='#services'>Services</a>
          <a href='#products'>Products</a>
          <a href='#case-studies'>Case Studies</a>
        </nav>

        <button type="button">Start a project</button>
      </header>
      <main className="hero-section">
        <p className="eyebrow">GROWIFY DIGITAL / GROWTH SYSTEMS</p>

        <h1>
          Growth systems for <span>high-value brands.</span>
        </h1>

        <p className='hero-copy'>
          We bring together commerce, growth marketing, customer journeys and AI-powered products for luxury, fashion and lifestyle brands.
        </p>

        <div className='hero-actions'>
          <a className='primary-button' href="#work-with-us">
            Start a project
          </a>

          <a className='text-link' href="#case-studies">
            Explore our work <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className='hero-panel'>
          <p>COMMERCE + GROWTH + AI</p>
          <div>
            <span>Luxury commerce</span>
            <span>Customer journeys</span>
            <span>AI products</span>
          </div>
        </div>
      </main>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className='eyebrow'>WHAT WE BUILD</p>
          <h2 id="services-title">
            One connected system for considered growth.
          </h2>
        </div>

        <div className='service-grid'> 
          <article className='service-card'>
            <p className='service-number'>01</p>
            <h3>Commerce experiences</h3>
            <p>
              Storefront strategy, UX/UI, Shopify development and conversion improvements designed for premium customer journeys.
            </p>
          </article>

          <article className='service-card'>
            <p className='service-number'>02</p>
            <h3>Demand & Retention</h3>
            <p>
              Performance marketing, SEO, content, CRM, email and WhatsApp journeys that connect acquisition with long-term customer value.
            </p>
          </article>

          <article className='service-card'>
            <p className='service-number'>03</p>
            <h3>Data & AI operations</h3>
            <p>
              Reporting, workflow improvements, integrations and AI-powered solutions that make growth easier to understand and operate.    
            </p>
          </article>
          
        </div>

      </section>
    </>
  )
}

export default App
