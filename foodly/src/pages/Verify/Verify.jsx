import React, { useContext, useEffect } from "react";
import axios from "axios";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Verify = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();
  const success = searchParameters.get("success");
  const orderId = searchParameters.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      orderId,
      success,
    });
    console.log(success);

    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (orderId) {
      // Ensure orderId is available
      verifyPayment();
    }
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
