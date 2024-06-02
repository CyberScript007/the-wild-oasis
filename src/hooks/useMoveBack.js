import { useNavigate } from "react-router-dom";

export const useMoveBack = function () {
  const navigate = useNavigate();
  return () => navigate(-1);
};
