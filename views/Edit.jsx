const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class Edit extends React.Component {
  render() {
    const { adventure } = this.props;
    return (
      <DefaultLayout title="Edit Adventure">
        <div id="new-page-div">
          <form
            action={`/adventures/${adventure._id}?_method=PUT`}
            method="POST"
          >
            <label htmlFor="image">Image (URL):</label>
            <input type="text" id="image" name="image" />
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="price">Price: $</label>
            <input
              type="textbox"
              id="price"
              name="price"
              placeholder="no commas"
            />
            <label htmlFor="stock">Stock:</label>
            <input type="textbox" id="stock" name="stock" />
            <div id="description-div">
              <label htmlFor="description">Description:</label>
              <textarea
                rows="5"
                cols="60"
                id="description"
                name="description"
              ></textarea>
            </div>
            <div id="adventure-button">
              <input type="submit" value="Update Adventure" />
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
