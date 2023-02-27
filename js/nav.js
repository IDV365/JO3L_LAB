/* source: https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages */

var navbar = ` 
<nav class="navbar">
  <div class="logo">JO3L-Labs</div>
  <ul class="nav-links">
    <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    <div class="menu">
      <li><a href="/Website_FPV/index.html">Home</a></li>
      <li><a href="/Website_FPV/about.html">About</a></li>
      <li class="dropdown_nav">
        <a href="/Website_FPV/products.html">Products</a>
        <ul class="dropdown">
          <li><a href="/Website_FPV/products/frames.html">Frames</a></li>
          <li><a href="/Website_FPV/products/">RF Power meter</a></li>
        </ul>
      </li>
      <li class="dropdown_nav">
        <a href="/Website_FPV/services.html">Services</a>
        <ul class="dropdown">
          <li>
            <a href="/Website_FPV/services/3D-printing.html">3D-printing</a>
          </li>
          <li><a href="/Website_FPV/services/">Building</a></li>
          <li><a href="/Website_FPV/services/">Tuning</a></li>
          <li><a href="/Website_FPV/services/">Frame Design</a></li>
        </ul>
      </li>
      <li><a href="/Website_FPV/contact.html">Contact</a></li>
    </div>
  </ul>
</nav>

`;

document.body.insertAdjacentHTML("afterbegin", navbar);



// fetch('nav.html')
// .then(res => res.text())
// .then(text => {
//     let oldelem = document.querySelector("script#replace_with_navbar");
//     let newelem = document.createElement("div");
//     newelem.innerHTML = text;
//     oldelem.parentNode.replaceChild(newelem,oldelem);
// })