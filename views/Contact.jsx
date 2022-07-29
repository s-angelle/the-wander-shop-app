const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class Contact extends React.Component {
  render() {
    const adventure = this.props.adventure;
    return (
      <DefaultLayout title="Come Say Hi!">
        <div id="contact-page">
          <div id="contact-info">
            {/* <img id="contact-bg" src={"/images/happy-nomads.png"}></img> */}
            <a href={"https://facebook.com"} target={`_blank`}>
              {/* <img id="fb-logo" src={"/images/Facebook-logo.png"} alt="" /> */}
            </a>
            <a href={"https://instagram.com"} target={`_blank`}>
              {/* <img id="ig-logo" src={"images/Instagram-logo.png"}></img> */}
            </a>
            <a href={"https://twitter.com"} target={`_blank`}>
              {/* <img id="t-logo" src={"images/Twitter-logo.png"}></img> */}
            </a>
            <p>Email : TheWanderShopCo@gmail.com</p>
            <p> Phone # : +1 (323) - 457- 7899</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Contact;
