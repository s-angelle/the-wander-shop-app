const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class Index extends React.Component {
  render() {
    const { adventures } = this.props;
    return (
      <DefaultLayout title="Check Out Our Adventures">
        <div>
          <ul>
            {adventures.map((adventure) => {
              return (
                <div className="zoom-box" id="index-list">
                  <li key={adventure._id}>
                    <a href={`/adventures/${adventure._id}`}>
                      <img src={adventure.image}></img>
                    </a>
                    <a href={`/adventures/${adventure._id}`}>
                      <p>{adventure.title}</p>
                      <p>$ {adventure.price}</p>
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
