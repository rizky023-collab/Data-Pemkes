document.addEventListener('DOMContentLoaded', function() {
    // Data Pasien
    const dataPemkes = {
        april: {
            label: "April",
            items: [
                { name: "Normal", value: 35, icon: "fas fa-smile" },
                { name: "Pre Hipertensi", value: 19, icon: "fas fa-thermometer-half" },
                { name: "Hipertensi Grade 1", value: 11, icon: "fas fa-exclamation-triangle" },
                { name: "Hipertensi Grade 2", value: 2, icon: "fas fa-skull-crossbones" }
            ],
            total: 67
        },
        mei: {
            label: "Mei",
            items: [
                { name: "Normal", value: 26, icon: "fas fa-smile" },
                { name: "Pre Hipertensi", value: 12, icon: "fas fa-thermometer-half" },
                { name: "Hipertensi Grade 1", value: 13, icon: "fas fa-exclamation-triangle" },
                { name: "Hipertensi Grade 2", value: 6, icon: "fas fa-skull-crossbones" }
            ],
            total: 57
        }
        // Tambahkan data bulan lain di sini jika ada
    };

    function populateMonthData(monthKey) {
        const monthData = dataPemkes[monthKey];
        if (!monthData) return;

        const container = document.querySelector(`#${monthKey} .stats-container`);
        if (!container) return;

        container.innerHTML = ''; // Bersihkan kontainer sebelum mengisi

        monthData.items.forEach(item => {
            const statItem = document.createElement('div');
            statItem.classList.add('stat-item');
            statItem.innerHTML = `
                <span class="label"><i class="${item.icon}"></i> ${item.name}</span>
                <span class="value">${item.value} pasien</span>
            `;
            container.appendChild(statItem);
        });

        // Tambahkan total pasien
        const totalItem = document.createElement('div');
        totalItem.classList.add('stat-item', 'total-stat'); // Anda bisa menambahkan styling khusus untuk total
        totalItem.innerHTML = `
            <span class="label"><i class="fas fa-users"></i> Total Pasien</span>
            <span class="value total">${monthData.total} pasien</span>
        `;
        container.appendChild(totalItem);
    }

    // Isi data untuk bulan yang ada
    populateMonthData('april');
    populateMonthData('mei');

    // Update tahun di footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Fungsi untuk Tab
function openMonth(evt, monthName) {
    var i, tabcontent, tablinks;

    // Sembunyikan semua elemen dengan class="tab-content"
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }

    // Hapus class "active" dari semua elemen dengan class="tab-link"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Tampilkan tab saat ini, dan tambahkan class "active" ke tombol yang membuka tab
    document.getElementById(monthName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}
