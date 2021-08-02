import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CRow, CImg } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Medilab from "../../../assets/images/medilab-logo.png";

const Login = () => {
  const history = useHistory();
  const [langu, setLangu] = useState(true);
  const [bahasa, setBahasa] = useState("");

  const onlanguage = (lang) => {
    setBahasa(lang);
    localStorage.setItem("lang", lang);
    setLangu(false);
  };

  const onCompany = () => {
    history.push("/employe");
  };

  const onPersonal = () => {
    history.push("/register");
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <p></p>
                <CImg src={Medilab} align="center" height={40} />
                <p></p>
                <CCardBody>
                  <CForm>
                    {langu ? (
                      <CRow>
                        <CCol xs="12" md="6" className="mb-2">
                          <CButton color="indo" block onClick={() => onlanguage("id")}>
                            Indonesia <CIcon name="cif-id" size="lg" className="ml-2" />
                          </CButton>
                        </CCol>
                        <CCol xs="12" md="6">
                          <CButton color="eng" block onClick={() => onlanguage("en")}>
                            English <CIcon name="cif-us" size="lg" className="ml-2" />
                          </CButton>
                        </CCol>
                      </CRow>
                    ) : (
                      <CRow>
                        <CCol xs="12" md="6" className="mb-2">
                          <CButton color="indo" block onClick={() => onCompany()}>
                            {bahasa === "in" ? "Perusahaan" : "Company"}
                          </CButton>
                        </CCol>
                        <CCol xs="12" md="6">
                          <CButton color="eng" block onClick={() => onPersonal()}>
                            Personal
                          </CButton>
                        </CCol>
                      </CRow>
                    )}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
