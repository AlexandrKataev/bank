import { Activity, Cards, EarnGifts, HelpCenter, Home, Recipients } from '@pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cards" element={<Cards />} />
      <Route path="activity" element={<Activity />} />
      <Route path="recipients" element={<Recipients />} />
      <Route path="help" element={<HelpCenter />} />
      <Route path="gifts" element={<EarnGifts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
