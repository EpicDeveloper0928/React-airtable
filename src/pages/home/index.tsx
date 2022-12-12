import React, { useEffect } from "react";

import Table from "components/table";
import Tabs from "components/tabs";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Tabs />
      <Table />
    </div>
  );
}
