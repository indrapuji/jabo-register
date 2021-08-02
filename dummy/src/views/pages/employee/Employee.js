import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CPagination,
  CSelect,
  CForm,
  CInput,
  CInputCheckbox,
  CFormGroup,
  CLabel,
  CBadge,
} from "@coreui/react";
import axios from "../../../utilities/axios";
import HostUrl from "../../../utilities/HostUrl";
import ChangeData from "../../../utilities/ChangeData";
import GetColumn from "../../../utilities/GetColumn";
import ReactExport from "react-export-excel";
import { formatDate } from "node-format-date";
import { arrPrint } from "../../../utilities/ArrPrint";
import MapData from "../../../utilities/MapData";
import ComponentToPrint from "./ComponentToPrint";
import { useReactToPrint } from "react-to-print";

const Patient = () => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const history = useHistory();
  const [employeeList, setEmployeeList] = useState(null);
  const [column, setColumn] = useState(null);
  const [dataMap, setDataMap] = useState(null);
  const [dataPrint, setDataPrint] = useState([]);
  const [checkall, setCheckall] = useState(false);
  const [search, setSearch] = useState({
    val: "",
    searchby: "perusahaan",
    resPerPage: "20",
  });
  const [sort, setSort] = useState({
    sort: "nama",
  });
  const [data, setData] = useState([]);
  // console.log(dataPrint);

  useEffect(() => {
    getEmployeeList({ page: 1 });
    // eslint-disable-next-line
  }, [search, sort]);

  const getEmployeeList = async ({ page = 1 }) => {
    try {
      // console.log(sort.sort);
      const { data } = await axios({
        method: "GET",
        url:
          HostUrl +
          `/employee/all?page=${page}&${search.searchby}=${search.val}&resPerPage=${search.resPerPage}&sort=${sort.sort}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setEmployeeList(data);
      setColumn(GetColumn(data.data));
      console.log(MapData(data.data));
      setDataMap(MapData(data.data));
      // console.log(data.data);
      setData(ChangeData(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    // const query = `&${search.searchby}=${search.val}`;
    getEmployeeList({ page: 1 });
  };

  const changePage = (page) => {
    getEmployeeList({ page });
  };

  const handdleEdit = (id) => {
    history.push(`/karyawan/edit/${id}`);
  };

  const onCheckAll = (e) => {
    const { checked } = e.target;
    if (checked === true) {
      setCheckall(true);
      setDataPrint(arrPrint(employeeList.data));
    } else {
      setCheckall(false);
      setDataPrint([]);
    }
  };
  const onCheck = (e) => {
    const { checked, name } = e.target;
    if (checked === true) {
      setDataPrint(dataPrint.concat(Number(name)));
    } else {
      const newData = dataPrint.filter((x) => x !== Number(name));
      setDataPrint(newData);
    }
  };
  // console.log(dataPrint);

  // const handdlePrint = () => {
  //   history.push(`/karyawan/print?items=${dataPrint}`);
  // };

  const onSearch = (e) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const onChangeSort = (e) => {
    const { name, value } = e.target;
    setSort({
      [name]: value,
    });
  };
  // console.log(sort);

  const fields = [
    { key: "nama", label: "Nama", _style: { width: "25%" } },
    { key: "status", label: "Status", _style: { width: "10%" } },
    { key: "gender", label: "Jenis Kelamin", _style: { width: "10%" } },
    { key: "tgl_lahir", label: "Tanggal Lahir", _style: { width: "15%" } },
    { key: "emp_id", label: "Employee Id", _style: { width: "10%" } },
    { key: "nama_company", label: "Perusahaan", _style: { width: "22%" } },
    {
      key: "print",
      label: "",
      sorter: false,
      filter: false,
      _style: { width: "3%" },
    },
    {
      key: "show_details",
      label: "",
      _style: { width: "5%" },
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case true:
        return "success";
      default:
        return "danger";
    }
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@page {
      size: legal;
      margin: 0px;
    }
  
    @media all {
      .pagebreak {
        display: none;
      }
    }
  
    @media print {
      .pagebreak {
        display: block;
        page-break-before: always;
        page-break-after: always;
      }
    }`,
  });
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader color="success">
              <strong>Karyawan</strong>
            </CCardHeader>
            <CRow style={{ marginLeft: 5, marginRight: 10, marginTop: 15 }}>
              <CCol xs="12" md="6">
                <div style={{ display: "flex" }}>
                  <div>
                    <CButton color="success" to="/karyawan/register">
                      Tambah
                    </CButton>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <CButton color="primary" to="/karyawan/import">
                      Import
                    </CButton>
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    {employeeList && (
                      <ExcelFile element={<CButton color="warning">Export</CButton>} filename="LIST EMPLOYEE">
                        <ExcelSheet data={dataMap} name="ONSITE">
                          {column &&
                            column.map((item, index) => {
                              return <ExcelColumn key={index} label={item.header} value={item.field} />;
                            })}
                        </ExcelSheet>
                      </ExcelFile>
                    )}
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <CButton
                      color={dataPrint.length > 0 ? "info" : "secondary"}
                      disabled={dataPrint.length > 0 ? false : true}
                      onClick={handlePrint}
                    >
                      Print
                    </CButton>
                  </div>
                </div>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol xs="7">
                    <CForm inline className="float-right">
                      <CLabel className="mr-sm-2">Sort by </CLabel>
                      <CSelect id="select-sort" name="sort" onChange={onChangeSort}>
                        <option value="nama" defaultValue>
                          Nama
                        </option>
                        <option value="nomor">Nomor</option>
                        <option value="status">Status</option>
                      </CSelect>
                    </CForm>
                  </CCol>
                  <CCol xs="5">
                    <CForm inline className="float-right">
                      <CLabel className="mr-sm-2">Items per page </CLabel>
                      <CSelect id="select-items" name="resPerPage" onChange={onSearch}>
                        <option value="20" defaultValue>
                          20
                        </option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </CSelect>
                    </CForm>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow style={{ marginLeft: 10, marginRight: 10, marginTop: 15 }}>
              <CCol xs="12" md="6">
                <div>
                  <CFormGroup className="my-2" style={{ marginLeft: 15 }}>
                    <CInputCheckbox name="checkbox2" onChange={onCheckAll} />
                    <CLabel>Check all</CLabel>
                  </CFormGroup>
                </div>
              </CCol>
              <CCol xs="12" md="6">
                <CForm inline className="float-right" onSubmit={onClickSearch}>
                  <CInput className="mr-sm-2" placeholder="Search" name="val" onChange={onSearch} />
                  <CSelect id="select" name="searchby" className="mr-sm-2" onChange={onSearch}>
                    <option value="perusahaan" defaultValue>
                      Perusahaan
                    </option>
                    <option value="nama">Nama</option>
                  </CSelect>
                  <CButton color="light" className="my-2 my-sm-0" type="submit">
                    Search
                  </CButton>
                </CForm>
              </CCol>
            </CRow>
            {employeeList && (
              <CCardBody>
                {dataPrint.length < 1 && employeeList.pages > 1 && (
                  <CPagination activePage={employeeList.currentPage} pages={employeeList.pages} onActivePageChange={changePage} />
                )}
                <CDataTable
                  items={data}
                  fields={fields}
                  hover
                  striped
                  bordered
                  size="sm"
                  scopedSlots={{
                    gender: (item) => <td>{item.gender === "male" ? "Laki - laki" : "Perempuan"}</td>,
                    tgl_lahir: (item) => <td>{formatDate(item.tgl_lahir)}</td>,
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>{item.status ? "Updated" : "Not Update"}</CBadge>
                      </td>
                    ),
                    show_details: (item, index) => {
                      return (
                        <td key={item.id} className="float-right">
                          <CButton
                            color="warning"
                            size="sm"
                            onClick={() => {
                              handdleEdit(item.id);
                            }}
                          >
                            Detail
                          </CButton>
                        </td>
                      );
                    },
                    print: (item, index) => {
                      return (
                        <td key={item.id} className="ml-2">
                          {checkall ? <CInputCheckbox checked /> : <CInputCheckbox name={item.id} onChange={onCheck} />}
                        </td>
                      );
                    },
                  }}
                />
                {dataPrint.length < 1 && employeeList.pages > 1 && (
                  <CPagination activePage={employeeList.currentPage} pages={employeeList.pages} onActivePageChange={changePage} />
                )}
              </CCardBody>
            )}
          </CCard>
        </CCol>
      </CRow>
      <ComponentToPrint ref={componentRef} dataPrint={dataPrint} />
    </>
  );
};

export default Patient;
