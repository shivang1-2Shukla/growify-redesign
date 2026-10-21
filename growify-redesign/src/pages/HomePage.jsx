import { useState } from 'react'

function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      <main className="hero-section">
        <p className="eyebrow">GROWIFY DIGITAL / GROWTH SYSTEMS</p>

        <h1>
          Growth systems for <span>high-value brands.</span>
        </h1>

        <p className="hero-copy">
          We bring together commerce, growth marketing, customer journeys and
          AI-powered products for luxury, fashion and lifestyle brands.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#work-with-us">
            Start a project
          </a>

          <a className="text-link" href="#case-studies">
            Explore our work <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="hero-panel">
          <p>COMMERCE + GROWTH + AI</p>
          <div>
            <span>Luxury commerce</span>
            <span>Customer journeys</span>
            <span>AI products</span>
          </div>
        </div>
      </main>

      <section
        className="services-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="section-heading">
          <p className="eyebrow">WHAT WE BUILD</p>
          <h2 id="services-title">
            One connected system for considered growth.
          </h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <p className="service-number">01</p>
            <h3>Commerce experiences</h3>
            <p>
              Storefront strategy, UX/UI, Shopify development and conversion
              improvements designed for premium customer journeys.
            </p>
          </article>

          <article className="service-card">
            <p className="service-number">02</p>
            <h3>Demand & retention</h3>
            <p>
              Performance marketing, SEO, content, CRM, email and WhatsApp
              journeys that connect acquisition with long-term customer value.
            </p>
          </article>

          <article className="service-card">
            <p className="service-number">03</p>
            <h3>Data & AI operations</h3>
            <p>
              Reporting, workflow improvements, integrations and AI-powered
              solutions that make growth easier to understand and operate.
            </p>
          </article>
        </div>
      </section>

      <section
        className="products-section"
        id="products"
        aria-labelledby="products-title"
      >
        <div className="section-heading">
          <p className="eyebrow">PRODUCTS & TECHNOLOGY</p>
          <h2 id="products-title">
            Technology built for the next customer decision.
          </h2>
        </div>

        <div className="product-grid">
          <article className="product-card product-card-featured">
            <p className="product-label">AVAILABLE NOW</p>
            <h3>Lookify</h3>
            <p>
              AI virtual try-on for fashion and luxury brands, designed to
              help shoppers picture products on themselves before they buy.
            </p>

            <a
              className="product-link"
              href="https://lookify.in/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Lookify <span aria-hidden="true">&rarr;</span>
            </a>
          </article>

          <article className="product-card">
            <p className="product-label">DETAILS TO BE VERIFIED</p>
            <h3>Rossify</h3>
            <p>
              Product information is being verified. This card will be updated
              with its use case, audience and product demonstration.
            </p>
          </article>

          <article className="product-card">
            <p className="product-label">DETAILS TO BE VERIFIED</p>
            <h3>Craftify</h3>
            <p>
              Product information is being verified. This card will be updated
              with its use case, audience and product demonstration.
            </p>
          </article>
        </div>
      </section>

      <section
        className="case-studies-section"
        id="case-studies"
        aria-labelledby="case-studies-title"
      >
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 id="case-studies-title">
            Growth built around the way each brand operates.
          </h2>
        </div>

        <div className="case-study-grid">
          <article className="case-study-card">
            <p className="case-study-label">MAHIMA MAHAJAN</p>
            <h3>Scaling a global couture business.</h3>
            <p>
              A connected growth approach spanning international commerce,
              market strategy, operations, sales support and reporting.
            </p>

            <div className="case-study-tags">
              <span>International growth</span>
              <span>Commerce</span>
              <span>Sales operations</span>
            </div>

            <a className="text-link" href="#work-with-us">
              Discuss a similar challenge <span aria-hidden="true">&rarr;</span>
            </a>
          </article>

          <article className="case-study-card case-study-card-dark">
            <p className="case-study-label">RIDHI MEHRA</p>
            <h3>From digital launch to global couture.</h3>
            <p>
              A long-term growth system bringing Shopify, performance,
              retention and international sales operations together.
            </p>

            <div className="case-study-tags">
              <span>Shopify</span>
              <span>Customer retention</span>
              <span>Global commerce</span>
            </div>

            <a className="text-link" href="#work-with-us">
              Discuss a similar challenge <span aria-hidden="true">&rarr;</span>
            </a>
          </article>
        </div>

        <p className="case-study-note">
          Case-study outcomes and detailed client approvals will be validated
          before publication.
        </p>
      </section>

      <section className="contact-section" id="work-with-us">
        <div className="contact-intro">
          <p className="eyebrow">WORK WITH US</p>
          <h2>Ready to build what's next?</h2>
          <p>
            Tell us a little about your brand, challenge or project. We'll
            begin with the right conversation.
          </p>
        </div>

        {formSubmitted ? (
          <div className="form-success" role="status">
            <p className="eyebrow">ENQUIRY RECEIVED</p>
            <h3>Thank you for reaching out.</h3>
            <p>
              This prototype has saved your submission state in the browser.
              We'll connect it to the FastAPI backend later.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Work email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </label>

            <label>
              Brand or company
              <input
                type="text"
                name="company"
                placeholder="Your brand name"
                required
              />
            </label>

            <label>
              What would you like to grow?
              <textarea
                name="message"
                placeholder="Tell us about your project, goals or challenge."
                rows="5"
                required
              />
            </label>

            <button type="submit">Send enquiry</button>
          </form>
        )}
      </section>
    </>
  )
}

export default HomePage
