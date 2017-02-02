const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
      var children = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          className: this.props.theme
        })
      })

      return(
        <div>
        {children}
        </div>
      )
  }
}

module.exports = ThemedDecorations;
