import Header from "./components/Header";
import Footer from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
