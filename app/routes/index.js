/** Libraries */
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Dashboard = lazy(() => import('Views/Dashboard/Dashboard'));

const RootRouter = () => {
  const renderDashboard = () => {
    return (
      <Suspense fallback={<div />}>
        <Dashboard />
      </Suspense>
    );
  };

  return (
    <Routes>
      <Route path="/" element={renderDashboard()} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default RootRouter;
