const React = require('react');
const DefaultLayout = require("./layout/DefaultLayout");

    class Show extends React.Component {
        render() { 
          const { adventure } = this.props
            return (
              <DefaultLayout title="Adventures Show Page">
                <img src={adventure.image}></img>
              <p> {adventure.title} </p>
   
              <p> {adventure.price} </p>
              <p> {adventure.description}</p>
              <p>{adventure.stock}</p>
              <form action={`/adventures/${adventure._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                  </form>
                  <button><a href={`/adventures/${adventure._id}/edit`} >Edit</a></button>
              <button><a href={'/adventures'}>Back</a></button>
              </DefaultLayout>
            );
        }
      } 

     module.exports = Show;