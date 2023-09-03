import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, dispatch]);

  if (!notification) {
    return null;
  }

  const notificationClassName =
    notification.type === "warning" ? "warning" : "info";

  return (
    <div className={`notification ${notificationClassName}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
