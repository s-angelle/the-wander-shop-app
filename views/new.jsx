const React = require('react');
const DefaultLayout = require("./layout/DefaultLayout");

class New extends React.Component {
  render() {
    return (
     <DefaultLayout title="Create Your Own Adventure">
               <form action="/adventures" method="POST">
                 <label htmlFor='image'>Image:</label>
                 <input type="text" id='image' name="image" />
                 <label htmlFor='title'>Title:</label>
                 <input type="text" id='title' name="title" />
                 <label htmlFor='description'>Description:</label>
                 <input type="text" id='description'name="description" />
                 <label htmlFor='price'>Price:</label>
                 <input type="textbox" id='price' name="price" />
                 <label htmlFor='stock'>Stock:</label>
                 <input type="textbox" id='stock' name="stock" />
                 <input type="submit" value="Create Adventure"/>
               </form>
     </DefaultLayout>
    )
  }
}

module.exports = New;