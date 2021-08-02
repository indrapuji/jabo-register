import React from 'react';
import { CWidgetDropdown, CRow, CCol, CCard, CCardBody, CCardGroup, CCardHeader, CWidgetBrand, CWidgetSimple } from '@coreui/react';
import { CChartBar } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from './ChartLineSimple';

const WidgetsDropdown = (props) => {
  const { dashboardData } = props;

  const renderWidget = () => {
    const widgetColor = [
      {
        header: `${dashboardData.total_perusahaan}`,
        text: 'Total Perusahaan',
        color: 'gradient-primary',
        icon: 'cil-building',
      },
      {
        header: `${dashboardData.total_karyawan_perusahaan}`,
        text: 'Total Karyawan',
        color: 'gradient-info',
        icon: 'cil-people',
      },
      {
        header: `${dashboardData.data_karyawan_sudah_validasi}`,
        text: 'Karyawan Sudah Validasi',
        color: 'gradient-warning',
        icon: 'cil-user',
      },
      {
        header: `${dashboardData.data_karyawan_belum_validasi}`,
        text: 'Karyawan Belum Validasi',
        color: 'gradient-danger',
        icon: 'cil-user-x',
      },
    ];
    const result = widgetColor.map((data, idx) => {
      let { header, text, color, icon } = data;
      return (
        <>
          <CCol sm="6" lg="3" key={data.id}>
            <CWidgetDropdown
              color={color}
              header={header}
              text={text}
              footerSlot={
                <div>
                  <CIcon name={icon} className="float-right mr-3 mb-1" size="4xl" />
                </div>
              }
            />
          </CCol>
        </>
      );
    });
    return result;
  };

  const renderChart = () => {
    const { jumlah_karyawan_per_perusahaan } = dashboardData;
    let bar = {
      labels: [],
      datasets: [
        {
          label: 'Jumlah Karyawan',
          backgroundColor: '#0000ff',
          borderColor: '#0000ff',
          borderWidth: 2,
          hoverBackgroundColor: '#36A2EB',
          hoverBorderColor: '#36A2EB',
          data: [],
        },
        {
          label: 'Karyawan Sudah Validasi',
          backgroundColor: '#66ff66',
          borderColor: '#66ff66',
          borderWidth: 2,
          hoverBackgroundColor: '#4BC0C0',
          hoverBorderColor: '#4BC0C0',
          data: [],
        },
      ],
    };
    // eslint-disable-next-line
    jumlah_karyawan_per_perusahaan.map((data) => {
      bar.labels = bar.labels.concat(data.kode_perusahaan);
      bar.datasets[0].data = bar.datasets[0].data.concat(Number(data.jumlah_karyawan));
      bar.datasets[1].data = bar.datasets[1].data.concat(Number(data.jumlah_karyawan_sudah_validasi));
    });
    return (
      <>
        <CChartBar
          datasets={bar.datasets}
          labels={bar.labels}
          options={{
            tooltips: {
              enabled: true,
            },
          }}
        />
      </>
    );
  };

  const renderSecondWidget = () => {
    const widgetColor = [
      {
        text: 'GENDER',
        backgroundColor: '#ffcc99',
        leftHeader: `${dashboardData.gender_karyawan.perempuan}`,
        rightHeader: `${dashboardData.gender_karyawan.laki_laki}`,
        leftFooter: 'Perempuan',
        rightFooter: 'Laki - Laki',
        dataPoints: [85, 59, 49, 74, 51, 55, 40],
        icon: 'cib-odnoklassniki',
      },
      {
        text: 'UMUR',
        backgroundColor: '#ff99ff',
        leftHeader: `${(
          (dashboardData.umur_karyawan.umur_diatas_30 / (dashboardData.umur_karyawan.umur_diatas_30 + dashboardData.umur_karyawan.umur_dibawah_30)) *
          100
        ).toFixed(2)}%`,
        rightHeader: `${(
          (dashboardData.umur_karyawan.umur_dibawah_30 / (dashboardData.umur_karyawan.umur_diatas_30 + dashboardData.umur_karyawan.umur_dibawah_30)) *
          100
        ).toFixed(2)}%`,
        leftFooter: '>= 30 Tahun',
        rightFooter: '< 30 Tahun',
        dataPoints: [30, 59, 84, 54, 61, 55, 40],
        icon: 'cil-birthday-cake',
      },
      {
        text: 'VALIDASI',
        backgroundColor: '#add8e6',
        leftHeader: `${((dashboardData.validasi_data.belum / (dashboardData.validasi_data.sudah + dashboardData.validasi_data.belum)) * 100).toFixed(
          2
        )}%`,
        rightHeader: `${((dashboardData.validasi_data.sudah / (dashboardData.validasi_data.sudah + dashboardData.validasi_data.belum)) * 100).toFixed(
          2
        )}%`,
        leftFooter: 'Belum',
        rightFooter: 'Sudah',
        dataPoints: [85, 59, 64, 74, 61, 75, 84],
        icon: 'cilPaperPlane',
      },
    ];
    const result = widgetColor.map((data, idx) => {
      let { text, backgroundColor, leftHeader, rightHeader, leftFooter, rightFooter, dataPoints, icon } = data;
      if (leftHeader === 'NaN%') leftHeader = '0%';
      if (rightHeader === 'NaN%') rightHeader = '0%';
      return (
        <>
          <CCol sm="6" lg="4" key={data.id}>
            <CWidgetSimple text={text} style={{ marginBottom: 0, backgroundColor }}>
              <ChartLineSimple
                className="position-absolute  h-100"
                backgroundColor="rgba(255,255,255,.1)"
                dataPoints={dataPoints}
                style={{ top: 10, left: 0 }}
              />
              <CIcon name={icon} size="2xl" />
            </CWidgetSimple>
            <CWidgetBrand
              style={{ marginTop: 0 }}
              rightHeader={rightHeader}
              rightFooter={rightFooter}
              leftHeader={leftHeader}
              leftFooter={leftFooter}
            />
          </CCol>
        </>
      );
    });
    return result;
  };

  const renderChartPenyakit = () => {
    const { riwayat_penyakit } = dashboardData;
    let bar = {
      labels: [],
      datasets: [
        {
          label: 'Jumlah',
          backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 2,
          hoverBackgroundColor: 'red',
          hoverBorderColor: 'red',
          data: [],
        },
      ],
    };
    // eslint-disable-next-line
    riwayat_penyakit.map((data) => {
      bar.labels = bar.labels.concat(data.nama_riwayat);
      bar.datasets[0].data = bar.datasets[0].data.concat(Number(data.jumlah_karyawan));
    });
    return (
      <>
        <CChartBar
          datasets={bar.datasets}
          labels={bar.labels}
          options={{
            tooltips: {
              enabled: true,
            },
          }}
        />
      </>
    );
  };

  return (
    <>
      <CRow>{dashboardData && renderWidget()}</CRow>
      <CCardGroup>
        <CCard>
          <CCardHeader>JUMLAH KARYAWAN PER PERUSAHAAN</CCardHeader>
          <CCardBody>{dashboardData && renderChart()}</CCardBody>
        </CCard>
      </CCardGroup>
      <CRow style={{ marginTop: 20 }}>{dashboardData && renderSecondWidget()}</CRow>
      <CCardGroup>
        <CCard>
          <CCardHeader>RIWAYAT PENYAKIT / PENGOBATAN</CCardHeader>
          <CCardBody>{dashboardData && renderChartPenyakit()}</CCardBody>
        </CCard>
      </CCardGroup>
    </>
  );
};

export default WidgetsDropdown;
