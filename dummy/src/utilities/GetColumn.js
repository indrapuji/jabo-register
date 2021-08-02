const getColumn = (newData) => {
  let column = [];
  let newKey = "";

  for (let key in newData[0]) {
    if (
      key !== "patientId" &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "noRegistrasi" &&
      key !== "tipePemeriksaanId" &&
      key !== "tipePemeriksaanAlias" &&
      key !== "harga" &&
      key !== "dokterId" &&
      key !== "adminPrintId" &&
      key !== "outlet" &&
      key !== "dokterKlinik"
    ) {
      if (key === "gender") {
        newKey = "JENIS KELAMIN";
        column.push({ header: newKey, field: key });
      } else if (key === "tanggalLahir") {
        newKey = "TANGGAL LAHIR";
        column.push({ header: newKey, field: key });
      } else if (key === "tempatLahir") {
        newKey = "TEMPAT LAHIR";
        column.push({ header: newKey, field: key });
      } else if (key === "sampleDate") {
        newKey = "SAMPLE DATE";
        column.push({ header: newKey, field: key });
      } else if (key === "resultDate") {
        newKey = "RESULT DATE";
        column.push({ header: newKey, field: key });
      } else if (key === "tipePemeriksaanNama") {
        newKey = "TIPE PEMERIKSAAN";
        column.push({ header: newKey, field: key });
      } else if (key === "noSurat") {
        newKey = "NO SURAT";
        column.push({ header: newKey, field: key });
      } else if (key === "adminPrintNama") {
        newKey = "ADMIN PRINT";
        column.push({ header: newKey, field: key });
      } else if (key === "dokterNama") {
        newKey = "DOKTER PERIKSA";
        column.push({ header: newKey, field: key });
      } else if (key === "noHP") {
        newKey = "NO HP";
        column.push({ header: newKey, field: key });
      } else if (key === "noIzinAlat") {
        newKey = "NO IZIN ALAT";
        column.push({ header: newKey, field: key });
      } else {
        column.push({ header: key.toUpperCase().replace(/_/g, " "), field: key });
      }
    }
  }
  return column;
};

export default getColumn;
