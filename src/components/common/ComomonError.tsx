import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface CommonErrorProps {
  error: Nullable<Error>;
  reset: () => void;
}

function CommonError({ error, reset }: CommonErrorProps) {
  const customId = error?.message;

  const notify = () =>
    toast.error(`${error?.message}`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
      toastId: customId,
      theme: 'dark',
    });

  useEffect(() => {
    if (error) {
      notify();
    }
  }, []);

  return <ToastContainer />;
}

export default CommonError;
