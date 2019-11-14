import React from "react";
import Link from "next/link";

class movie extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Link href="/">
          <a>home</a>
        </Link>
        <h1>movie</h1>
      </div>
    );
  }
}

export default movie;
