import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeProvider";
import TanstackProvider from "./providers/TanstackProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <TanstackProvider>
          <ThemeProvider defaultTheme="dark" storageKey="blog-theme">
            <ToastContainer />
            <MainRoutes />
          </ThemeProvider>
        </TanstackProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
