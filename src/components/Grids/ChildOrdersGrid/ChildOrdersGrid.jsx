import { colorSchemeDarkWarm, themeQuartz } from "ag-grid-community";
import { useMemo } from "react";
import { theme } from "../../../main";
import OrderActionMenu from "../../OrderActionMenu/OrderActionMenu";
import { AgGridReact } from "ag-grid-react";
import { SideCell, StatusBadge } from "../Grids.styles";

const ChildOrdersGrid = ({ childrenOrders, onActionOrder }) => {
  const columns = useMemo(
    () => [
      { headerName: "Order ID", field: "orderId", flex: 1 },
      { headerName: "Symbol", field: "symbol", flex: 1 },
      { headerName: "Type", field: "type", flex: 1 },
      {
        headerName: "Side",
        field: "side",
        flex: 1,
        cellRenderer: (params) => (
          <SideCell side={params.value}>{params.value}</SideCell>
        ),
      },
      { headerName: "TIF", field: "tif", flex: 1 },
      {
        headerName: "Order QTY",
        field: "orderQty",
        flex: 1,
        type: "rightAligned",
      },
      {
        headerName: "Filled QTY",
        field: "filledQty",
        flex: 1,
        type: "rightAligned",
        valueFormatter: (params) => params.value || "-",
      },
      { headerName: "Price", field: "price", flex: 1 },
      {
        headerName: "Status",
        field: "status",
        cellRenderer: (params) => (
          <StatusBadge status={params.value}>{params.value}</StatusBadge>
        ),
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3px 18px",
        },
      },
      { headerName: "Exchange", field: "exchange", flex: 1 },
      { headerName: "Time", field: "time", flex: 1 },
      {
        headerName: "",
        pinned: "right",
        resizable: false,
        width: 32,
        cellStyle: {
          padding: 0,
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        cellRenderer: OrderActionMenu,
        cellRendererParams: {
          onAction: (action, data) => {
            onActionOrder && onActionOrder(action, data);
          },
        },
      },
    ],
    [onActionOrder]
  );

  const themeDark = useMemo(
    () =>
      themeQuartz.withPart(colorSchemeDarkWarm).withParams({
        rowHeight: "28px",
        headerHeight: "32px",
        backgroundColor: theme.background.primary,
        oddRowBackgroundColor: theme.background.secondary,
        rowBorder: "none",
        wrapperBorderRadius: "0 0 8px 8px",
        borderColor: theme.divider.primary,
      }),
    []
  );

  return (
    <>
      <AgGridReact
        theme={themeDark}
        rowData={childrenOrders}
        columnDefs={columns}
        domLayout="autoHeight"
        pagination={false}
        suppressPaginationPanel={true}
      />
    </>
  );
};

export default ChildOrdersGrid;
