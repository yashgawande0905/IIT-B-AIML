import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Dashboard
import Home from "./pages/Dashboard/Home";

// CSV + Table
import UploadCSV from "./pages/UploadCSV";
import EquipmentTable from "./pages/EquipmentTable";

// Analytics Subpages
import FlowratePage from "./pages/Analytics/FlowratePage";
import PressurePage from "./pages/Analytics/PressurePage";
import TemperaturePage from "./pages/Analytics/TemperaturePage";

// History + PDF
import HistoryPage from "./pages/History";
import GeneratePDF from "./pages/GeneratePDF";

// Others
import Settings from "./pages/Settings";
import NotFound from "./pages/OtherPage/NotFound";

// Auth
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Main Layout (Sidebar + Header + Page) */}
        <Route element={<AppLayout />}>

          {/* Dashboard */}
          <Route index path="/" element={<Home />} />

          {/* Upload + Table */}
          <Route path="/upload" element={<UploadCSV />} />
          <Route path="/equipment-table" element={<EquipmentTable />} />

          {/* Analytics */}
          <Route path="/flowrate" element={<FlowratePage />} />
          <Route path="/pressure" element={<PressurePage />} />
          <Route path="/temperature" element={<TemperaturePage />} />

          {/* History + PDF */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/generate-pdf" element={<GeneratePDF />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />

        </Route>

        {/* Auth routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
