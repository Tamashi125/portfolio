export const translations = {
    navbar: {
        home: { en: 'Home', th: 'หน้าหลัก' },
        about: { en: 'About Me', th: 'เกี่ยวกับฉัน' },
        projects: { en: 'Projects', th: 'ผลงาน' },
        contact: { en: 'Contact', th: 'ติดต่อ' },
    },
    hero: {
        openfornew: { en: 'Open for new opportunities', th: 'เปิดรับโอกาสใหม่ๆ' },
    },
    historyModal: {
        header: {
            en: 'History & Resume',
            th: 'ประวัติและเรซูเม่'
        },
        intro: {
            role: {
                en: 'Developer',
                th: 'นักพัฒนา'
            },
            description: {
                en: 'Committed to quality code and precision. Always evolving with the latest tech to provide the best solutions.',
                th: 'ผมเป็นนักพัฒนาที่มีความมุ่งมั่นในการสร้างซอฟต์แวร์คุณภาพสูง กระตือรือร้นที่จะเรียนรู้เทคโนโลยีใหม่ๆ และแก้ไขปัญหาที่ท้าทายอยู่เสมอ'
            }
        },
        sections: {
            education: {
                en: '1. Education',
                th: '1. การศึกษา'
            },
            work: {
                en: '2. Work Experience',
                th: '2. ประสบการณ์ทำงาน'
            }
        },
        close: {
            en: 'Close',
            th: 'ปิด'
        },
        educationData: [
            {
                id: 1,
                color: 'bg-blue-500',
                title: {
                    en: 'Business Computer',
                    th: 'ปริญญาตรี สาขา คอมพิวเตอร์ธุรกิจ'
                },
                institution: {
                    en: 'Buriram Rajabhat University (2021 - 2024)',
                    th: 'มหาวิทยาลัยราชภัฏบุรีรัมย์ (2021 - 2024)'
                },
                description: {
                    en: 'GPA: 2.80',
                    th: 'เกรดเฉลี่ย: 2.80'
                }
            },
            {
                id: 2,
                color: 'bg-zinc-700',
                title: {
                    en: 'High School',
                    th: 'มัธยมศึกษาตอนปลาย'
                },
                institution: {
                    en: 'Muang Talung Pittayasan School (2018 - 2020)',
                    th: 'โรงเรียนเมืองตะตลุงพิทยาสรรพ์ (2018 - 2020)'
                },
                description: {
                    en: 'Art Program',
                    th: 'ศิลป์-ภาษา'
                }
            },
            {
                id: 3,
                color: 'bg-zinc-700',
                title: {
                    en: 'Junior high school',
                    th: 'มัธยมศึกษาตอนต้น'
                },
                institution: {
                    en: 'Muang Talung Pittayasan School (2015 - 2017)',
                    th: 'โรงเรียนเมืองตะตลุงพิทยาสรรพ์ (2015 - 2017)'
                },
                description: {
                    en: '',
                    th: ''
                }
            }
        ],
        workData: [
            {
                id: 1,
                color: 'bg-emerald-500',
                title: {
                    en: 'jobless',
                    th: 'ว่างงาน'
                },
                period: {
                    en: '2025 - Present',
                    th: '2025 - ปัจจุบัน'
                },
                details: [
                    // {
                    //     en: 'Developed full-stack E-Commerce web applications.',
                    //     th: 'พัฒนาเว็บแอปพลิเคชัน E-Commerce แบบ Full-stack'
                    // }
                ]
            },
            {
                id: 2,
                color: 'bg-zinc-700',
                title: {
                    en: 'Siamchai Service',
                    th: 'สยามชัย เซอร์วิส'
                },
                period: {
                    en: '2025 (1 Months)',
                    th: '2025 (1 เดือน)'
                },
                details: [
                    {
                        en: 'Admin responds to Siamchai Service page.',
                        th: 'แอดมินตอบเพจสยามชัย เซอร์วิส'
                    }
                ]
            },
            {
                id: 3,
                color: 'bg-zinc-700',
                title: {
                    en: 'Fort Kasatsuek Hospital (Intern)',
                    th: 'โรงพยาบาลค่ายสมเด็จเจ้าพระยามหากษัตริย์ศึก (ฝึกงาน)'
                },
                period: {
                    en: '2025 (6 Months 20 days)',
                    th: '2025 (6 เดือน 20 วัน)'
                },
                details: [
                    {
                        en: 'Computer and printer maintenance and repair.',
                        th: 'บำรุงรักษาและบำรุงรักษาอุปกรณ์คอมพิวเตอร์และเครื่องพิมพ์'
                    }
                    ,
                    {
                        en: 'Operating system (Windows 10-11) and operating system software installation.',
                        th: 'การติดตั้งระบบปฏิบัติการ (Windows 10-11) และซอฟต์แวร์ระบบปฏิบัติการ'
                    }
                    ,
                    {
                        en: 'Troubleshoot computer and printer issues (e.g., printhead cleaning)',
                        th: 'แก้ไขปัญหาเกี่ยวกับคอมพิวเตอร์และเครื่องพิมพ์ (เช่น ซักหัวพิมพ์)'
                    }
                    ,
                    {
                        en: 'Network system inspection (LAN cabling, passenger temperature capture)',
                        th: 'ตรวจสอบระบบเครือข่าย (เดินสายแลน, จับภาพอุณหภูมิผู้โดยสาร)'
                    }
                    ,
                    {
                        en: 'Computer and printer cleaning.',
                        th: 'ทำความสะอาดคอมพิวเตอร์และเครื่องพิมพ์'
                    }
                    ,
                    {
                        en: 'Data center staff troubleshoot and collect data.',
                        th: 'พนักงานฐานแก้ไขและรวบรวมข้อมูลข้อมูลดาต้าเซ็นเตอร์'
                    }
                ]
            }
        ]
    },
    bentoGrid: {
        totalprojects: { en: 'Total Projects', th: 'โปรเจกต์ทั้งหมด' },
        contact: { en: 'Contact Me', th: 'ติดต่อ' },
        address: { en: 'Thailand', th: 'ประเทศไทย' }
    },
    contact: {
        copied: { en: 'Email copied to clipboard!', th: 'คัดลอกเรียบร้อย!' }
    }
};
