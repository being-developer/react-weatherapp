var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');
var Greeter = React.createClass({
  getDefaultProps : function(){
    return {  name:"Subhash",message:"this is Default Message"};
  },
  getInitialState:function(){
     return {
       name:this.props.name,
       message:this.props.message
     };
  },
  handleNewName  : function(updates){
    this.setState(updates);
  },
  render : function(){
      // only return 1 root here only <div>
      // for example code below give error
      // return (
      //   <div>
      //     <h1>Hello World ! I m using React</h1>
      //     <p>this is from React Component from asdadasd!</p>
      //   </div>
      //   <div>adasdad</div>
      // );
      var name = this.state.name;
      var message = this.state.message;
      return (
        <div>
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});
module.exports=Greeter ;
