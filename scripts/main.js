class HeaderInc extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
  				<div class="wrapper wrapper--narrow">
    					<center><img src="images/headline.png" alt="CrvenaPerspektiva"></center>
  				</div>
			</header>
		`
	}
}

customElements.define('header-inc', HeaderInc)

class SidebarInc extends HTMLElement {
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
	  			<div class ="menu">
        				<details class="menu-item" open="">
          					<summary class="menu-item-summary">Problema</summary>
          						<div class="menu-item-content">
            							<ul>
              								<li><a href="ilustracije.html">Ilustracije problema</a></li>
            							</ul>
          						</div>
        				</details>
      				</div>
     			 </div>
	 	`
	}
}

customElements.define('sidebar-inc', SidebarInc)
