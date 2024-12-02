import { React, useState, useCallback } from 'react';
import {
  MenuIcon,
  CalendarIcon,
  DocumentReportIcon,
  DatabaseIcon,
} from '@heroicons/react/solid';
import SlideOver from '../SlideOver';

const sideBarPages = [
  {
    name: 'Agenda', href: '/tasks', icon: CalendarIcon, current: true,
  },
  {
    name: 'Reportes', href: '/reports', icon: DocumentReportIcon, current: false,
  },
  {
    name: 'Administrador', href: '/dev/admin', icon: DatabaseIcon, current: false,
  },
];

function Header() {
  const [openSlide, setOpenSlide] = useState(false);
  const [sidebarNavigation, setSidebarNavigation] = useState([...sideBarPages]);

  const setOpen = useCallback(() => {
    setOpenSlide(true);
  }, [setOpenSlide]);

  return (
    <div className="relative bg-white shadow">
      <div className="max-w-7xl px-8">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex items-center text-sm">
            <MenuIcon className="relative z-10 h-10 w-auto flex-shrink-0 mr-1.5 text-gray-800 cursor-pointer" onClick={setOpen} />
            <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0 text-3xl font-bold leading-7 text-gray-800">CRONUS</div>
          </div>
        </div>
      </div>
      <SlideOver
        open={openSlide}
        setOpen={setOpenSlide}
        sidebarNavigation={sidebarNavigation}
        setSidebarNavigation={setSidebarNavigation}
      />
    </div>

  );
}

export default Header;
