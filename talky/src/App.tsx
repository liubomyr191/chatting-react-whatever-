import { GlobalProvider } from "./context/GlobalProvider";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  return (
    <GlobalProvider>
      <PublicRoutes />
    </GlobalProvider>
  );
}

export default App;
