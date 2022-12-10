import React, { useEffect } from "react";

import Table from "components/table";
import Toolbar from "components/toolbar";
import Tabs from "components/tabs";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="bg-sky-600 h-8 text-white">
      <Tabs />
      <Toolbar />
      <Table />
    </div>
  );
}
