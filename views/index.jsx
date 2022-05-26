const React = require('react');


class Index extends React.Component {
  render() { 
      const { adventures } = this.props;
      return (
        <>
        <nav>
          <a href='/adventures/new'>Create A New Adventure</a>
        </nav>
        <h1>Adventures Index Page</h1>
        <ul>
           {
                                  
             adventures.map((adventure, index)=> {
               return (
                <>
                  <li key={index}><a href={`/adventures/${index}`}>{adventure.title}</a></li>
                  <p>{adventure.price}</p>
                </>
               )
             })
            
           }
        </ul>
        </>
      );
  }
} 

module.exports = Index;