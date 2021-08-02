import React, { useEffect, useState, useRef } from "react";
import { CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CImg } from "@coreui/react";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";
import { Logo, ClinicName, ClinicAlamat, Ttd } from "../../utilities/CustomData";
import { formatDate, formatTime } from "node-format-date";
import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  image: "https://register-clinic.vercel.app/static/media/logo.1ce095ce.png",
  dotsOptions: {
    color: "#5a82da",
    type: "square",
  },
  // cornersSquareOptions: {
  //   color: "#5a82da",
  //   type: "square",
  // },
  imageOptions: {
    imageSize: 0.4,
    margin: 5,
  },
});

const EmployeePrint = React.forwardRef((props, ref) => {
  const { dataPrint, hashLink } = props;
  const [data, setData] = useState({});
  const [dokter, setDokter] = useState("");
  // eslint-disable-next-line
  const [url, setUrl] = useState(`https://swab.klinikutamapanacea.com/#/scan/${hashLink}`);

  const newRef = useRef(null);

  useEffect(() => {
    getPrint(dataPrint);
    setUrl(`https://swab.klinikutamapanacea.com/#/scan/${hashLink}`);
    qrCode.append(newRef.current);
    // eslint-disable-next-line
  }, [dataPrint, hashLink]);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const getPrint = async (newData) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${HostUrl}/v1/patients/single/${newData}`,
      });
      setData(data.content.data);
      console.log(data.content.data);
      console.log(data.content.data.tipePemeriksaanNama);
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
    <div className="print-container mt-4">
      <div className="print-page page-break" ref={ref}>
        {data && (
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
                    <div>
                      <p style={{ fontSize: 17 }}>
                        Saya yang bertanda tangan di bawah ini, Dokter fasilitas pelayanan kesehatan <strong>Klinik Utama Panacea</strong> menerangkan dengan sesungguhnya bahwa:
                        <br />
                        <span style={{ fontSize: 17 }}>
                          <i>
                            The undersigned, Doctor of health services facilities at <strong>Panacea Clinic</strong> actually axplain that:
                          </i>
                        </span>
                      </p>
                      <div class="row">
                        <div class="col-8">
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                Nama
                                <br /> <i>(Name)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>: {data.nama}</p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                Jenis Kelamin
                                <br /> <i>(Gender)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>: {data.gender === 1 ? "Laki-laki / Male" : "Perempuan / Female"}</p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                Tempat / Tgl Lahir
                                <br /> <i>(Place / Date Of Birth)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>
                                : {data.tempatLahir}, {formatDate(data.tanggalLahir)}
                              </p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                Umur
                                <br /> <i>(Age)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>: {data.umur} Tahun</p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                Alamat
                                <br /> <i>(Address)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>
                                : {data.alamat}
                                {data.kodePos && `, ${data.kodePos}`}
                              </p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                No. NIK / Passport
                                <br /> <i>(Identity Card Number)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>: {data.nik}</p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                Pekerjaan
                                <br /> <i>(Profession)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>: {data.pekerjaan}</p>
                            </CCol>
                          </CRow>
                          <CRow class="d-flex align-items-center">
                            <CCol lg="2">
                              <p style={{ fontSize: 17 }}>
                                No. Handphone
                                <br /> <i>(Number Phone)</i>
                              </p>
                            </CCol>
                            <CCol lg="10">
                              <p style={{ fontSize: 17 }}>: {data.noHP}</p>
                            </CCol>
                          </CRow>
                        </div>
                        <div class="col-4">
                          <div ref={newRef} />
                        </div>
                      </div>
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
                                SARS-CoV2 RNA Gender
                                <br /> <span style={{ color: data.status === 1 ? "red" : "green" }}>({data.status === 1 ? "Positive" : "Negative"})</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <p style={{ fontSize: 17 }}>NIE: {data.noIzinAlat}</p>
                      </div>
                      <p style={{ fontSize: 17 }}>
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
                      <p style={{ fontSize: 17 }}>
                        Demikian surat keterangan ini di buat untuk dipergunakan sebagaimana mestinya.
                        <br />
                        <i>(This letter of statement should be made used accordingly and properly).</i>
                      </p>
                      <div class="d-flex justify-content-end mr-3">
                        <p style={{ fontSize: 17 }}>Batam, {formatDate(data.resultDate)}</p>
                      </div>
                      <br />
                      <div class="d-flex justify-content-end mr-3">
                        <CImg src={Ttd} className="float-right" height={100} />
                      </div>
                      <div class="d-flex justify-content-end mr-3">
                        <p style={{ fontSize: 17 }}>{dokter}</p>
                      </div>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        )}
      </div>
    </div>
  );
});

export default EmployeePrint;
