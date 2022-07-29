const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class About extends React.Component {
  render() {
    const adventure = this.props.adventure;
    return (
      <DefaultLayout title="Who We Are">
        <div id="about-page-div">
          <div id="about-image-div">
            {/* <img id="about-page-image" src={"/images/Who-We-Are.png"}></img> */}
          </div>
          <div id="intro-div">
            <p>
              We are a group of freedom-loving nomads who travel the US full
              time in hopes of sharing amazing experiences with fellow
              adventurers who have insane wanderlust. Our goal is to provide
              anyone who chooses our company an adventure they will <u>
                never
              </u>{" "}
              forget.
            </p>
            <div id="about-page-button">
              <button>
                <a href={"/adventures"}>Back</a>
              </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = About;
