
    document.querySelector('form.custom-form').addEventListener('submit', function(event) {
        // Mencegah pengiriman form default
        event.preventDefault();

        // Menghapus kelas highlight dari semua elemen
        document.querySelectorAll('.kartu-tutor').forEach(function(el) {
            el.classList.remove('highlight');
        });

        // Mendapatkan nilai input dari search bar
        var keyword = document.querySelector('#keyword').value.toLowerCase();

        // Daftar ID yang sesuai dengan nama
        var idMapping = {
            'fakhriadi rasyaad': 'tutor1',
            'm.nurfadli alif': 'tutor2',
            'naftali junita br tarigan': 'tutor3',
            'bilqis maisa nurhakim': 'tutor4',
            'tristan huwaiza raharjo': 'tutor5',
            'aisyah nurul azkia': 'tutor6',
            'khansa arradhwa': 'tutor7',
            'suci': 'tutor8',
            'ida ayu adhia widhaswari amunika': 'tutor9',
            'syahirah fadhly': 'tutor10',
            'dika muhammad bennario fatha': 'tutor11',
            'tazkia': 'tutor12',
            'fak': 'tutor1',
            'aal': 'tutor2',
            'nap': 'tutor3',
            'bil': 'tutor4',
            'tan': 'tutor5',
            'ana': 'tutor6',
            'aca': 'tutor7',
            'uci': 'tutor8',
            'adh': 'tutor9',
            'sya': 'tutor10',
            'ben': 'tutor11',
            'kia': 'tutor12'
        };

        // Menentukan ID target berdasarkan nama
        var targetId = idMapping[keyword];

        if (targetId) {
            // Menentukan elemen target berdasarkan ID
            var targetElement = document.getElementById(targetId);

            // Jika elemen ditemukan, tambahkan kelas highlight dan gulir ke elemen tersebut
            if (targetElement) {
                targetElement.classList.add('highlight');
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Menghapus kelas highlight setelah beberapa detik
                setTimeout(function() {
                    targetElement.classList.remove('highlight');
                }, 3000); // Menghapus highlight setelah 3 detik
            }
        } else {
            alert('Nama tidak ditemukan.');
        }
    });

