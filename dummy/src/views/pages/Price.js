import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from "@coreui/react";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import formatRupiah from "src/utilities/FormatRupiah";
import newAlert from "../../components/NewAlert";
import Swal from 'sweetalert2';

const Price = () => {
  // const history = useHistory();
  const [listHarga, setListHarga] = useState(null);

  useEffect(() => {
    getListHarga();
  }, []);

  const getListHarga = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/harga/all?outlet=${localStorage.getItem("outlet")}`,
      });
      setListHarga(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handdleDelete = (id) => {
    Swal.fire({
      title: 'Yakin ingin hapus?',
      // text: `${edit.nama_riwayat}`,
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
            url: `${HostUrl}/v1/harga/delete/${id}`,
          });
          newAlert({ status: 'success', message: 'Deleted' });
          getListHarga();
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
    { key: "harga", label: "Harga", _style: { width: "39%" } },
    { key: "delete", label: "Delete", _style: { width: "3%" } },
  ];

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader color="primary">
            <strong>Master Harga</strong>
          </CCardHeader>
          <CCol>
            <div style={{ marginTop: 15, marginLeft: 5 }}>
              <CButton color="success" to="/harga/register">
                Tambah
              </CButton>
            </div>
          </CCol>
          {listHarga && (
            <CCardBody>
              <CDataTable
                items={listHarga}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                  harga: (item) => <td>{formatRupiah(item.harga)}</td>,
                  delete: (item, index) => {
                    return (
                      <td>
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => {
                            handdleDelete(item.hargaId);
                          }}
                        >
                          Delete
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Price;
