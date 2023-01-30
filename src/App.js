import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from 'theme';
import { useLoadScript } from '@react-google-maps/api';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import Products from 'scenes/products';
import Customers from 'scenes/customers';
import Transactions from 'scenes/transactions';
import Geography from 'scenes/geography';
import Overview from 'scenes/overview';
import Daily from 'scenes/daily';
import Monthly from 'scenes/monthly';
import Breakdown from 'scenes/breakdown';
import Admin from 'scenes/admin';
import Performance from 'scenes/performance';
import Shipments from 'scenes/shipments';
import AvailableTruck from 'scenes/available-truck';
import GenericEditForm from 'forms/edit-generic-form';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAn3Pf0pXfQ2KtS_a_cM1PP-T8gvZAFt8w',
  });

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/shipments" element={<Shipments />} />
              <Route
                path="/available-truck/:truckId"
                element={<AvailableTruck />}
              />
              <Route path="/create-form" element={<GenericEditForm />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
