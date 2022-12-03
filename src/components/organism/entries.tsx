import React, { PropsWithChildren, useEffect, useState } from "react";
import "ka-table/style.css";
import { ITableProps, kaReducer, Table } from "ka-table";
import { DataType } from "ka-table/enums";
import { DispatchFunc } from "ka-table/types";
import parseLine from "../../lib/parseLine";
import EventCell from "../molecule/eventCell";
import { ICellTextProps } from "ka-table/props";

const tablePropsInit = {
  columns: [
    {
      key: "timestamp",
      title: "Timestamp",
      dataType: DataType.String,
    },
    {
      key: "server",
      title: "Server",
      dataType: DataType.String,
    },
    {
      key: "event",
      title: "Event",
      dataType: DataType.String,
    },
    {
      key: "goal",
      title: "Goal",
      dataType: DataType.String,
    },
    {
      key: "data",
      title: "Data",
      dataType: DataType.String,
    },
    {
      key: "raw",
      title: "Raw",
      dataType: DataType.String,
    },
  ],
  data: [],
  rowKeyField: "raw",
};

export type Row = {
  timestamp?: string;
  server?: string;
  event?: string;
  goal?: string;
  data?: string;
  raw: string;
};

export default function Entries({ file }: { file?: File }) {
  const [tableProps, changeTableProps] = useState<ITableProps>(tablePropsInit);
  const [data, changeData] = useState<Row[]>([]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const lines = (reader.result as string).split(/\r?\n/);
        const data = lines.map((line) => parseLine(line));
        changeData(data);
      };
      reader.readAsText(file);
    }
  }, [file]);

  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prev: ITableProps) => kaReducer(prev, action));
  };

  return (
    <Table
      {...tableProps}
      data={data}
      childComponents={{
        cellText: {
          content: (props: PropsWithChildren<ICellTextProps>) => {
            switch (props.column.key) {
              case "event":
                return <EventCell {...props} />;
            }
          },
        },
      }}
      dispatch={dispatch}
    />
  );
}
