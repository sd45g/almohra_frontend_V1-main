import { fontFamily } from 'theme/typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItem from './list-items/ListItem';
import CollapseListItem from './list-items/CollapseListItem';
import HorizonLogo from 'assets/images/logo-main.png';
import Image from 'components/base/Image';
import SidebarCard from './SidebarCard';
import { adminSitemap, MenuItem } from 'routes/sitemap'; // استبدل sitemap بـ adminSitemap

const DrawerItems = () => {
  return (
    <>
      <Stack
        pt={5}
        pb={4.5}
        px={1.5}
        justifyContent="flex-start"
        position="sticky"
        top={0}
        borderBottom={1}
        borderColor="info.main"
        bgcolor="info.lighter"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={HorizonLogo} alt="logo" height={90} width={140} sx={{ mr: -3 }} />
          <Typography variant="h3">قصر المهره</Typography>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mt: 2.5, mb: 10, p: 0, pl: 3 }}>
        {adminSitemap.map((route: MenuItem) =>
          route.items ? (
            <CollapseListItem key={route.id} {...route} />
          ) : (
            <ListItem key={route.id} {...route} />
          ),
        )}
      </List>

      <Box mt="auto" px={3} pt={15} pb={5}>
        <SidebarCard />
      </Box>
    </>
  );
};

export default DrawerItems;