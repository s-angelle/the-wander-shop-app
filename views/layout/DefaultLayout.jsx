const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css" />
          <link rel="stylesheet" href="/css/Normalize.css" />
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Permanent+Marker&family=Press+Start+2P&family=Shadows+Into+Light&display=swap"
            }
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <nav>
            <ul id="nav-bar">
              <li>
                <a href="/adventures">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/adventures/new">Create A New Adventure</a>
              </li>
              <li>
                <a href="/contact-page">Contact Us</a>
              </li>
            </ul>
          </nav>
          <a href="/adventures">
            <img id="company-logo" src={"./images/Wander-Shop-Co.png"}></img>
          </a>
          <div id="default-header">
            <h1>{this.props.title}</h1>
          </div>
          {this.props.children}
          <footer>
            <a href="#">
              <div id="back-to-top">Back To Top</div>
            </a>

            <div id="footer-div">
              <ul id="default-footer">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact-page">Contact Us</a>
                </li>
                <li> &copy; 2022 The Wander Shop Co.</li>
              </ul>
            </div>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
