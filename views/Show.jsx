const React = require('react');

    class Show extends React.Component {
        render() { 
            const { adventure } = this.props;
            return (
              <>
              <h1>Adventures Show Page</h1>
              <p> {adventure?.title} </p>
   
              <p> {adventure?.price} </p>
              <p> {adventure?.description}</p>
              <button><a href={'/adventures'}>Back</a></button>
              </>
            );
        }
      } 

     module.exports = Show;