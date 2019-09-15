import React from 'react';
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody
        data={data}
        columns={columns}
      />
    </table>
  );
}
 
export default Table;