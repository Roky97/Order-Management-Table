import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 24px;
  height: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.divider.primary};
  border-bottom: none;
  padding: 10px 12px;
  border-radius: 8px 8px 0 0;
`;

export const TableHeaderToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GridsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const MainOrderContainer = styled.div`
  flex: 1;
`;

export const ChildOrdersContainer = styled.div`
  margin-top: 16px;
  border-radius: 8px;
`;

export const ChildOrdersHeader = styled.h4`
  color: ${({ theme }) => theme.text.secondary};
  margin: 8px 0;
`;