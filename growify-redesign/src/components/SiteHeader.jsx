function SiteHeader() {
  return (
    <header>
      <a href="/" className="logo">
        GROWIFY
      </a>

      <nav>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#case-studies">Case Studies</a>
      </nav>

      <a className="header-cta" href="#work-with-us">
        Start a project
      </a>
    </header>
  )
}

export default SiteHeader
