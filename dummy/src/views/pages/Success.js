import React from "react";
import { useHistory } from "react-router-dom";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CRow, CImg } from "@coreui/react";
import { Logo, ClinicName } from "../../utilities/CustomData";

const Success = () => {
  const history = useHistory();

  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-3">
                <CImg src={Logo} align="center" height={100} />
                <h3 className="text-center my-2 font-weight-bold text-success">{ClinicName}</h3>
                <CCardBody>
                  <h1 className="text-center my-2 font-weight-bold">Pendaftaran berhasil</h1>
                </CCardBody>
                <CButton color="primary" size="lg" onClick={handleRegister} >
                  Kembali
                </CButton>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Success;
