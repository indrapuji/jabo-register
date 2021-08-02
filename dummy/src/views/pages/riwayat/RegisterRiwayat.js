import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';

const RegisterRiwayat = () => {
  const [formData, setFormData] = useState({
    no_urut: '',
    nama_riwayat: '',
    bahasa_inggris: '',
  });

  const history = useHistory();
  const onFormChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { no_urut, nama_riwayat } = formData;
      if (no_urut === '' || nama_riwayat === '') {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      await axios({
        method: 'POST',
        url: HostUrl + '/symptom/create',
        data: formData,
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
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="9">
          <CCard>
            <CCardHeader>
              <strong>Register Riwayat Penyakit</strong>
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
                    <CInput custom size="sm" name="no_urut" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Jenis Penyakit/Pengobatan</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="nama_riwayat" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Symptom</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="bahasa_inggris" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
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

export default RegisterRiwayat;
