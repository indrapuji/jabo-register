import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "../../../utilities/axios";
import HostUrl from "../../../utilities/HostUrl";
import newAlert from "../../../components/NewAlert";
import Swal from "sweetalert2";
import getAge from "../../../utilities/GetAge";

const EditEmployee = () => {
  const { dataId } = useParams();
  const history = useHistory();
  const host = "https://dev.farizdotid.com/api/daerahindonesia";
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  const [kec, setKec] = useState([]);
  const [kel, setKel] = useState([]);
  const [companyList, setCompanyList] = useState(null);
  const [edit, setEdit] = useState({});
  // const [kodePerusahaan, setKodePerusahaan] = useState('');
  const [accordion, setAccordion] = useState(1);
  const [symptom, setSymptom] = useState([]);
  const [symptomForm, setSymptomForm] = useState([]);
  const [oldProv, setOldProv] = useState("");

  useEffect(() => {
    getCompanyList();
  }, []);
  console.log(edit);

  useEffect(() => {
    if (edit.id) getSymptom(edit);
  }, [edit]);

  const onSymptomFormChange = (event) => {
    const { name, value, id } = event.target;
    if (symptomForm.length) {
      const temp = symptomForm.find((data) => Number(data.symptom_id) === Number(id));
      if (temp) {
        const newForm = symptomForm.map((data) => {
          if (Number(data.symptom_id) === Number(id)) {
            if (name === "status_riwayat") {
              let result = {
                ...data,
                status_riwayat: !data.status_riwayat,
              };
              if (!data.status_riwayat === false) result.keterangan_riwayat = "";
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
        if (name === "status_riwayat") {
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
      if (name === "status_riwayat") {
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
        method: "GET",
        url: HostUrl + "/symptom/all",
        headers: {
          token: localStorage.getItem("token"),
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

  const getCompanyList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: HostUrl + "/company/all-list",
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${HostUrl}/employee/single/${dataId}`,
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
        setEdit({
          ...data,
          status: false,
        });
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

  const onCity = (e) => {
    const obj = JSON.parse(e.target.value);
    setEdit({
      ...edit,
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
    setEdit({
      ...edit,
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
    setEdit({
      ...edit,
      kelurahan: obj.nama,
    });
  };

  const onFormChange = (event) => {
    const { value, name } = event.target;
    if (name === "company_id") {
      const obj = JSON.parse(value);
      // setKodePerusahaan(obj.kode_perusahaan);
      setEdit({
        ...edit,
        company_id: obj.id,
      });
    } else if (name === "tgl_lahir") {
      setEdit({
        ...edit,
        umur: getAge(value),
        [name]: value,
      });
    } else {
      setEdit({
        ...edit,
        [name]: value,
      });
    }
  };

  const handdleDelete = () => {
    Swal.fire({
      title: "Yakin ingin hapus?",
      text: `${edit.nama}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: "DELETE",
            url: `${HostUrl}/employee/delete/${dataId}`,
            headers: {
              token: localStorage.getItem("token"),
            },
          });
          newAlert({ status: "success", message: "Deleted" });
          history.push("/karyawan");
        } catch (error) {
          const { msg } = error.response.data;
          newAlert({ status: "error", message: msg });
          console.log(error.response.data);
        }
      } else {
        newAlert({ status: "error", message: "Cancel" });
      }
    });
  };

  const handdleReset = () => {
    Swal.fire({
      title: "Yakin ingin reset paswword?",
      text: `${edit.nama}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, reset!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: "PUT",
            url: `${HostUrl}/employee/reset-password/${dataId}`,
          });
          newAlert({ status: "success", message: "Berhasil" });
        } catch (error) {
          const { msg } = error.response.data;
          newAlert({ status: "error", message: msg });
          console.log(error.response.data);
        }
      } else {
        newAlert({ status: "error", message: "Cancel" });
      }
    });
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validation = symptomForm.find(
        (data) => data.status_riwayat === true && (data.keterangan_riwayat === "" || !data.keterangan_riwayat)
      );
      let newSymptomForm = [];
      if (validation) {
        newAlert({
          status: "error",
          message: "Keterangan Riwayat Penyakit Wajib diisi",
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
      await axios({
        method: "PUT",
        url: HostUrl + `/employee/edit/${dataId}?admin=true`,
        data: edit,
      });
      await axios({
        method: "PUT",
        url: HostUrl + "/symptom/employee",
        data: {
          arrayData: JSON.stringify(newSymptomForm),
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      newAlert({ status: "success", message: "Berhasil" });
      history.push("/karyawan");
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { msg } = error.response.data;
        newAlert({ status: "error", message: msg });
        console.log(error.response.data);
      } else {
        newAlert({ status: "error", message: "Internal Sever Error" });
      }
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong>Edit Karyawan</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={onFormSubmit}>
                {/* <CCardHeader style={{ marginTop: 10, marginBottom: 10 }}> */}
                <CRow>
                  <CCol xs="12" md="7">
                    <CFormGroup row>
                      <CCol xs="12" md="3">
                        <CLabel>
                          <small>Nama Perusahaan</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect id="select" name="company_id" size="sm" onChange={onFormChange}>
                          <option value="0" disabled>
                            Pilih
                          </option>
                          {companyList &&
                            companyList.map((data) => {
                              return (
                                <option selected={edit.company_id === data.id ? true : false} value={JSON.stringify(data)}>
                                  {data.nama}
                                </option>
                              );
                            })}
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CFormGroup row>
                      <CCol xs="12" md="8">
                        <CInput placeholder="kode" size="sm" value={edit.company ? edit.company.kode_perusahaan : ""} disabled />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                {/* </CCardHeader> */}
                <CRow>
                  <CCol xs="12" md="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Nama Lengkap</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput size="sm" name="nama" value={edit.nama} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>NIK</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CInput size="sm" name="nik" value={edit.nik} onChange={onFormChange} />
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
                          <option value="0">{edit.gender === "male" ? "Laki - laki" : "Perempuan"}</option>
                          <option value="male">Laki - laki</option>
                          <option value="female">Perempuan</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="3">
                        <CLabel>
                          <small>Tempat {"&"} Tgl lahir</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="5">
                        <CInput size="sm" name="tempat_lahir" value={edit.tempat_lahir} onChange={onFormChange} />
                      </CCol>
                      <CCol xs="12" md="4">
                        <CInput type="date" size="sm" name="tgl_lahir" value={edit.tgl_lahir} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="5"></CCol>
                </CRow>

                <CRow>
                  <CCol xs="12" md="7">
                    <CFormGroup row>
                      <CCol xs="12" md="3">
                        <CLabel>
                          <small>Umur</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="7" md="2">
                        <CInput size="sm" name="umur" value={edit.umur} disabled onChange={onFormChange} />
                      </CCol>
                      <CCol xs="5" md="3">
                        <CLabel>
                          <small>Tahun</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Bapak Kandung</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput size="sm" name="ayah" value={edit.ayah} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">
                          <small>Alamat </small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput
                          custom
                          size="sm"
                          placeholder="Jalan 1"
                          value={edit.alamat_1}
                          name="alamat_1"
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="9">
                        <CInput
                          custom
                          size="sm"
                          placeholder="Jalan 2"
                          value={edit.alamat_2}
                          name="alamat_2"
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3" />
                      <CCol md="5">
                        <CSelect custom size="sm" onChange={onProv}>
                          <option value="0" id="test">
                            {edit.provinsi === "" ? "Provinsi" : edit.provinsi}
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
                          <option value="0">{edit.kota === "" ? "Kota" : oldProv === edit.provinsi ? edit.kota : "Kota"}</option>
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
                          <option value="0">
                            {edit.kecamatan === "" ? "Kecamatan" : oldProv === edit.provinsi ? edit.kecamatan : "Kecamatan"}
                          </option>
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
                          <option value="0">
                            {edit.kelurahan === "" ? "Kelurahan" : oldProv === edit.provinsi ? edit.kelurahan : "Kelurahan"}
                          </option>
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
                        <CInput
                          custom
                          size="sm"
                          placeholder="Kode Pos"
                          value={edit.kode_pos}
                          name="kode_pos"
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>

                  <CCol xs="12" md="5">
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>No. Handphone</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="no_hp" value={edit.no_hp} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>No. Karyawan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="emp_id" value={edit.emp_id} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Tgl Mulai Kerja</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput type="date" size="sm" name="mulai_kerja" value={edit.mulai_kerja} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Jabatan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="jabatan" value={edit.jabatan} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Departemen</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput size="sm" name="departemen" value={edit.departemen} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Medical Terakhir</small>
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
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>
                          <small>Tanggal Medical</small>
                        </CLabel>
                      </CCol>
                      <CCol md="8">
                        <CInput
                          type="date"
                          size="sm"
                          name="tanggal_medical_terakhir"
                          value={edit.tanggal_medical_terakhir}
                          onChange={onFormChange}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="7">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>
                          <small>Pemeriksaan</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CInput size="sm" name="pemeriksaan" value={edit.pemeriksaan} onChange={onFormChange} />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="5"></CCol>
                </CRow>
                <CCardFooter>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex" }}>
                        <CButton size="sm" color="danger" className="float-left" onClick={handdleDelete}>
                          <CIcon name="cil-scrubber" /> Hapus
                        </CButton>
                        <CButton size="sm" color="warning" className="ml-4 mr-4" onClick={handdleReset}>
                          <CIcon name="cil-scrubber" /> Reset Password
                        </CButton>
                      </div>
                    </div>
                    <div>
                      <CButton type="submit" size="sm" color="primary" className="float-right">
                        <CIcon name="cil-scrubber" /> Simpan
                      </CButton>
                    </div>
                  </div>
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
                  <CCol xs="1" md="1">
                    <CLabel>
                      <small>No Urut</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="4" md="3">
                    <CLabel>
                      <small>Jenis Penyakit/Pengobatan</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="2" md="2">
                    <CLabel>
                      <small>Tidak / Ya</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="3" md="6" style={{ textAlign: "center" }}>
                    <CLabel>
                      <small>Keterangan</small>
                    </CLabel>
                  </CCol>
                </CFormGroup>
                {symptom.length &&
                  symptom.map((data) => {
                    return (
                      <CFormGroup row key={data.id}>
                        <CCol xs="1" md="1">
                          <CLabel>
                            <small>{data.no_urut}</small>
                          </CLabel>
                        </CCol>
                        <CCol xs="4" md="3">
                          <CLabel>
                            <small>{data.nama_riwayat}</small>
                          </CLabel>
                        </CCol>
                        <CCol xs="2" md="2">
                          <CSwitch
                            className={"mx-1"}
                            variant={"3d"}
                            color={"success"}
                            name="status_riwayat"
                            id={data.id ? JSON.stringify(data.id) : JSON.stringify(data.symptom_id)}
                            onChange={onSymptomFormChange}
                            defaultChecked={data.symptom_id ? data.status_riwayat : false}
                          />
                        </CCol>
                        <CCol xs="4" md="6">
                          <CInput
                            size="sm"
                            id={data.id ? JSON.stringify(data.id) : JSON.stringify(data.symptom_id)}
                            name="keterangan_riwayat"
                            onChange={onSymptomFormChange}
                            defaultValue={data.symptom_id ? data.keterangan_riwayat : ""}
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

export default EditEmployee;
