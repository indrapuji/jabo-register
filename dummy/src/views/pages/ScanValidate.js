import React, { useState, useEffect } from "react";
import { CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CImg } from "@coreui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";
import { ShortLogo } from "../../utilities/CustomData";
import { formatDate } from "node-format-date";
import { decrypt } from "../../utilities/RandomLink";

const ScanValidate = () => {
  const { dataId } = useParams();
  const [data, setData] = useState(null);

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
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <CImg src={ShortLogo} align="center" height={80} />
                    <a href="https://register-eta.vercel.app/"><h6 align="center" class="my-1">https://register-eta.vercel.app</h6></a>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <div class="text-center">
                    <h2>
                      <u>VALIDATION PAGE</u>
                    </h2>
                    <h5>{data.noSurat}</h5>
                  </div>
                  <br />
                  <br />
                  <div class="text-center">
                    <h2>{data.nama}</h2>
                    <h2>{data.nik}</h2>
                    <h2>SWAB {data.tipePemeriksaanNama}</h2>
                    <h2 style={{ color: data.status === 1 ? "red" : "green" }}>"{data.status === 1 ? "POSITIVE" : "NEGATIVE"}"</h2>
                    <h2>{formatDate(data.resultDate)}</h2>
                  </div>
                  <br />
                  <br />
                  <div>
                    <h6>VALIDATION LINK</h6>
                    <a href={`https://register-eta.vercel.app/#/scan/${dataId}`}><h6 class="my-0">https://register-eta.vercel.app/#/scan/{dataId}</h6></a>
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

export default ScanValidate;
