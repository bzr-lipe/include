import { DocsIcon } from '@/components/icons/docs';
import { HelpCenterIcon } from '@/components/icons/help-center';
import { HomeIcon } from '@/components/icons/home';
import { HumanResourcesIcon } from '@/components/icons/human-resources';
import { LogoutIcon } from '@/components/icons/logout';

export const menuC = {
  closeTitle: 'Fechar',
  menuItems: [
    {
      key: 0,
      title: 'Home',
      href: '/dashboard',
      icon: <HomeIcon />,
    },
    {
      key: 1,
      title: (
        <>
          Recursos <br />
          Humanos
        </>
      ),
      href: '',
      icon: <HumanResourcesIcon />,
    },
    {
      key: 2,
      title: 'Documentos',
      href: '',
      icon: <DocsIcon />,
    },
    {
      key: 3,
      title: 'HelpCenter',
      href: '/help-center',
      icon: <HelpCenterIcon />,
    },
  ],
  logoutIcon: {
    title: 'Sair',
    icon: <LogoutIcon />,
  },
};
