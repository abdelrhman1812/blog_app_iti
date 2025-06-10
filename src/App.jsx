import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeProvider";
import TanstackProvider from "./providers/TanstackProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <TanstackProvider>
        <AuthContextProvider>
          <ThemeProvider defaultTheme="dark" storageKey="blog-theme">
            <ToastContainer />
            <MainRoutes />
          </ThemeProvider>
        </AuthContextProvider>
      </TanstackProvider>
    </>
  );
};

export default App;
