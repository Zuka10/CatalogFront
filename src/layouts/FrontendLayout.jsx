import { Outlet } from "react-router-dom";

function FrontendLayout() {
  return (
    <div className="bgcolor">
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default FrontendLayout;
