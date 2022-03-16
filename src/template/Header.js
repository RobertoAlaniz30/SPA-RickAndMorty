const Header = () => {
    const view = `
      <div class="Header-main">
        <div class="Header-logo">
            <a class="link-logo" href="#/">
              <img src="src/images/logo.png" />
            </a>
        </div>
        <div class="Header-nav">
          <a href="#/about/">
            About
          </a>
          <a href="#/">
            Home
          </a>
        </div>
      </div>
    `;
    return view;
  };
  
  export default Header;