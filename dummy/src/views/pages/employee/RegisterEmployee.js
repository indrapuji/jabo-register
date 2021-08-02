import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CContainer,
  CRow,
  CCol,
  CSelect,
  CInput,
  CFormGroup,
  CForm,
  CLabel,
  CCardFooter,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CSwitch,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';
import getAge from '../../../utilities/GetAge';

const Register = () => {
  const history = useHistory();
  const host = 'https://dev.farizdotid.com/api/daerahindonesia';
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  const [kec, setKec] = useState([]);
  const [kel, setKel] = useState([]);
  const [companyList, setCompanyList] = useState(null);
  const [formData, setFormData] = useState({
    company_id: '',
    nama: '',
    nik: '',
    status: false,
    gender: '',
    tempat_lahir: '',
    tgl_lahir: '',
    umur: '',
    ayah: '',
    alamat_1: '',
    alamat_2: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
    kode_pos: '',
    no_hp: '',
    emp_id: '',
    mulai_kerja: '',
    jabatan: '',
    departemen: '',
    tempat_medical_terakhir: '',
    tanggal_medical_terakhir: '',
  });
  const [kodePerusahaan, setKodePerusahaan] = useState('');
  // const [collapse, setCollapse] = useState(false);
  const [accordion, setAccordion] = useState(1);
  const [symptom, setSymptom] = useState([]);
  const [symptomForm, setSymptomForm] = useState([]);

  useEffect(() => {
    getCompanyList();
    getSymptom();
  }, []);

  const onSymptomFormChange = (event) => {
    const { name, value, id } = event.target;
    if (symptomForm.length) {
      const temp = symptomForm.find((data) => Number(data.symptom_id) === Number(id));
      if (temp) {
        const newForm = symptomForm.map((data) => {
          if (Number(data.symptom_id) === Number(id)) {
            if (name === 'status_riwayat') {
              let result = {
                ...data,
                status_riwayat: !data.status_riwayat,
              };
              if (!data.status_riwayat === false) result.keterangan_riwayat = '';
              return result;
            } else {
              return {
                ...data,
                [name]: value,
              };
            }
          } else return data;
        });
        setSymptomForm(newForm);
      } else {
        if (name === 'status_riwayat') {
          const newForm = symptomForm.concat({
            employee_id: '',
            symptom_id: id,
            status_riwayat: true,
          });
          setSymptomForm(newForm);
        } else {
          const newForm = symptomForm.concat({
            employee_id: '',
            symptom_id: id,
            [name]: value,
          });
          setSymptomForm(newForm);
        }
      }
    } else {
      if (name === 'status_riwayat') {
        setSymptomForm([
          {
            employee_id: '',
            symptom_id: id,
            status_riwayat: true,
          },
        ]);
      } else {
        setSymptomForm([
          {
            employee_id: '',
            symptom_id: id,
            [name]: value,
          },
        ]);
      }
    }
  };

  const getSymptom = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/symptom/all',
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setSymptom(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCompanyList = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/company/all-list',
        // headers: {
        //   token: localStorage.getItem('token'),
        // },
      });
      setCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const onFormChange = (event) => {
    const { value, name } = event.target;
    if (name === 'company_id') {
      const obj = JSON.parse(value);
      setKodePerusahaan(obj.kode_perusahaan);
      setFormData({
        ...formData,
        company_id: obj.id,
      });
    } else if (name === 'tgl_lahir') {
      setFormData({
        ...formData,
        umur: getAge(value),
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const { emp_id } = formData;
      if (emp_id === '') {
        newAlert({ status: 'error', message: 'No Karyawan tidak boleh kosong' });
        return;
      }
      const validation = symptomForm.find((data) => data.status_riwayat === true && (data.keterangan_riwayat === '' || !data.keterangan_riwayat));
      let newSymptomForm = [];
      if (validation) {
        newAlert({ status: 'error', message: 'Keterangan Riwayat Penyakit Wajib diisi' });
        return;
      }
      // eslint-disable-next-line
      symptomForm.map((data) => {
        if (data.keterangan_riwayat) {
          newSymptomForm = newSymptomForm.concat({ ...data, status_riwayat: true });
        } else {
          newSymptomForm = newSymptomForm.concat({ ...data });
        }
      });
      const arrayData = JSON.stringify(newSymptomForm);
      await axios({
        method: 'POST',
        url: HostUrl + '/employee/create',
        data: {
          ...formData,
          arrayData,
        },
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      history.push('/karyawan');
    } catch (error) {
      if (error.response) {
        const { msg } = error.response.data;
        newAlert({ status: 'error', message: msg });
        console.log(error.response.data);
      } else {
        newAlert({ status: 'error', message: 'Internal Sever Error' });
      }
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong>Registrasi Karyawan Perusahaan</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={onFormSubmit}>
                {/* <CCardHeader style={{ marginTop: 10, marginBottom: 10 }}> */}
                <CRow>
                  <CCol xs="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Nama Perusahaan</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect name="company_id" size="sm" onChange={onFormChange}>
                          <option value="0">Pilih</option>
                          {companyList &&
                            companyList.map((data) => {
                              return (
                                <option key={data.id} value={JSON.stringify(data)}>
                                  {data.nama}
                                </option>
                              );
                            })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="5">
                    <CFormGroup row>
                      <CCol xs="12" md="8">
                        <CInput placeholder="kode" size="sm" value={kodePerusahaan} disabled />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                {/* </CCardHeader> */}
                <CRow>
                  <CCol xs="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Nama Lengkap</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput size="sm" name="nama" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>NIK</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput size="sm" name="nik" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Jenis Kelamin</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CSelect id="select" name="gender" size="sm" onChange={onFormChange}>
                          <option value="0">Pilih</option>
                          <option value="male">Laki - laki</option>
                          <option value="female">Perempuan</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Tempat {'&'} Tgl lahir</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="5">
                        <CInput size="sm" name="tempat_lahir" onChange={onFormChange} />
                      </CCol>
                      <CCol xs="12" md="4">
                        <CInput type="date" size="sm" name="tgl_lahir" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="5"></CCol>
                </CRow>

                <CRow>
                  <CCol xs="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Umur</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="2">
                        <CInput size="sm" name="umur" value={formData.umur} disabled onChange={onFormChange} />
                      </CCol>
                      <CLabel>
                        <small>Tahun</small>
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Bapak Kandung</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput size="sm" name="ayah" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          <small>Alamat </small>
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
                      <CCol md="4">
                        <CLabel>
                          <small>No. Handphone</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="no_hp" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>No. Karyawan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="emp_id" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Tgl Mulai Kerja</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput type="date" size="sm" name="mulai_kerja" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Jabatan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="jabatan" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Departemen</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="departemen" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Medical Terakhir</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="tempat_medical_terakhir" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Tanggal Medical</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput type="date" size="sm" name="tanggal_medical_terakhir" onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right">
                    <CIcon name="cil-scrubber" /> Simpan
                  </CButton>
                </CCardFooter>
              </CForm>
            </CCardBody>
          </CCard>

          <CCard className="mb-0">
            <CCardHeader id="headingOne">
              <CRow>
                <CCol>
                  <CButton color="link" className="text-left m-0 p-0" onClick={() => setAccordion(accordion === 0 ? null : 0)}>
                    <h5 className="m-0 p-0">Riwayat Penyakit/Pengobatan</h5>
                  </CButton>
                </CCol>
                <CCol>
                  <CButton color="link" className="float-right" onClick={() => setAccordion(accordion === 0 ? null : 0)}>
                    Lihat {accordion === 0 ? <CIcon name="cil-caret-top" /> : <CIcon name="cil-caret-bottom" />}
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCollapse show={accordion === 0}>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="1">
                    <CLabel>
                      <small>No Urut</small>
                    </CLabel>
                  </CCol>
                  <CCol md="3">
                    <CLabel>
                      <small>Jenis Penyakit/Pengobatan</small>
                    </CLabel>
                  </CCol>
                  <CCol md="2">
                    <CLabel>
                      <small>Tidak / Ya</small>
                    </CLabel>
                  </CCol>
                  <CCol md="6" style={{ textAlign: 'center' }}>
                    <CLabel>
                      <small>Keterangan</small>
                    </CLabel>
                  </CCol>
                </CFormGroup>
                {symptom.length &&
                  symptom.map((data) => {
                    return (
                      <CFormGroup row key={data.id}>
                        <CCol md="1">
                          <CLabel>
                            <small>{data.no_urut}</small>
                          </CLabel>
                        </CCol>
                        <CCol md="3">
                          <CLabel>
                            <small>{data.nama_riwayat}</small>
                          </CLabel>
                        </CCol>
                        <CCol md="2">
                          <CSwitch
                            className={'mx-1'}
                            variant={'3d'}
                            color={'success'}
                            name="status_riwayat"
                            id={data.id ? JSON.stringify(data.id) : JSON.stringify(data.symptom_id)}
                            onChange={onSymptomFormChange}
                            defaultChecked={data.symptom_id ? data.status_riwayat : false}
                          />
                        </CCol>
                        <CCol md="6">
                          <CInput
                            size="sm"
                            id={data.id ? JSON.stringify(data.id) : JSON.stringify(data.symptom_id)}
                            name="keterangan_riwayat"
                            onChange={onSymptomFormChange}
                            defaultValue={data.symptom_id ? data.keterangan_riwayat : ''}
                          />
                        </CCol>
                      </CFormGroup>
                    );
                  })}
              </CCardBody>
            </CCollapse>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Register;
