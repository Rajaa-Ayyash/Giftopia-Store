import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminDashboard from '../../components/adminDashboard/AdminDashboard';
import ProductMangmantPage from '../../pages/productMangmantPage/ProductMangmantPage';

export default function DashboardPage() {
  const location = useLocation();

  return (
    <>
      <AdminDashboard />
    </>
  );
}
