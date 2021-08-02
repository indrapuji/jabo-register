import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CRow, CImg, CFormGroup, CLabel, CInput } from "@coreui/react";
import { Logo, ClinicName } from "../../utilities/CustomData";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";


const ChoosePasien = () => {
  const history = useHistory();
  const [showChoose, setShowChoose] = useState(true)
  const [val, setVal] = useState("");
  const [load, setLoad] = useState(false)

  const newPasien = () => {
    history.push('/register')
  };

  const oldPasien = () => {
    setShowChoose(false)
  }

  const onFormChange = (event) => {
    setVal(event.target.value);
  };

  const submitForm = () => {
    setLoad(true)
    axios({
      method: "GET",
      url: `${HostUrl}/v1/patients/single-nik/${val}`,
    })
      .then(() => {
        history.push(`/choose/${val}`)
      })
      .catch((error) => {
        setLoad(false)
        newAlert({ status: "error", message: "NIK Salah / Tidak Ditemukan" });
        console.log(error);
      });

  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CImg src={Logo} align="center" height={40} />
                <div className="text-center h3 text-primary">
                  <strong>{ClinicName}</strong>
                </div>
                <CCardBody>

                  {showChoose ? (
                    <CRow>
                      <CCol xs="12" md="6" className="mb-2">
                        <CButton color="indo" block onClick={() => newPasien()}>
                          Pasien Baru
                        </CButton>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CButton color="eng" block onClick={() => oldPasien()}>
                          Pasien Lama
                        </CButton>
                      </CCol>
                    </CRow>
                  ) : (
                    <CFormGroup row>
                      <CCol xs="2" md="2"></CCol>
                      <CCol xs="8" md="8" className="text-center">
                        <CLabel  >
                          <small>NIK</small>
                        </CLabel>
                      </CCol>
                      <CCol xs="2" md="2"></CCol>

                      <CCol xs="2" md="2"></CCol>
                      <CCol xs="8" md="8">
                        <CInput custom size="sm" name="nama" onChange={onFormChange} />
                      </CCol>
                      <CCol xs="2" md="2"></CCol>

                      <CCol xs="2" md="2"></CCol>
                      <CCol xs="8" md="8" className="mt-3">
                        <CButton color="primary" block onClick={submitForm}>
                          {!load ? (
                            "Check"
                          ) : (
                            <div class="spinner-border spinner-border-sm" role="status">
                              <span size='sm' class="sr-only">Loading...</span>
                            </div>
                          )}
                        </CButton>
                      </CCol>
                      <CCol xs="2" md="2"></CCol>

                      <CCol xs="2" md="2"></CCol>
                      <CCol xs="8" md="8" className="mt-3 text-center" >
                        Belum Terdaftar, <span style={{ color: 'blue', cursor: 'pointer' }} onClick={newPasien}>Register</span> disini
                      </CCol>
                      <CCol xs="2" md="2"></CCol>
                    </CFormGroup>
                  )}
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ChoosePasien;
