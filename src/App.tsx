import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import AlertComponent from "./components/AlertComponent";

function App() {
  return (
    <AlertProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <AlertComponent />
        <ContactMeSection />
        <Footer />
      </main>
    </AlertProvider>
  );
}

export default App;
