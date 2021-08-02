// import React from "react";
// import CIcon from "@coreui/icons-react";

const _Adminnav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Pasien",
    to: "/pasien",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Register",
    to: "/add",
    icon: "cil-user-follow",
  },
  // {
  //   _tag: "CSidebarNavDivider",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Master Dokter",
  //   to: "/doctor",
  //   icon: "cil-user",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Master Harga",
  //   to: "/harga",
  //   icon: "cil-money",
  //   badge: {
  //     color: "success",
  //     text: "NEW",
  //   },
  // },

];

const _SuperAdminnav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Pasien",
    to: "/pasien",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Register",
    to: "/add",
    icon: "cil-user-follow",
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Dokter",
    to: "/doctor",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Harga",
    to: "/harga",
    icon: "cil-money",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Admin",
    to: "/admin",
    icon: "cil-address-book",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Outlet",
    to: "/outlet",
    icon: "cil-bank",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Petugas",
    to: "/operator",
    icon: "cil-voice-over-record",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Referal",
    to: "/referal",
    icon: "cil-walk",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Master Grup",
    to: "/grup",
    icon: "cil-building",
  },

];
export { _SuperAdminnav, _Adminnav };
