import React, { useState, useEffect } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CInput,
  CSelect,
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

const RegisterCompany = () => {
  const host = 'https://dev.farizdotid.com/api/daerahindonesia';
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  const [kec, setKec] = useState([]);
  const [kel, setKel] = useState([]);
  const [formData, setFormData] = useState({
    nama: '',
    kode_perusahaan: '',
    alamat_1: '',
    alamat_2: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
    kode_pos: '',
    telepon: '',
    pic: '',
    email: '',
  });

  useEffect(() => {
    axios({
      url: `${host}/provinsi`,
    })
      .then(({ data }) => {
        setProv(data.provinsi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onProv = (e) => {
    const obj = JSON.parse(e.target.value);
    setFormData({
      ...formData,
      provinsi: obj.nama,
    });
    axios({
      url: `${host}/kota?id_provinsi=${obj.id}`,
    })
      .then(({ data }) => {
        setCity(data.kota_kabupaten);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCity = (e) => {
    const obj = JSON.parse(e.target.value);
    setFormData({
      ...formData,
      kota: obj.nama,
    });
    axios({
      url: `${host}/kecamatan?id_kota=${obj.id}`,
    })
      .then(({ data }) => {
        setKec(data.kecamatan);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onKec = (e) => {
    const obj = JSON.parse(e.target.value);
    setFormData({
      ...formData,
      kecamatan: obj.nama,
    });
    axios({
      url: `${host}/kelurahan?id_kecamatan=${obj.id}`,
    })
      .then(({ data }) => {
        setKel(data.kelurahan);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onKel = (e) => {
    const obj = JSON.parse(e.target.value);
    setFormData({
      ...formData,
      kelurahan: obj.nama,
    });
  };

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
      const { nama, kode_perusahaan, alamat_1 } = formData;
      if (nama === '' || kode_perusahaan === '' || alamat_1 === '') {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      await axios({
        method: 'POST',
        url: HostUrl + '/company/create',
        data: formData,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      history.push('/perusahaan');
    } catch (error) {
      // const { msg } = error.response.data;
      newAlert({ status: 'error', message: 'Gunakan kode perusahaan lain' });
      console.log(error.response.data);
    }
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong>Register Perusahaan</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CRow>
                  <CCol xs="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Nama Perusahaan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput custom size="sm" name="nama" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Kode Perusahaan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput custom size="sm" name="kode_perusahaan" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="5"></CCol>
                </CRow>
                <CRow>
                  <CCol xs="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          <small>Alamat Perusahaan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput custom size="sm" placeholder="Jalan 1" name="alamat_1" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="9">
                        <CInput custom size="sm" placeholder="Jalan 2" name="alamat_2" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="5">
                        <CSelect custom size="sm" onChange={onProv}>
                          <option value="0" id="test">
                            Provinsi
                          </option>
                          {prov &&
                            prov.map((item) => {
                              return (
                                <option key={item.id} value={JSON.stringify(item)}>
                                  {item.nama}
                                </option>
                              );
                            })}
                        </CSelect>
                      </CCol>
                      <CCol md="4">
                        <CSelect custom size="sm" onChange={onCity}>
                          <option value="0">Kota</option>
                          {city &&
                            city.map((item) => {
                              return (
                                <option key={item.id} value={JSON.stringify(item)}>
                                  {item.nama}
                                </option>
                              );
                            })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="5">
                        <CSelect custom size="sm" onChange={onKec}>
                          <option value="0">Kecamatan</option>
                          {kec &&
                            kec.map((item) => {
                              return (
                                <option key={item.id} value={JSON.stringify(item)}>
                                  {item.nama}
                                </option>
                              );
                            })}
                        </CSelect>
                      </CCol>
                      <CCol md="4">
                        <CSelect custom size="sm" onChange={onKel}>
                          <option value="0">Kelurahan</option>
                          {kel &&
                            kel.map((item) => {
                              return (
                                <option key={item.id} value={JSON.stringify(item)}>
                                  {item.nama}
                                </option>
                              );
                            })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="5">
                        <CInput custom size="sm" placeholder="Kode Pos" name="kode_pos" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="5">
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="textarea-input">
                          <small>Telepon</small>
                        </CLabel>
                      </CCol>
                      <CCol md="10">
                        <CInput custom size="sm" name="telepon" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="textarea-input">
                          <small>PIC</small>
                        </CLabel>
                      </CCol>
                      <CCol md="10">
                        <CInput custom size="sm" name="pic" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="textarea-input">
                          <small>Email</small>
                        </CLabel>
                      </CCol>
                      <CCol md="10">
                        <CInput custom size="sm" name="email" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right" onClick={submitForm}>
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

export default RegisterCompany;
