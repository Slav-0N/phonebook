import { Component } from "react";

class ContactList extends Component {
  render() {
    const { children } = this.props;
    return <ul>{children}</ul>;
  }
}

export default ContactList;
