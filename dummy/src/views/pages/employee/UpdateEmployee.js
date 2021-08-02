import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  CSwitch,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';
import getAge from '../../../utilities/GetAge';

const EditEmployee = () => {
  const { dataId } = useParams();
  const history = useHistory();
  const lang = localStorage.getItem('lang');
  const host = 'https://dev.farizdotid.com/api/daerahindonesia';
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  // const [kec, setKec] = useState([]);
  // const [kel, setKel] = useState([]);
  const [edit, setEdit] = useState({});
  // const [kodePerusahaan, setKodePerusahaan] = useState('');
  const [symptom, setSymptom] = useState([]);
  const [symptomForm, setSymptomForm] = useState([]);
  const [apply, setApply] = useState(false);
  const [oldProv, setOldProv] = useState('');
  const [showInvalid, setShowInvalid] = useState(false);

  useEffect(() => {
    if (edit.id && !showInvalid) getSymptom(edit);
    // eslint-disable-next-line
  }, [edit]);

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
            employee_id: dataId,
            symptom_id: id,
            status_riwayat: true,
          });
          setSymptomForm(newForm);
        } else {
          const newForm = symptomForm.concat({
            employee_id: dataId,
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
            employee_id: dataId,
            symptom_id: id,
            status_riwayat: true,
          },
        ]);
      } else {
        setSymptomForm([
          {
            employee_id: dataId,
            symptom_id: id,
            [name]: value,
          },
        ]);
      }
    }
  };

  const getSymptom = async (edit) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/symptom/all',
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      if (edit.symptoms) {
        let tempSymptom = [];
        const joinSymptom = data.data.map((sym) => {
          const validation = edit.symptoms.find(
            // eslint-disable-next-line
            (data) => data.employee_symptom.symptom_id == sym.id
          );
          if (validation) {
            tempSymptom = tempSymptom.concat(validation.employee_symptom);
            return {
              ...sym,
              employee_id: validation.employee_symptom.employee_id,
              keterangan_riwayat: validation.employee_symptom.keterangan_riwayat,
              status_riwayat: validation.employee_symptom.status_riwayat,
              symptom_id: validation.employee_symptom.symptom_id,
            };
          } else {
            return sym;
          }
        });
        setSymptomForm(tempSymptom);
        setSymptom(joinSymptom);
      } else {
        setSymptom(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${HostUrl}/employee/single/${dataId}`,
      headers: {
        token: localStorage.getItem('token'),
      },
    })
      .then(({ data }) => {
        setEdit({
          ...data,
          // status: false,
        });
        if (data.kota === '') {
          setEdit({ ...data, kota: 'BATAM' });
        }
        setApply(data.status);
        setOldProv(data.provinsi);
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
    onCity();
    // eslint-disable-next-line
  }, []);

  const onProv = (e) => {
    const obj = JSON.parse(e.target.value);
    setEdit({
      ...edit,
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

  const onCity = () => {
    // const obj = JSON.parse(e.target.value);
    // setEdit({
    //   ...edit,
    //   kota: obj.nama,
    // });
    // console.log(obj.id);
    // axios({
    //   url: `${host}/kecamatan?id_kota=2171`,
    // })
    //   .then(({ data }) => {
    //     setKec(data.kecamatan);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  // const onKec = (e) => {
  //   const obj = JSON.parse(e.target.value);
  //   setEdit({
  //     ...edit,
  //     kecamatan: obj.nama,
  //   });
  //   axios({
  //     url: `${host}/kelurahan?id_kecamatan=${obj.id}`,
  //   })
  //     .then(({ data }) => {
  //       setKel(data.kelurahan);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const onKel = (e) => {
  //   const obj = JSON.parse(e.target.value);
  //   setEdit({
  //     ...edit,
  //     kelurahan: obj.nama,
  //   });
  // };

  const onApply = (event) => {
    setApply(event.target.checked);
    setEdit({
      ...edit,
      status: event.target.checked,
    });
  };

  const onFormChange = (event) => {
    const { value, name } = event.target;
    if (name === 'company_id') {
      const obj = JSON.parse(value);
      setEdit({
        ...edit,
        company_id: obj.id,
      });
    } else if (name === 'tgl_lahir') {
      setEdit({
        ...edit,
        umur: getAge(value),
        [name]: value,
      });
    } else if (name === 'tempat_medical_terakhir') {
      setEdit({
        ...edit,
        tempat_medical_terakhir: value,
        tanggal_medical_terakhir: '',
      });
    } else {
      setEdit({
        ...edit,
        [name]: value,
      });
    }
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validation = symptomForm.find(
        (data) => data.status_riwayat === true && (data.keterangan_riwayat === '' || !data.keterangan_riwayat)
      );
      let newSymptomForm = [];
      if (validation) {
        newAlert({
          status: 'error',
          message: 'Keterangan Riwayat Penyakit Wajib diisi',
        });
        return;
      }
      // eslint-disable-next-line
      symptomForm.map((data) => {
        if (data.keterangan_riwayat) {
          newSymptomForm = newSymptomForm.concat({
            ...data,
            status_riwayat: true,
          });
        } else {
          newSymptomForm = newSymptomForm.concat({ ...data });
        }
      });
      setShowInvalid(true);
      const {
        nama,
        no_hp,
        gender,
        tempat_lahir,
        tgl_lahir,
        jabatan,
        umur,
        departemen,
        ayah,
        alamat_1,
        provinsi,
        // kota,
        // kecamatan,
        // kelurahan,
        tempat_medical_terakhir,
        tanggal_medical_terakhir,
      } = edit;
      if (tempat_medical_terakhir !== '' && tanggal_medical_terakhir === '') {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      if (alamat_1.length > 30) {
        newAlert({
          status: 'error',
          message: 'Alamat Tidak Boleh Lebih dari 30 karakter',
        });
        return;
      }
      if (
        nama === '' ||
        no_hp === '' ||
        gender === '' ||
        tempat_lahir === '' ||
        tgl_lahir === '' ||
        jabatan === '' ||
        umur === '' ||
        departemen === '' ||
        ayah === '' ||
        alamat_1 === '' ||
        provinsi === ''
        // kota === ''
        // kecamatan === '' ||
        // kelurahan === ''
      ) {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      console.log(newSymptomForm);
      await axios({
        method: 'PUT',
        url: HostUrl + '/employee/edit/' + edit.id,
        data: edit,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      await axios({
        method: 'PUT',
        url: HostUrl + '/symptom/employee',
        data: {
          arrayData: JSON.stringify(newSymptomForm),
        },
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Data Berhasil Diupdate' });
      localStorage.clear();
      history.push('/employe');
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { msg } = error.response.data;
        newAlert({ status: 'error', message: msg });
      } else {
        newAlert({ status: 'error', message: 'Internal Sever Error' });
      }
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center ">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong style={{ color: 'white' }}>{lang === 'en' ? 'Employee Update' : 'Update Karyawan'}</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={onFormSubmit}>
                {/* <CCardHeader style={{ marginTop: 10, marginBottom: 10 }}> */}
                <CRow>
                  <CCol md="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Company Name' : 'Nama Perusahaan'}</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect id="select" name="company_id" size="sm" disabled>
                          <option value="0" disabled selected>
                            {edit.company && edit.company.nama}
                          </option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="5">
                    <CFormGroup row>
                      <CCol xs="12" md="8">
                        <CInput
                          placeholder="kode"
                          size="sm"
                          value={edit.company ? edit.company.kode_perusahaan : ''}
                          disabled
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                {/* </CCardHeader> */}
                <CCardHeader color="success" className="text-white ">
                  <strong>{lang === 'en' ? 'Personal Data' : 'Data Pribadi'}</strong>
                </CCardHeader>
                <div style={{ marginTop: 20 }} />
                <CRow>
                  <CCol md="7">
                    <CFormGroup row className="card-update">
                      <CCol md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Name' : 'Nama Lengkap'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput
                          size="sm"
                          name="nama"
                          invalid={showInvalid && edit.nama === '' ? true : false}
                          value={edit.nama}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Employee Number' : 'No. Karyawan'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="6">
                        <CInput size="sm" name="emp_id" value={edit.emp_id} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Gender' : 'Jenis Kelamin'}</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CSelect
                          id="select"
                          invalid={showInvalid && edit.gender === '' ? true : false}
                          name="gender"
                          size="sm"
                          onChange={onFormChange}
                        >
                          <option value="0">
                            {lang === 'en' ? edit.gender : edit.gender === 'male' ? 'Laki - laki' : 'Perempuan'}
                          </option>
                          <option value="male">{lang === 'en' ? 'Male' : 'Laki - laki'}</option>
                          <option value="female">{lang === 'en' ? 'Female' : 'Perempuan'}</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Place / Date of Birth' : 'Tempat & Tanggal lahir'}</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="5">
                        <CInput
                          size="sm"
                          name="tempat_lahir"
                          invalid={showInvalid && showInvalid && edit.tempat_lahir === '' ? true : false}
                          value={edit.tempat_lahir}
                          onChange={onFormChange}
                        />
                      </CCol>
                      <CCol xs="12" md="4">
                        <CInput
                          type="date"
                          size="sm"
                          invalid={showInvalid && edit.tgl_lahir === '' ? true : false}
                          name="tgl_lahir"
                          value={edit.tgl_lahir}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol xs="12" md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Age' : 'Umur'}</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="7" md="2">
                        <CInput size="sm" name="umur" value={edit.umur} disabled onChange={onFormChange} />
                      </CCol>
                      <CCol xs="5" md="3">
                        <CLabel>
                          <small>{lang === 'en' ? 'Years' : 'Tahun'}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="3">
                        <CLabel>
                          <small>{lang === 'en' ? `Father's Name` : 'Ayah Kandung'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput
                          size="sm"
                          name="ayah"
                          invalid={showInvalid && edit.ayah === '' ? true : false}
                          value={edit.ayah}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          <small>{lang === 'en' ? 'Address' : 'Alamat'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput
                          custom
                          size="sm"
                          placeholder={lang === 'en' ? 'Street 1' : 'Jalan 1'}
                          invalid={showInvalid && edit.alamat_1 === '' ? true : false}
                          value={edit.alamat_1}
                          name="alamat_1"
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    {/* <CFormGroup row className="card-update">
                      <CCol md="3" />
                      <CCol md="9">
                        <CInput
                          custom
                          size="sm"
                          placeholder={lang === 'en' ? 'Street 2' : 'Jalan 2'}
                          value={edit.alamat_2}
                          name="alamat_2"
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup> */}
                    <CFormGroup row className="card-update">
                      <CCol md="3" />
                      <CCol md="5">
                        <CSelect
                          custom
                          disabled
                          invalid={showInvalid && edit.provinsi === '' ? true : false}
                          size="sm"
                          onChange={onProv}
                        >
                          <option value="0">{oldProv === '' ? 'Provinsi' : edit.provinsi}</option>
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
                        <CSelect custom size="sm" disabled onChange={onCity}>
                          <option value="0">
                            {oldProv === '' ? 'Kota' : oldProv === edit.provinsi ? edit.kota : 'Kota'}
                          </option>
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
                    {/* <CFormGroup row className="card-update">
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
                    </CFormGroup> */}
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="5">
                        <CInput
                          custom
                          size="sm"
                          placeholder={lang === 'en' ? 'Zipcode' : 'Kode Pos'}
                          value={edit.kode_pos}
                          name="kode_pos"
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="5">
                    <CFormGroup row className="card-update">
                      <CCol md="4">
                        <CLabel>
                          <small>{lang === 'en' ? 'Phone Number' : 'Nomor Ponsel'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput
                          size="sm"
                          name="no_hp"
                          invalid={showInvalid && edit.no_hp === '' ? true : false}
                          value={edit.no_hp}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="4">
                        <CLabel>
                          <small>{lang === 'en' ? 'Position' : 'Jabatan'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput
                          size="sm"
                          name="jabatan"
                          invalid={showInvalid && edit.jabatan === '' ? true : false}
                          value={edit.jabatan}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="4">
                        <CLabel>
                          <small>{lang === 'en' ? 'Department' : 'Departemen'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput
                          size="sm"
                          name="departemen"
                          invalid={showInvalid && edit.departemen === '' ? true : false}
                          value={edit.departemen}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="4">
                        <CLabel>
                          <small>{lang === 'en' ? 'Place of Last Medical' : 'Medical Terakhir di'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput
                          size="sm"
                          name="tempat_medical_terakhir"
                          value={edit.tempat_medical_terakhir}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="card-update">
                      <CCol md="4">
                        <CLabel>
                          <small>{lang === 'en' ? 'Date of Last Medical' : 'Tanggal Medical Terakhir'}</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput
                          type="date"
                          size="sm"
                          invalid={showInvalid && edit.tempat_medical_terakhir !== '' ? true : false}
                          name="tanggal_medical_terakhir"
                          value={edit.tanggal_medical_terakhir}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CCardHeader color="success" className="text-white ">
                  <strong>{lang === 'en' ? 'History of Disease' : 'Riwayat Penyakit/Pengobatan'}</strong>
                </CCardHeader>
                <div style={{ marginTop: 20 }} />
                <CCardBody>
                  <CFormGroup row>
                    <CCol xs="2" md="1">
                      <CLabel>
                        <small>No</small>
                      </CLabel>
                    </CCol>
                    <CCol xs="7" md="3">
                      <CLabel>
                        <small>{lang === 'en' ? 'Type of Disease/Treatment' : 'Jenis Penyakit/Pengobatan'}</small>
                      </CLabel>
                    </CCol>
                    <CCol xs="3" md="2">
                      <CLabel>
                        <small>{lang === 'en' ? 'No / Yes' : 'Tidak / Ya'}</small>
                      </CLabel>
                    </CCol>
                    <CCol className="d-none d-sm-block" md="6" style={{ textAlign: 'center' }}>
                      <CLabel>
                        <small>{lang === 'en' ? 'Description' : 'Keterangan'}</small>
                      </CLabel>
                    </CCol>
                  </CFormGroup>
                  {symptom.length &&
                    symptom.map((data) => {
                      return (
                        <CFormGroup row key={data.id} className="card-update">
                          <CCol xs="2" md="1">
                            <CLabel>
                              <small>{data.no_urut}</small>
                            </CLabel>
                          </CCol>
                          <CCol xs="7" md="3">
                            <CLabel>
                              <small>
                                {localStorage.getItem('lang') === 'id' ? data.nama_riwayat : data.bahasa_inggris}
                              </small>
                            </CLabel>
                          </CCol>
                          <CCol xs="2" md="2">
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
                          <CCol className="mb-2" xs="12" md="6" style={{ textAlign: 'center' }}>
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
                <CCardHeader color="success" className="text-white ">
                  <strong>{lang === 'en' ? 'Statement' : 'Pernyataan'}</strong>
                </CCardHeader>
                <div style={{ marginTop: 20, marginRight: 20 }}>
                  {lang === 'en' ? (
                    <ol style={{ textAlign: 'justify' }}>
                      <li>
                        I am willing and do not mind providing correct information on the medical history label and
                        illness and any losses due to the misinformation that I have provided will be my own
                        responsibility and I am willing to accept sanctions for such losses.
                      </li>
                      <li>
                        I am willing and do not mind having a medical examination (physical diagnostic, laboratory tests
                        (including HIV, VDRL, HBsAg {'&'}
                        other laboratory tests), X-rays and other diagnostic support for myself according to the
                        necessary criteria, either medical criteria or criteria determined by the company and following
                        the examination procedures performed by the Medilab Clinic.
                      </li>
                      <li>
                        I am willing and do not mind giving the results of my medical examination to the recruiting
                        company or my place of work
                      </li>
                      <li>
                        I will not sue anyone against any decisions that have been made by the Medilab Clinic in the
                        form of FIT or UNFIT working in accordance with medical criteria or criteria set by the company,
                        or the occurrence of misinterpretation that is not caused by errors in procedures and equipment
                        / reagents used at Medilab Clinic.
                      </li>
                    </ol>
                  ) : (
                    <ol style={{ textAlign: 'justify' }}>
                      <li>
                        Saya bersedia dan tidak keberatan memberikan informasi yang benar pada tabel riwayat pengobatan
                        dan penyakit diatas dan segala kerugian akibat kesalahan informasi yang saya berikan akan saya
                        tanggung jawab sendiri dan saya bersedia menerima sanksi atas kerugian tersebut.
                      </li>
                      <li>
                        Saya bersedia dan tidak keberatan dilakukan pemeriksaan kesehatan, pemeriksaan physic
                        diagnostic, pemeriksaan labolatorium (termasuk tes HIV, VDRL, HBsAg {'&'} test labolatorium
                        lainnya), X-ray, dan penunjang diagnostic lainnya terhadap diri saya sesuai dengan kriteria yang
                        diperlukan, baik kriteria medis atau kriteria yang ditentukan perusahaan dan mengikuti prosedur
                        yang dilakukan oleh klinik Medilab.
                      </li>
                      <li>
                        Saya bersedia dan tidak keberatan memberikan hasil pemeriksaan kesehatan saya kepada perusahaan
                        yang merekrut atau tempat saya bekerja.
                      </li>
                      <li>
                        Saya tidak akan menuntut siapapun terhadap segala keputusan yang telah ditetapkan oleh Klinik
                        Medilab berupa FIT atau UNFIT bekerja sesuai dengan kriteria medis atau kriteria yang telah
                        ditetapkan oleh perusahaan, atau terjadinya kesalahan interpretasi yang bukan disebabkan oleh
                        kesalahan prosedur dan peralatan/reagensia yang dipergunakan di Klinik Medilab.
                      </li>
                      <li>
                        <span style={{ fontWeight: 'bold' }}>
                          Saya telah setuju dengan semua pernyataan diatas dan Form ini telah saya isi dengan
                          sebenar-benarnya
                        </span>{' '}
                        via online internet di aplikasi website https://form.medilab-clinic.com dan persetujuan saya
                        pada form ini adalah sebagai pengganti tanda tangan ketika salinan form dicetak di atas kertas.
                      </li>
                      {/* <li>
                        Saya bersedia dan tidak keberatan memberikan informasi yang benar pada label riwayat pengobatan dan penyakit dan segala
                        kerugian akibat kesalahan informasi yang saya berikan akan saya tanggung sendiri dan saya bersedia menerima sanksi atas
                        kerugian tersebut.
                      </li>
                      <li>
                        Saya bersedia dan tidak keberatan dilakukan pemeriksaan kesehatan (pemeriksaan physic diagnostic, pemeriksaan laboratorium
                        (termasuk test HIV, VDRL,HBsAg & test laboratorium lainnya), X-ray dan penunjang diagnostic lainnya terhadap diri saya sesuai
                        dengan kriteria yang diperlukan, baik kriteria medis atau kriteria yang ditentukan perusahaan dan mengikuti prosedur
                        pemeriksaan yang dilakukan oleh Klinik Medilab.
                      </li>
                      <li>
                        Saya bersedia dan tidak berkeberatan memberikan hasil pemeriksaan kesehatan saya kepada perusahaan yang merekrut atau tempat
                        saya bekerja
                      </li>
                      <li>
                        Saya tidak akan menuntut siapapun terhadap segala keputusan yang telah ditetapkan oleh Klinik Medilab berupa FIT atau UNFIT
                        bekerja sesuai dengan kriteria medis atau kriteria yang di tetapkan perusahaan, atau terjadinya kesalahan interprestasi yang
                        bukan disebabkan oleh kesalahan prosedur dan peralatan/reagensia yang digunakan di Klinik Medilab.
                      </li> */}
                    </ol>
                  )}
                </div>

                <CCardFooter>
                  <CRow>
                    <CCol xs="3" md="1">
                      <CSwitch
                        className={'mx-1'}
                        variant={'3d'}
                        disabled={edit.status}
                        color={'success'}
                        defaultChecked={edit.status}
                        onChange={onApply}
                      />
                    </CCol>
                    <CCol xs="9" md="8">
                      <h4>
                        {lang === 'en'
                          ? 'I am willing and do not mind the written statement above'
                          : 'Saya bersedia dan tidak keberatan dengan penyataan tertulis diatas'}
                      </h4>
                    </CCol>
                    <CCol xs="8" md="3">
                      {apply ? (
                        <CButton type="submit" size="sm" color="primary" className="float-right">
                          <CIcon name="cil-scrubber" /> {lang === 'en' ? 'Submit' : 'Simpan'}
                        </CButton>
                      ) : (
                        <CButton size="sm" color="secondary" className="float-right">
                          <CIcon name="cil-scrubber" /> {lang === 'en' ? 'Submit' : 'Simpan'}
                        </CButton>
                      )}
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default EditEmployee;
