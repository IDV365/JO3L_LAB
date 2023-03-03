class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                        <header>
                        <nav class="navbar flex">
                          <div class="logo">JO3L-Labs</div>
                          <ul class="nav-links menu flex">
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./about.html">About</a></li>
                            <li class="dropdown_nav">
                              <a href="./products.html">Products</a>
                              <ul class="dropdown">
                                <li><a href="./frames.html">Frames</a></li>
                                <li><a href="./rf-power-meter.html">RF Power meter</a></li>
                              </ul>
                            </li>
                            <li class="dropdown_nav">
                              <a href="./services.html">Services</a>
                              <ul class="dropdown">
                                <li>
                                  <a href="./3D-printing.html">3D-printing</a>
                                </li>
                                <li><a href="./building.html">Building</a></li>
                                <li><a href="./tuning.html">Tuning</a></li>
                                <li>
                                  <a href="./farme_design.html">Frame Design</a>
                                </li>
                              </ul>
                            </li>
                            <li><a href="./contact.html">Contact</a></li>
                          </ul>
                        </nav>
                      </header>
      
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="footer_pages">
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./contact.html">Support</a></li>
        <li><a href="./about.html#team">Team</a></li>
      </ul>
    </div>
    <div class="footer_icons">
      <ul>
        <li><a class="fa fa-youtube" href="https://youtube.com/@idvfpv"></a></li>
        <li>
          <a
            class="fa fa-instagram"
            href="https://www.instagram.com/idv.fpv/"
          ></a>
        </li>
      </ul>
    </div>
  </footer>
  
  
    `
  }
}

customElements.define('my-footer', MyFooter)