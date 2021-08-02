import React, { useState, useEffect } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CInput,
  CFormGroup,
  CForm,
  CLabel,
  CCardFooter,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';
import Swal from 'sweetalert2';

const EditRiwayat = () => {
  const { dataId } = useParams();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${HostUrl}/symptom/single/${dataId}`,
      headers: {
        token: localStorage.getItem('token'),
      },
    })
      .then(({ data }) => {
        setEdit({
          no_urut: data.no_urut,
          nama_riwayat: data.nama_riwayat,
          bahasa_inggris: data.bahasa_inggris,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const history = useHistory();
  const onFormChange = (event) => {
    const { value, name } = event.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { no_urut, nama_riwayat } = edit;
      if (no_urut === '' || no_urut === null || nama_riwayat === '' || nama_riwayat === null) {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      await axios({
        method: 'PUT',
        url: `${HostUrl}/symptom/edit/${dataId}`,
        data: edit,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      history.push('/riwayat');
    } catch (error) {
      // const { msg } = error.response.data;
      newAlert({ status: 'error', message: 'No urut sudah digunakan' });
      console.log(error.response.data);
    }
  };

  const handdleDelete = () => {
    Swal.fire({
      title: 'Yakin ingin hapus?',
      text: `${edit.nama_riwayat}`,
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
            url: `${HostUrl}/symptom/delete/${dataId}`,
            headers: {
              token: localStorage.getItem('token'),
            },
          });
          newAlert({ status: 'success', message: 'Deleted' });
          history.push('/riwayat');
        } catch (error) {
          const { msg } = error.response.data;
          newAlert({ status: 'error', message: msg });
          console.log(error.response.data);
        }
      } else {
        newAlert({ status: 'error', message: 'Cancel' });
      }
    });
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="9">
          <CCard>
            <CCardHeader>
              <strong>Edit Riwayat Penyakit</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>No. Urut</small>
                    </CLabel>
                  </CCol>
                  <CCol md="4">
                    <CInput
                      custom
                      size="sm"
                      name="no_urut"
                      value={edit.no_urut}
                      onChange={onFormChange}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Jenis Penyakit/Pengobatan</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput
                      custom
                      size="sm"
                      name="nama_riwayat"
                      value={edit.nama_riwayat}
                      onChange={onFormChange}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Symptom</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput
                      custom
                      size="sm"
                      name="bahasa_inggris"
                      value={edit.bahasa_inggris}
                      onChange={onFormChange}
                    />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton size="sm" color="danger" className="float-left" onClick={handdleDelete}>
                    <CIcon name="cil-scrubber" /> Hapus
                  </CButton>
                  <CButton
                    type="submit"
                    size="sm"
                    color="primary"
                    className="float-right"
                    onClick={submitForm}
                  >
                    <CIcon name="cil-scrubber" /> Simpan
                  </CButton>
                </CCardFooter>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default EditRiwayat;
