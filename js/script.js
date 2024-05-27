// Script JV

// button selection Luas/Keliling Segitiga
function showLuas() {
    document.getElementById('kelilingSegitiga').style.display = 'none';
    document.getElementById('luasSegitiga').style.display = 'block';

    document.getElementById('btnKeliling').style.color = 'rgb(64, 142, 145)';
    document.getElementById('btnKeliling').style.backgroundColor = 'white';

    document.getElementById('btnLuas').style.color = 'white';
    document.getElementById('btnLuas').style.backgroundColor = 'rgb(64, 142, 145)';
};
function showKeliling() {
    document.getElementById('luasSegitiga').style.display = 'none';
    document.getElementById('kelilingSegitiga').style.display = 'block';

    document.getElementById('btnLuas').style.backgroundColor = 'white';
    document.getElementById('btnLuas').style.color = 'rgb(64, 142, 145)';

    document.getElementById('btnKeliling').style.backgroundColor = 'rgb(64, 142, 145)';
    document.getElementById('btnKeliling').style.color = 'white';
};

// button Hitung dan Reset Luas Segitiga
document.addEventListener('DOMContentLoaded', function() {
    const hitungLuasButton = document.getElementById('hitungLuas');
    const resetLuasButton = document.getElementById('resetLuas');

    hitungLuasButton.addEventListener('click', function() {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        if (isNaN(alas) || isNaN(tinggi)) {alert('Silakan masukkan nilai numerik untuk alas dan tinggi.');return;}
        document.getElementById('L').innerText = 'L =';
        document.getElementById('formulaLuas').innerText = '1/2 \u00D7 a \u00D7 t';
        document.getElementById('equalsL1').innerText = '=';
        document.getElementById('inputNilaiL').innerText = `1/2 \u00D7 ${alas} \u00D7 ${tinggi}`;
        document.getElementById('equalsL2').innerText = '=';
        document.getElementById('calculateNilaiL').innerText = `${1/2 * alas} \u00D7 ${tinggi}`;
        document.getElementById('equalsL3').innerText = '=';
        document.getElementById('outputHasilL').innerText = `${1/2 * alas * tinggi}`;
    });
    resetLuasButton.addEventListener('click', function() {
        document.getElementById('alas').value = ''
        document.getElementById('tinggi').value = ''
        document.getElementById('L').innerText = '';
        document.getElementById('formulaLuas').innerText = '';
        document.getElementById('equalsL1').innerText = '';
        document.getElementById('inputNilaiL').innerText = '';
        document.getElementById('equalsL2').innerText = '';
        document.getElementById('calculateNilaiL').innerText = '';
        document.getElementById('equalsL3').innerText = '';
        document.getElementById('outputHasilL').innerText = '';
    });
});

// button Hitung dan Reset Keliling Segitiga
document.addEventListener('DOMContentLoaded', function() {
    const hitungKelilingButton = document.getElementById('hitungKeliling');
    const resetKelilingButton = document.getElementById('resetKeliling');

    hitungKelilingButton.addEventListener('click', function() {
        const sisiA = parseFloat(document.getElementById('sisiA').value);
        const sisiB = parseFloat(document.getElementById('sisiB').value);
        const sisiC = parseFloat(document.getElementById('sisiC').value);
        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {alert('Silakan masukkan nilai numerik untuk sisi A, sisi B, dan sisi C.');return;}
        document.getElementById('K').innerText = 'K =';
        document.getElementById('formulaKeliling').innerText = 'S1 + S2 + S3';
        document.getElementById('equalsK1').innerText = '=';
        document.getElementById('inputNilaiK').innerText = `${sisiA} + ${sisiB} + ${sisiC} `;
        document.getElementById('equalsK2').innerText = '=';
        document.getElementById('calculateNilaiK').innerText = `${sisiA + sisiB} + ${sisiC}`;
        document.getElementById('equalsK3').innerText = '=';
        document.getElementById('outputHasilK').innerText = `${sisiA + sisiB + sisiC}`;
    });
    resetKelilingButton.addEventListener('click', function() {
        document.getElementById('sisiA').value = ''
        document.getElementById('sisiB').value = ''
        document.getElementById('sisiC').value = ''
        document.getElementById('K').innerText = '';
        document.getElementById('formulaKeliling').innerText = '';
        document.getElementById('equalsK1').innerText = '';
        document.getElementById('inputNilaiK').innerText = '';
        document.getElementById('equalsK2').innerText = '';
        document.getElementById('calculateNilaiK').innerText = '';
        document.getElementById('equalsK3').innerText = '';
        document.getElementById('outputHasilK').innerText = '';
    });
});
