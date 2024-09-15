document.getElementById('functionForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Mencegah halaman direfresh saat form disubmit

    // Ambil nilai fungsi dari input
    const func = document.getElementById('function').value;

    try {
        // Parse fungsi menjadi ekspresi Math.js
        const expr = math.parse(func);

        // Variabel yang terlibat (x dan y)
        const x = math.parse('x');
        const y = math.parse('y');

        // Hitung turunan parsial terhadap x dan y
        const partialDerivativeX = math.derivative(expr, x);
        const partialDerivativeY = math.derivative(expr, y);

        // Tampilkan hasil turunan parsial
        document.getElementById('result').innerHTML = `
            <p><strong>Turunan Parsial terhadap x:</strong> ${partialDerivativeX}</p>
            <p><strong>Turunan Parsial terhadap y:</strong> ${partialDerivativeY}</p>
        `;
    } catch (error) {
        // Tampilkan pesan error jika terjadi kesalahan
        document.getElementById('result').innerHTML = `<p style="color:red;">Kesalahan: ${error.message}</p>`;
    }
});

