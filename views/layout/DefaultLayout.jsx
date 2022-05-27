
const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css" />
          <link rel="stylesheet" href="/css/Normalize.css" />
          <link href={"https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Permanent+Marker&family=Press+Start+2P&family=Shadows+Into+Light&display=swap"} rel="stylesheet"></link>
        </head>
        <body>
          <nav>
           <ul>
             <li><a href="/adventures/new">Create A New Adventure</a></li>
             <li><a>Mission Statement</a></li>
             <li><a>Reviews</a></li>
             <li><a>Contact Us</a></li>
           </ul>
          </nav>
             <img id='company-logo' src={'/images/Wander-Shop-Co.png'}></img>
             <div id='default-header'>
          <h1>{this.props.title}</h1>
          </div>
          <div id='default-body'>
          {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout