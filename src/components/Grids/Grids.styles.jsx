import styled from "styled-components";

export const StatusBadge = styled.span`
  flex: 1;
  height: 23px;
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey[100]};
  background: ${({ status, theme }) =>
    status === "Filled"
      ? theme.tables.orders.cells.status.filled.background
      : status === "New"
      ? theme.tables.orders.cells.status.new.background
      : status === "Rejected"
      ? theme.tables.orders.cells.status.rejected.background
      : status === "Pending"
      ? theme.tables.orders.cells.status.pending.background
      : status === "Cancelled"
      ? theme.tables.orders.cells.status.cancelled.background
      : "unset"};
`;

export const SideCell = styled.span`
  color: ${({ side, theme }) =>
    side === "BUY"
      ? theme.tables.orders.cells.side.buy.color
      : side === "SELL"
      ? theme.tables.orders.cells.side.sell.color
      : theme.colors.grey[100]};
`;
