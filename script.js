import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
const { useState } = React;


const sidebarRightIcons = [
{ background: '#4a8cda', icon: 'react-streaming-dashboard-fortnite.svg' },
{ background: '#de4f5f', icon: 'react-streaming-dashboard-reddit.svg' },
{ background: '#d99b52', icon: 'react-streaming-dashboard-snapchat.svg' },
{ background: '#6348b1', icon: 'react-streaming-dashboard-twitch.svg' }];


const newsList = [
{
  key: 0,
  title: 'Tips 4 Watching',
  subTitle: 'Available via desktop app, mobile apps, set-top',
  image: 'react-streaming-dashboard-news-item-1.jpg',
  tags: [{ text: 'kids', color: '#d94b87' }] },

{
  key: 1,
  title: 'Game Betting - Live',
  subTitle: 'Dungeons & Dragons On...',
  image: 'react-streaming-dashboard-news-item-2.jpg',
  tags: [
  { text: 'game', color: '#6647bf' },
  { text: 'multi', color: '#4696b9' }] }];




const topSelectionItemList = [
{
  key: '1',
  title: 'Pop Off Q&A',
  subTitle: 'Dungeons & Dragons On...',
  image: 'react-streaming-dashboard-selection-item-image-1.jpg',
  avatar: 'react-streaming-dashboard-selection-item-avatar-1.jpg',
  tags: [
  { text: 'kids', color: '#d94b87' },
  { text: 'tweens', color: '#eb8052' }] },


{
  key: '2',
  title: 'Squishy Muffinz',
  subTitle: 'Squads on NEW MAP',
  image: 'react-streaming-dashboard-selection-item-image-2.jpg',
  avatar: 'react-streaming-dashboard-selection-item-avatar-2.jpg',
  tags: [{ text: 'teens', color: '#70b944' }] },

{
  key: '3',
  title: 'Enter a title',
  subTitle: 'Pop Off Q&A',
  image: 'react-streaming-dashboard-selection-item-image-3.jpg',
  avatar: 'react-streaming-dashboard-selection-item-avatar-3.jpg',
  tags: [{ text: 'game', color: '#6647bf' }] }];



const topSelectionCategories = [
'featured & recommended',
'top sellers',
'upcoming',
'virtual reality',
'free to play'];


const topSelectIcons = [/*#__PURE__*/
React.createElement("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" }), /*#__PURE__*/
React.createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }), /*#__PURE__*/
React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
  clipRule: "evenodd" }), /*#__PURE__*/

React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
  clipRule: "evenodd" }), /*#__PURE__*/

React.createElement("path", { d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" })];


function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "dashboard rounded-3xl shadow-xl flex color-base flex-shrink-0" }, /*#__PURE__*/
    React.createElement(Content, null), /*#__PURE__*/
    React.createElement("div", { className: "flex-grow" }), /*#__PURE__*/
    React.createElement(SidebarRight, null)));


}

function Content() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "h-full flex flex-col" }, /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-grow" }, /*#__PURE__*/
    React.createElement(SidebarLeft, null), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col h-full pb-8 pr-8" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-start" }, /*#__PURE__*/
    React.createElement(Video, null), /*#__PURE__*/
    React.createElement("div", { className: "flex-grow" }), /*#__PURE__*/
    React.createElement(News, null)), /*#__PURE__*/

    React.createElement(TopSelection, null)))));




}

function SidebarRight() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "w-20 h-full flex-shrink-0 sidebar-right rounded-r-3xl self-center flex flex-col items-center py-4" }, /*#__PURE__*/
    React.createElement("div", { className: "w-14 h-14 rounded-full mb-10 p-1.5 relative" }, /*#__PURE__*/
    React.createElement("div", { className: "avatar-ring inset-0 absolute" }), /*#__PURE__*/

    React.createElement("div", { className: "absolute inset-0  p-1.5" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3685267/react-streaming-dashboard-selection-item-avatar-1.jpg",
      alt: "",
      className: "rounded-full" }))),



    sidebarRightIcons.map(({ background, icon }, index) => /*#__PURE__*/
    React.createElement("div", {
      className: "w-11 h-11 rounded-xl mt-4 flex justify-center items-center fadeInDown",
      style: { background, animationDelay: `${0.1 * index}s` } }, /*#__PURE__*/

    React.createElement("img", {
      src: `https://assets.codepen.io/3685267/${icon}`,
      alt: "",
      className: "w-5 h-5" }))), /*#__PURE__*/




    React.createElement("div", { className: "w-10 h-10 mt-10 overflow-hidden relative fadeInDown", style: { animationDelay: '0.4s' } }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3685267/react-streaming-dashboard-selection-item-avatar-2.jpg",
      alt: "",
      className: " rounded-full" }), /*#__PURE__*/

    React.createElement("svg", {
      className: "absolute inset-0",
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("circle", {
      cx: "80",
      cy: "20",
      r: "16",
      fill: "#8AD35D",
      stroke: "#272042",
      strokeWidth: "8" }))), /*#__PURE__*/



    React.createElement("div", { className: "w-10 h-10 mt-4 overflow-hidden relative fadeInDown", style: { animationDelay: '0.5s' } }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3685267/react-streaming-dashboard-selection-item-avatar-4.jpg",
      alt: "",
      className: " rounded-full" }), /*#__PURE__*/

    React.createElement("svg", {
      className: "absolute inset-0",
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("circle", {
      cx: "80",
      cy: "20",
      r: "16",
      fill: "#8AD35D",
      stroke: "#272042",
      strokeWidth: "8" })))));





}

function Header() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "h-24 flex items-center justify-between pr-8" }, /*#__PURE__*/
    React.createElement("div", { className: "pl-4 py-5 h-full flex" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3685267/react-streaming-dashboard-logo.jpg",
      alt: "logo" })), /*#__PURE__*/


    React.createElement("div", { className: "relative mini-icon" }, /*#__PURE__*/
    React.createElement("form", { action: "#" }, /*#__PURE__*/
    React.createElement("input", {
      type: "email",
      placeholder: "Search",
      className: "w-72 input-search text-4xl  font-black" })), /*#__PURE__*/


    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "w-6 h-6 absolute right-0 top-2/4 input-search-icon" }, /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      clipRule: "evenodd" }))), /*#__PURE__*/



    React.createElement("div", { className: "mini-icon inline-flex items-center" }, /*#__PURE__*/
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "w-6 h-6",
      viewBox: "0 0 20 20",
      fill: "currentColor" }, /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
      clipRule: "evenodd" })), /*#__PURE__*/


    React.createElement("svg", {
      className: "w-6 h-6 ml-6",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("path", { d: "M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H11C11.5304 3 12.0391 3.21071 12.4142 3.58579C12.7893 3.96086 13 4.46957 13 5V9C13 9.53043 12.7893 10.0391 12.4142 10.4142C12.0391 10.7893 11.5304 11 11 11H9L6 14V11H4C3.46957 11 2.96086 10.7893 2.58579 10.4142C2.21071 10.0391 2 9.53043 2 9V5Z" }), /*#__PURE__*/
    React.createElement("path", { d: "M15 7V9C15 10.0609 14.5786 11.0783 13.8284 11.8284C13.0783 12.5786 12.0609 13 11 13H9.828L8.062 14.767C8.342 14.916 8.661 15 9 15H11L14 18V15H16C16.5304 15 17.0391 14.7893 17.4142 14.4142C17.7893 14.0391 18 13.5304 18 13V9C18 8.46957 17.7893 7.96086 17.4142 7.58579C17.0391 7.21071 16.5304 7 16 7H15Z" }), /*#__PURE__*/
    React.createElement("circle", { cx: "16.4375", cy: "3.375", r: "2.5625", fill: "#5189f6" })))));




}

function News() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "flex flex-col space-y-4 fadeInUp" },
    newsList.map(({ key, title, subTitle, image, tags }) => /*#__PURE__*/
    React.createElement("div", { className: "sidebar-left  rounded-3xl shadow-xl p-4" }, /*#__PURE__*/
    React.createElement("div", { className: "flex space-x-3", key: key }, /*#__PURE__*/
    React.createElement("img", {
      src: `https://assets.codepen.io/3685267/${image}`,
      alt: "",
      className: "rounded-3xl" }), /*#__PURE__*/

    React.createElement("div", { className: "w-48 flex flex-col" }, /*#__PURE__*/
    React.createElement("div", { className: "text-white text-sm " }, title), /*#__PURE__*/
    React.createElement("div", { className: "mt-1 text-sm" }, subTitle), /*#__PURE__*/
    React.createElement("div", { className: "flex space-x-2 mt-2" },
    tags.map(({ text, color }) => /*#__PURE__*/
    React.createElement("div", {
      className: "text-xs text-white py-0.5 px-1.5 rounded-full",
      style: { background: color },
      key: text },

    text))), /*#__PURE__*/




    React.createElement("div", { className: "flex justify-end space-x-2 flex-grow items-end" }, /*#__PURE__*/
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      className: "w-4 h-4",
      fill: "currentColor" }, /*#__PURE__*/

    React.createElement("path", { d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" })), /*#__PURE__*/

    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      className: "w-4 h-4",
      fill: "currentColor" }, /*#__PURE__*/

    React.createElement("path", { d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" }))))))), /*#__PURE__*/






    React.createElement("div", { className: "flex space-x-1.5 items-center" }, /*#__PURE__*/
    React.createElement("svg", {
      className: "w-3 h-3",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" })), /*#__PURE__*/

    React.createElement("svg", {
      className: "w-1.5 h-1.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" })), /*#__PURE__*/

    React.createElement("svg", {
      className: "w-1.5 h-1.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" })))));




}

function SidebarLeft() {
  const [active, setActive] = useState(0);
  return /*#__PURE__*/(
    React.createElement("div", { className: "w-28" }, /*#__PURE__*/
    React.createElement("div", { className: "sidebar-left rounded-3xl shadow-xl  overflow-hidden w-20 -ml-10" },
    [0, 1, 2, 3].map((i) => /*#__PURE__*/
    React.createElement("div", {
      className: clsx(
      'h-20 w-20 flex items-center justify-center cursor-pointer',
      active === i && 'sidebar-left-active text-white'),

      onClick: () => {
        setActive(i);
      } }, /*#__PURE__*/

    React.createElement(SidebarIcons, { index: i }))))));





}

function SidebarIcons({ index }) {
  const Icons = [/*#__PURE__*/
  React.createElement("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }), /*#__PURE__*/
  React.createElement("path", { d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" }), /*#__PURE__*/
  React.createElement("path", { d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" }), /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("path", { d: "M18 3.00002C17.9999 2.82962 17.9563 2.66208 17.8733 2.51329C17.7902 2.36449 17.6706 2.23938 17.5256 2.14982C17.3806 2.06026 17.2152 2.00923 17.045 2.00156C16.8748 1.9939 16.7054 2.02985 16.553 2.10602L8.763 6.00002H5C4.20435 6.00002 3.44129 6.31609 2.87868 6.8787C2.31607 7.4413 2 8.20437 2 9.00002C2 9.79567 2.31607 10.5587 2.87868 11.1213C3.44129 11.6839 4.20435 12 5 12H5.28L7.051 17.316C7.11735 17.5152 7.24472 17.6885 7.41505 17.8113C7.58538 17.934 7.79004 18.0001 8 18H9C9.26522 18 9.51957 17.8947 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V12.618L16.553 15.894C16.7054 15.9702 16.8748 16.0061 17.045 15.9985C17.2152 15.9908 17.3806 15.9398 17.5256 15.8502C17.6706 15.7607 17.7902 15.6355 17.8733 15.4867C17.9563 15.3379 17.9999 15.1704 18 15V3.00002Z" }), /*#__PURE__*/
  React.createElement("circle", { cx: "3.75", cy: "3.5625", r: "2.3125", fill: "#f65164" }))];


  return /*#__PURE__*/(
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      className: "h-7 w-7",
      fill: "currentColor" },

    Icons[index]));


}

function Video() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "relative" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3685267/react-streaming-dashboard-video.jpg",
      alt: "",
      style: { borderRadius: '32px' } }), /*#__PURE__*/

    React.createElement("div", { className: "absolute  -left-4 -bottom-4" }, /*#__PURE__*/
    React.createElement("div", { className: "relative" }, /*#__PURE__*/
    React.createElement("div", { className: "ping-outer" }), /*#__PURE__*/
    React.createElement("img", {
      src: "https://assets.codepen.io/3685267/react-streaming-dashboard-player.jpg",
      alt: "",
      className: "player rounded-3xl" }), /*#__PURE__*/

    React.createElement("svg", {
      className: "absolute inset-0",
      viewBox: "0 0 276 146",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M249.5 18.9257L35.25 15.9257H249.5C255.299 15.9257 260 20.6267 260 26.4257V133.574L257 26.4257C257 22.2835 253.642 18.9257 249.5 18.9257Z",
      fill: "#EA4D60" }), /*#__PURE__*/

    React.createElement("circle", { cx: "255.75", cy: "20.25", r: "7.25", fill: "white" }), /*#__PURE__*/
    React.createElement("circle", { cx: "255.75", cy: "20.25", r: "4.25", fill: "#EA4D5F" }))))));





}

function TopSelection() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "mt-8" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center justify-between" }, /*#__PURE__*/
    React.createElement("div", { className: "text-white text-3xl" }, "Your Top Selection"), /*#__PURE__*/
    React.createElement("div", { className: "w-20 tag-red text-white flex rounded-full items-center justify-center py-0.5" }, /*#__PURE__*/
    React.createElement("div", { className: "w-2 h-2 rounded-full tag-red-dot" }), /*#__PURE__*/
    React.createElement("div", { className: "ml-2 text-xs font-bold" }, "Live"))), /*#__PURE__*/


    React.createElement("div", { className: "flex mt-8" }, /*#__PURE__*/
    React.createElement(SelectionList, null), /*#__PURE__*/
    React.createElement("div", { className: "ml-24 space-x-8 flex" },
    topSelectionItemList.map((item) => /*#__PURE__*/
    React.createElement(SelectionListItem, { key: item.key, item: item }))))));





}

function SelectionList() {
  const [active, setActive] = useState(0);
  return /*#__PURE__*/(
    React.createElement("div", { className: "flex flex-col space-y-8" },
    topSelectionCategories.map((i, index) => /*#__PURE__*/
    React.createElement("div", {
      className: clsx(
      'flex items-center cursor-pointer',
      active === index && 'top-selection-active'),

      onClick: () => setActive(index) }, /*#__PURE__*/

    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      className: "w-5 h-5",
      fill: "currentColor" },

    topSelectIcons[index]), /*#__PURE__*/

    React.createElement("div", { className: "font-medium uppercase text-sm ml-4 flex color-base" },
    i)))));





}

function SelectionListItem({ item: { title, subTitle, image, avatar, tags } }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "fadeInUp" }, /*#__PURE__*/
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("img", {
      src: `https://assets.codepen.io/3685267/${image}`,
      alt: "",
      className: "rounded-3xl" })), /*#__PURE__*/


    React.createElement("div", { className: "flex mt-3" }, /*#__PURE__*/
    React.createElement("img", {
      src: `https://assets.codepen.io/3685267/${avatar}`,
      alt: "",
      className: "w-10 h-10  rounded-full" }), /*#__PURE__*/

    React.createElement("div", { className: "ml-2" }, /*#__PURE__*/
    React.createElement("div", { className: "text-white text-sm " }, title), /*#__PURE__*/
    React.createElement("div", { className: "mt-1 text-sm" }, subTitle), /*#__PURE__*/
    React.createElement("div", { className: "flex space-x-2 mt-2" },
    tags.map(({ text, color }) => /*#__PURE__*/
    React.createElement("div", {
      className: "text-xs text-white py-0.5 px-1.5 rounded-full",
      style: { background: color },
      key: text },

    text)))))));







}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));