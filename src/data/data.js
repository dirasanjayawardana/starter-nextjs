import { BsBarChart } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { FiArchive, FiBookmark, FiBox, FiCheckSquare, FiGrid, FiHome, FiLayers, FiShoppingBag, FiBarChart2 } from 'react-icons/fi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'


export const sidebarData = [
    {
        link: '/dashboard',
        icon: <MdOutlineSpaceDashboard />,
        header: "Dashboard",
        pages: [
            {
                id_active: 1,
                link: '/dashboard/card',
                icon: <FiCheckSquare />,
                name: "Cards",
            },
            {
                id_active: 2,
                link: '/dashboard/chart',
                icon: <BsBarChart />,
                name: "Charts",
            },
            {
                id_active: 3,
                link: '/dashboard/note',
                icon: <BiNotepad />,
                name: "Notes",
            }
        ]
    },
    {
        link: '/bookmark',
        icon: <FiBookmark />,
        header: "Bookmark",
        pages: [
            {
                id_active: 4,
                link: '/dashboard/chat',
                icon: <FiCheckSquare />,
                name: "Group Chats",
            },
            {
                id_active: 5,
                link: '/page1',
                icon: <FiArchive />,
                name: "Tables",
            },
            {
                id_active: 6,
                link: '/page1',
                icon: <FiLayers />,
                name: "Maps",
            }
        ]
    },
    {
        link: '/catalogue',
        icon: <FiShoppingBag />,
        header: "Catalogue",
        pages: [
            {
                id_active: 7,
                link: '/page1',
                icon: <FiCheckSquare />,
                name: "First Page",
            },
            {
                id_active: 8,
                link: '/page1',
                icon: <FiArchive />,
                name: "Second Page",
            },
            {
                id_active: 9,
                link: '/page1',
                icon: <FiLayers />,
                name: "Third Page",
            }
        ]
    },
    // {
    //     link: '/additional',
    //     icon: <FiBox />,
    //     header: "Additional",
    //     pages: [
    //         {
    //             link: '/page1',
    //             icon: <FiCheckSquare/>,
    //             name: "First Page",
    //         },
    //         {
    //             link: '/page1',
    //             icon: <FiArchive/>,
    //             name: "Second Page",
    //         },
    //         {
    //             link: '/page1',
    //             icon: <FiLayers/>,
    //             name: "Third Page",
    //         }
    //     ]
    // }
]