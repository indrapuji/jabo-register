import React, {
  useState,
  //  useEffect
} from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CFormGroup,
  CForm,
  CLabel,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CInputFile,
  CCardFooter,
  CBadge,
  CSpinner,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useHistory } from 'react-router-dom';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';
import { formatDate } from 'node-format-date';

const ImportCompany = () => {
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    data: '',
  });
  const [show, setShow] = useState(false);
  const [dataKaryawan, setDataKaryawan] = useState({});
  const [loading, setLoading] = useState(false);

  const getBadge = (status) => {
    switch (status) {
      case 0:
        return 'success';
      case 1:
        return 'warning';
      case 2:
        return 'danger';
      default:
        return 'primary';
    }
  };

  const history = useHistory();
  const onFormChange = (event) => {
    const { files, name } = event.target;
    setFileName(event.target.files[0].name);
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  const submitForm = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      if (formData.data === '') {
        setLoading(false);
        newAlert({ status: 'error', message: 'Tidak ada file' });
        return;
      }
      const newFormData = new FormData();
      for (let key in formData) {
        newFormData.append(`${key}`, formData[key]);
      }
      const { data } = await axios({
        method: 'POST',
        url: HostUrl + '/employee/check-seed',
        data: newFormData,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setLoading(false);
      setDataKaryawan(data);
      setShow(true);
      // newAlert({ status: 'success', message: 'File Imported' });
      // history.push('/perusahaan');
    } catch (error) {
      setLoading(false);
      // const { msg } = error.response.data;
      newAlert({ status: 'error', message: 'Failed' });
      // console.log(error.response.data);
    }
  };

  const submitFile = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      if (!dataKaryawan.status_valid) {
        newAlert({ status: 'error', message: 'Ada data yg tidak valid' });
        return;
      }
      await axios({
        method: 'POST',
        url: HostUrl + '/employee/create-seed',
        data: {
          data: dataKaryawan.data,
        },
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setLoading(false);
      setShow(false);
      newAlert({ status: 'success', message: 'Berhasil' });
      history.push('/karyawan');
    } catch (err) {
      setLoading(false);
      newAlert({ status: 'error', message: 'Failed' });
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol>
          <CCard>
            <CCardHeader>
              <strong>Import Karyawan</strong>
              {loading && <CSpinner color="success" size="sm" className="float-right" />}
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CFormGroup row>
                  <CCol xs="12" md="3">
                    <CLabel>File input</CLabel>
                  </CCol>
                  <CCol xs="8" md="7">
                    <CInputFile custom name="data" onChange={onFormChange} />
                    <CLabel variant="custom-file">{!fileName ? 'Choose file...' : fileName}</CLabel>
                  </CCol>
                  <CCol xs="4" md="2">
                    <CButton type="submit" size="sm" color="primary" disabled={loading ? true : false} onClick={submitForm}>
                      <CIcon name="cil-scrubber" /> upload
                    </CButton>
                  </CCol>
                </CFormGroup>
                <p className="float-right mr-5">
                  Gunakan{' '}
                  <span>
                    <a style={{ color: 'blue' }} target="_blank" rel="noreferrer" href="https://vps-e9ee8d2a.vps.ovh.ca/downloads/employee-seed">
                      format
                    </a>
                  </span>{' '}
                  yang sesuai untuk import data
                </p>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {show && (
        <CRow className="justify-content-center">
          <CCol>
            <CCard>
              <CCardHeader>
                <strong>File Import</strong>
              </CCardHeader>
              <CCardBody>
                <CForm onSubmit={submitFile}>
                  <CFormGroup row>
                    <CCol md="1">
                      <CLabel>
                        <small>No</small>
                      </CLabel>
                    </CCol>
                    <CCol md="1">
                      <CLabel>
                        <small>Kode </small>
                      </CLabel>
                    </CCol>
                    <CCol md="3">
                      <CLabel>
                        <small>Nama</small>
                      </CLabel>
                    </CCol>
                    <CCol md="1">
                      <CLabel>
                        <small>Gender</small>
                      </CLabel>
                    </CCol>
                    <CCol md="2">
                      <CLabel>
                        <small>Tanggal Lahir</small>
                      </CLabel>
                    </CCol>
                    <CCol md="2">
                      <CLabel>
                        <small>Employee ID</small>
                      </CLabel>
                    </CCol>
                    <CCol md="2">
                      <CLabel>
                        <small>Status</small>
                      </CLabel>
                    </CCol>
                  </CFormGroup>
                  {dataKaryawan.data &&
                    dataKaryawan.data.map((item) => {
                      return (
                        <CFormGroup row key={item.no}>
                          <CCol md="1">
                            <CLabel>
                              <small>{item.no}</small>
                            </CLabel>
                          </CCol>
                          <CCol md="1">
                            <CLabel>
                              <small>{item.kode_perusahaan}</small>
                            </CLabel>
                          </CCol>
                          <CCol md="3">
                            <CLabel>
                              <small>{item.nama}</small>
                            </CLabel>
                          </CCol>
                          <CCol md="1">
                            <CLabel>
                              <small>{item.gender === 1 ? 'Laki-laki' : 'Perempuan'}</small>
                            </CLabel>
                          </CCol>
                          <CCol md="2">
                            <CLabel>
                              <small>{formatDate(item.tgl_lahir)}</small>
                            </CLabel>
                          </CCol>
                          <CCol md="2">
                            <CLabel>
                              <small>{item.emp_id}</small>
                            </CLabel>
                          </CCol>
                          <CCol md="2">
                            <CLabel>
                              <CBadge color={getBadge(item.status)}>
                                {item.status === 0 ? 'accept' : item.status === 1 ? 'kode perusahaan invalid' : 'duplicate xlx'}
                              </CBadge>
                            </CLabel>
                          </CCol>
                        </CFormGroup>
                      );
                    })}

                  <CCardFooter>
                    {!dataKaryawan.status_valid ? (
                      <CButton size="sm" color="secondary" className="float-right">
                        <CIcon name="cil-scrubber" /> import
                      </CButton>
                    ) : (
                      <CButton type="submit" size="sm" color="success" className="float-right" disabled={loading ? true : false} onClick={submitFile}>
                        {loading ? <CSpinner color="success" size="sm" /> : <CIcon name="cil-scrubber" />}
                        import
                      </CButton>
                    )}
                  </CCardFooter>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </CContainer>
  );
};

export default ImportCompany;
