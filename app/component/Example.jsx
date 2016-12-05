var React = require('react');
var {Link} = require('react-router');
var Example=()=>{
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>here are few examples locations to try out</p>
        <ol>
          <li>
            <Link to="/?location=ranchi"> Ranchi,IN</Link>
          </li>
          <li>
            <Link to="/?location=mumbai"> Mumbai,IN</Link>
          </li>
        </ol>
      </div>
    )
  };
module.exports = Example
