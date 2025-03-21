import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, setStatus } from "../../redux/slices/auth/slice";
import { ReactComponent as OK } from "icons/successIcon.svg";
import { ReactComponent as ERROR } from "icons/errorIcon.svg";
import css from "./Popup.module.scss";

export const Popup = () => {
  const { message = "", status = "" } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setMessage(""));
      dispatch(setStatus(""));
    }, 3500);

    // Clear timeout if the component is unmounted before the timer ends
    return () => clearTimeout(timer);
  }, [message, status, dispatch]);

  return (
    <>
      {message && status && (
        <div
          className={
            message && status ? `${css.wrapper} ${css.shown}` : `${css.wrapper}`
          }
          style={{ color: status === "error" ? "#fe3d3d" : "#02AE1E" }}
        >
          {status === "error" ? <ERROR /> : <OK />} {message}
        </div>
      )}
    </>
  );
};
