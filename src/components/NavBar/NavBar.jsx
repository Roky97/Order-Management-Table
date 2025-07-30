import { Button } from "@mui/material";
import { Container, UserAvatar, UserInfo } from "./NavBar.styles";


export const NavBar = () => {
  return (
    <Container>
      <span>
        <b>Orders</b>
      </span>
      <UserInfo>
        <UserAvatar>NJ</UserAvatar>
        <Button variant="outlined" color="primary">
          Logout
        </Button>
      </UserInfo>
    </Container>
  );
};
