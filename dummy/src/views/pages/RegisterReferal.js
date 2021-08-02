import React, { useState } from "react";
import { CContainer, CRow, CCol, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";

const RegisterReferal = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    nama: "",
    klinik: localStorage.getItem("klinik"),
    outlet: localStorage.getItem("outlet")
  });


  const onFormChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const submitForm = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "POST",
        url: HostUrl + "/v1/referal/create",
        data: {
          data: {
            nama: formData.nama,
            klinik: formData.klinik,
            outlet: formData.outlet
          },
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      newAlert({ status: "success", message: "Berhasil" });
      history.push("/referal");
    } catch (error) {
      const { message } = error.response.data;
      newAlert({ status: "error", message });
      console.log(error.response.data);
    }
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader color="primary">
              <strong>Daftar Referal Baru</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Nama Referal</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="nama" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right" onClick={submitForm}>
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

export default RegisterReferal;
