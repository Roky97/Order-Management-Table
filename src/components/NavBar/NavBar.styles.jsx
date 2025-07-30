import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px 24px;
  background: ${({ theme }) => theme.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.divider.primary};
  color: ${({ theme }) => theme.colors.grey[300]};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
`;

export const UserAvatar = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2f2f2f;
  line-height: 32px;
  text-align: center;
  color:  ${({ theme }) => theme.text.primary};
  font-size: 12px;

`;
