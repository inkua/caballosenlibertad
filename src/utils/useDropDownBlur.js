import { useEffect, useRef, useState } from "react";

function useDropdownBlur(initialState = false, modalOpen = false) {
  const [toggle, setToggle] = useState(initialState);
  const menuRef = useRef();

  useEffect(() => {
    const handleBlur = (event) => {
      if (modalOpen) return;
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
  }, [modalOpen]);

  return { toggle, setToggle, menuRef };
}

export default useDropdownBlur;