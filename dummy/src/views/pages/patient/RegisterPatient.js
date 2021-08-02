import React, { useState } from "react";
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
  CImg,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import newAlert from "../../../components/NewAlert";
import axios from "../../../utilities/axios";
import HostUrl from "../../../utilities/HostUrl";
import getAge from "../../../utilities/GetAge";
import Panacea from "../../../assets/images/logo.png";

const RegisterPatient = () => {
  const history = useHistory();
  const [showInvalid, setShowInvalid] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    gender: "",
    tempat_lahir: "",
    tgl_lahir: "",
    umur: "",
    alamat: "",
    kode_pos: "",
    no_hp: "",
    clinic: "KUP",
  });

  const onFormChange = (event) => {
    const { value, name } = event.target;
    if (name === "tgl_lahir") {
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
      const { nama, nik, gender, tempat_lahir, tgl_lahir, umur, alamat, no_hp } = formData;
      if (no_hp.length < 7) {
        newAlert({
          status: "error",
          message: "Nomor telepon tidak boleh kurang dari 7 karakter",
        });
        return;
      }
      if (
        nama === "" ||
        nik === "" ||
        gender === "" ||
        tempat_lahir === "" ||
        tgl_lahir === "" ||
        umur === "" ||
        alamat === "" ||
        no_hp === ""
      ) {
        newAlert({ status: "error", message: "Isi Semua Form" });
        return;
      }

      await axios({
        method: "POST",
        url: HostUrl + "/patient/register",
        data: {
          nama: formData.nama.toUpperCase(),
          nik: formData.nik,
          gender: formData.gender,
          tempat_lahir: formData.tempat_lahir.toUpperCase(),
          tgl_lahir: formData.tgl_lahir,
          umur: formData.umur,
          alamat: formData.alamat.toUpperCase(),
          kode_pos: formData.kode_pos,
          no_hp: formData.no_hp,
          clinic: formData.clinic,
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
    <div className="c-app c-default-layout flex-row  justify-content-center align-items-center">
      <CContainer>
        <CRow className="justify-content-center ">
          <CCol xs="12" md="12">
            <CCard>
              <CCardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <CImg src={Panacea} align="center" height={30} />
                    <div className="ml-2 h3">
                      <strong>Klinik Utama Panacea</strong>
                    </div>
                  </div>
                  <div>
                    <strong>Registrasi</strong>
                  </div>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm onSubmit={onFormSubmit}>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Nama Lengkap</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CInput
                        size="sm"
                        name="nama"
                        className="text-uppercase"
                        invalid={showInvalid && formData.nama === "" ? true : false}
                        onChange={onFormChange}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">Nomor Ponsel</CCol>
                    <CCol md="6">
                      <CInput
                        size="sm"
                        name="no_hp"
                        invalid={showInvalid && formData.no_hp === "" ? true : false}
                        onChange={onFormChange}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>NIK</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput
                        size="sm"
                        invalid={showInvalid && showInvalid && formData.nik === "" ? true : false}
                        name="nik"
                        onChange={onFormChange}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Jenis Kelamin</CLabel>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CSelect
                        id="select"
                        invalid={showInvalid && formData.gender === "" ? true : false}
                        name="gender"
                        size="sm"
                        onChange={onFormChange}
                      >
                        <option value="0">Silakan Pilih</option>
                        <option value="LAKI-LAKI">LAKI -LAKI</option>
                        <option value="PEREMPUAN">PEREMPUAN</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Tempat lahir</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput
                        size="sm"
                        name="tempat_lahir"
                        className="text-uppercase"
                        invalid={
                          showInvalid && showInvalid && formData.tempat_lahir === "" ? true : false
                        }
                        onChange={onFormChange}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Tanggal lahir</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput
                        type="date"
                        size="sm"
                        invalid={showInvalid && formData.tgl_lahir === "" ? true : false}
                        name="tgl_lahir"
                        onChange={onFormChange}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol xs="12" md="3">
                      <CLabel>Umur</CLabel>
                    </CCol>
                    <CCol xs="7" md="2">
                      <CInput
                        size="sm"
                        name="umur"
                        value={formData.umur}
                        disabled
                        onChange={onFormChange}
                      />
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
                      <CInput
                        custom
                        size="sm"
                        invalid={showInvalid && formData.alamat === "" ? true : false}
                        className="text-uppercase"
                        name="alamat"
                        onChange={onFormChange}
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">Kodepos</CLabel>
                    </CCol>
                    <CCol md="5">
                      <CInput
                        custom
                        size="sm"
                        placeholder="Kode Pos"
                        name="kode_pos"
                        onChange={onFormChange}
                      />
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
    </div>
  );
};

export default RegisterPatient;
