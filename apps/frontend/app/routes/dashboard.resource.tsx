import Table from "~/components/Table";
import NavBar from "../components/NavBar";
import type { Route } from "./+types/dashboard.resource";
import columnMapping from "~/config/columnMapping";
import routeMapping from "~/config/routeMapping";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";
import { useState } from "react";

export default function TableItem({ params }: Route.ComponentProps) {
  const resource: string = routeMapping[params.resource.toLowerCase()];
  const columns = columnMapping[resource];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <>
      <NavBar />
      <Table
        resource={resource}
        columns={columns}
        pageSize={10}
        pageIndex={currentPage}
        onPageChange={setCurrentPage}
        onTotalPagesChange={setTotalPages}
      />

      <div className="mt-4 flex justify-center">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
