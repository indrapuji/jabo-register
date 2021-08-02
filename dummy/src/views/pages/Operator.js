import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from "@coreui/react";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";
import Swal from 'sweetalert2';

const Operator = () => {
  const [operatorList, setOperatorList] = useState(null);

  useEffect(() => {
    getOperatorList();
  }, []);

  const getOperatorList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/petugas/all?klinik=${localStorage.getItem("klinik")}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setOperatorList(data.content.data);
    } catch (error) {
      console.log(error);
    }
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
            url: `${HostUrl}/v1/petugas/delete/${id}`,
          });
          newAlert({ status: 'success', message: `${user} Deleted` });
          getOperatorList();
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
    { key: "nama", label: "Nama Petugas", _style: { width: "39%" } },
    { key: "delete", label: "Delete", _style: { width: "3%" } },
  ];

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader color="primary">
            <strong>Master Petugas</strong>
          </CCardHeader>
          <CCol>
            <div style={{ marginTop: 15, marginLeft: 5 }}>
              <CButton color="success" to="/operator/register">
                Tambah
              </CButton>
            </div>
          </CCol>
          {operatorList && (
            <CCardBody>
              <CDataTable
                items={operatorList}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                  delete: (item, index) => {
                    return (
                      <td>
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => {
                            handdleDelete(item.nama, item.petugasId);
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

export default Operator;
