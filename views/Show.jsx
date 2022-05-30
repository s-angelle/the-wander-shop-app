const React = require('react');
const DefaultLayout = require("./layout/DefaultLayout");

    class Show extends React.Component {
        render() { 
          const { adventure } = this.props
            return (
              <DefaultLayout title="Adventures Show Page">
                <div id="show-page-div">
                <div id='show-image-div'>
                <img id='show-page-image'src={adventure.image}></img>
              <h2> {adventure.title} </h2>
              <p> {adventure.price} </p>
              <p>Currently in stock: {adventure.stock}</p>
                  <button><a href={`/adventures/${adventure._id}/edit`} >Edit</a></button>
              <button>Buy</button>
              <form action={`/adventures/${adventure._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                  </form>
              </div>
             <div id="product-description">
              <p> {adventure.description}</p>
              <div id='show-page-button'>
              <button id='back-button'><a href={'/adventures'}>Back</a></button></div>
             </div>
             </div>

              </DefaultLayout>
            );
        }
      } 

     module.exports = Show;