import React, { useEffect, useState } from 'react';
import './Verify.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

const Verify = ({ url }) => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  const verifyPayment = async () => {
    try {
      const res = await axios.post(`${url}/api/order/verify`, { success, orderId });
      if (res.data.success) {
        setShowConfetti(true);
        setTimeout(() => navigate('/myorders'), 3000);
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Verification failed:', err);
      navigate('/');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify-wrapper">
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={1000} recycle={false} />}
      {showConfetti && <div className="gradient-overlay"></div>}
      <Loader />
      {showConfetti && <div className="verify-message">Payment Successful! 🎉</div>}
    </div>
  );
};

export default Verify;
