import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CContainer, CRow, CCol, CSelect, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";
import getAge from "../../utilities/GetAge";

const AddPatient = () => {
  const history = useHistory();
  const [showInvalid, setShowInvalid] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    noHP: "",
    nik: "",
    pekerjaan: "",
    gender: 0,
    tempatLahir: "",
    tanggalLahir: "",
    umur: "",
    alamat: "",
    kodePos: "",
    clinic: "DUMMY",
    outlet: "DUMMY",
  });

  const onFormChange = (event) => {
    const { value, name } = event.target;
    if (name === "tanggalLahir") {
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
      setShowInvalid(true);
      const { nama, nik, gender, tempatLahir, tanggalLahir, umur, alamat, noHP, pekerjaan } = formData;
      if (noHP.length < 7) {
        newAlert({
          status: "error",
          message: "Nomor telepon tidak boleh kurang dari 7 karakter",
        });
        return;
      }
      if (nama === "" || nik === "" || gender === 0 || tempatLahir === "" || tanggalLahir === "" || umur === "" || alamat === "" || noHP === "" || pekerjaan === "") {
        newAlert({ status: "error", message: "Isi Semua Form" });
        return;
      }
      await axios({
        method: "POST",
        url: HostUrl + "/v1/patients/create",
        data: {
          data: {
            nama: formData.nama,
            nik: formData.nik,
            pekerjaan: formData.pekerjaan,
            gender: formData.gender,
            tempatLahir: formData.tempatLahir,
            tanggalLahir: formData.tanggalLahir,
            umur: formData.umur,
            alamat: formData.alamat,
            kodePos: formData.kodePos,
            noHP: formData.noHP,
            clinic: formData.clinic,
            outlet: formData.outlet,
          },
        },
      });
      newAlert({
        status: "success",
        message: "Registrasi Berhasil",
      });
      history.push("/");
    } catch (error) {
      newAlert({ status: "error", message: "Internal Sever Error" });
      console.log(error);
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader color="primary">
              <strong>Register Pasien</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={onFormSubmit}>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel>Nama Lengkap</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput size="sm" name="nama" invalid={showInvalid && formData.nama === "" ? true : false} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">Nomor Ponsel</CCol>
                  <CCol md="6">
                    <CInput size="sm" name="noHP" invalid={showInvalid && formData.noHP === "" ? true : false} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel>NIK</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CInput size="sm" invalid={showInvalid && showInvalid && formData.nik === "" ? true : false} name="nik" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel>Pekerjaan</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CInput size="sm" invalid={showInvalid && showInvalid && formData.pekerjaan === "" ? true : false} name="pekerjaan" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel>Jenis Kelamin</CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CSelect id="select" invalid={showInvalid && formData.gender === 0 ? true : false} name="gender" size="sm" onChange={onFormChange}>
                      <option value="0">Silakan Pilih</option>
                      <option value="1">Laki - laki</option>
                      <option value="2">perempuan</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel>Tempat lahir</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CInput size="sm" name="tempatLahir" invalid={showInvalid && showInvalid && formData.tempatLahir === "" ? true : false} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel>Tanggal lahir</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CInput type="date" size="sm" invalid={showInvalid && formData.tanggalLahir === "" ? true : false} name="tanggalLahir" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol xs="12" md="3">
                    <CLabel>Umur</CLabel>
                  </CCol>
                  <CCol xs="7" md="2">
                    <CInput size="sm" name="umur" value={formData.umur} disabled onChange={onFormChange} />
                  </CCol>
                  <CCol xs="5" md="3">
                    <CLabel>Tahun</CLabel>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="card-update">
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Alamat</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" invalid={showInvalid && formData.alamat === "" ? true : false} name="alamat" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Kodepos</CLabel>
                  </CCol>
                  <CCol md="5">
                    <CInput custom size="sm" placeholder="Kode Pos" name="kodePos" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right">
                    <CIcon name="cil-scrubber" /> Daftar
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

export default AddPatient;
