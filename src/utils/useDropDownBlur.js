import { useEffect, useRef, useState } from "react";

function useDropdownBlur(initialState = false, modalOpen = false, secondModalOpen = false) {
  const [toggle, setToggle] = useState(initialState);
  const menuRef = useRef();

  useEffect(() => {
    const handleBlur = (event) => {
      if (modalOpen || secondModalOpen) return;
      if (
        menuRef.current &&
        event.relatedTarget &&
        menuRef.current.contains(event.relatedTarget)
      ) {
        return;
      }

      setToggle(false);
    };

    menuRef.current?.addEventListener("blur", handleBlur, true);

    return () => {
      menuRef.current?.removeEventListener("blur", handleBlur, true);
    };
  }, [modalOpen, secondModalOpen]);

  return { toggle, setToggle, menuRef };
}

export default useDropdownBlur;