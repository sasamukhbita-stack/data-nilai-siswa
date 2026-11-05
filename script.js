const students = [
    { name: "Alya", score: 90 },
    { name: "Bimo", score: 85 },
    { name: "Tama", score: 70 },
    { name: "Fabian", score: 95 },
    { name: "Fathia", score: 80 }
];

console.log("=== DAFTAR NILAI SISWA ===");
students.forEach(function(student) {
    console.log(`Nama: ${student.name}, Nilai: ${student.score}`);
});

const lulus = students.filter(function(student) {
    return student.score >= 75;
});

console.log("=== SISWA YANG LULUS ===");
console.log(lulus);

const namaSiswa = students.map(function(student) {
    return student.name;
});

console.log("=== DAFTAR NAMA SISWA ===");
console.log(namaSiswa);

const nilaiTertinggi = students.find(function(student) {
    return student.score >= 90;
});

console.log("=== SISWA DENGAN NILAI MINIMAL 90 ===");
console.log(nilaiTertinggi);
