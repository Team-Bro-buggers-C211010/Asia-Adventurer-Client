import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center text-[#ccd7af]"><span className="loading loading-bars loading-lg min-h-screen"></span></div>;
    }
    if (user) {
        return children ;
    }
    return (
        <>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoutes;