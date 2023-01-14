import React from "react";
import Table from "./Table";

const Infowindow = ({ windowId }) => {
  return (
    <div>
      <Table windowId={windowId} />
    </div>
  );
};

export default Infowindow;
