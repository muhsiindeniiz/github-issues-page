import React, { Suspense } from "react";
import IssuesPage from "@/module/issues-default/pages/issue-page/issues-page";
import Loading from "@/package/components/loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <IssuesPage />
    </Suspense>
  );
}
