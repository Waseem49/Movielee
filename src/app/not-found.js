import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div>
      <h1 style={{ margin: "5rem ", textAlign: "center" }}>Page Not found</h1>
      <Link href={"/"}>
        <button style={{ display: "block", margin: "auto" }}>
          Go to HomePage
        </button>
      </Link>
    </div>
  );
};

export default notfound;
