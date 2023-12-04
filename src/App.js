import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login-page/login'
import { Campaign } from './components/newcampaign-page/campaign'
import { Target } from './components/target-page/target';
import { Dashboard } from './components/dashboard-page/dashboard';
import { Reporting } from './components/reporting-page/reporting';
import { Rcampaign } from './components/campaignrunning-page/rcampaign';
import { Emailtemplate } from './components/emailtemp-page/emailtemplate';
import { LandingPage } from './components/landingtemp-page/landingpage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="newcampaign" element={<Campaign />} />
        <Route path="target" element={<Target />} />
        <Route path="activecampaign" element={<Rcampaign />} />
        <Route path="emailtemplate" element={<Emailtemplate />} />
        <Route path="landingtemplate" element={<LandingPage />} />
        <Route path="reporting" element={<Reporting />} />

      </Routes>
    </div>
  );
}

export default App;
