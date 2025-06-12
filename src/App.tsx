
import './App.css'
import OrderPage from './components/OrderPage/OrderPage'
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <OrderProvider>
      <OrderPage></OrderPage>
    </OrderProvider>
  );
}

export default App
