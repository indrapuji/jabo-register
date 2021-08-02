import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from "@coreui/react";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";
import Swal from 'sweetalert2';

const Doctor = () => {
  const history = useHistory();
  const [doktorList, setDoctorList] = useState(null);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/dokters/all?klinik=${localStorage.getItem("klinik")}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setDoctorList(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handdleEdit = (id) => {
    history.push(`/doctor/edit/${id}`);
  };

  const handdleDelete = (user, id) => {
    Swal.fire({
      title: 'Yakin ingin hapus?',
      text: `${user}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: 'DELETE',
            url: `${HostUrl}/v1/dokters/delete/${id}`,
          });
          newAlert({ status: 'success', message: `${user} Deleted` });
          getDoctorList();
        } catch (error) {
          const { message } = error.response.data;
          newAlert({ status: 'error', message });
          console.log(error.response.data);
        }
      } else {
        newAlert({ status: 'error', message: 'Cancel' });
      }
    });
  };

  const fields = [
    { key: "nama", label: "Nama Dokter", _style: { width: "39%" } },
    { key: "show_details", label: "Action", _style: { width: "1%" } },
    { key: "delete", label: "", _style: { width: "1%" } },
  ];

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader color="primary">
            <strong>Master Dokter</strong>
          </CCardHeader>
          <CCol>
            <div style={{ marginTop: 15, marginLeft: 5 }}>
              <CButton color="success" to="/doctor/register">
                Tambah
              </CButton>
            </div>
          </CCol>
          {doktorList && (
            <CCardBody>
              <CDataTable
                items={doktorList}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td>
                        <CButton
                          color="warning"
                          size="sm"
                          onClick={() => {
                            handdleEdit(item.dokterId);
                          }}
                        >
                          Edit
                        </CButton>
                      </td>
                    );
                  },
                  delete: (item, index) => {
                    return (
                      <td>
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => {
                            handdleDelete(item.nama, item.dokterId);
                          }}
                        >
                          Delete
                        </CButton>
                      </td>
                    );
                  }
                }}
              />
            </CCardBody>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Doctor;
