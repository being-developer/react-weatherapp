var GreeterMessage = React.createClass({
  render : function(){
    var name= this.props.name;
    var message= this.props.message;
    return (
      <div>
        <h1> some {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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
var firstname = "Subhash"
ReactDOM.render(
      <Greeter/>,
     document.getElementById('app'));
