var Handler = React.createClass({
  render: function(){
    console.log(this.props.items);
    return (

    <div>
      <NavBar items={this.props.items}/>
      <User/>
      <FriendsContainer />
      </div>
    );
  }
});
