import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CSelect,
  CForm,
  CInput,
  CLabel,
  CBadge,
  CPagination
} from "@coreui/react";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";
import { formatDate } from "node-format-date";
import GetColumn from "../../utilities/GetColumn";
import ReactExport from "react-export-excel";
import MapData from "../../utilities/MapData";

const Patient = () => {
  const history = useHistory();
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const [patientData, setPatientData] = useState([]);
  const [pages, setPages] = useState()
  const [column, setColumn] = useState(null);
  const [dataMap, setDataMap] = useState(null);
  const [search, setSearch] = useState({
    val: "",
    status: null,
    resPerPage: "20",
  });

  const onClickSearch = (e) => {
    e.preventDefault();
  };

  const handdleEdit = (id) => {
    history.push(`/pasien/edit/${id}`);
    console.log(id);
  };

  const onSearch = (e) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  useEffect(() => {
    getData({ page: 1 });
    // eslint-disable-next-line
  }, [search]);

  const getData = ({ page = 1 }) => {
    let outlet = localStorage.getItem("outlet")
    let url = HostUrl + `/v1/patients/all?limit=${search.resPerPage}&page=${page}&orderBy=-sampleDate`;
    if (search.val) url += `&search=${search.val}`;
    if (search.status) url += `&status=${search.status}`
    if (outlet !== "All") url += `&outlet=${outlet}`
    axios({
      method: "GET",
      url: url + `&clinic=${localStorage.getItem("klinik")}`,
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((data) => {
        setPatientData(data.data.content.data);
        console.log(data.data.content.data);
        setPages(data.data.meta)
        setColumn(GetColumn(data.data.content.data));
        setDataMap(MapData(data.data.content.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePage = (page) => {
    getData({ page });
  };

  const fields = [
    { key: "nama", label: "Nama", _style: { width: "20%" } },
    { key: "gender", label: "Gender", _style: { width: "10%" } },
    { key: "tanggalLahir", label: "Tanggal Lahir", _style: { width: "13%" } },
    { key: "pekerjaan", label: "Pekerjaan", _style: { width: "10%" } },
    { key: "sampleDate", label: "Tanggal Test", _style: { width: "10%" } },
    { key: "resultDate", label: "Tanggal Hasil", _style: { width: "10%" } },
    { key: "status", label: "Status", _style: { width: "10%" } },
    { key: "tipePemeriksaan", label: "Test", _style: { width: "8%" } },
    { key: "show_details", label: "Action", _style: { width: "5%" } },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 1:
        return "danger";
      case 2:
        return "success";
      case 3:
        return "info";
      default:
        return "warning";
    }
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader color="primary">
              <strong>Pasien</strong>
            </CCardHeader>
            <CRow style={{ marginLeft: 5, marginRight: 10, marginTop: 15 }}>
              <CCol xs="12" md="4">
                <div style={{ marginLeft: 10 }}>
                  {patientData && (
                    <ExcelFile element={<CButton color="warning">Export</CButton>} filename="LIST PASIEN">
                      <ExcelSheet data={dataMap} name="PANACEA">
                        {column &&
                          column.map((item, index) => {
                            return <ExcelColumn key={index} label={item.header} value={item.field} />;
                          })}
                      </ExcelSheet>
                    </ExcelFile>
                  )}
                </div>
              </CCol>
              <CCol xs="12" md="8">
                <CRow>
                  <CCol xs="4">
                    <CForm inline className="float-right" onSubmit={onClickSearch}>
                      <CInput className="" placeholder="Search" name="val" onChange={onSearch} />
                    </CForm>
                  </CCol>
                  <CCol xs="4">
                    <CForm inline className="float-right">
                      <CLabel className="mr-sm-2">Status</CLabel>
                      <CSelect id="select-items" name="status" onChange={onSearch}>
                        <option value="0">
                          Need Update
                        </option>
                        <option value="1">Positive</option>
                        <option value="2">Negative</option>
                        <option value="3">Void</option>
                      </CSelect>
                    </CForm>
                  </CCol>
                  <CCol xs="4">
                    <CForm inline className="float-right">
                      <CLabel className="mr-sm-2">Items per page </CLabel>
                      <CSelect id="select-items" name="resPerPage" onChange={onSearch}>
                        <option value="20" defaultValue>
                          20
                        </option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                        <option value="250">250</option>
                      </CSelect>
                    </CForm>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            {patientData && pages && (
              <CCardBody>
                {pages.totalPage > 1 && (
                  <CPagination activePage={pages.currentPage} pages={pages.totalPage} onActivePageChange={changePage} />
                )}
                <CDataTable
                  items={patientData}
                  fields={fields}
                  hover
                  striped
                  bordered
                  size="sm"
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status === 1 ? "Positive" : item.status === 2 ? "Negative" : item.status === 3 ? "Void" : "Need Update"}
                        </CBadge>
                      </td>
                    ),
                    gender: (item) => <td>{item.gender === 1 ? "Laki - laki" : "Perempuan"}</td>,
                    tanggalLahir: (item) => <td>{formatDate(item.tanggalLahir)}</td>,
                    sampleDate: (item) => <td>{formatDate(item.sampleDate)}</td>,
                    resultDate: (item) => <td className="text-center">{!item.resultDate ? "-" : formatDate(item.resultDate)}</td>,
                    tipePemeriksaan: (item) => <td >{!item.tipePemeriksaanId ? "-" : item.tipePemeriksaanNama}</td>,
                    show_details: (item) => {
                      return (
                        <td key={item.id} className="float-right">
                          <CButton
                            color="warning"
                            size="sm"
                            onClick={() => {
                              handdleEdit(item.noRegistrasi);
                            }}
                          >
                            Detail
                          </CButton>
                        </td>
                      );
                    },
                  }}
                />
                {pages.totalPage > 1 && (
                  <CPagination activePage={pages.currentPage} pages={pages.totalPage} onActivePageChange={changePage} />
                )}
              </CCardBody>
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Patient;
