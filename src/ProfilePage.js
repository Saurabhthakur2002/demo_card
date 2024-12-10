// import React from 'react'
// import Tab from '@mui/material/Tab';
// import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
// import Tabs, { tabsClasses } from '@mui/material/Tabs';
// import ProfileCover from './ProfileCover';
// import ProfileGallery from './ProfileGallery';
// import ProfileHome from './ProfileHome';
// import Iconify from 'iconify';  
// import { Icon } from '@iconify/react';


// const ProfilePage = () => {
//     const TABS = [
//         {
//           value: 'profile',
//           label: 'Profile',
//           icon: <Iconify icon="solar:user-id-bold" width={24} />,
//         },
//         {
//           value: 'followers',
//           label: 'Followers',
//           icon: <Iconify icon="solar:heart-bold" width={24} />,
//         },
//         {
//           value: 'friends',
//           label: 'Friends',
//           icon: <Iconify icon="solar:users-group-rounded-bold" width={24} />,
//         },
//         {
//           value: 'gallery',
//           label: 'Gallery',
//           icon: <Iconify icon="solar:gallery-wide-bold" width={24} />,
//         },
//       ];
//   return (
//     <div>
//       <Container maxWidth={settings.themeStretch ? false : 'lg'}>
//            <Card
//         sx={{
//           mb: 3,
//           height: 290,
//         }}
//       >
//         <ProfileCover
//           role={_userAbout.role}
//           name={user?.displayName}
//           avatarUrl={user?.photoURL}
//           coverUrl={_userAbout.coverUrl}
//         />

//         <Tabs
//           value={currentTab}
//           onChange={handleChangeTab}
//           sx={{
//             width: 1,
//             bottom: 0,
//             zIndex: 9,
//             position: 'absolute',
//             bgcolor: 'background.paper',
//             [`& .${tabsClasses.flexContainer}`]: {
//               pr: { md: 3 },
//               justifyContent: {
//                 sm: 'center',
//                 md: 'flex-end',
//               },
//             },
//           }}
//         >
//           {TABS.map((tab) => (
//             <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
//           ))}
//         </Tabs>
//       </Card>

//       {currentTab === 'profile' && <ProfileHome info={_userAbout} posts={_userFeeds} />}

   


//       {currentTab === 'gallery' && <ProfileGallery gallery={_userGallery} />}
//     </Container>
//     </div>
//   )
// }

// export default ProfilePage
