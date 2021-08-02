import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CContainer, CRow, CCol, CSelect, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";
import { formatDate } from "node-format-date";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";
import { encrypt } from "../../utilities/RandomLink";
import moment from "moment";
import formatRupiah from "src/utilities/FormatRupiah";

const EditPatient = () => {
  const { dataId } = useParams();
  const history = useHistory();
  const [edit, setEdit] = useState({});
  const [old, setOld] = useState({});
  const [doktorList, setDoctorList] = useState(null);
  const [pemeriksaan, setPemeriksaan] = useState(null);
  const [encryptLink, setEncryptLink] = useState("");
  const [listHarga, setListHarga] = useState(null);
  const [operatorList, setOperatorList] = useState(null);
  const [organizationList, setOrganizationList] = useState(null);
  const [referalList, setReferalList] = useState(null);

  const componentRef = useRef();

  useEffect(() => {
    getPatient()
    getDoctorList();
    getTipePemeriksaan();
    getListHarga();
    getOperatorList();
    getOrganizationList();
    getReferalList();
    // eslint-disable-next-line
  }, [dataId]);

  const getPatient = () => {
    axios({
      method: "GET",
      url: `${HostUrl}/v1/patients/single/${dataId}`,
    })
      .then(({ data }) => {
        setEdit(data.content.data);
        setOld(data.content.data);
        console.log(data.content.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getDoctorList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: HostUrl + `/v1/dokters/all?klinik=${localStorage.getItem("klinik")}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setDoctorList(data.content.data);
      setEncryptLink(encrypt(dataId));
    } catch (error) {
      console.log(error);
    }
  };

  const getTipePemeriksaan = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/tipe-pemeriksaan/all`,
      });
      setPemeriksaan(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getListHarga = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/harga/all?outlet=${localStorage.getItem("outlet")}`,
      });
      setListHarga(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOperatorList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/petugas/all?klinik=${localStorage.getItem("klinik")}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setOperatorList(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrganizationList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/organisasi/all?klinik=${localStorage.getItem("klinik")}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setOrganizationList(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getReferalList = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/referal/all?klinik=${localStorage.getItem("klinik")}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setReferalList(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFormChange = (event) => {
    const { value, name } = event.target;
    console.log(value)
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const { status, tipePemeriksaanId, dokterId, harga, noIzinAlat, petugas, organisasi } = edit;
      if (status === 0 || !harga || !tipePemeriksaanId || !dokterId || !petugas || !organisasi) {
        newAlert({ status: "error", message: "Isi semua form" });
        return;
      }
      if (tipePemeriksaanId === 1 && noIzinAlat === "") {
        newAlert({ status: "error", message: "No Izin Alat tidak boleh kosong" });
        return;
      }
      await axios({
        method: "PUT",
        url: `${HostUrl}/v1/patients/edit/${dataId}`,
        data: {
          data: {
            status: edit.status,
            tipePemeriksaanId: edit.tipePemeriksaanId,
            dokterId: edit.dokterId,
            noIzinAlat: edit.noIzinAlat,
            harga: edit.harga,
            nama: edit.nama,
            noHP: edit.noHP,
            nik: edit.nik,
            pekerjaan: edit.pekerjaan,
            gender: edit.gender,
            tempatLahir: edit.tempatLahir,
            tanggalLahir: edit.tanggalLahir,
            umur: edit.umur,
            alamat: edit.alamat,
            kodePos: edit.kodePos,
            petugas: edit.petugas,
            organisasi: edit.organisasi,
            referal: edit.referal,
            adminPrintId: localStorage.getItem("adminId"),
          },
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      newAlert({ status: "success", message: `Berhasil` });
      // getPatient()
      history.push("/");
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

  const handleValidate = () => {
    history.push(`/validate/${encryptLink}`);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@page {
      size: A4;
      margin: 50px;
    }
  
    @media all {
      .pagebreak {
        display: none;
      }
    }
  
    @media print {
      .pagebreak {
        display: block;
        page-break-before: always;
        page-break-after: always;
      }
    }`,
  });

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong>Update Pasien</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={onFormSubmit}>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Tanggal Periksa</small>
                    </CLabel>
                  </CCol>
                  <CCol md="5">
                    <CInput size="sm" name="sampleDate" value={formatDate(edit.sampleDate)} disabled onChange={onFormChange} />
                  </CCol>
                  <CCol md="4">
                    <CInput size="sm" name="noRegistrasi" value={edit.noRegistrasi} disabled onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Hasil periksa</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="status" size="sm" onChange={onFormChange} disabled={old.status > 0 ? true : false} value={edit.status}>
                      <option value="0" >
                        Silahkan Pilih
                      </option>
                      <option value="1">Positive</option>
                      <option value="2">Negative</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Tipe Pemeriksaan</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="tipePemeriksaanId" size="sm" onChange={onFormChange} disabled={edit.tipePemeriksaanNama ? true : false} value={edit.tipePemeriksaanId}>
                      <option value="0">Silahkan Pilih</option>
                      {pemeriksaan &&
                        pemeriksaan.map((data) => {
                          return <option value={data.tipePemeriksaanId}>{data.nama}</option>;
                        })}
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Dokter Periksa</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="dokterId" size="sm" onChange={onFormChange} disabled={old.dokterId > 0 ? true : false} value={edit.dokterId}>
                      <option value="0">Silahkan Pilih</option>
                      {doktorList &&
                        doktorList.map((data) => {
                          return <option value={data.dokterId}>{data.nama}</option>;
                        })}
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>No Izin Alat</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput size="sm" name="noIzinAlat" value={edit.noIzinAlat} disabled={!old.noIzinAlat ? false : true} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Harga</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="harga" size="sm" onChange={onFormChange} disabled={old.harga > 0 ? true : false} value={edit.harga}>
                      <option value="0">Silahkan Pilih</option>
                      {listHarga &&
                        listHarga.map((data) => {
                          return <option value={data.harga}>{formatRupiah(data.harga)}</option>;
                        })}
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Petugas</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="petugas" size="sm" onChange={onFormChange} disabled={!old.petugas ? false : true} value={edit.petugas}>
                      <option value="">Silahkan Pilih</option>
                      {operatorList &&
                        operatorList.map((data) => {
                          return <option value={data.nama}>{data.nama}</option>;
                        })}
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Perusahaan</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="organisasi" size="sm" onChange={onFormChange} disabled={!old.organisasi ? false : true} value={edit.organisasi}>
                      <option value="">Silahkan Pilih</option>
                      {organizationList &&
                        organizationList.map((data) => {
                          return <option value={data.nama}>{data.nama}</option>;
                        })}
                    </CSelect>
                  </CCol>
                </CFormGroup>
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
                  <CCol md="9">
                    <CInput size="sm" name="nik" value={edit.nik} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Pekerjaan</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput size="sm" name="pekerjaan" value={edit.pekerjaan} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>No. Handphone</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput size="sm" name="noHP" value={edit.noHP} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      <small>Jenis Kelamin</small>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="5">
                    <CSelect id="select" name="gender" size="sm" onChange={onFormChange}>
                      <option value="0">{edit.gender === 1 ? "Laki - laki" : "Perempuan"}</option>
                      <option value="1">Laki - laki</option>
                      <option value="2">Perempuan</option>
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
                    <CInput size="sm" name="tempatLahir" value={edit.tempatLahir} onChange={onFormChange} />
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput size="sm" name="tanggalLahir" type="date" value={moment(edit.tanggalLahir).format("YYYY-MM-DD")} onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
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
                    <CLabel htmlFor="textarea-input">
                      <small>Alamat </small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" placeholder="Jalan" value={edit.alamat} name="alamat" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3" />
                  <CCol md="5">
                    <CInput custom size="sm" placeholder="Kode Pos" value={edit.kodePos} name="kodePos" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                {localStorage.getItem("type") === "2" && (
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>
                        <small>Referal</small>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="5">
                      <CSelect id="select" name="referal" size="sm" onChange={onFormChange} value={edit.referal}>
                        <option value="">Silahkan Pilih</option>
                        {referalList &&
                          referalList.map((data) => {
                            return <option value={data.nama}>{data.nama}</option>;
                          })}
                      </CSelect>
                    </CCol>
                  </CFormGroup>)}
                <CCardFooter>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <CButton size="sm" color={edit.noSurat ? "primary" : "secondary"} disabled={edit.noSurat ? false : true} onClick={handleValidate}>
                        <CIcon name="cil-scrubber" /> Validate
                      </CButton>
                    </div>
                    <div>
                      <div style={{ display: "flex" }}>
                        <CButton type="submit" size="sm" color="primary" className="float-right">
                          <CIcon name="cil-scrubber" /> Update
                        </CButton>
                        <div style={{ marginLeft: 10 }}>
                          <CButton color={edit.noSurat ? "success" : "secondary"} disabled={edit.noSurat ? false : true} onClick={handlePrint}>
                            Print
                          </CButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CCardFooter>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ComponentToPrint ref={componentRef} dataPrint={dataId} hashLink={encryptLink} />
    </CContainer>
  );
};

export default EditPatient;
