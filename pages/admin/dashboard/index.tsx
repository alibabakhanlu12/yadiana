 
import CTA from "../../../example/components/CTA";
 
import PageTitle from "../../../example/components/Typography/PageTitle";
 
import Layout from "../../../example/containers/Layout";
 import Head from "next/head";
 
function Dashboard() {

 
  return (
    <Layout> 
<Head>
  <title> dashboard</title>
</Head>
      <PageTitle>Dashboard</PageTitle>

      <CTA />
    </Layout>
  );
}

export default Dashboard;
