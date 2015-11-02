var User = React.createClass({
  getInitialState: function(){
    return {
      username: '@everett'
    }
  },
  setNewState: function(e){
    this.setState({
      username: e.target.value
    });


  },
  render: function(){
    return (
      <div>
          <p> {this.state.username} </p>
          New input: <form><input type="text" value=""/><input type="submit" value="Search" onSubmit={this.setNewState}/></form>
      </div>
    )
  }
});
