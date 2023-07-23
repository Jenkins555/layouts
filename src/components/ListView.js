
import React from "react";

function ListView(props) {
  const { items } = props;
  return (
    <div className="list-view">
      {items}
    </div>
  );
}

export default ListView;
