import React, { useEffect } from "react";

import Table from "components/table";
import Tabs from "components/tabs";
import { useDispatch, useSelector } from "react-redux";
import { getMainData } from "store/home/actions";
import { selectMain } from "store/home/selectors";

export default function Home() {
  const dispatch = useDispatch<any>();
  const tableData = useSelector(selectMain);

  useEffect(() => {
    document.title = "Home";
    dispatch(getMainData());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-full">
      <Tabs />
      <Table dynamicColumns={tableData.data} />
    </div>
  );
}
