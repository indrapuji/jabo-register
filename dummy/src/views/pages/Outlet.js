import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from "@coreui/react";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";
import Swal from 'sweetalert2';

const Outlet = () => {
  // const history = useHistory();
  const [outletList, setOutletList] = useState(null);

  useEffect(() => {
    getOutletList();
  }, []);

  const getOutletList = async (page = 1) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/outlet/all?klinik=${localStorage.getItem('klinik')}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setOutletList(data.content.data);
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
            url: `${HostUrl}/v1/outlet/delete/${id}`,
          });
          newAlert({ status: 'success', message: `${user} Deleted` });
          getOutletList();
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
    { key: "nama", label: "Nama Outlet", _style: { width: "39%" } },
    { key: "delete", label: "Delete", _style: { width: "3%" } },
  ];

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader color="primary">
            <strong>Master Outlet</strong>
          </CCardHeader>
          <CCol>
            <div style={{ marginTop: 15, marginLeft: 5 }}>
              <CButton color="success" to="/outlet/register">
                Tambah
              </CButton>
            </div>
          </CCol>
          {outletList && (
            <CCardBody>
              <CDataTable
                items={outletList}
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
                            handdleDelete(item.nama, item.outletId);
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

export default Outlet;
