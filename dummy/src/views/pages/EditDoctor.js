import React, { useState, useEffect } from "react";
import { CContainer, CRow, CCol, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";

const EditRiwayat = () => {
  const { dataId } = useParams();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: `${HostUrl}/v1/dokters/single/${dataId}`,
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then(({ data }) => {
        console.log(data.content.data);
        setEdit(data.content.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const history = useHistory();
  const onFormChange = (event) => {
    const { value, name } = event.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "PUT",
        url: `${HostUrl}/v1/dokters/edit/${dataId}`,
        data: {
          data: {
            nama: edit.nama,
          },
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      newAlert({ status: "success", message: "Berhasil" });
      history.push("/doctor");
    } catch (error) {
      // const { msg } = error.response.data;
      newAlert({ status: "error", message: "failed" });
    }
  };

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="9">
          <CCard>
            <CCardHeader>
              <strong>Edit Dokter</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Nama Dokter</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="nama" value={edit.nama} onChange={onFormChange} />
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

export default EditRiwayat;
