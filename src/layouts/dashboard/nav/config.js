// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Live Rooms',
    path: '/dashboard/liverooms',
    icon: icon('ic_live'),
  },
  {
    title: 'library',
    path: '/dashboard/library',
    icon: icon('ic_collection'),
  },
  {
    title: 'requests',
    path: '/dashboard/requests',
    icon: icon('ic_code'),
  },
  {
    title: 'Saved Docs ',
    path: '/saved',
    icon: icon('ic_saved'),
  },
  
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: icon('ic_disabled'),
//   }
];

export default navConfig;
