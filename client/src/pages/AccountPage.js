import React from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import AccountForm from "../components/Forms/AccountForm";

import useSWR, { mutate } from "swr";

const AccountPage = () => {

  const { data, error } = useSWR("/api/account/");
  const isLoading = !data && !error;

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">
          Account
        </h1>

        <AccountForm data={data}>

        </AccountForm>
      </div>
    </Layout>
  );
};

export default AccountPage;