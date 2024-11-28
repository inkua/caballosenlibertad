import { useEffect, useRef, useState } from "react";

function useDropdownBlur(initialState = false) {
  const [toggle, setToggle] = useState(initialState)
  const menuRef = useRef()

  useEffect(() => {
    const handleBlur = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
        setToggle(false)
      }
    };
    menuRef.current?.addEventListener("blur", handleBlur, true)

    return () => {
      menuRef.current?.removeEventListener("blur", handleBlur, true)
    }
  }, [])

  return { toggle, setToggle, menuRef }
}

export default useDropdownBlur