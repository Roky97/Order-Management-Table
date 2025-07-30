import OrdersTable from "../OrdersTable/OrdersTable";
import { NavBar } from "../NavBar/NavBar";
// import orders from "../../mocks/json_orders_complete.json";
import { orders } from "../../mocks/sampleOrders";
import { Container } from "./App.styles";

function App() {
  return (
    <Container>
      <NavBar />
      <OrdersTable orders={orders} />
    </Container>
  );
}

export default App;
