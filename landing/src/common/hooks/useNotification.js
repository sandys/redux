import { useContext, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotification must be used within a NotificationContext')
    };
    return context;
};

let num = 0;

export const notify = ({ message, type }, props) => {
    toast[type || "info"](message, props ? props : {
        position: toast.POSITION.TOP_CENTER,
        toastId: num
    });
    num = num >= 1000 ? 0 : num + 1;
};

export const NotificationProvider = ({ children }) => {
    return (
        <NotificationContext.Provider value={notify}>
            <ToastContainer />
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
