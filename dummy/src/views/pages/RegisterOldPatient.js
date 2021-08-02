import React, { useState, useEffect } from "react";
import { CContainer, CRow, CCol, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader, CImg } from "@coreui/react";
import { useParams, useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import newAlert from "../../components/NewAlert";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";
import getAge from "../../utilities/GetAge";
import moment from "moment";
import { Logo, ClinicName } from "../../utilities/CustomData";

const RegisterOldPatient = () => {
  const { nik } = useParams();
  const history = useHistory();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    getPatient(nik)
  }, [nik])

  const getPatient = (identity) => {
    axios({
      method: "GET",
      url: `${HostUrl}/v1/patients/single-nik/${identity}`,
    })
      .then(({ data }) => {
        setEdit(data.content.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }




  const onCancel = () => {
    history.push('/register')
  }

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "POST",
        url: HostUrl + "/v1/patients/create",
        data: {
          data: {
            nama: edit.nama,
            noHP: edit.noHP,
            nik: edit.nik,
            pekerjaan: edit.pekerjaan,
            gender: edit.gender,
            tempatLahir: edit.tempatLahir,
            tanggalLahir: edit.tanggalLahir,
            umur: getAge(edit.tanggalLahir),
            alamat: edit.alamat,
            kodePos: edit.kodePos,
            clinic: localStorage.getItem("klinik"),
            outlet: localStorage.getItem("outlet")
          },
        },
      });
      newAlert({
        status: "success",
        message: "Registrasi Berhasil",
      });
      history.push("/success");
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
                    <CImg src={Logo} align="center" height={30} />
                    <div className="ml-2 h3 text-primary">
                      <strong>{ClinicName}</strong>
                    </div>
                  </div>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm >
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Nama Lengkap</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CInput size="sm" name="nama" disabled value={edit.nama} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">Nomor Ponsel</CCol>
                    <CCol md="6">
                      <CInput size="sm" name="noHP" disabled value={edit.noHP} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>NIK</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput size="sm" name="nik" disabled value={edit.nik} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Pekerjaan</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput size="sm" name="pekerjaan" disabled value={edit.pekerjaan} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Jenis Kelamin</CLabel>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CInput size="sm" name="gender" disabled value={edit.gender === 1 ? "Laki - laki" : "Perempuan"} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Tempat lahir</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput size="sm" name="tempatLahir" disabled value={edit.tempatLahir} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol md="3">
                      <CLabel>Tanggal lahir</CLabel>
                    </CCol>
                    <CCol md="6">
                      <CInput type="date" size="sm" name="tanggalLahir" disabled value={moment(edit.tanggalLahir).format("YYYY-MM-DD")} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row className="card-update">
                    <CCol xs="12" md="3">
                      <CLabel>Umur</CLabel>
                    </CCol>
                    <CCol xs="7" md="2">
                      <CInput size="sm" name="umur" disabled value={getAge(edit.tanggalLahir)} />
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
                      <CInput custom size="sm" name="alamat" disabled value={edit.alamat} />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">Kodepos</CLabel>
                    </CCol>
                    <CCol md="5">
                      <CInput custom size="sm" placeholder="Kode Pos" disabled value={edit.kodePos} name="kodePos" />
                    </CCol>
                  </CFormGroup>
                  <CCardFooter>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <CButton size="sm" color="danger" onClick={onCancel}>
                        <CIcon name="cil-scrubber" /> Salah
                      </CButton>
                      <CButton size="sm" color="primary" onClick={onFormSubmit}>
                        <CIcon name="cil-scrubber" /> Betul
                      </CButton>
                    </div>
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

export default RegisterOldPatient;
