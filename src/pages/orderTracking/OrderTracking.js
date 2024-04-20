import React from 'react';
import OrderTable from '../../components/orderTrackingPage/OrderSchedule.js';
import OrderTrackingPage from '../../components/orderTrackingPage/StepProgressBar.js';
import CustomerInformation from '../../components/orderTrackingPage/CustomerInformation.js';


function OrderTracking() {
  return (
    <div className='OrderT container'>
    <CustomerInformation/>
      <OrderTrackingPage/>
      <OrderTable/>
    </div>
  );
}

export default OrderTracking;
