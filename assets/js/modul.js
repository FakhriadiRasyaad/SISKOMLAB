
    document.querySelector('form.custom-form').addEventListener('submit', function(event) {
        // Mencegah pengiriman form default
        event.preventDefault();

        // Mendapatkan nilai input dari search bar
        var keyword = document.querySelector('#keyword').value.toLowerCase();

        // Daftar ID yang sesuai dengan keyword pencarian
        var idMapping = {
            
            'video pembelajaran 1': 'vp1',
            'video pembelajaran 2': 'vp2',
            'video pembelajaran 3': 'vp3',
            'modul 1': 'mdl1',
            'modul 2': 'mdl2',
            'modul 3': 'mdl3',
            'tugas pendahuluan 1': 'tp1',
            'tugas pendahuluan 2': 'tp2',
            'tugas pendahuluan 3': 'tp3'
        };

        // Menentukan ID target berdasarkan keyword
        var targetId = idMapping[keyword];

        if (targetId) {
            // Menentukan elemen target berdasarkan ID
            var targetElement = document.getElementById(targetId);

            // Jika elemen ditemukan, pindahkan fokus ke elemen tersebut
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetElement.focus();
            }
        } else {
            alert('No matching module found.');
        }
    });

