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