import React, { useState, useEffect } from "react";
import { Doughnut, Line } from "react-chartjs-2";

import CTA from "../../../example/components/CTA";
 
import PageTitle from "../../../example/components/Typography/PageTitle";
 
import Layout from "../../../example/containers/Layout";
import response, { ITableData } from "../../../utils/demo/tableData";
 
 
function Dashboard() {
 

  const [page, setPage] = useState(1);
  const [data, setData] = useState<ITableData[]>([]);
 
  const resultsPerPage = 10;
 
 
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <Layout>
      <PageTitle>Dashboard</PageTitle>

      <CTA />
    </Layout>
  );
}

export default Dashboard;
