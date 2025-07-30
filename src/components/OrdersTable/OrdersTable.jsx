import { useState, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import MainOrdersGrid from "../Grids/MainOrdersGrid/MainOrdersGrid";
import ChildOrdersGrid from "../Grids/ChildOrdersGrid/ChildOrdersGrid";
import { ChildOrdersContainer, ChildOrdersHeader, Container, GridsContainer, MainOrderContainer, TableHeader, TableHeaderToolbar } from "./OrdersTable.styles";

const OrdersTable = ({ orders, createOrder }) => {
  const mainGridRef = useRef();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const exportCSV = useCallback(() => {
    mainGridRef.current.api.exportDataAsCsv();
  }, []);

  const onCreateOrder = useCallback(() => {
    createOrder && createOrder();
  }, [createOrder]);

  return (
    <Container>
      <TableHeader>
        <TableHeaderToolbar>
          <Button
            variant="contained"
            onClick={onCreateOrder}
          >
            Create order
          </Button>
          <Button variant="outlined" onClick={exportCSV}>
            Export
          </Button>
        </TableHeaderToolbar>
      </TableHeader>
      <GridsContainer>
        <MainOrderContainer>
          <MainOrdersGrid
            orders={orders}
            onSelectOrder={setSelectedOrder}
            gridRef={mainGridRef}
            onActionOrder={(action, data) => {
              console.log("Main order action:", action, data);
            }}
          />
        </MainOrderContainer>
        {selectedOrder && selectedOrder.children.length > 0 && (
          <ChildOrdersContainer>
            <ChildOrdersHeader>Child orders</ChildOrdersHeader>
            <ChildOrdersGrid
              childrenOrders={selectedOrder.children}
              onActionOrder={(action, data) => {
                console.log("Child order action:", action, data);
              }}
            />
          </ChildOrdersContainer>
        )}
      </GridsContainer>
    </Container>
  );
};

export default OrdersTable;
