import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

// import images
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import Avatar4Img from '../src/assets/img/testimonials/avatar4.png';
import HeroImage from '../src/assets/img/hero-img1.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';


export const navigationData = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'ARTIKEL',
    href: '/article',
  },
  {
    name: 'KONSULTASI',
    href: '/konsultasi',
  },
];

export const heroData = {
  title: ` FAMILY CARE PARENTING SOLUTION`,
  subtitle:
    'Family Care merupakan website yang menyediakan artikel-artikel terkait parenting juga menyediakan rekomendasi aplikasi kounsultasi parenting',
  btnText: 'Apa Itu Parenting?',
  image: HeroImage,
};

export const aboutData = {
  title: 'Jadi Apa Itu Parenting ?',
  subtitle:
    'Secara singkat Parenting atau pola asuh orang tua terhadap anak meliputi memenuhi kebutuhan fisik yaitu makanan dan minuman, dan juga memenuhi kebutuhan psikologi yakni kasih sayang, rasa aman, serta bersosialisasi dengan masyarakat sekitar agar anak bisa hidup selaras dengan lingkungannya.'
,
};

export const featuresData = {
  title: 'Artikel yang tersedia',
  subtitle:
    '',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Artikel Parenting',
      description:
        'Kami disini menyajikan artikel-artikel dengan topik-topik yang menarik dan juga cocok untuk semua anggota keluarga',
      
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature4BgImg,
      title: 'Artikel Ibu',
      description:
        'Bagaimana cara mendidik anak yang baik bagi seorang ibu dan juga menjadi istri yang sempurna dimata suami',
      
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature4BgImg,
      title: 'Artikel Ayah',
      description:
        'Menjadi ayah yang dapat mendidik anaknya dengan baik dan menjadi suami yang bertanggung jawab',
      
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature1BgImg,
      title: 'Artikel Anak',
      description:
        'Artikel ini bertujuan membimbing anak jika anak mempunyai masalah-masalah tertentu tapi ia masih bingun cara menyelesaikannya',
      
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Chais Play',
    web: 'Download di Playstore',
    message:
      'Chais Play merupakan suatu aplikasi parenting yang berfokus tentang permainan-permainan yang bisa dilakukan bersama anak dibawah 7 tahun dan cara mengasuh anak dari umur 7 tahun kebawahn',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'School Of Parenting',
    web: 'Download di Playstore',
    message:
      'School Of Parenting menyediakan jasa-jasa terkait parenting seperti workshop, konsultasi online dan kelas parenting',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Tentang Anak',
    web: 'Download di Playstore',
    message:
      'Tentang anak menyediakan fitur-fitur tentang parenting seputar tumbuh kembang anak, resep, permainan untuk anak, stimulasi anak dan banyak fitur lainya',
    delay: '900',
  },
  {
    image: Avatar4Img,
    name: 'Primaku',
    web: 'Download di Playstore',
    message:
      'Primaku menyediakan fitur-fitur parenting seperti monitor pertumbuhan dan perkembangan anak, jadwal imunisasi, rekam medis anak, komunitas dan konsultasi dokter',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: '',
};

export const footerData = {
  address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
  email: 'info@producttexas.project',
  phone: '1-232-7788 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Family Care, 2022. All rights reserved.'
};
