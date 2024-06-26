"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import IssuesListTable from "../../components/issues-list-table";
import { getIssues } from "../../hooks/useGetIssues";

const IssuesPage = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["issues"],
    queryFn: () => getIssues({ query: "/facebook/react/issues" }),
    staleTime: 1000 * 60 * 5,
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <div className="w-full justify-center">
        <div className="container m-auto">
          <div className="mb-3 mt-5">
            <Link href="/">Clear Filter</Link>
          </div>
          <IssuesListTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default IssuesPage;
