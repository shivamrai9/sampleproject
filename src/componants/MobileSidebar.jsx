import React, { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import DevDrawer from "./DevDrawer";
import DevButton from "./DevButton";

const MobileSidebar = ({ selectedComponent, onComponentSelect }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleItemClick = (itemName) => {
    onComponentSelect(itemName);
    setDrawerOpen(false); // Close drawer when an item is selected
  };

  return (
    <div>
      <DevDrawer
        title="Drawer Title"
        openBtn={
          <DevButton
          className="bg-slate-50 "
              asIcon
              size="sm"
              variant="solid"
              onClick={() => setDrawerOpen(true)}
            >
              <RiMenu5Line className="text-xl text-pink-500" />
            </DevButton>
        }
        position="right"
      >
        <div className="text-center">
          <h2>Drawer Content</h2>
        </div>
      </DevDrawer>
    </div>
  );
};

export default MobileSidebar;
