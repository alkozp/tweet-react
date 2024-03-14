import LogoSVG from "./components/LogoSVG.jsx";
import HomeSVG from "./components/HomeSVG.jsx";
import ExploreSVG from "./components/ExploreSVG.jsx";
import NotificationsSVG from "./components/NotificationsSVG.jsx";
import MessagesSVG from "./components/MessagesSVG.jsx";
import BookmarksSVG from "./components/BookmarksSVG.jsx";
import ListsSVG from "./components/ListsSVG.jsx";
import ProfileSVG from "./components/ProfileSVG.jsx";
import MoreSVG from "./components/MoreSVG.jsx";

import TweetButton from "./components/TweetButton.jsx";
import UserProfile from "./components/UserProfile.jsx";

import { userProfileInfo, navList } from "./data.js";

// import HomeIcon from "./assets/homeSVG.svg";

function GetIcon({ icon }) {
  switch (icon) {
    case "Home":
      return <HomeSVG />;
    case "Explore":
      return <ExploreSVG />;
    case "Notifications":
      return <NotificationsSVG />;
    case "Messages":
      return <MessagesSVG />;
    case "Bookmarks":
      return <BookmarksSVG />;
    case "Lists":
      return <ListsSVG />;
    case "Profile":
      return <ProfileSVG />;
    case "More":
      return <MoreSVG />;
    default:
      return null;
  }
}

function MenuList() {
  const fullList = navList.map((item, index) => {
    let style =
      "mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300";
    if (index === 0) {
      style =
        "group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300";
    }
    return (
      <a
        href={item.url}
        key={index}
        className={style}
        // className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300"
        // className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <GetIcon icon={item.name} />
        {item.name}
      </a>
    );
  });
  return fullList;
}

export default function Left() {
  return (
    <>
      <div className="w-2/5 text-white h-12 pl-32 py-4 h-auto">
        {/*left menu*/}
        <LogoSVG />
        <nav className="mt-5 px-2">
          <MenuList />
          <TweetButton style="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" />
        </nav>
        <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-12 mr-2">
          <UserProfile user={userProfileInfo[0]} />
        </div>
      </div>
    </>
  );
}
