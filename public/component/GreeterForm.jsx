var React = require('react');
var ReactDOM = require('react-dom');
var GreeterForm = React.createClass({
  onFormSubmit : function(e){
      e.preventDefault();
      var nameRef = this.refs.name;
      var messageRef = this.refs.message;
      var name = nameRef.value;
      var message = messageRef.value;
      var updates={};
      if(name.length>0){
        this.refs.name.value="";
        updates.name=name;
      }
      if(message.length>0){
        this.refs.message.value="";
        updates.message=message;
      }
      this.props.onNewName(updates);

  },
  render: function(){
    return (
    <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name"/>
        <textarea  ref="message" placeholder="Enter Message"></textarea>
        <button>Set Name</button>
    </form>
  );
}
});
module.exports= GreeterForm
