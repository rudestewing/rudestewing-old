import imgSkkMigas from '../../assets/images/collections/skkmigas/thumbnail.png';
import imgMyIix from '../../assets/images/collections/myiix/thumbnail.png';
import imgPortalHigen from '../../assets/images/collections/cdr-report-portal-higen/thumbnail.png'
import imgReconcile from '../../assets/images/collections/rekonsiliasi-anggota-apjii/thumbnail.png';
import imgHrPayroll from '../../assets/images/collections/hr-payroll-system/thumbnail.png';
import imgFotoParagames2018 from '../../assets/images/collections/fotoparagames2018/thumbnail.png';
import imgApjiiEvent from '../../assets/images/collections/apjii-event/thumbnail.png';


import imgNoImage from '../../assets/images/no-image.png';
import imgAvatar from '../../assets/images/avatar/img_avatar.png';

export const memberState = [
    {
        id: 'john-doe',
        name: 'John Doe',
        avatar: imgAvatar
    },
    {
        id: 'john-doe',
        name: 'John Doe',
        avatar: imgAvatar
    },
    
]

export const collectionState = [
    {
        id: 'hr-payroll',
        title: 'HR & Payroll Management System',
        thumbnail: imgHrPayroll,
        body: `
        HR & Payroll manajemen sistem adalah aplikasi untuk manajemen data karyawan & penggajian pada PT DMC (Dinamika Megatama Citra) yang sebelumnya hanya menggunakan Excel.\n\nHR sistemnya terdiri dari:\n- Input, Edit data baru karyawan\n- Mutasi Karyawan\n- Cuti Karyawan\n- Pemberhentian Karyawan\n\nPayroll sistemnya terdiri dari:\n- Input, Edit Gaji Pokok\n- Input, Edit tunjangan tetap & tidak tetap\n- Upload tunjangan tidak tetap\n- Perhitungan pph-21 \n
        `,
        url: 'http://hr.mydmc.co.id',
        screenshoots: [
            
        ]
    },

    {
        id: 'myiix',
        title: 'IIX Management',
        thumbnail: imgMyIix,
        body: `
        MYIIX merupakan aplikasi berbasis website untuk mempermudah manajemen data interkoneksi IIX (Indonesia Internet Exchange).\n
        Fitur :\n - Request Interkoneksi baru. \n - Request Transit ASN. \n - Memantau traffic interkoneksi real time.  
        `,
        url: 'https://my.iix.net.id',
        screenshoots: [
            
        ]
    },

    {
        id: 'foto-paragames',
        title: 'foto paragames 2018',
        thumbnail: imgFotoParagames2018,
        body: `
        Foto Paragames 2018 adalah website untuk menyimpan foto foto atlet asian paragames.
        `,
        url: 'https://fotoparagames2018.com',
        screenshoots: [
            
        ]
    },

    {
        id: 'apjii-event',
        title: 'Apjii Event',
        thumbnail: imgApjiiEvent,
        body: `
        Apjii Event merupakan tempat dimana anggota APJII dapat mendaftar untuk mengikuti event yang diselenggarakan oleh penyelenggara.
        `,
        url: 'https://meeting.idnic.net',
        screenshoots: [
            
        ]
    },

    {
        id: 'skkmigas',
        title: 'SKK Migas',
        thumbnail: imgSkkMigas,
        body: `
        Redesign tampilan dan infrastruktur backend yang sebelumnya menggunakan native PHP menjadi lebih ter struktur menggunakan salah satu framework.
        `,
        url: 'http://www.skkmigas.go.id',
        screenshoots: [
            
        ]
    },

    {
        id: 'rekonsiliasi-apjii-member',
        title: 'APJII Member Reconcile',
        thumbnail: imgReconcile,
        body: `
        Aplikasi berbasis web yang digunakan untuk rekonsiliasi data anggota APJII.
        `,
        url: '/',
        screenshoots: [
            
        ]
    },

    {
        id: 'cdr-report', 
        title: 'CDR (Call Detail Report) VoIP',
        thumbnail: imgPortalHigen,
        body: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend pulvinar commodo. Nulla quis lectus sit amet augue cursus ultricies vitae vitae 
        orci. Proin congue ligula libero, sit amet consectetur orci congue ut. Fusce imperdiet dui lacus, quis vulputate nibh feugiat convallis. Nulla dolor elit, 
        egestas vitae viverra eget, pharetra ac quam. Phasellus tincidunt augue sit amet tempus pharetra. Praesent nisl enim, varius vitae nibh sit amet, molestie laoreet 
        libero. Vivamus diam nulla, tempor sed mattis ut, iaculis ac justo. Ut pretium vehicula leo, eu scelerisque elit semper in. Donec ultrices, odio elementum sagittis sollicitudin, 
        ex lacus blandit turpis, quis lobortis justo quam eu ipsum. In pharetra nibh non consectetur pharetra. Morbi rhoncus tellus neque, vitae dignissim neque ultrices vitae. 
        Curabitur sagittis convallis turpis at dictum. Maecenas a pharetra nunc. Duis lobortis sapien sit amet imperdiet lobortis. Praesent commodo, tortor eu fermentum tristique, ipsum libero convallis 
        eros, vel aliquam erat leo in risus.
        `,
        url: 'http://portal.higen.net.id',
        screenshoots: [
            
        ]
    },
];