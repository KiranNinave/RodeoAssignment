import React from "react";
import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Link href="/movie?id=1">
          <a>movie</a>
        </Link>
        <h1>hello world</h1>
      </div>
    );
  }
}

export default Index;
