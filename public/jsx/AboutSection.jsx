var AboutSection = React.createClass({
  render: function() {
    return (
      <div>
        <img className="img-responsive" src={this.props.image}/>
        <p>{this.props.blurb}</p>
      </div>
    );
  }
});
