/**
 * @author Mihir Patel
 */
import React, { Component } from "react";
import ContactDetail from "../components/ContactDetail";
import FAQ from "../components/FAQ";


class Contact extends Component {
  render() {
    return (
      <div>
        <ContactDetail />
        <FAQ />
      </div>
    );
  }
}
export default Contact;
