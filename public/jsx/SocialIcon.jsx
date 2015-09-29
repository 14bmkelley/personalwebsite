var SocialIcon = React.createClass({
  render: function() {
    return (
      <div>
        <a href={this.props.url} target="_blank">
          <img className="img-responsive" src={this.props.image}/>
        </a>
      </div>
    );
  }
});
