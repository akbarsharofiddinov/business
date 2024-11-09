import React, { useEffect } from "react";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

interface IProps {
  children: React.ReactNode;
  modal?: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ modal, children, setModal }) => {
  const [{ y }, api] = useSpring(() => ({ y: window.innerHeight }));

  const openSheet = () => api.start({ y: 0 });
  const closeSheet = () => api.start({ y: window.innerHeight });

  const bind = useDrag(
    ({ last, movement: [, my], memo = y.get() }) => {
      // Calculate the new position, clamped between 0 (top limit) and the screen height
      const newY = Math.max(0, memo + my); // Prevents dragging above the initial position

      if (last) {
        // Close the sheet if dragged down far enough
        if (my > 100) setModal(false);
        else api.start({ y: 0 }); // Snap back to the top limit if not closed
      } else {
        api.start({ y: newY }); // Update position within the allowed range
      }

      return memo;
    },
    { from: () => [0, y.get()] }
  );

  useEffect(() => {
    if (modal) openSheet();
    else closeSheet();
  }, [modal]);

  return (
    <>
      <animated.div
        {...bind()}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          y,
          touchAction: "none",
        }}
      >
        <div
          className="modal"
          onClick={() => {
            setModal(false);
          }}
        >
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal_btn" onClick={() => setModal(false)}>
              &times;
            </button>
            {children}
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Modal;
