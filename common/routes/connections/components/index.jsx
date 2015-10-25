import React from 'react';

const messages = {
  connections: {
    id: 'connections',
    description: 'Connections to be shown',
    defaultMessage: 'Connections'
  }
};

const style = {
  display: 'inline-block',
  padding: '9px 5px',
  margin: 0,
  fontSize: '16px',
  lineHeight: '16px',
  borderRadius: '4px',
  verticalAlign: 'top',
  opacity: 0.7
};

export default class ConnectionsBar extends React.Component {

  render () {
    const { connections } = this.props;
    return (
      <p style={style} className='connections'>
        <FormattedMessage {...messages.connections}>
          {text => <h1>{text}</h1>}hey
        </FormattedMessage>
      </p>
    );
  }
}

ConnectionsBar.PropTypes = {
  connections: React.PropTypes.number
};
