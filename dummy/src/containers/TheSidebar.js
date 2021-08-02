import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from "@coreui/react";
import { LongLogo, Logo } from "src/utilities/CustomData";

// sidebar nav config
import { _SuperAdminnav, _Adminnav } from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const [navigation, setNavigation] = useState(null);
  const show = useSelector((state) => state.sidebarShow);

  useEffect(() => {
    if (localStorage.getItem("type") === "1") {
      setNavigation(_Adminnav);
    } else if (localStorage.getItem("type") === "2") {
      setNavigation(_SuperAdminnav);
    }
  }, []);

  return (
    <CSidebar show={show} onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}>
      <CSidebarBrand className="d-md-down-none" to="/">
        <CImg src={LongLogo} height={40} className="c-sidebar-brand-full" />
        <CImg src={Logo} height={35} className="c-sidebar-brand-minimized" />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
