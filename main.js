class HeaderInc extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
  				<div class="wrapper wrapper--narrow">
    					<center><img src="headline.png" alt="CrvenaPerspektiva"></center>
  				</div>
			</header>
		`
	}
}

customElements.define('header-inc', HeaderInc)

class Sidebar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="sidebar">
        			<div class ="menu">
        				<details class="menu-item" open="">
          					<summary class="menu-item-summary">Izbornik</summary>
          						<div class="menu-item-content">
            							<ul>
              								<li><a href="index.html">Početna stranica</a></li>
              								<li><a href="faq.html">FAQ za ne-ljevičare</a></li>
            							</ul>
          						</div>
        				</details>
      				</div>
     			 </div>
	 	`
	}
}

customElements.define('sidebar', Sidebar)
