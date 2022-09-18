import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Drawer from "./Drawer";
export default function Layout(props: {}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openSidebar = () => {
    setDrawerOpen(true);
  };
  const closeSidebar = () => {
    setDrawerOpen(false);
  };
  if (drawerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <>
      <Header openSidebar={openSidebar} />
      <AnimatePresence>
        {drawerOpen && <Drawer closeSidebar={closeSidebar} />}
      </AnimatePresence>
    </>
  );
}
