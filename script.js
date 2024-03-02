// Fungsi untuk memproses input pengguna
function processInput() {
    // Mendapatkan nilai suhu yang diinput oleh pengguna
    var inputTemperature = parseFloat(document.getElementById('temperature').value);
    // Mendapatkan elemen div untuk menampilkan pesan kesalahan
    var errorDiv = document.getElementById('error');
    // Mendapatkan jenis suhu yang diinput oleh pengguna
    var inputType = document.getElementById('temperature-type').value;
    // Mendapatkan jenis suhu untuk keluaran yang diinginkan oleh pengguna
    var outputType = document.getElementById('output-type').value;
    var result;

    // Memeriksa jenis suhu masukan dan keluaran yang diinginkan untuk melakukan konversi
    if (inputType === 'fahrenheit') {
        if (outputType === 'celcius') {
            result = FahrenheitToCelsius(inputTemperature);
        } else if (outputType === 'kelvin') {
            result = FahrenheitToKelvin(inputTemperature);
        } else if (outputType === 'reamur') {
            result = FahrenheitToReamur(inputTemperature);
        } else if (outputType === 'fahrenheit') {
            result = inputTemperature; // Jika konversi ke satuan yang sama, hasil sama dengan input
        }
    } else if (inputType === 'kelvin') {
        if (outputType === 'celcius') {
            result = KelvinToCelsius(inputTemperature);
        } else if (outputType === 'fahrenheit') {
            result = KelvinToFahrenheit(inputTemperature);
        } else if (outputType === 'reamur') {
            result = KelvinToReamur(inputTemperature);
        } else if (outputType === 'kelvin') {
            result = inputTemperature; // Jika konversi ke satuan yang sama, hasil sama dengan input
        }
    } else if (inputType === 'celcius') {
        if (outputType === 'fahrenheit') {
            result = CelsiusToFahrenheit(inputTemperature);
        } else if (outputType === 'kelvin') {
            result = CelsiusToKelvin(inputTemperature);
        } else if (outputType === 'reamur') {
            result = CelsiusToReamur(inputTemperature);
        } else if (outputType === 'celcius') {
            result = inputTemperature; // Jika konversi ke satuan yang sama, hasil sama dengan input
        }
    } else if (inputType === 'reamur') {
        if (outputType === 'celcius') {
            result = ReamurToCelsius(inputTemperature);
        } else if (outputType === 'fahrenheit') {
            result = ReamurToFahrenheit(inputTemperature);
        } else if (outputType === 'kelvin') {
            result = ReamurToKelvin(inputTemperature);
        } else if (outputType === 'reamur') {
            result = inputTemperature; // Jika konversi ke satuan yang sama, hasil sama dengan input
        }
    }

    // Menampilkan hasil konversi suhu
    document.getElementById('output-temperature').value = result.toFixed(1);
    // Menghapus pesan kesalahan
    errorDiv.textContent = "";
}

// Fungsi untuk mereset formulir
function resetForm() {
    // Mengatur nilai suhu kembali ke 0
    document.getElementById('temperature').value = "0";
    // Mengatur jenis suhu masukan kembali ke pilihan default
    document.getElementById('temperature-type').selectedIndex = 0;
    // Mengatur nilai suhu keluaran kembali ke kosong
    document.getElementById('output-temperature').value = "";
    // Menghapus pesan kesalahan
    document.getElementById('error').textContent = "";
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Celsius
function FahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5 / 9;
}

// Fungsi untuk mengonversi suhu dari Celsius ke Fahrenheit
function CelsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Kelvin
function FahrenheitToKelvin(temperature) {
    return (temperature - 32) * 5 / 9 + 273.15;
}

// Fungsi untuk mengonversi suhu dari Kelvin ke Fahrenheit
function KelvinToFahrenheit(temperature) {
    return (temperature - 273.15) * 9 / 5 + 32;
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Reamur
function FahrenheitToReamur(temperature) {
    return (temperature - 32) * 4 / 9;
}

// Fungsi untuk mengonversi suhu dari Reamur ke Fahrenheit
function ReamurToFahrenheit(temperature) {
    return temperature * 9 / 4 + 32;
}

// Fungsi untuk mengonversi suhu dari Kelvin ke Celsius
function KelvinToCelsius(temperature) {
    return temperature - 273.15;
}

// Fungsi untuk mengonversi suhu dari Celsius ke Kelvin
function CelsiusToKelvin(temperature) {
    return temperature + 273.15;
}

// Fungsi untuk mengonversi suhu dari Kelvin ke Reamur
function KelvinToReamur(temperature) {
    return (temperature - 273.15) * 4 / 5;
}

// Fungsi untuk mengonversi suhu dari Reamur ke Kelvin
function ReamurToKelvin(temperature) {
    return temperature * 5 / 4 + 273.15;
}

// Fungsi untuk mengonversi suhu dari Celsius ke Reamur
function CelsiusToReamur(temperature) {
    return temperature * 4 / 5;
}

// Fungsi untuk mengonversi suhu dari Reamur ke Celsius
function ReamurToCelsius(temperature) {
    return temperature * 5 / 4;
}