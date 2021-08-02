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
import { useHistory, useParams } from 'react-router-dom';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';
import Swal from 'sweetalert2';

const EditCompany = () => {
  const { dataId } = useParams();
  const host = 'https://dev.farizdotid.com/api/daerahindonesia';
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  const [kec, setKec] = useState([]);
  const [kel, setKel] = useState([]);
  const [edit, setEdit] = useState({});
  const [oldProv, setOldProv] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${HostUrl}/company/single/${dataId}`,
      headers: {
        token: localStorage.getItem('token'),
      },
    })
      .then(({ data }) => {
        setEdit({
          nama: data.nama,
          kode_perusahaan: data.kode_perusahaan,
          alamat_1: data.alamat_1,
          alamat_2: data.alamat_2,
          provinsi: data.provinsi,
          kota: data.kota,
          kecamatan: data.kecamatan,
          kelurahan: data.kelurahan,
          kode_pos: data.kode_pos,
          telepon: data.telepon,
          pic: data.pic,
          email: data.email,
          employee_count: data.employee_count,
        });
        setOldProv(data.provinsi);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      url: `${host}/provinsi`,
    })
      .then(({ data }) => {
        setProv(data.provinsi);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const onProv = (e) => {
    const obj = JSON.parse(e.target.value);
    setEdit({
      ...edit,
      provinsi: obj.nama,
    });
    axios({
      method: 'GET',
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
    setEdit({
      ...edit,
      kota: obj.nama,
    });
    axios({
      method: 'GET',
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
    setEdit({
      ...edit,
      kecamatan: obj.nama,
    });
    axios({
      method: 'GET',
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
    setEdit({
      ...edit,
      kelurahan: obj.nama,
    });
  };

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
      const { nama, alamat } = edit;
      if (nama === '' || alamat === '') {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      await axios({
        method: 'PUT',
        url: `${HostUrl}/company/edit/${dataId}`,
        data: edit,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      history.push('/perusahaan');
    } catch (error) {
      const { msg } = error.response.data;
      newAlert({ status: 'error', message: msg });
      console.log(error.response.data);
    }
  };

  const handdleDelete = () => {
    Swal.fire({
      title: 'Yakin ingin hapus?',
      text: `${edit.nama}`,
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
            url: `${HostUrl}/company/delete/${dataId}`,
            headers: {
              token: localStorage.getItem('token'),
            },
          });
          newAlert({ status: 'success', message: 'Deleted' });
          history.push('/perusahaan');
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

  const handdleKaryawan = () => {
    Swal.fire({
      title: 'Yakin ingin hapus?',
      text: `Data Karyawan`,
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
            url: `${HostUrl}/company/delete-all/${dataId}`,
            headers: {
              token: localStorage.getItem('token'),
            },
          });
          newAlert({ status: 'success', message: 'Deleted' });
          history.push('/perusahaan');
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
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs="7">
                  <strong>Edit Perusahaan</strong>
                </CCol>
                <CCol xs="5">
                  <div style={{ display: 'flex' }}>
                    <CForm inline className="float-right mr-2">
                      <CLabel className="mr-sm-2">Total Karyawan </CLabel>
                      <CInput custom size="sm" name="kode_perusahaan" value={edit.employee_count} disabled />
                    </CForm>
                    <CButton size="sm" color="info" className="float-left" onClick={handdleKaryawan}>
                      Hapus karyawan
                    </CButton>
                  </div>
                </CCol>
              </CRow>
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
                        <CInput custom size="sm" name="nama" value={edit.nama} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Kode Perusahaan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput custom size="sm" name="kode_perusahaan" value={edit.kode_perusahaan} disabled onChange={onFormChange} />
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
                        <CInput custom size="sm" placeholder="Jalan 1" name="alamat_1" value={edit.alamat_1} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="9">
                        <CInput custom size="sm" placeholder="Jalan 2" name="alamat_2" value={edit.alamat_2} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="5">
                        <CSelect custom size="sm" onChange={onProv}>
                          <option value="0" id="test">
                            {oldProv === '' ? 'Provinsi' : edit.provinsi}
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
                          <option value="0">{edit.kota === '' ? 'Kota' : oldProv === edit.provinsi ? edit.kota : 'Kota'}</option>
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
                          <option value="0">{edit.kecamatan === '' ? 'Kecamatan' : oldProv === edit.provinsi ? edit.kecamatan : 'Kecamatan'}</option>
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
                          <option value="0">{edit.kelurahan === '' ? 'Kelurahan' : oldProv === edit.provinsi ? edit.kelurahan : 'Kelurahan'}</option>
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
                        <CInput custom size="sm" placeholder="Kode Pos" name="kode_pos" value={edit.kode_pos} onChange={onFormChange} />
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
                        <CInput custom size="sm" name="telepon" value={edit.telepon} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="textarea-input">
                          <small>PIC</small>
                        </CLabel>
                      </CCol>
                      <CCol md="10">
                        <CInput custom size="sm" name="pic" value={edit.pic} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="textarea-input">
                          <small>Email</small>
                        </CLabel>
                      </CCol>
                      <CCol md="10">
                        <CInput custom size="sm" name="email" value={edit.email} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CCardFooter>
                  <CButton size="sm" color="danger" className="float-left" onClick={handdleDelete}>
                    <CIcon name="cil-scrubber" /> Hapus
                  </CButton>
                  <CButton size="sm" type="submit" color="primary" className="float-right" onClick={submitForm}>
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

export default EditCompany;
