var NavBarItems = React.createClass({
  render: function(){

    return <li><a href="{this.props.url}">{this.props.text}</a></li>;
  }
});
