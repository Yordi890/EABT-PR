import Table from "~/components/Table";
import NavBar from "../components/NavBar";
import type { Route } from "./+types/dashboard.resource";
import columnMapping from "~/config/columnMapping";
import routeMapping from "~/config/routeMapping";

import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";

import { useState } from "react";

import { useQueryState, parseAsInteger } from "nuqs";

export default function TableItem({ params }: Route.ComponentProps) {
  const resource: string = routeMapping[params.resource.toLowerCase()];
  const columns = columnMapping[resource];

  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true }),
  );

  const [totalPages, setTotalPages] = useState(0);

  return (
    <>
      <NavBar />
      <Table
        resource={resource}
        columns={columns}
        pageIndex={page}
        onPageChange={setPage}
        onTotalPagesChange={setTotalPages}
      />
      {totalPages > 0 && (
        <div className="mt-4 flex justify-center">
          <ResponsivePagination
            current={page}
            total={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </>
  );
}
