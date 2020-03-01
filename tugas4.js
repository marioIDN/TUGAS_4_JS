var siswa1 = 160;
var siswa2 = 170;
var siswa3 = 180;

if (siswa1>siswa2) {
  if (siswa1>siswa3) {
    console.log("siswa1 adalah siswa paling tinggi");
  }else {
    console.log("siswa1 adalah siswa tinggi kedua");
  }
}else {
  if (siswa1<siswa3) {
    console.log("siswa1 adalah siswa yang paling pendek");
  }else {
    console.log("siswa1 adalah siswa yang paling pendek kedua");
  }


  switch (siswa1) {
    case 160:
      console.log("pendek");
      break;
    case 170:
      console.log("cukup tinggi");
      break;
    case 180:
      console.log("sangat tinggi");
      break;

  }
}
