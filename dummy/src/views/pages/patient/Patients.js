import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton, CPagination } from "@coreui/react";
import axios from "../../../utilities/axios";
import HostUrl from "../../../utilities/HostUrl";
import ChangeData from "../../../utilities/ChangeData";
import { formatDate } from "node-format-date";

const Patients = () => {
  const [patientList, setPatientList] = useState(null);
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    getPatientList({ page: 1 });
    // eslint-disable-next-line
  }, []);

  const getPatientList = async ({ page = 1 }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: HostUrl + `/patient/all-now?page=${page}`,
      });
      console.log(data);
      setPatientList(data);
      setData(ChangeData(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = (page) => {
    getPatientList({ page });
  };

  const handdleEdit = (id) => {
    // history.push(`/karyawan/edit/${id}`);
  };

  const fields = [
    { key: "nama", label: "Nama", _style: { width: "25%" } },
    { key: "gender", label: "Jenis Kelamin", _style: { width: "10%" } },
    { key: "umur", label: "Umur", _style: { width: "15%" } },
    { key: "nomor_registrasi", label: "Nomor Registrasi", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "5%" },
    },
  ];

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader color="success">
              <strong>Pasien</strong>
            </CCardHeader>
            {patientList && (
              <CCardBody>
                {patientList.pages > 1 && (
                  <CPagination activePage={patientList.currentPage} pages={patientList.pages} onActivePageChange={changePage} />
                )}
                <CDataTable
                  items={patientList.data}
                  fields={fields}
                  hover
                  striped
                  bordered
                  size="sm"
                  scopedSlots={{
                    gender: (item) => <td>{item.gender === "male" ? "Laki - laki" : "Perempuan"}</td>,
                    tgl_lahir: (item) => <td>{formatDate(item.tgl_lahir)}</td>,
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
                  }}
                />
                {patientList.pages > 1 && (
                  <CPagination activePage={patientList.currentPage} pages={patientList.pages} onActivePageChange={changePage} />
                )}
              </CCardBody>
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Patients;
