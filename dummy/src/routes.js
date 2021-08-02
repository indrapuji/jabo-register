import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Patient = React.lazy(() => import("./views/pages/Patient"));
const EditPatient = React.lazy(() => import("./views/pages/EditPatient"));
const Doctor = React.lazy(() => import("./views/pages/Doctor"));
const EditDoctor = React.lazy(() => import("./views/pages/EditDoctor"));
const RegisterDoctor = React.lazy(() => import("./views/pages/RegisterDoctor"));
const ChangePassword = React.lazy(() => import("./views/pages/ChangePassword"));
const AddPasien = React.lazy(() => import("./views/pages/AddPatient"));
const Price = React.lazy(() => import("./views/pages/Price"));
const RegisterPrice = React.lazy(() => import("./views/pages/RegisterPrice"));
const Admin = React.lazy(() => import("./views/pages/Admin"));
const RegisterAdmin = React.lazy(() => import("./views/pages/RegisterAdmin"));
const Outlet = React.lazy(() => import("./views/pages/Outlet"));
const RegisterOutlet = React.lazy(() => import("./views/pages/RegisterOutlet"));
const Operator = React.lazy(() => import("./views/pages/Operator"));
const RegisterOperator = React.lazy(() => import("./views/pages/RegisterOperator"));
const Referal = React.lazy(() => import("./views/pages/Referal"));
const RegisterReferal = React.lazy(() => import("./views/pages/RegisterReferal"));
const Organization = React.lazy(() => import("./views/pages/Organization"));
const RegisterOrganization = React.lazy(() => import("./views/pages/RegisterOrganization"));

// const Company = React.lazy(() => import("./views/pages/company/Company"));
// const CompanyReg = React.lazy(() => import("./views/pages/company/RegisterCompany"));
// const CompanyEdit = React.lazy(() => import("./views/pages/company/EditCompany"));
// const CompanyImport = React.lazy(() => import("./views/pages/company/ImportCompany"));

// const Riwayat = React.lazy(() => import("./views/pages/riwayat/Riwayat"));
// const RiwayatReg = React.lazy(() => import("./views/pages/riwayat/RegisterRiwayat"));
// const RiwayatEdit = React.lazy(() => import("./views/pages/riwayat/EditRiwayat"));

// const Employee = React.lazy(() => import("./views/pages/employee/Employee"));
// const EmployeeReg = React.lazy(() => import("./views/pages/employee/RegisterEmployee"));
// const EmployeeEdit = React.lazy(() => import("./views/pages/employee/EditEmployee"));
// const EmployeeImport = React.lazy(() => import("./views/pages/employee/ImportEmployee"));
// const EmployeeUpdate = React.lazy(() => import("./views/pages/employee/UpdateEmployee"));
// const EmployeePrint = React.lazy(() => import("./views/pages/employee/EmployeePrint"));

// const Patient = React.lazy(() => import("./views/pages/patient/Patients"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // { path: "/perusahaan", exact: true, name: "Perusahaan", component: Company },
  // { path: "/perusahaan/register", exact: true, name: "Register", component: CompanyReg },
  // { path: "/perusahaan/import", exact: true, name: "Import", component: CompanyImport },
  // { path: "/perusahaan/edit/:dataId", exact: true, name: "Edit", component: CompanyEdit },
  // { path: "/riwayat", exact: true, name: "Master Riwayat", component: Riwayat },
  // { path: "/riwayat/register", exact: true, name: "Edit", component: RiwayatReg },
  // { path: "/riwayat/edit/:dataId", exact: true, name: "Edit", component: RiwayatEdit },
  // { path: "/karyawan", exact: true, name: "Karyawan", component: Employee },
  // { path: "/karyawan/register", exact: true, name: "Register", component: EmployeeReg },
  // { path: "/karyawan/print", exact: true, name: "print", component: EmployeePrint },
  // { path: "/karyawan/import", exact: true, name: "Import", component: EmployeeImport },
  // { path: "/karyawan/edit/:dataId", exact: true, name: "Edit", component: EmployeeEdit },
  // { path: "/:dataId/update", exact: true, name: "Update", component: EmployeeUpdate },
  { path: "/admin", exact: true, name: "Admin", component: Admin },
  { path: "/admin/register", exact: true, name: "Register", component: RegisterAdmin },
  { path: "/pasien", exact: true, name: "Pasien", component: Patient },
  { path: "/pasien/edit/:dataId", exact: true, name: "Edit", component: EditPatient },
  { path: "/doctor", exact: true, name: "Doctor", component: Doctor },
  { path: "/doctor/edit/:dataId", exact: true, name: "Edit", component: EditDoctor },
  { path: "/doctor/register", exact: true, name: "Register", component: RegisterDoctor },
  { path: "/password", exact: true, name: "Change Password", component: ChangePassword },
  { path: "/add", exact: true, name: "Register", component: AddPasien },
  { path: "/harga", exact: true, name: "Harga", component: Price },
  { path: "/harga/register", exact: true, name: "Register", component: RegisterPrice },
  { path: "/outlet", exact: true, name: "Harga", component: Outlet },
  { path: "/outlet/register", exact: true, name: "Register", component: RegisterOutlet },
  { path: "/operator", exact: true, name: "Petugas", component: Operator },
  { path: "/operator/register", exact: true, name: "Register", component: RegisterOperator },
  { path: "/referal", exact: true, name: "Petugas", component: Referal },
  { path: "/referal/register", exact: true, name: "Register", component: RegisterReferal },
  { path: "/grup", exact: true, name: "Petugas", component: Organization },
  { path: "/grup/register", exact: true, name: "Register", component: RegisterOrganization },
];

export default routes;
