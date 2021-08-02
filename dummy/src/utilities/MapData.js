import { formatDate } from "node-format-date";

const MapData = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      nama: data[i].nama,
      nik: data[i].nik,
      pekerjaan: data[i].pekerjaan,
      gender: data[i].gender === 1 ? "Laki-laki" : "Perempuan",
      tempatLahir: data[i].tempatLahir,
      tanggalLahir: formatDate(data[i].tanggalLahir),
      umur: data[i].umur,
      alamat: data[i].alamat,
      kodePos: data[i].kodePos,
      noHP: data[i].noHP,
      clinic: data[i].clinic,
      status: data[i].status === 0 ? "" : data[i].status === 1 ? "POSITIVE" : "NEGATIVE",
      sampleDate: formatDate(data[i].sampleDate),
      resultDate: formatDate(data[i].resultDate),
      noIzinAlat: data[i].noIzinAlat,
      tipePemeriksaanNama: data[i].tipePemeriksaanNama,
      noSurat: data[i].noSurat,
      adminPrintNama: data[i].adminPrintNama,
      dokterNama: data[i].dokterNama,
      petugas: data[i].petugas,
      organisasi: data[i].organisasi,
      referal: data[i].referal
    });
  }
  return result;
};

export default MapData;
