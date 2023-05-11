import { Outlet, Navigate } from "react-router-dom";
function ProtectedAdmin() {
  const hasToken = JSON.parse(localStorage.getItem('token'))
  console.log("tokenp",hasToken);
  if (!hasToken) {
    return <Navigate to="/admin" replace={true} />;
  }
  return <Outlet />;
}

export default ProtectedAdmin;