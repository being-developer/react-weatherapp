  render : function(){
    var GreeterMessage = React.createClass({
    var name= this.props.name;
    return (
      <div>
        <h1>Hello {name} ! I m using React</h1>
        <p>this is from React Component from asdadasd!</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit : function(e){
      e.preventDefault();
      var nameRef = this.refs.name;
      var name = nameRef.value;

      if(typeof name === 'string' && name.length>0){
        this.refs.name.value="";
        this.props.onNewName(name);
      }
  },
  render: function(){
    return (
    <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
    </form>
  );
}
});
var Greeter = React.createClass({
  getDefaultProps : function(){
    return {  name:"Abhishek"};
  },
  getInitialState:function(){
     return {
       name:this.props.name
     };
  },
  handleNewName  : function(name){
    this.setState({
      name:name
    });
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
      var name = this.state.name?this.state.name:'world';
      var message = this.props.message?this.props.message:'world';
      return (
        <div>
          <GreeterMessage name={name}/>
          <GreeterForm onNewName={this.handleNewName}/>
      </div>
    s  );
  }
});

var firstname = "Subhash"
ReactDOM.render(
      <Greeter name={firstname} message="Message from the props"/>,
     document.getElementById('app'));
