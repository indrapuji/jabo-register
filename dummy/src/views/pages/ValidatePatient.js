import React, { useState, useEffect } from "react";
import { CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CImg } from "@coreui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";
import { Logo, ClinicName, ClinicAlamat } from "../../utilities/CustomData";
import { formatDate, formatTime } from "node-format-date";
import { decrypt } from "../../utilities/RandomLink";

const ValidatePatient = () => {
  const { dataId } = useParams();
  const [data, setData] = useState(null);
  const [dokter, setDokter] = useState("");

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async (n) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/patients/single/${decrypt(dataId)}`,
      });
      setData(data.content.data);
      const doctor = await axios({
        method: "GET",
        url: `${HostUrl}/v1/dokters/single/${data.content.data.dokterId}`,
      });
      setDokter(doctor.data.content.data.nama);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="c-app c-default-layout justify-content-center mt-2 align-items-center">
      {data !== null ? (
        <CContainer>
          <CRow className="justify-content-center">
            <CCol xs="12" md="12">
              <CCard>
                <CCardHeader>
                  <div className="d-flex align-items-center">
                    <div className="d-flex ">
                      <CImg src={Logo} align="center" height={80} />
                      <div className="ml-2 h5">
                        <strong>{ClinicName}</strong>
                        <span>{ClinicAlamat}</span>
                      </div>
                    </div>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="text-center">
                    <h2>
                      <u>SURAT KETERANGAN</u>
                      <br />
                      (LETTER OF STATEMENT)
                    </h2>
                    <h3>{data.noSurat}</h3>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div>
                    <p style={{ fontSize: 18 }}>
                      Saya yang bertanda tangan di bawah ini, Dokter fasilitas pelayanan kesehatan <strong>Klinik Utama Panacea</strong> menerangkan dengan sesungguhnya bahwa:
                      <br />
                      <span style={{ fontSize: 18 }}>
                        <i>
                          The undersigned, Doctor of health services facilities at <strong>Panacea Clinic</strong> actually axplain that:
                        </i>
                      </span>
                    </p>

                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          Nama
                          <br /> <i>(Name)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>: {data.nama}</p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          Jenis Kelamin
                          <br /> <i>(Gender)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>: {data.gender === 1 ? "Laki-laki / Male" : "Perempuan / Female"}</p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          Tempat / Tgl Lahir
                          <br /> <i>(Place / Date Of Birth)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>
                          : {data.tempatLahir}, {formatDate(data.tanggalLahir)}
                        </p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          Umur
                          <br /> <i>(Age)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>: {data.umur} Tahun</p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          Alamat
                          <br /> <i>(Address)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>
                          : {data.alamat}
                          {data.kodePos && `, ${data.kodePos}`}
                        </p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          No. NIK / Passport
                          <br /> <i>(Identity Card Number)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>: {data.nik}</p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          Pekerjaan
                          <br /> <i>(Profession)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>: {data.pekerjaan}</p>
                      </CCol>
                    </CRow>
                    <CRow class="d-flex align-items-center">
                      <CCol lg="3">
                        <p style={{ fontSize: 18 }}>
                          No. Handphone
                          <br /> <i>(Number Phone)</i>
                        </p>
                      </CCol>
                      <CCol lg="9">
                        <p style={{ fontSize: 18 }}>: {data.noHP}</p>
                      </CCol>
                    </CRow>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col" class="text-center">
                              Tanggal Ambil Sample
                              <br />
                              <i>(Date Of Sampling)</i>
                            </th>
                            <th scope="col" class="text-center">
                              Tanggal Keluar Hasil
                              <br />
                              <i>(Date Result Examination)</i>
                            </th>
                            <th scope="col" class="text-center">
                              Waktu Keluar Hasil
                              <br />
                              <i>(Time Out Result Examination)</i>
                            </th>
                            <th scope="col" class="text-center">
                              Hasil {data.tipePemeriksaanNama}
                              <br />
                              <i>({data.tipePemeriksaanNama} Result)</i>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">{formatDate(data.sampleDate)}</td>
                            <td class="text-center">{formatDate(data.resultDate)}</td>
                            <td class="text-center">{formatTime(data.resultDate)} WIB</td>
                            <td class="text-center">
                              SARS-CoV2 RNA Gene
                              <br /> <span style={{ color: data.status === 1 ? "red" : "green" }}>({data.status === 1 ? "Positive" : "Negative"})</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <p style={{ fontSize: 18 }}>NIE: {data.noIzinAlat}</p>
                    </div>
                    <p style={{ fontSize: 18 }}>
                      Pada Tanggal {formatDate(data.sampleDate)}, Telah kami Swab Test {data.tipePemeriksaanNama} SARS-CoV2 dengan hasil pemeriksaan{" "}
                      <span style={{ color: data.status === 1 ? "red" : "green" }}>
                        <strong>"{data.status === 1 ? "TERDETEKSI" : "TIDAK TERDETEKSI"}"</strong>
                      </span>
                      <br />
                      <i>
                        On {formatDate(data.sampleDate)}, we have Swap test {data.tipePemeriksaanNama} SARS-Cov2 with result{" "}
                      </i>
                      <span style={{ color: data.status === 1 ? "red" : "green" }}>
                        <strong>"{data.status === 1 ? "DETECTED" : "NOT DETECTED"}"</strong>
                      </span>
                    </p>
                    <p style={{ fontSize: 18 }}>
                      Demikian surat keterangan ini di buat untuk dipergunakan sebagaimana mestinya.
                      <br />
                      <i>(This letter of statement should be made used accordingly and properly).</i>
                    </p>
                    <div class="d-flex justify-content-end mr-3">
                      <p style={{ fontSize: 18 }}>Batam, {formatDate(data.resultDate)}</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="d-flex justify-content-end mr-3">
                      <p style={{ fontSize: 18 }}>{dokter}</p>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      ) : (
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ValidatePatient;
