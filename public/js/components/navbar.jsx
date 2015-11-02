var NavBar = React.createClass({
  generateItems: function(item){
    return <NavBarItems url={item.url} text={item.text} />
  },

  render: function(){

  var items = this.props.items.map(this.generateItems);
  return <ul className="menu"> {items} </ul>;
  }
});
