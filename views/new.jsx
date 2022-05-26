const React = require('react');

class New extends React.Component {
  render() {
    return (
     <>
    <h1>Create Your Own Adventure</h1>
               <form action="/adventures" method="POST">
                 <label htmlFor='Title'>Title:</label>
                 <input type="text" id='title' name="title" />
                 <label htmlFor='Title'>Description:</label>
                 <input type="text" id='description'name="description" />
                 <label htmlFor='Title'>Price</label>
                 <input type="textbox" id='price' name="price" />
                 <input type="submit" value="Create Adventure"/>
               </form>
     </>
    )
  }
}

module.exports = New;