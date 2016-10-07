/* eslint-disable react/no-multi-comp, react/no-danger */
import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {
  Entypo500px,
  Entypo500pxWithCircle,
  EntypoAddToList,
  EntypoAddUser,
  EntypoAddress,
  EntypoAdjust,
  EntypoAir,
  EntypoAircraft,
  EntypoAircraftLanding,
  EntypoAircraftTakeOff,
  EntypoAlignBottom,
  EntypoAlignHorizontalMiddle,
  EntypoAlignLeft,
  EntypoAlignRight,
  EntypoAlignTop,
  EntypoAlignVerticalMiddle,
  EntypoAppStore,
  EntypoArchive,
  EntypoAreaGraph,
  EntypoArrowBoldDown,
  EntypoArrowBoldLeft,
  EntypoArrowBoldRight,
  EntypoArrowBoldUp,
  EntypoArrowDown,
  EntypoArrowLeft,
  EntypoArrowLongDown,
  EntypoArrowLongLeft,
  EntypoArrowLongRight,
  EntypoArrowLongUp,
  EntypoArrowRight,
  EntypoArrowUp,
  EntypoArrowWithCircleDown,
  EntypoArrowWithCircleLeft,
  EntypoArrowWithCircleRight,
  EntypoArrowWithCircleUp,
  EntypoAttachment,
  EntypoAwarenessRibbon,
  EntypoBack,
  EntypoBackInTime,
  EntypoBaidu,
  EntypoBarGraph,
  EntypoBasecamp,
  EntypoBattery,
  EntypoBeamedNote,
  EntypoBehance,
  EntypoBell,
  EntypoBlackboard,
  EntypoBlock,
  EntypoBook,
  EntypoBookmark,
  EntypoBookmarks,
  EntypoBowl,
  EntypoBox,
  EntypoBriefcase,
  EntypoBrowser,
  EntypoBrush,
  EntypoBucket,
  EntypoBug,
  EntypoCake,
  EntypoCalculator,
  EntypoCalendar,
  EntypoCamera,
  EntypoCcw,
  EntypoChat,
  EntypoCheck,
  EntypoChevronDown,
  EntypoChevronLeft,
  EntypoChevronRight,
  EntypoChevronSmallDown,
  EntypoChevronSmallLeft,
  EntypoChevronSmallRight,
  EntypoChevronSmallUp,
  EntypoChevronThinDown,
  EntypoChevronThinLeft,
  EntypoChevronThinRight,
  EntypoChevronThinUp,
  EntypoChevronUp,
  EntypoChevronWithCircleDown,
  EntypoChevronWithCircleLeft,
  EntypoChevronWithCircleRight,
  EntypoChevronWithCircleUp,
  EntypoCircle,
  EntypoCircleWithCross,
  EntypoCircleWithMinus,
  EntypoCircleWithPlus,
  EntypoCircularGraph,
  EntypoClapperboard,
  EntypoClassicComputer,
  EntypoClipboard,
  EntypoClock,
  EntypoCloud,
  EntypoCode,
  EntypoCog,
  EntypoColours,
  EntypoCompass,
  EntypoControllerFastBackward,
  EntypoControllerFastForward,
  EntypoControllerJumpToStart,
  EntypoControllerNext,
  EntypoControllerPaus,
  EntypoControllerPlay,
  EntypoControllerRecord,
  EntypoControllerStop,
  EntypoControllerVolume,
  EntypoCopy,
  EntypoCreativeCloud,
  EntypoCreativeCommons,
  EntypoCreativeCommonsAttribution,
  EntypoCreativeCommonsNoderivs,
  EntypoCreativeCommonsNoncommercialEu,
  EntypoCreativeCommonsNoncommercialUs,
  EntypoCreativeCommonsPublicDomain,
  EntypoCreativeCommonsRemix,
  EntypoCreativeCommonsShare,
  EntypoCreativeCommonsSharealike,
  EntypoCredit,
  EntypoCreditCard,
  EntypoCrop,
  EntypoCross,
  EntypoCup,
  EntypoCw,
  EntypoCycle,
  EntypoDatabase,
  EntypoDialPad,
  EntypoDirection,
  EntypoDocument,
  EntypoDocumentLandscape,
  EntypoDocuments,
  EntypoDotSingle,
  EntypoDotsThreeHorizontal,
  EntypoDotsThreeVertical,
  EntypoDotsTwoHorizontal,
  EntypoDotsTwoVertical,
  EntypoDownload,
  EntypoDribbble,
  EntypoDribbbleWithCircle,
  EntypoDrink,
  EntypoDrive,
  EntypoDrop,
  EntypoDropbox,
  EntypoEdit,
  EntypoEmail,
  EntypoEmojiFlirt,
  EntypoEmojiHappy,
  EntypoEmojiNeutral,
  EntypoEmojiSad,
  EntypoErase,
  EntypoEraser,
  EntypoEvernote,
  EntypoExport,
  EntypoEye,
  EntypoEyeWithLine,
  EntypoFacebook,
  EntypoFacebookWithCircle,
  EntypoFeather,
  EntypoFingerprint,
  EntypoFlag,
  EntypoFlash,
  EntypoFlashlight,
  EntypoFlatBrush,
  EntypoFlattr,
  EntypoFlickr,
  EntypoFlickrWithCircle,
  EntypoFlowBranch,
  EntypoFlowCascade,
  EntypoFlowLine,
  EntypoFlowParallel,
  EntypoFlowTree,
  EntypoFlower,
  EntypoFolder,
  EntypoFolderImages,
  EntypoFolderMusic,
  EntypoFolderVideo,
  EntypoForward,
  EntypoFoursquare,
  EntypoFunnel,
  EntypoGameController,
  EntypoGauge,
  EntypoGithub,
  EntypoGithubWithCircle,
  EntypoGlobe,
  EntypoGoogleDrive,
  EntypoGoogleHangouts,
  EntypoGooglePlay,
  EntypoGoogleplus,
  EntypoGoogleplusWithCircle,
  EntypoGraduationCap,
  EntypoGrid,
  EntypoGrooveshark,
  EntypoHairCross,
  EntypoHand,
  EntypoHeart,
  EntypoHeartOutlined,
  EntypoHelp,
  EntypoHelpWithCircle,
  EntypoHome,
  EntypoHourGlass,
  EntypoHouzz,
  EntypoIcloud,
  EntypoImage,
  EntypoImageInverted,
  EntypoImages,
  EntypoInbox,
  EntypoInfinity,
  EntypoInfo,
  EntypoInfoWithCircle,
  EntypoInstagram,
  EntypoInstagramWithCircle,
  EntypoInstall,
  EntypoKey,
  EntypoKeyboard,
  EntypoLabFlask,
  EntypoLandline,
  EntypoLanguage,
  EntypoLaptop,
  EntypoLastfm,
  EntypoLastfmWithCircle,
  EntypoLayers,
  EntypoLeaf,
  EntypoLevelDown,
  EntypoLevelUp,
  EntypoLifebuoy,
  EntypoLightBulb,
  EntypoLightDown,
  EntypoLightUp,
  EntypoLineGraph,
  EntypoLink,
  EntypoLinkedin,
  EntypoLinkedinWithCircle,
  EntypoList,
  EntypoLocation,
  EntypoLocationPin,
  EntypoLock,
  EntypoLockOpen,
  EntypoLogOut,
  EntypoLogin,
  EntypoLoop,
  EntypoMagnet,
  EntypoMagnifyingGlass,
  EntypoMail,
  EntypoMailWithCircle,
  EntypoMan,
  EntypoMap,
  EntypoMask,
  EntypoMedal,
  EntypoMedium,
  EntypoMediumWithCircle,
  EntypoMegaphone,
  EntypoMenu,
  EntypoMerge,
  EntypoMessage,
  EntypoMic,
  EntypoMinus,
  EntypoMixi,
  EntypoMobile,
  EntypoModernMic,
  EntypoMoon,
  EntypoMouse,
  EntypoMousePointer,
  EntypoMusic,
  EntypoNetwork,
  EntypoNew,
  EntypoNewMessage,
  EntypoNews,
  EntypoNewsletter,
  EntypoNote,
  EntypoNotification,
  EntypoNotificationsOff,
  EntypoOldMobile,
  EntypoOldPhone,
  EntypoOnedrive,
  EntypoOpenBook,
  EntypoPalette,
  EntypoPaperPlane,
  EntypoPaypal,
  EntypoPencil,
  EntypoPhone,
  EntypoPicasa,
  EntypoPieChart,
  EntypoPin,
  EntypoPinterest,
  EntypoPinterestWithCircle,
  EntypoPlus,
  EntypoPopup,
  EntypoPowerPlug,
  EntypoPriceRibbon,
  EntypoPriceTag,
  EntypoPrint,
  EntypoProgressEmpty,
  EntypoProgressFull,
  EntypoProgressOne,
  EntypoProgressTwo,
  EntypoPublish,
  EntypoQq,
  EntypoQqWithCircle,
  EntypoQuote,
  EntypoRadio,
  EntypoRaft,
  EntypoRaftWithCircle,
  EntypoRainbow,
  EntypoRdio,
  EntypoRdioWithCircle,
  EntypoRemoveUser,
  EntypoRenren,
  EntypoReply,
  EntypoReplyAll,
  EntypoResize100,
  EntypoResizeFullScreen,
  EntypoRetweet,
  EntypoRocket,
  EntypoRoundBrush,
  EntypoRss,
  EntypoRuler,
  EntypoSave,
  EntypoScissors,
  EntypoScribd,
  EntypoSelectArrows,
  EntypoShare,
  EntypoShareAlternative,
  EntypoShareable,
  EntypoShield,
  EntypoShop,
  EntypoShoppingBag,
  EntypoShoppingBasket,
  EntypoShoppingCart,
  EntypoShuffle,
  EntypoSignal,
  EntypoSinaWeibo,
  EntypoSkype,
  EntypoSkypeWithCircle,
  EntypoSlideshare,
  EntypoSmashing,
  EntypoSound,
  EntypoSoundMix,
  EntypoSoundMute,
  EntypoSoundcloud,
  EntypoSportsClub,
  EntypoSpotify,
  EntypoSpotifyWithCircle,
  EntypoSpreadsheet,
  EntypoSquaredCross,
  EntypoSquaredMinus,
  EntypoSquaredPlus,
  EntypoStar,
  EntypoStarOutlined,
  EntypoStopwatch,
  EntypoStumbleupon,
  EntypoStumbleuponWithCircle,
  EntypoSuitcase,
  EntypoSwap,
  EntypoSwarm,
  EntypoSweden,
  EntypoSwitch,
  EntypoTablet,
  EntypoTabletMobileCombo,
  EntypoTag,
  EntypoText,
  EntypoTextDocument,
  EntypoTextDocumentInverted,
  EntypoThermometer,
  EntypoThumbsDown,
  EntypoThumbsUp,
  EntypoThunderCloud,
  EntypoTicket,
  EntypoTimeSlot,
  EntypoTools,
  EntypoTrafficCone,
  EntypoTrash,
  EntypoTree,
  EntypoTriangleDown,
  EntypoTriangleLeft,
  EntypoTriangleRight,
  EntypoTriangleUp,
  EntypoTripadvisor,
  EntypoTrophy,
  EntypoTumblr,
  EntypoTumblrWithCircle,
  EntypoTv,
  EntypoTwitter,
  EntypoTwitterWithCircle,
  EntypoTyping,
  EntypoUninstall,
  EntypoUnread,
  EntypoUntag,
  EntypoUpload,
  EntypoUploadToCloud,
  EntypoUser,
  EntypoUsers,
  EntypoVCard,
  EntypoVideo,
  EntypoVideoCamera,
  EntypoVimeo,
  EntypoVimeoWithCircle,
  EntypoVine,
  EntypoVineWithCircle,
  EntypoVinyl,
  EntypoVk,
  EntypoVkAlternitive,
  EntypoVkWithCircle,
  EntypoVoicemail,
  EntypoWallet,
  EntypoWarning,
  EntypoWater,
  EntypoWindowsStore,
  EntypoXing,
  EntypoXingWithCircle,
  EntypoYelp,
  EntypoYouko,
  EntypoYoukoWithCircle,
  EntypoYoutube,
  EntypoYoutubeWithCircle
} from 'react-entypo';

/*
 Display the available Entypo Icons and provide search functionality
 */

class EntypoIconDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', refsFound: true};
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  };

  getValidationState = () => {
    // check all the <IconBlock> components to see if any match the search terms.
    // if so, return success, if not a match, return error.  else, let default.
    const thisvalue = this.state.value;
    const thisvalueRE = new RegExp(this.state.value, 'gi');
    let foundvalue = 0;

    // cycle through components to check values. raise a flag if any have a match
    for (const ref in this.refs) {
      const a = this.refs[ref].props.icon || '';
      if (thisvalueRE.test(a) && thisvalue !== '') {
        foundvalue += 1;
        break;
      }
    }

    // return validation
    if (thisvalue !== '') {
      if (foundvalue > 0 && thisvalue !== '') return 'success';
      if (foundvalue === 0 && thisvalue !== '') return 'error';
    }
  };

  render() {
    return (
      <div>
        <p><a href='http://entypo.com' target='_blank'>Entypo</a> is a collection high quality icon glyphs created by <a
          href='http://www.danielbruce.se' target='_blank'>Daniel Bruce</a>.
          Instead of loading a font and styles to accomodate the icons, we have created a React component to output
          Entypo icons in their
          original SVG format. It is available as a public npm: <strong><a
            href='https://www.npmjs.com/package/react-entypo' target='_blank'>react-entypo</a></strong>.</p>
        <p>React-entypo is free to use under the MIT open-source license and not specific to <em>Tracksuit</em> nor <em>Fusion
          Theme</em>.
          For installation and useage instructions, please see the documentation on <a
            href='https://github.com/coxautokc/react-entypo' target='_blank'>GitHub</a>.</p>

        <br/>

        <h4>Search the Entypo component library</h4>
        <Form horizontal>
          <FormGroup controlId="entypoSearch" validationState={this.getValidationState()}>
            <Col lg={2} componentClass={ControlLabel}>Find icon: </Col>
            <Col lg={8}>
              <FormControl type="text" value={this.state.value} placeholder="search term here" onChange={this.handleChange} />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
        </Form>

        <div className="iconblock">{/* main set */}
          <IconBlock searchFor={this.state.value} ref="500px" icon="500px"/>
          <IconBlock searchFor={this.state.value} ref="500pxWithCircle" icon="500pxWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="AddToList" icon="AddToList"/>
          <IconBlock searchFor={this.state.value} ref="AddUser" icon="AddUser"/>
          <IconBlock searchFor={this.state.value} ref="Address" icon="Address"/>
          <IconBlock searchFor={this.state.value} ref="Adjust" icon="Adjust"/>
          <IconBlock searchFor={this.state.value} ref="Air" icon="Air"/>
          <IconBlock searchFor={this.state.value} ref="Aircraft" icon="Aircraft"/>
          <IconBlock searchFor={this.state.value} ref="AircraftLanding" icon="AircraftLanding"/>
          <IconBlock searchFor={this.state.value} ref="AircraftTakeOff" icon="AircraftTakeOff"/>
          <IconBlock searchFor={this.state.value} ref="AlignBottom" icon="AlignBottom"/>
          <IconBlock searchFor={this.state.value} ref="AlignHorizontalMiddle" icon="AlignHorizontalMiddle"/>
          <IconBlock searchFor={this.state.value} ref="AlignLeft" icon="AlignLeft"/>
          <IconBlock searchFor={this.state.value} ref="AlignRight" icon="AlignRight"/>
          <IconBlock searchFor={this.state.value} ref="AlignTop" icon="AlignTop"/>
          <IconBlock searchFor={this.state.value} ref="AlignVerticalMiddle" icon="AlignVerticalMiddle"/>
          <IconBlock searchFor={this.state.value} ref="AppStore" icon="AppStore"/>
          <IconBlock searchFor={this.state.value} ref="Archive" icon="Archive"/>
          <IconBlock searchFor={this.state.value} ref="AreaGraph" icon="AreaGraph"/>
          <IconBlock searchFor={this.state.value} ref="ArrowBoldDown" icon="ArrowBoldDown"/>
          <IconBlock searchFor={this.state.value} ref="ArrowBoldLeft" icon="ArrowBoldLeft"/>
          <IconBlock searchFor={this.state.value} ref="ArrowBoldRight" icon="ArrowBoldRight"/>
          <IconBlock searchFor={this.state.value} ref="ArrowBoldUp" icon="ArrowBoldUp"/>
          <IconBlock searchFor={this.state.value} ref="ArrowDown" icon="ArrowDown"/>
          <IconBlock searchFor={this.state.value} ref="ArrowLeft" icon="ArrowLeft"/>
          <IconBlock searchFor={this.state.value} ref="ArrowLongDown" icon="ArrowLongDown"/>
          <IconBlock searchFor={this.state.value} ref="ArrowLongLeft" icon="ArrowLongLeft"/>
          <IconBlock searchFor={this.state.value} ref="ArrowLongRight" icon="ArrowLongRight"/>
          <IconBlock searchFor={this.state.value} ref="ArrowLongUp" icon="ArrowLongUp"/>
          <IconBlock searchFor={this.state.value} ref="ArrowRight" icon="ArrowRight"/>
          <IconBlock searchFor={this.state.value} ref="ArrowUp" icon="ArrowUp"/>
          <IconBlock searchFor={this.state.value} ref="ArrowWithCircleDown" icon="ArrowWithCircleDown"/>
          <IconBlock searchFor={this.state.value} ref="ArrowWithCircleLeft" icon="ArrowWithCircleLeft"/>
          <IconBlock searchFor={this.state.value} ref="ArrowWithCircleRight" icon="ArrowWithCircleRight"/>
          <IconBlock searchFor={this.state.value} ref="ArrowWithCircleUp" icon="ArrowWithCircleUp"/>
          <IconBlock searchFor={this.state.value} ref="Attachment" icon="Attachment"/>
          <IconBlock searchFor={this.state.value} ref="AwarenessRibbon" icon="AwarenessRibbon"/>
          <IconBlock searchFor={this.state.value} ref="Back" icon="Back"/>
          <IconBlock searchFor={this.state.value} ref="BackInTime" icon="BackInTime"/>
          <IconBlock searchFor={this.state.value} ref="Baidu" icon="Baidu"/>
          <IconBlock searchFor={this.state.value} ref="BarGraph" icon="BarGraph"/>
          <IconBlock searchFor={this.state.value} ref="Basecamp" icon="Basecamp"/>
          <IconBlock searchFor={this.state.value} ref="Battery" icon="Battery"/>
          <IconBlock searchFor={this.state.value} ref="BeamedNote" icon="BeamedNote"/>
          <IconBlock searchFor={this.state.value} ref="Behance" icon="Behance"/>
          <IconBlock searchFor={this.state.value} ref="Bell" icon="Bell"/>
          <IconBlock searchFor={this.state.value} ref="Blackboard" icon="Blackboard"/>
          <IconBlock searchFor={this.state.value} ref="Block" icon="Block"/>
          <IconBlock searchFor={this.state.value} ref="Book" icon="Book"/>
          <IconBlock searchFor={this.state.value} ref="Bookmark" icon="Bookmark"/>
          <IconBlock searchFor={this.state.value} ref="Bookmarks" icon="Bookmarks"/>
          <IconBlock searchFor={this.state.value} ref="Bowl" icon="Bowl"/>
          <IconBlock searchFor={this.state.value} ref="Box" icon="Box"/>
          <IconBlock searchFor={this.state.value} ref="Briefcase" icon="Briefcase"/>
          <IconBlock searchFor={this.state.value} ref="Browser" icon="Browser"/>
          <IconBlock searchFor={this.state.value} ref="Brush" icon="Brush"/>
          <IconBlock searchFor={this.state.value} ref="Bucket" icon="Bucket"/>
          <IconBlock searchFor={this.state.value} ref="Bug" icon="Bug"/>
          <IconBlock searchFor={this.state.value} ref="Cake" icon="Cake"/>
          <IconBlock searchFor={this.state.value} ref="Calculator" icon="Calculator"/>
          <IconBlock searchFor={this.state.value} ref="Calendar" icon="Calendar"/>
          <IconBlock searchFor={this.state.value} ref="Camera" icon="Camera"/>
          <IconBlock searchFor={this.state.value} ref="Ccw" icon="Ccw"/>
          <IconBlock searchFor={this.state.value} ref="Chat" icon="Chat"/>
          <IconBlock searchFor={this.state.value} ref="Check" icon="Check"/>
          <IconBlock searchFor={this.state.value} ref="ChevronDown" icon="ChevronDown"/>
          <IconBlock searchFor={this.state.value} ref="ChevronLeft" icon="ChevronLeft"/>
          <IconBlock searchFor={this.state.value} ref="ChevronRight" icon="ChevronRight"/>
          <IconBlock searchFor={this.state.value} ref="ChevronSmallDown" icon="ChevronSmallDown"/>
          <IconBlock searchFor={this.state.value} ref="ChevronSmallLeft" icon="ChevronSmallLeft"/>
          <IconBlock searchFor={this.state.value} ref="ChevronSmallRight" icon="ChevronSmallRight"/>
          <IconBlock searchFor={this.state.value} ref="ChevronSmallUp" icon="ChevronSmallUp"/>
          <IconBlock searchFor={this.state.value} ref="ChevronThinDown" icon="ChevronThinDown"/>
          <IconBlock searchFor={this.state.value} ref="ChevronThinLeft" icon="ChevronThinLeft"/>
          <IconBlock searchFor={this.state.value} ref="ChevronThinRight" icon="ChevronThinRight"/>
          <IconBlock searchFor={this.state.value} ref="ChevronThinUp" icon="ChevronThinUp"/>
          <IconBlock searchFor={this.state.value} ref="ChevronUp" icon="ChevronUp"/>
          <IconBlock searchFor={this.state.value} ref="ChevronWithCircleDown" icon="ChevronWithCircleDown"/>
          <IconBlock searchFor={this.state.value} ref="ChevronWithCircleLeft" icon="ChevronWithCircleLeft"/>
          <IconBlock searchFor={this.state.value} ref="ChevronWithCircleRight" icon="ChevronWithCircleRight"/>
          <IconBlock searchFor={this.state.value} ref="ChevronWithCircleUp" icon="ChevronWithCircleUp"/>
          <IconBlock searchFor={this.state.value} ref="Circle" icon="Circle"/>
          <IconBlock searchFor={this.state.value} ref="CircleWithCross" icon="CircleWithCross"/>
          <IconBlock searchFor={this.state.value} ref="CircleWithMinus" icon="CircleWithMinus"/>
          <IconBlock searchFor={this.state.value} ref="CircleWithPlus" icon="CircleWithPlus"/>
          <IconBlock searchFor={this.state.value} ref="CircularGraph" icon="CircularGraph"/>
          <IconBlock searchFor={this.state.value} ref="Clapperboard" icon="Clapperboard"/>
          <IconBlock searchFor={this.state.value} ref="ClassicComputer" icon="ClassicComputer"/>
          <IconBlock searchFor={this.state.value} ref="Clipboard" icon="Clipboard"/>
          <IconBlock searchFor={this.state.value} ref="Clock" icon="Clock"/>
          <IconBlock searchFor={this.state.value} ref="Cloud" icon="Cloud"/>
          <IconBlock searchFor={this.state.value} ref="Code" icon="Code"/>
          <IconBlock searchFor={this.state.value} ref="Cog" icon="Cog"/>
          <IconBlock searchFor={this.state.value} ref="Colours" icon="Colours"/>
          <IconBlock searchFor={this.state.value} ref="Compass" icon="Compass"/>
          <IconBlock searchFor={this.state.value} ref="ControllerFastBackward" icon="ControllerFastBackward"/>
          <IconBlock searchFor={this.state.value} ref="ControllerFastForward" icon="ControllerFastForward"/>
          <IconBlock searchFor={this.state.value} ref="ControllerJumpToStart" icon="ControllerJumpToStart"/>
          <IconBlock searchFor={this.state.value} ref="ControllerNext" icon="ControllerNext"/>
          <IconBlock searchFor={this.state.value} ref="ControllerPaus" icon="ControllerPaus"/>
          <IconBlock searchFor={this.state.value} ref="ControllerPlay" icon="ControllerPlay"/>
          <IconBlock searchFor={this.state.value} ref="ControllerRecord" icon="ControllerRecord"/>
          <IconBlock searchFor={this.state.value} ref="ControllerStop" icon="ControllerStop"/>
          <IconBlock searchFor={this.state.value} ref="ControllerVolume" icon="ControllerVolume"/>
          <IconBlock searchFor={this.state.value} ref="Copy" icon="Copy"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCloud" icon="CreativeCloud"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommons" icon="CreativeCommons"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsAttribution" icon="CreativeCommonsAttribution"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsNoderivs" icon="CreativeCommonsNoderivs"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsNoncommercialEu"
                     icon="CreativeCommonsNoncommercialEu"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsNoncommercialUs"
                     icon="CreativeCommonsNoncommercialUs"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsPublicDomain" icon="CreativeCommonsPublicDomain"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsRemix" icon="CreativeCommonsRemix"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsShare" icon="CreativeCommonsShare"/>
          <IconBlock searchFor={this.state.value} ref="CreativeCommonsSharealike" icon="CreativeCommonsSharealike"/>
          <IconBlock searchFor={this.state.value} ref="Credit" icon="Credit"/>
          <IconBlock searchFor={this.state.value} ref="CreditCard" icon="CreditCard"/>
          <IconBlock searchFor={this.state.value} ref="Crop" icon="Crop"/>
          <IconBlock searchFor={this.state.value} ref="Cross" icon="Cross"/>
          <IconBlock searchFor={this.state.value} ref="Cup" icon="Cup"/>
          <IconBlock searchFor={this.state.value} ref="Cw" icon="Cw"/>
          <IconBlock searchFor={this.state.value} ref="Cycle" icon="Cycle"/>
          <IconBlock searchFor={this.state.value} ref="Database" icon="Database"/>
          <IconBlock searchFor={this.state.value} ref="DialPad" icon="DialPad"/>
          <IconBlock searchFor={this.state.value} ref="Direction" icon="Direction"/>
          <IconBlock searchFor={this.state.value} ref="Document" icon="Document"/>
          <IconBlock searchFor={this.state.value} ref="DocumentLandscape" icon="DocumentLandscape"/>
          <IconBlock searchFor={this.state.value} ref="Documents" icon="Documents"/>
          <IconBlock searchFor={this.state.value} ref="DotSingle" icon="DotSingle"/>
          <IconBlock searchFor={this.state.value} ref="DotsThreeHorizontal" icon="DotsThreeHorizontal"/>
          <IconBlock searchFor={this.state.value} ref="DotsThreeVertical" icon="DotsThreeVertical"/>
          <IconBlock searchFor={this.state.value} ref="DotsTwoHorizontal" icon="DotsTwoHorizontal"/>
          <IconBlock searchFor={this.state.value} ref="DotsTwoVertical" icon="DotsTwoVertical"/>
          <IconBlock searchFor={this.state.value} ref="Download" icon="Download"/>
          <IconBlock searchFor={this.state.value} ref="Dribbble" icon="Dribbble"/>
          <IconBlock searchFor={this.state.value} ref="DribbbleWithCircle" icon="DribbbleWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Drink" icon="Drink"/>
          <IconBlock searchFor={this.state.value} ref="Drive" icon="Drive"/>
          <IconBlock searchFor={this.state.value} ref="Drop" icon="Drop"/>
          <IconBlock searchFor={this.state.value} ref="Dropbox" icon="Dropbox"/>
          <IconBlock searchFor={this.state.value} ref="Edit" icon="Edit"/>
          <IconBlock searchFor={this.state.value} ref="Email" icon="Email"/>
          <IconBlock searchFor={this.state.value} ref="EmojiFlirt" icon="EmojiFlirt"/>
          <IconBlock searchFor={this.state.value} ref="EmojiHappy" icon="EmojiHappy"/>
          <IconBlock searchFor={this.state.value} ref="EmojiNeutral" icon="EmojiNeutral"/>
          <IconBlock searchFor={this.state.value} ref="EmojiSad" icon="EmojiSad"/>
          <IconBlock searchFor={this.state.value} ref="Erase" icon="Erase"/>
          <IconBlock searchFor={this.state.value} ref="Eraser" icon="Eraser"/>
          <IconBlock searchFor={this.state.value} ref="Evernote" icon="Evernote"/>
          <IconBlock searchFor={this.state.value} ref="Export" icon="Export"/>
          <IconBlock searchFor={this.state.value} ref="Eye" icon="Eye"/>
          <IconBlock searchFor={this.state.value} ref="EyeWithLine" icon="EyeWithLine"/>
          <IconBlock searchFor={this.state.value} ref="Facebook" icon="Facebook"/>
          <IconBlock searchFor={this.state.value} ref="FacebookWithCircle" icon="FacebookWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Feather" icon="Feather"/>
          <IconBlock searchFor={this.state.value} ref="Fingerprint" icon="Fingerprint"/>
          <IconBlock searchFor={this.state.value} ref="Flag" icon="Flag"/>
          <IconBlock searchFor={this.state.value} ref="Flash" icon="Flash"/>
          <IconBlock searchFor={this.state.value} ref="Flashlight" icon="Flashlight"/>
          <IconBlock searchFor={this.state.value} ref="FlatBrush" icon="FlatBrush"/>
          <IconBlock searchFor={this.state.value} ref="Flattr" icon="Flattr"/>
          <IconBlock searchFor={this.state.value} ref="Flickr" icon="Flickr"/>
          <IconBlock searchFor={this.state.value} ref="FlickrWithCircle" icon="FlickrWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="FlowBranch" icon="FlowBranch"/>
          <IconBlock searchFor={this.state.value} ref="FlowCascade" icon="FlowCascade"/>
          <IconBlock searchFor={this.state.value} ref="FlowLine" icon="FlowLine"/>
          <IconBlock searchFor={this.state.value} ref="FlowParallel" icon="FlowParallel"/>
          <IconBlock searchFor={this.state.value} ref="FlowTree" icon="FlowTree"/>
          <IconBlock searchFor={this.state.value} ref="Flower" icon="Flower"/>
          <IconBlock searchFor={this.state.value} ref="Folder" icon="Folder"/>
          <IconBlock searchFor={this.state.value} ref="FolderImages" icon="FolderImages"/>
          <IconBlock searchFor={this.state.value} ref="FolderMusic" icon="FolderMusic"/>
          <IconBlock searchFor={this.state.value} ref="FolderVideo" icon="FolderVideo"/>
          <IconBlock searchFor={this.state.value} ref="Forward" icon="Forward"/>
          <IconBlock searchFor={this.state.value} ref="Foursquare" icon="Foursquare"/>
          <IconBlock searchFor={this.state.value} ref="Funnel" icon="Funnel"/>
          <IconBlock searchFor={this.state.value} ref="GameController" icon="GameController"/>
          <IconBlock searchFor={this.state.value} ref="Gauge" icon="Gauge"/>
          <IconBlock searchFor={this.state.value} ref="Github" icon="Github"/>
          <IconBlock searchFor={this.state.value} ref="GithubWithCircle" icon="GithubWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Globe" icon="Globe"/>
          <IconBlock searchFor={this.state.value} ref="GoogleDrive" icon="GoogleDrive"/>
          <IconBlock searchFor={this.state.value} ref="GoogleHangouts" icon="GoogleHangouts"/>
          <IconBlock searchFor={this.state.value} ref="GooglePlay" icon="GooglePlay"/>
          <IconBlock searchFor={this.state.value} ref="Googleplus" icon="Googleplus"/>
          <IconBlock searchFor={this.state.value} ref="GoogleplusWithCircle" icon="GoogleplusWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="GraduationCap" icon="GraduationCap"/>
          <IconBlock searchFor={this.state.value} ref="Grid" icon="Grid"/>
          <IconBlock searchFor={this.state.value} ref="Grooveshark" icon="Grooveshark"/>
          <IconBlock searchFor={this.state.value} ref="HairCross" icon="HairCross"/>
          <IconBlock searchFor={this.state.value} ref="Hand" icon="Hand"/>
          <IconBlock searchFor={this.state.value} ref="Heart" icon="Heart"/>
          <IconBlock searchFor={this.state.value} ref="HeartOutlined" icon="HeartOutlined"/>
          <IconBlock searchFor={this.state.value} ref="Help" icon="Help"/>
          <IconBlock searchFor={this.state.value} ref="HelpWithCircle" icon="HelpWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Home" icon="Home"/>
          <IconBlock searchFor={this.state.value} ref="HourGlass" icon="HourGlass"/>
          <IconBlock searchFor={this.state.value} ref="Houzz" icon="Houzz"/>
          <IconBlock searchFor={this.state.value} ref="Icloud" icon="Icloud"/>
          <IconBlock searchFor={this.state.value} ref="Image" icon="Image"/>
          <IconBlock searchFor={this.state.value} ref="ImageInverted" icon="ImageInverted"/>
          <IconBlock searchFor={this.state.value} ref="Images" icon="Images"/>
          <IconBlock searchFor={this.state.value} ref="Inbox" icon="Inbox"/>
          <IconBlock searchFor={this.state.value} ref="Infinity" icon="Infinity"/>
          <IconBlock searchFor={this.state.value} ref="Info" icon="Info"/>
          <IconBlock searchFor={this.state.value} ref="InfoWithCircle" icon="InfoWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Instagram" icon="Instagram"/>
          <IconBlock searchFor={this.state.value} ref="InstagramWithCircle" icon="InstagramWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Install" icon="Install"/>
          <IconBlock searchFor={this.state.value} ref="Key" icon="Key"/>
          <IconBlock searchFor={this.state.value} ref="Keyboard" icon="Keyboard"/>
          <IconBlock searchFor={this.state.value} ref="LabFlask" icon="LabFlask"/>
          <IconBlock searchFor={this.state.value} ref="Landline" icon="Landline"/>
          <IconBlock searchFor={this.state.value} ref="Language" icon="Language"/>
          <IconBlock searchFor={this.state.value} ref="Laptop" icon="Laptop"/>
          <IconBlock searchFor={this.state.value} ref="Lastfm" icon="Lastfm"/>
          <IconBlock searchFor={this.state.value} ref="LastfmWithCircle" icon="LastfmWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Layers" icon="Layers"/>
          <IconBlock searchFor={this.state.value} ref="Leaf" icon="Leaf"/>
          <IconBlock searchFor={this.state.value} ref="LevelDown" icon="LevelDown"/>
          <IconBlock searchFor={this.state.value} ref="LevelUp" icon="LevelUp"/>
          <IconBlock searchFor={this.state.value} ref="Lifebuoy" icon="Lifebuoy"/>
          <IconBlock searchFor={this.state.value} ref="LightBulb" icon="LightBulb"/>
          <IconBlock searchFor={this.state.value} ref="LightDown" icon="LightDown"/>
          <IconBlock searchFor={this.state.value} ref="LightUp" icon="LightUp"/>
          <IconBlock searchFor={this.state.value} ref="LineGraph" icon="LineGraph"/>
          <IconBlock searchFor={this.state.value} ref="Link" icon="Link"/>
          <IconBlock searchFor={this.state.value} ref="Linkedin" icon="Linkedin"/>
          <IconBlock searchFor={this.state.value} ref="LinkedinWithCircle" icon="LinkedinWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="List" icon="List"/>
          <IconBlock searchFor={this.state.value} ref="Location" icon="Location"/>
          <IconBlock searchFor={this.state.value} ref="LocationPin" icon="LocationPin"/>
          <IconBlock searchFor={this.state.value} ref="Lock" icon="Lock"/>
          <IconBlock searchFor={this.state.value} ref="LockOpen" icon="LockOpen"/>
          <IconBlock searchFor={this.state.value} ref="LogOut" icon="LogOut"/>
          <IconBlock searchFor={this.state.value} ref="Login" icon="Login"/>
          <IconBlock searchFor={this.state.value} ref="Loop" icon="Loop"/>
          <IconBlock searchFor={this.state.value} ref="Magnet" icon="Magnet"/>
          <IconBlock searchFor={this.state.value} ref="MagnifyingGlass" icon="MagnifyingGlass"/>
          <IconBlock searchFor={this.state.value} ref="Mail" icon="Mail"/>
          <IconBlock searchFor={this.state.value} ref="MailWithCircle" icon="MailWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Man" icon="Man"/>
          <IconBlock searchFor={this.state.value} ref="Map" icon="Map"/>
          <IconBlock searchFor={this.state.value} ref="Mask" icon="Mask"/>
          <IconBlock searchFor={this.state.value} ref="Medal" icon="Medal"/>
          <IconBlock searchFor={this.state.value} ref="Medium" icon="Medium"/>
          <IconBlock searchFor={this.state.value} ref="MediumWithCircle" icon="MediumWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Megaphone" icon="Megaphone"/>
          <IconBlock searchFor={this.state.value} ref="Menu" icon="Menu"/>
          <IconBlock searchFor={this.state.value} ref="Merge" icon="Merge"/>
          <IconBlock searchFor={this.state.value} ref="Message" icon="Message"/>
          <IconBlock searchFor={this.state.value} ref="Mic" icon="Mic"/>
          <IconBlock searchFor={this.state.value} ref="Minus" icon="Minus"/>
          <IconBlock searchFor={this.state.value} ref="Mixi" icon="Mixi"/>
          <IconBlock searchFor={this.state.value} ref="Mobile" icon="Mobile"/>
          <IconBlock searchFor={this.state.value} ref="ModernMic" icon="ModernMic"/>
          <IconBlock searchFor={this.state.value} ref="Moon" icon="Moon"/>
          <IconBlock searchFor={this.state.value} ref="Mouse" icon="Mouse"/>
          <IconBlock searchFor={this.state.value} ref="MousePointer" icon="MousePointer"/>
          <IconBlock searchFor={this.state.value} ref="Music" icon="Music"/>
          <IconBlock searchFor={this.state.value} ref="Network" icon="Network"/>
          <IconBlock searchFor={this.state.value} ref="New" icon="New"/>
          <IconBlock searchFor={this.state.value} ref="NewMessage" icon="NewMessage"/>
          <IconBlock searchFor={this.state.value} ref="News" icon="News"/>
          <IconBlock searchFor={this.state.value} ref="Newsletter" icon="Newsletter"/>
          <IconBlock searchFor={this.state.value} ref="Note" icon="Note"/>
          <IconBlock searchFor={this.state.value} ref="Notification" icon="Notification"/>
          <IconBlock searchFor={this.state.value} ref="NotificationsOff" icon="NotificationsOff"/>
          <IconBlock searchFor={this.state.value} ref="OldMobile" icon="OldMobile"/>
          <IconBlock searchFor={this.state.value} ref="OldPhone" icon="OldPhone"/>
          <IconBlock searchFor={this.state.value} ref="Onedrive" icon="Onedrive"/>
          <IconBlock searchFor={this.state.value} ref="OpenBook" icon="OpenBook"/>
          <IconBlock searchFor={this.state.value} ref="Palette" icon="Palette"/>
          <IconBlock searchFor={this.state.value} ref="PaperPlane" icon="PaperPlane"/>
          <IconBlock searchFor={this.state.value} ref="Paypal" icon="Paypal"/>
          <IconBlock searchFor={this.state.value} ref="Pencil" icon="Pencil"/>
          <IconBlock searchFor={this.state.value} ref="Phone" icon="Phone"/>
          <IconBlock searchFor={this.state.value} ref="Picasa" icon="Picasa"/>
          <IconBlock searchFor={this.state.value} ref="PieChart" icon="PieChart"/>
          <IconBlock searchFor={this.state.value} ref="Pin" icon="Pin"/>
          <IconBlock searchFor={this.state.value} ref="Pinterest" icon="Pinterest"/>
          <IconBlock searchFor={this.state.value} ref="PinterestWithCircle" icon="PinterestWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Plus" icon="Plus"/>
          <IconBlock searchFor={this.state.value} ref="Popup" icon="Popup"/>
          <IconBlock searchFor={this.state.value} ref="PowerPlug" icon="PowerPlug"/>
          <IconBlock searchFor={this.state.value} ref="PriceRibbon" icon="PriceRibbon"/>
          <IconBlock searchFor={this.state.value} ref="PriceTag" icon="PriceTag"/>
          <IconBlock searchFor={this.state.value} ref="Print" icon="Print"/>
          <IconBlock searchFor={this.state.value} ref="ProgressEmpty" icon="ProgressEmpty"/>
          <IconBlock searchFor={this.state.value} ref="ProgressFull" icon="ProgressFull"/>
          <IconBlock searchFor={this.state.value} ref="ProgressOne" icon="ProgressOne"/>
          <IconBlock searchFor={this.state.value} ref="ProgressTwo" icon="ProgressTwo"/>
          <IconBlock searchFor={this.state.value} ref="Publish" icon="Publish"/>
          <IconBlock searchFor={this.state.value} ref="Qq" icon="Qq"/>
          <IconBlock searchFor={this.state.value} ref="QqWithCircle" icon="QqWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Quote" icon="Quote"/>
          <IconBlock searchFor={this.state.value} ref="Radio" icon="Radio"/>
          <IconBlock searchFor={this.state.value} ref="Raft" icon="Raft"/>
          <IconBlock searchFor={this.state.value} ref="RaftWithCircle" icon="RaftWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Rainbow" icon="Rainbow"/>
          <IconBlock searchFor={this.state.value} ref="Rdio" icon="Rdio"/>
          <IconBlock searchFor={this.state.value} ref="RdioWithCircle" icon="RdioWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="RemoveUser" icon="RemoveUser"/>
          <IconBlock searchFor={this.state.value} ref="Renren" icon="Renren"/>
          <IconBlock searchFor={this.state.value} ref="Reply" icon="Reply"/>
          <IconBlock searchFor={this.state.value} ref="ReplyAll" icon="ReplyAll"/>
          <IconBlock searchFor={this.state.value} ref="Resize100" icon="Resize100"/>
          <IconBlock searchFor={this.state.value} ref="ResizeFullScreen" icon="ResizeFullScreen"/>
          <IconBlock searchFor={this.state.value} ref="Retweet" icon="Retweet"/>
          <IconBlock searchFor={this.state.value} ref="Rocket" icon="Rocket"/>
          <IconBlock searchFor={this.state.value} ref="RoundBrush" icon="RoundBrush"/>
          <IconBlock searchFor={this.state.value} ref="Rss" icon="Rss"/>
          <IconBlock searchFor={this.state.value} ref="Ruler" icon="Ruler"/>
          <IconBlock searchFor={this.state.value} ref="Save" icon="Save"/>
          <IconBlock searchFor={this.state.value} ref="Scissors" icon="Scissors"/>
          <IconBlock searchFor={this.state.value} ref="Scribd" icon="Scribd"/>
          <IconBlock searchFor={this.state.value} ref="SelectArrows" icon="SelectArrows"/>
          <IconBlock searchFor={this.state.value} ref="Share" icon="Share"/>
          <IconBlock searchFor={this.state.value} ref="ShareAlternative" icon="ShareAlternative"/>
          <IconBlock searchFor={this.state.value} ref="Shareable" icon="Shareable"/>
          <IconBlock searchFor={this.state.value} ref="Shield" icon="Shield"/>
          <IconBlock searchFor={this.state.value} ref="Shop" icon="Shop"/>
          <IconBlock searchFor={this.state.value} ref="ShoppingBag" icon="ShoppingBag"/>
          <IconBlock searchFor={this.state.value} ref="ShoppingBasket" icon="ShoppingBasket"/>
          <IconBlock searchFor={this.state.value} ref="ShoppingCart" icon="ShoppingCart"/>
          <IconBlock searchFor={this.state.value} ref="Shuffle" icon="Shuffle"/>
          <IconBlock searchFor={this.state.value} ref="Signal" icon="Signal"/>
          <IconBlock searchFor={this.state.value} ref="SinaWeibo" icon="SinaWeibo"/>
          <IconBlock searchFor={this.state.value} ref="Skype" icon="Skype"/>
          <IconBlock searchFor={this.state.value} ref="SkypeWithCircle" icon="SkypeWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Slideshare" icon="Slideshare"/>
          <IconBlock searchFor={this.state.value} ref="Smashing" icon="Smashing"/>
          <IconBlock searchFor={this.state.value} ref="Sound" icon="Sound"/>
          <IconBlock searchFor={this.state.value} ref="SoundMix" icon="SoundMix"/>
          <IconBlock searchFor={this.state.value} ref="SoundMute" icon="SoundMute"/>
          <IconBlock searchFor={this.state.value} ref="Soundcloud" icon="Soundcloud"/>
          <IconBlock searchFor={this.state.value} ref="SportsClub" icon="SportsClub"/>
          <IconBlock searchFor={this.state.value} ref="Spotify" icon="Spotify"/>
          <IconBlock searchFor={this.state.value} ref="SpotifyWithCircle" icon="SpotifyWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Spreadsheet" icon="Spreadsheet"/>
          <IconBlock searchFor={this.state.value} ref="SquaredCross" icon="SquaredCross"/>
          <IconBlock searchFor={this.state.value} ref="SquaredMinus" icon="SquaredMinus"/>
          <IconBlock searchFor={this.state.value} ref="SquaredPlus" icon="SquaredPlus"/>
          <IconBlock searchFor={this.state.value} ref="Star" icon="Star"/>
          <IconBlock searchFor={this.state.value} ref="StarOutlined" icon="StarOutlined"/>
          <IconBlock searchFor={this.state.value} ref="Stopwatch" icon="Stopwatch"/>
          <IconBlock searchFor={this.state.value} ref="Stumbleupon" icon="Stumbleupon"/>
          <IconBlock searchFor={this.state.value} ref="StumbleuponWithCircle" icon="StumbleuponWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Suitcase" icon="Suitcase"/>
          <IconBlock searchFor={this.state.value} ref="Swap" icon="Swap"/>
          <IconBlock searchFor={this.state.value} ref="Swarm" icon="Swarm"/>
          <IconBlock searchFor={this.state.value} ref="Sweden" icon="Sweden"/>
          <IconBlock searchFor={this.state.value} ref="Switch" icon="Switch"/>
          <IconBlock searchFor={this.state.value} ref="Tablet" icon="Tablet"/>
          <IconBlock searchFor={this.state.value} ref="TabletMobileCombo" icon="TabletMobileCombo"/>
          <IconBlock searchFor={this.state.value} ref="Tag" icon="Tag"/>
          <IconBlock searchFor={this.state.value} ref="Text" icon="Text"/>
          <IconBlock searchFor={this.state.value} ref="TextDocument" icon="TextDocument"/>
          <IconBlock searchFor={this.state.value} ref="TextDocumentInverted" icon="TextDocumentInverted"/>
          <IconBlock searchFor={this.state.value} ref="Thermometer" icon="Thermometer"/>
          <IconBlock searchFor={this.state.value} ref="ThumbsDown" icon="ThumbsDown"/>
          <IconBlock searchFor={this.state.value} ref="ThumbsUp" icon="ThumbsUp"/>
          <IconBlock searchFor={this.state.value} ref="ThunderCloud" icon="ThunderCloud"/>
          <IconBlock searchFor={this.state.value} ref="Ticket" icon="Ticket"/>
          <IconBlock searchFor={this.state.value} ref="TimeSlot" icon="TimeSlot"/>
          <IconBlock searchFor={this.state.value} ref="Tools" icon="Tools"/>
          <IconBlock searchFor={this.state.value} ref="TrafficCone" icon="TrafficCone"/>
          <IconBlock searchFor={this.state.value} ref="Trash" icon="Trash"/>
          <IconBlock searchFor={this.state.value} ref="Tree" icon="Tree"/>
          <IconBlock searchFor={this.state.value} ref="TriangleDown" icon="TriangleDown"/>
          <IconBlock searchFor={this.state.value} ref="TriangleLeft" icon="TriangleLeft"/>
          <IconBlock searchFor={this.state.value} ref="TriangleRight" icon="TriangleRight"/>
          <IconBlock searchFor={this.state.value} ref="TriangleUp" icon="TriangleUp"/>
          <IconBlock searchFor={this.state.value} ref="Tripadvisor" icon="Tripadvisor"/>
          <IconBlock searchFor={this.state.value} ref="Trophy" icon="Trophy"/>
          <IconBlock searchFor={this.state.value} ref="Tumblr" icon="Tumblr"/>
          <IconBlock searchFor={this.state.value} ref="TumblrWithCircle" icon="TumblrWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Tv" icon="Tv"/>
          <IconBlock searchFor={this.state.value} ref="Twitter" icon="Twitter"/>
          <IconBlock searchFor={this.state.value} ref="TwitterWithCircle" icon="TwitterWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Typing" icon="Typing"/>
          <IconBlock searchFor={this.state.value} ref="Uninstall" icon="Uninstall"/>
          <IconBlock searchFor={this.state.value} ref="Unread" icon="Unread"/>
          <IconBlock searchFor={this.state.value} ref="Untag" icon="Untag"/>
          <IconBlock searchFor={this.state.value} ref="Upload" icon="Upload"/>
          <IconBlock searchFor={this.state.value} ref="UploadToCloud" icon="UploadToCloud"/>
          <IconBlock searchFor={this.state.value} ref="User" icon="User"/>
          <IconBlock searchFor={this.state.value} ref="Users" icon="Users"/>
          <IconBlock searchFor={this.state.value} ref="VCard" icon="VCard"/>
          <IconBlock searchFor={this.state.value} ref="Video" icon="Video"/>
          <IconBlock searchFor={this.state.value} ref="VideoCamera" icon="VideoCamera"/>
          <IconBlock searchFor={this.state.value} ref="Vimeo" icon="Vimeo"/>
          <IconBlock searchFor={this.state.value} ref="VimeoWithCircle" icon="VimeoWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Vine" icon="Vine"/>
          <IconBlock searchFor={this.state.value} ref="VineWithCircle" icon="VineWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Vinyl" icon="Vinyl"/>
          <IconBlock searchFor={this.state.value} ref="Vk" icon="Vk"/>
          <IconBlock searchFor={this.state.value} ref="VkAlternitive" icon="VkAlternitive"/>
          <IconBlock searchFor={this.state.value} ref="VkWithCircle" icon="VkWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Voicemail" icon="Voicemail"/>
          <IconBlock searchFor={this.state.value} ref="Wallet" icon="Wallet"/>
          <IconBlock searchFor={this.state.value} ref="Warning" icon="Warning"/>
          <IconBlock searchFor={this.state.value} ref="Water" icon="Water"/>
          <IconBlock searchFor={this.state.value} ref="WindowsStore" icon="WindowsStore"/>
          <IconBlock searchFor={this.state.value} ref="Xing" icon="Xing"/>
          <IconBlock searchFor={this.state.value} ref="XingWithCircle" icon="XingWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Yelp" icon="Yelp"/>
          <IconBlock searchFor={this.state.value} ref="Youko" icon="Youko"/>
          <IconBlock searchFor={this.state.value} ref="YoukoWithCircle" icon="YoukoWithCircle"/>
          <IconBlock searchFor={this.state.value} ref="Youtube" icon="Youtube"/>
          <IconBlock searchFor={this.state.value} ref="YoutubeWithCircle" icon="YoutubeWithCircle"/>
        </div>

      </div>
    );
  }
}

class IconBlock extends React.Component {
  constructor(props) {
    super(props);
    this.displayText = this.props.icon;
    this.settext = this.props.icon;
  }

  // after the component is initially rendered, and if the component is updated, update the highlighted text accordingly.
  // doing this instead of 'dangerouslySetInnerHTML'.
  componentDidMount() {
    this.updateDOM();
  }

  componentDidUpdate() {
    this.updateDOM();
  }

  updateDOM() {
    const el = this.refs.sethere;
    el.innerHTML = this.settext;
  }

  render() {
    let styles = {whiteSpace: 'nowrap'};
    // normalize search parameters for comparison.
    const searchFor = this.props.searchFor || '';
    const searchForRE = new RegExp(searchFor, 'gi');

    // if the the search parameter that's being sent through matches any part of the icon name, wrap that text so it can be highlighted.
    // since the state actually only changes in the main component above, this component can be stateless.
    if (searchFor !== '') {
      if (searchForRE.test(this.displayText)) {
        this.settext = this.displayText.replace(searchForRE, '<mark>$&</mark>');
      } else {
        styles = {display: 'none'};
      }
    } else {
      this.settext = this.displayText;
    }

    // inline component to return the appropriate icon
    const ReturnIcon = (props) => {
      const style = {fill: 'currentColor', verticalAlign: 'middle'};
      switch (props.icon) {
        case '500px':
          return <Entypo500px className="iconblock__sample" style={style}/>;
        case '500pxWithCircle':
          return <Entypo500pxWithCircle className="iconblock__sample" style={style}/>;
        case 'AddToList':
          return <EntypoAddToList className="iconblock__sample" style={style}/>;
        case 'AddUser':
          return <EntypoAddUser className="iconblock__sample" style={style}/>;
        case 'Address':
          return <EntypoAddress className="iconblock__sample" style={style}/>;
        case 'Adjust':
          return <EntypoAdjust className="iconblock__sample" style={style}/>;
        case 'Air':
          return <EntypoAir className="iconblock__sample" style={style}/>;
        case 'Aircraft':
          return <EntypoAircraft className="iconblock__sample" style={style}/>;
        case 'AircraftLanding':
          return <EntypoAircraftLanding className="iconblock__sample" style={style}/>;
        case 'AircraftTakeOff':
          return <EntypoAircraftTakeOff className="iconblock__sample" style={style}/>;
        case 'AlignBottom':
          return <EntypoAlignBottom className="iconblock__sample" style={style}/>;
        case 'AlignHorizontalMiddle':
          return <EntypoAlignHorizontalMiddle className="iconblock__sample" style={style}/>;
        case 'AlignLeft':
          return <EntypoAlignLeft className="iconblock__sample" style={style}/>;
        case 'AlignRight':
          return <EntypoAlignRight className="iconblock__sample" style={style}/>;
        case 'AlignTop':
          return <EntypoAlignTop className="iconblock__sample" style={style}/>;
        case 'AlignVerticalMiddle':
          return <EntypoAlignVerticalMiddle className="iconblock__sample" style={style}/>;
        case 'AppStore':
          return <EntypoAppStore className="iconblock__sample" style={style}/>;
        case 'Archive':
          return <EntypoArchive className="iconblock__sample" style={style}/>;
        case 'AreaGraph':
          return <EntypoAreaGraph className="iconblock__sample" style={style}/>;
        case 'ArrowBoldDown':
          return <EntypoArrowBoldDown className="iconblock__sample" style={style}/>;
        case 'ArrowBoldLeft':
          return <EntypoArrowBoldLeft className="iconblock__sample" style={style}/>;
        case 'ArrowBoldRight':
          return <EntypoArrowBoldRight className="iconblock__sample" style={style}/>;
        case 'ArrowBoldUp':
          return <EntypoArrowBoldUp className="iconblock__sample" style={style}/>;
        case 'ArrowDown':
          return <EntypoArrowDown className="iconblock__sample" style={style}/>;
        case 'ArrowLeft':
          return <EntypoArrowLeft className="iconblock__sample" style={style}/>;
        case 'ArrowLongDown':
          return <EntypoArrowLongDown className="iconblock__sample" style={style}/>;
        case 'ArrowLongLeft':
          return <EntypoArrowLongLeft className="iconblock__sample" style={style}/>;
        case 'ArrowLongRight':
          return <EntypoArrowLongRight className="iconblock__sample" style={style}/>;
        case 'ArrowLongUp':
          return <EntypoArrowLongUp className="iconblock__sample" style={style}/>;
        case 'ArrowRight':
          return <EntypoArrowRight className="iconblock__sample" style={style}/>;
        case 'ArrowUp':
          return <EntypoArrowUp className="iconblock__sample" style={style}/>;
        case 'ArrowWithCircleDown':
          return <EntypoArrowWithCircleDown className="iconblock__sample" style={style}/>;
        case 'ArrowWithCircleLeft':
          return <EntypoArrowWithCircleLeft className="iconblock__sample" style={style}/>;
        case 'ArrowWithCircleRight':
          return <EntypoArrowWithCircleRight className="iconblock__sample" style={style}/>;
        case 'ArrowWithCircleUp':
          return <EntypoArrowWithCircleUp className="iconblock__sample" style={style}/>;
        case 'Attachment':
          return <EntypoAttachment className="iconblock__sample" style={style}/>;
        case 'AwarenessRibbon':
          return <EntypoAwarenessRibbon className="iconblock__sample" style={style}/>;
        case 'Back':
          return <EntypoBack className="iconblock__sample" style={style}/>;
        case 'BackInTime':
          return <EntypoBackInTime className="iconblock__sample" style={style}/>;
        case 'Baidu':
          return <EntypoBaidu className="iconblock__sample" style={style}/>;
        case 'BarGraph':
          return <EntypoBarGraph className="iconblock__sample" style={style}/>;
        case 'Basecamp':
          return <EntypoBasecamp className="iconblock__sample" style={style}/>;
        case 'Battery':
          return <EntypoBattery className="iconblock__sample" style={style}/>;
        case 'BeamedNote':
          return <EntypoBeamedNote className="iconblock__sample" style={style}/>;
        case 'Behance':
          return <EntypoBehance className="iconblock__sample" style={style}/>;
        case 'Bell':
          return <EntypoBell className="iconblock__sample" style={style}/>;
        case 'Blackboard':
          return <EntypoBlackboard className="iconblock__sample" style={style}/>;
        case 'Block':
          return <EntypoBlock className="iconblock__sample" style={style}/>;
        case 'Book':
          return <EntypoBook className="iconblock__sample" style={style}/>;
        case 'Bookmark':
          return <EntypoBookmark className="iconblock__sample" style={style}/>;
        case 'Bookmarks':
          return <EntypoBookmarks className="iconblock__sample" style={style}/>;
        case 'Bowl':
          return <EntypoBowl className="iconblock__sample" style={style}/>;
        case 'Box':
          return <EntypoBox className="iconblock__sample" style={style}/>;
        case 'Briefcase':
          return <EntypoBriefcase className="iconblock__sample" style={style}/>;
        case 'Browser':
          return <EntypoBrowser className="iconblock__sample" style={style}/>;
        case 'Brush':
          return <EntypoBrush className="iconblock__sample" style={style}/>;
        case 'Bucket':
          return <EntypoBucket className="iconblock__sample" style={style}/>;
        case 'Bug':
          return <EntypoBug className="iconblock__sample" style={style}/>;
        case 'Cake':
          return <EntypoCake className="iconblock__sample" style={style}/>;
        case 'Calculator':
          return <EntypoCalculator className="iconblock__sample" style={style}/>;
        case 'Calendar':
          return <EntypoCalendar className="iconblock__sample" style={style}/>;
        case 'Camera':
          return <EntypoCamera className="iconblock__sample" style={style}/>;
        case 'Ccw':
          return <EntypoCcw className="iconblock__sample" style={style}/>;
        case 'Chat':
          return <EntypoChat className="iconblock__sample" style={style}/>;
        case 'Check':
          return <EntypoCheck className="iconblock__sample" style={style}/>;
        case 'ChevronDown':
          return <EntypoChevronDown className="iconblock__sample" style={style}/>;
        case 'ChevronLeft':
          return <EntypoChevronLeft className="iconblock__sample" style={style}/>;
        case 'ChevronRight':
          return <EntypoChevronRight className="iconblock__sample" style={style}/>;
        case 'ChevronSmallDown':
          return <EntypoChevronSmallDown className="iconblock__sample" style={style}/>;
        case 'ChevronSmallLeft':
          return <EntypoChevronSmallLeft className="iconblock__sample" style={style}/>;
        case 'ChevronSmallRight':
          return <EntypoChevronSmallRight className="iconblock__sample" style={style}/>;
        case 'ChevronSmallUp':
          return <EntypoChevronSmallUp className="iconblock__sample" style={style}/>;
        case 'ChevronThinDown':
          return <EntypoChevronThinDown className="iconblock__sample" style={style}/>;
        case 'ChevronThinLeft':
          return <EntypoChevronThinLeft className="iconblock__sample" style={style}/>;
        case 'ChevronThinRight':
          return <EntypoChevronThinRight className="iconblock__sample" style={style}/>;
        case 'ChevronThinUp':
          return <EntypoChevronThinUp className="iconblock__sample" style={style}/>;
        case 'ChevronUp':
          return <EntypoChevronUp className="iconblock__sample" style={style}/>;
        case 'ChevronWithCircleDown':
          return <EntypoChevronWithCircleDown className="iconblock__sample" style={style}/>;
        case 'ChevronWithCircleLeft':
          return <EntypoChevronWithCircleLeft className="iconblock__sample" style={style}/>;
        case 'ChevronWithCircleRight':
          return <EntypoChevronWithCircleRight className="iconblock__sample" style={style}/>;
        case 'ChevronWithCircleUp':
          return <EntypoChevronWithCircleUp className="iconblock__sample" style={style}/>;
        case 'Circle':
          return <EntypoCircle className="iconblock__sample" style={style}/>;
        case 'CircleWithCross':
          return <EntypoCircleWithCross className="iconblock__sample" style={style}/>;
        case 'CircleWithMinus':
          return <EntypoCircleWithMinus className="iconblock__sample" style={style}/>;
        case 'CircleWithPlus':
          return <EntypoCircleWithPlus className="iconblock__sample" style={style}/>;
        case 'CircularGraph':
          return <EntypoCircularGraph className="iconblock__sample" style={style}/>;
        case 'Clapperboard':
          return <EntypoClapperboard className="iconblock__sample" style={style}/>;
        case 'ClassicComputer':
          return <EntypoClassicComputer className="iconblock__sample" style={style}/>;
        case 'Clipboard':
          return <EntypoClipboard className="iconblock__sample" style={style}/>;
        case 'Clock':
          return <EntypoClock className="iconblock__sample" style={style}/>;
        case 'Cloud':
          return <EntypoCloud className="iconblock__sample" style={style}/>;
        case 'Code':
          return <EntypoCode className="iconblock__sample" style={style}/>;
        case 'Cog':
          return <EntypoCog className="iconblock__sample" style={style}/>;
        case 'Colours':
          return <EntypoColours className="iconblock__sample" style={style}/>;
        case 'Compass':
          return <EntypoCompass className="iconblock__sample" style={style}/>;
        case 'ControllerFastBackward':
          return <EntypoControllerFastBackward className="iconblock__sample" style={style}/>;
        case 'ControllerFastForward':
          return <EntypoControllerFastForward className="iconblock__sample" style={style}/>;
        case 'ControllerJumpToStart':
          return <EntypoControllerJumpToStart className="iconblock__sample" style={style}/>;
        case 'ControllerNext':
          return <EntypoControllerNext className="iconblock__sample" style={style}/>;
        case 'ControllerPaus':
          return <EntypoControllerPaus className="iconblock__sample" style={style}/>;
        case 'ControllerPlay':
          return <EntypoControllerPlay className="iconblock__sample" style={style}/>;
        case 'ControllerRecord':
          return <EntypoControllerRecord className="iconblock__sample" style={style}/>;
        case 'ControllerStop':
          return <EntypoControllerStop className="iconblock__sample" style={style}/>;
        case 'ControllerVolume':
          return <EntypoControllerVolume className="iconblock__sample" style={style}/>;
        case 'Copy':
          return <EntypoCopy className="iconblock__sample" style={style}/>;
        case 'CreativeCloud':
          return <EntypoCreativeCloud className="iconblock__sample" style={style}/>;
        case 'CreativeCommons':
          return <EntypoCreativeCommons className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsAttribution':
          return <EntypoCreativeCommonsAttribution className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsNoderivs':
          return <EntypoCreativeCommonsNoderivs className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsNoncommercialEu':
          return <EntypoCreativeCommonsNoncommercialEu className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsNoncommercialUs':
          return <EntypoCreativeCommonsNoncommercialUs className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsPublicDomain':
          return <EntypoCreativeCommonsPublicDomain className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsRemix':
          return <EntypoCreativeCommonsRemix className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsShare':
          return <EntypoCreativeCommonsShare className="iconblock__sample" style={style}/>;
        case 'CreativeCommonsSharealike':
          return <EntypoCreativeCommonsSharealike className="iconblock__sample" style={style}/>;
        case 'Credit':
          return <EntypoCredit className="iconblock__sample" style={style}/>;
        case 'CreditCard':
          return <EntypoCreditCard className="iconblock__sample" style={style}/>;
        case 'Crop':
          return <EntypoCrop className="iconblock__sample" style={style}/>;
        case 'Cross':
          return <EntypoCross className="iconblock__sample" style={style}/>;
        case 'Cup':
          return <EntypoCup className="iconblock__sample" style={style}/>;
        case 'Cw':
          return <EntypoCw className="iconblock__sample" style={style}/>;
        case 'Cycle':
          return <EntypoCycle className="iconblock__sample" style={style}/>;
        case 'Database':
          return <EntypoDatabase className="iconblock__sample" style={style}/>;
        case 'DialPad':
          return <EntypoDialPad className="iconblock__sample" style={style}/>;
        case 'Direction':
          return <EntypoDirection className="iconblock__sample" style={style}/>;
        case 'Document':
          return <EntypoDocument className="iconblock__sample" style={style}/>;
        case 'DocumentLandscape':
          return <EntypoDocumentLandscape className="iconblock__sample" style={style}/>;
        case 'Documents':
          return <EntypoDocuments className="iconblock__sample" style={style}/>;
        case 'DotSingle':
          return <EntypoDotSingle className="iconblock__sample" style={style}/>;
        case 'DotsThreeHorizontal':
          return <EntypoDotsThreeHorizontal className="iconblock__sample" style={style}/>;
        case 'DotsThreeVertical':
          return <EntypoDotsThreeVertical className="iconblock__sample" style={style}/>;
        case 'DotsTwoHorizontal':
          return <EntypoDotsTwoHorizontal className="iconblock__sample" style={style}/>;
        case 'DotsTwoVertical':
          return <EntypoDotsTwoVertical className="iconblock__sample" style={style}/>;
        case 'Download':
          return <EntypoDownload className="iconblock__sample" style={style}/>;
        case 'Dribbble':
          return <EntypoDribbble className="iconblock__sample" style={style}/>;
        case 'DribbbleWithCircle':
          return <EntypoDribbbleWithCircle className="iconblock__sample" style={style}/>;
        case 'Drink':
          return <EntypoDrink className="iconblock__sample" style={style}/>;
        case 'Drive':
          return <EntypoDrive className="iconblock__sample" style={style}/>;
        case 'Drop':
          return <EntypoDrop className="iconblock__sample" style={style}/>;
        case 'Dropbox':
          return <EntypoDropbox className="iconblock__sample" style={style}/>;
        case 'Edit':
          return <EntypoEdit className="iconblock__sample" style={style}/>;
        case 'Email':
          return <EntypoEmail className="iconblock__sample" style={style}/>;
        case 'EmojiFlirt':
          return <EntypoEmojiFlirt className="iconblock__sample" style={style}/>;
        case 'EmojiHappy':
          return <EntypoEmojiHappy className="iconblock__sample" style={style}/>;
        case 'EmojiNeutral':
          return <EntypoEmojiNeutral className="iconblock__sample" style={style}/>;
        case 'EmojiSad':
          return <EntypoEmojiSad className="iconblock__sample" style={style}/>;
        case 'Erase':
          return <EntypoErase className="iconblock__sample" style={style}/>;
        case 'Eraser':
          return <EntypoEraser className="iconblock__sample" style={style}/>;
        case 'Evernote':
          return <EntypoEvernote className="iconblock__sample" style={style}/>;
        case 'Export':
          return <EntypoExport className="iconblock__sample" style={style}/>;
        case 'Eye':
          return <EntypoEye className="iconblock__sample" style={style}/>;
        case 'EyeWithLine':
          return <EntypoEyeWithLine className="iconblock__sample" style={style}/>;
        case 'Facebook':
          return <EntypoFacebook className="iconblock__sample" style={style}/>;
        case 'FacebookWithCircle':
          return <EntypoFacebookWithCircle className="iconblock__sample" style={style}/>;
        case 'Feather':
          return <EntypoFeather className="iconblock__sample" style={style}/>;
        case 'Fingerprint':
          return <EntypoFingerprint className="iconblock__sample" style={style}/>;
        case 'Flag':
          return <EntypoFlag className="iconblock__sample" style={style}/>;
        case 'Flash':
          return <EntypoFlash className="iconblock__sample" style={style}/>;
        case 'Flashlight':
          return <EntypoFlashlight className="iconblock__sample" style={style}/>;
        case 'FlatBrush':
          return <EntypoFlatBrush className="iconblock__sample" style={style}/>;
        case 'Flattr':
          return <EntypoFlattr className="iconblock__sample" style={style}/>;
        case 'Flickr':
          return <EntypoFlickr className="iconblock__sample" style={style}/>;
        case 'FlickrWithCircle':
          return <EntypoFlickrWithCircle className="iconblock__sample" style={style}/>;
        case 'FlowBranch':
          return <EntypoFlowBranch className="iconblock__sample" style={style}/>;
        case 'FlowCascade':
          return <EntypoFlowCascade className="iconblock__sample" style={style}/>;
        case 'FlowLine':
          return <EntypoFlowLine className="iconblock__sample" style={style}/>;
        case 'FlowParallel':
          return <EntypoFlowParallel className="iconblock__sample" style={style}/>;
        case 'FlowTree':
          return <EntypoFlowTree className="iconblock__sample" style={style}/>;
        case 'Flower':
          return <EntypoFlower className="iconblock__sample" style={style}/>;
        case 'Folder':
          return <EntypoFolder className="iconblock__sample" style={style}/>;
        case 'FolderImages':
          return <EntypoFolderImages className="iconblock__sample" style={style}/>;
        case 'FolderMusic':
          return <EntypoFolderMusic className="iconblock__sample" style={style}/>;
        case 'FolderVideo':
          return <EntypoFolderVideo className="iconblock__sample" style={style}/>;
        case 'Forward':
          return <EntypoForward className="iconblock__sample" style={style}/>;
        case 'Foursquare':
          return <EntypoFoursquare className="iconblock__sample" style={style}/>;
        case 'Funnel':
          return <EntypoFunnel className="iconblock__sample" style={style}/>;
        case 'GameController':
          return <EntypoGameController className="iconblock__sample" style={style}/>;
        case 'Gauge':
          return <EntypoGauge className="iconblock__sample" style={style}/>;
        case 'Github':
          return <EntypoGithub className="iconblock__sample" style={style}/>;
        case 'GithubWithCircle':
          return <EntypoGithubWithCircle className="iconblock__sample" style={style}/>;
        case 'Globe':
          return <EntypoGlobe className="iconblock__sample" style={style}/>;
        case 'GoogleDrive':
          return <EntypoGoogleDrive className="iconblock__sample" style={style}/>;
        case 'GoogleHangouts':
          return <EntypoGoogleHangouts className="iconblock__sample" style={style}/>;
        case 'GooglePlay':
          return <EntypoGooglePlay className="iconblock__sample" style={style}/>;
        case 'Googleplus':
          return <EntypoGoogleplus className="iconblock__sample" style={style}/>;
        case 'GoogleplusWithCircle':
          return <EntypoGoogleplusWithCircle className="iconblock__sample" style={style}/>;
        case 'GraduationCap':
          return <EntypoGraduationCap className="iconblock__sample" style={style}/>;
        case 'Grid':
          return <EntypoGrid className="iconblock__sample" style={style}/>;
        case 'Grooveshark':
          return <EntypoGrooveshark className="iconblock__sample" style={style}/>;
        case 'HairCross':
          return <EntypoHairCross className="iconblock__sample" style={style}/>;
        case 'Hand':
          return <EntypoHand className="iconblock__sample" style={style}/>;
        case 'Heart':
          return <EntypoHeart className="iconblock__sample" style={style}/>;
        case 'HeartOutlined':
          return <EntypoHeartOutlined className="iconblock__sample" style={style}/>;
        case 'Help':
          return <EntypoHelp className="iconblock__sample" style={style}/>;
        case 'HelpWithCircle':
          return <EntypoHelpWithCircle className="iconblock__sample" style={style}/>;
        case 'Home':
          return <EntypoHome className="iconblock__sample" style={style}/>;
        case 'HourGlass':
          return <EntypoHourGlass className="iconblock__sample" style={style}/>;
        case 'Houzz':
          return <EntypoHouzz className="iconblock__sample" style={style}/>;
        case 'Icloud':
          return <EntypoIcloud className="iconblock__sample" style={style}/>;
        case 'Image':
          return <EntypoImage className="iconblock__sample" style={style}/>;
        case 'ImageInverted':
          return <EntypoImageInverted className="iconblock__sample" style={style}/>;
        case 'Images':
          return <EntypoImages className="iconblock__sample" style={style}/>;
        case 'Inbox':
          return <EntypoInbox className="iconblock__sample" style={style}/>;
        case 'Infinity':
          return <EntypoInfinity className="iconblock__sample" style={style}/>;
        case 'Info':
          return <EntypoInfo className="iconblock__sample" style={style}/>;
        case 'InfoWithCircle':
          return <EntypoInfoWithCircle className="iconblock__sample" style={style}/>;
        case 'Instagram':
          return <EntypoInstagram className="iconblock__sample" style={style}/>;
        case 'InstagramWithCircle':
          return <EntypoInstagramWithCircle className="iconblock__sample" style={style}/>;
        case 'Install':
          return <EntypoInstall className="iconblock__sample" style={style}/>;
        case 'Key':
          return <EntypoKey className="iconblock__sample" style={style}/>;
        case 'Keyboard':
          return <EntypoKeyboard className="iconblock__sample" style={style}/>;
        case 'LabFlask':
          return <EntypoLabFlask className="iconblock__sample" style={style}/>;
        case 'Landline':
          return <EntypoLandline className="iconblock__sample" style={style}/>;
        case 'Language':
          return <EntypoLanguage className="iconblock__sample" style={style}/>;
        case 'Laptop':
          return <EntypoLaptop className="iconblock__sample" style={style}/>;
        case 'Lastfm':
          return <EntypoLastfm className="iconblock__sample" style={style}/>;
        case 'LastfmWithCircle':
          return <EntypoLastfmWithCircle className="iconblock__sample" style={style}/>;
        case 'Layers':
          return <EntypoLayers className="iconblock__sample" style={style}/>;
        case 'Leaf':
          return <EntypoLeaf className="iconblock__sample" style={style}/>;
        case 'LevelDown':
          return <EntypoLevelDown className="iconblock__sample" style={style}/>;
        case 'LevelUp':
          return <EntypoLevelUp className="iconblock__sample" style={style}/>;
        case 'Lifebuoy':
          return <EntypoLifebuoy className="iconblock__sample" style={style}/>;
        case 'LightBulb':
          return <EntypoLightBulb className="iconblock__sample" style={style}/>;
        case 'LightDown':
          return <EntypoLightDown className="iconblock__sample" style={style}/>;
        case 'LightUp':
          return <EntypoLightUp className="iconblock__sample" style={style}/>;
        case 'LineGraph':
          return <EntypoLineGraph className="iconblock__sample" style={style}/>;
        case 'Link':
          return <EntypoLink className="iconblock__sample" style={style}/>;
        case 'Linkedin':
          return <EntypoLinkedin className="iconblock__sample" style={style}/>;
        case 'LinkedinWithCircle':
          return <EntypoLinkedinWithCircle className="iconblock__sample" style={style}/>;
        case 'List':
          return <EntypoList className="iconblock__sample" style={style}/>;
        case 'Location':
          return <EntypoLocation className="iconblock__sample" style={style}/>;
        case 'LocationPin':
          return <EntypoLocationPin className="iconblock__sample" style={style}/>;
        case 'Lock':
          return <EntypoLock className="iconblock__sample" style={style}/>;
        case 'LockOpen':
          return <EntypoLockOpen className="iconblock__sample" style={style}/>;
        case 'LogOut':
          return <EntypoLogOut className="iconblock__sample" style={style}/>;
        case 'Login':
          return <EntypoLogin className="iconblock__sample" style={style}/>;
        case 'Loop':
          return <EntypoLoop className="iconblock__sample" style={style}/>;
        case 'Magnet':
          return <EntypoMagnet className="iconblock__sample" style={style}/>;
        case 'MagnifyingGlass':
          return <EntypoMagnifyingGlass className="iconblock__sample" style={style}/>;
        case 'Mail':
          return <EntypoMail className="iconblock__sample" style={style}/>;
        case 'MailWithCircle':
          return <EntypoMailWithCircle className="iconblock__sample" style={style}/>;
        case 'Man':
          return <EntypoMan className="iconblock__sample" style={style}/>;
        case 'Map':
          return <EntypoMap className="iconblock__sample" style={style}/>;
        case 'Mask':
          return <EntypoMask className="iconblock__sample" style={style}/>;
        case 'Medal':
          return <EntypoMedal className="iconblock__sample" style={style}/>;
        case 'Medium':
          return <EntypoMedium className="iconblock__sample" style={style}/>;
        case 'MediumWithCircle':
          return <EntypoMediumWithCircle className="iconblock__sample" style={style}/>;
        case 'Megaphone':
          return <EntypoMegaphone className="iconblock__sample" style={style}/>;
        case 'Menu':
          return <EntypoMenu className="iconblock__sample" style={style}/>;
        case 'Merge':
          return <EntypoMerge className="iconblock__sample" style={style}/>;
        case 'Message':
          return <EntypoMessage className="iconblock__sample" style={style}/>;
        case 'Mic':
          return <EntypoMic className="iconblock__sample" style={style}/>;
        case 'Minus':
          return <EntypoMinus className="iconblock__sample" style={style}/>;
        case 'Mixi':
          return <EntypoMixi className="iconblock__sample" style={style}/>;
        case 'Mobile':
          return <EntypoMobile className="iconblock__sample" style={style}/>;
        case 'ModernMic':
          return <EntypoModernMic className="iconblock__sample" style={style}/>;
        case 'Moon':
          return <EntypoMoon className="iconblock__sample" style={style}/>;
        case 'Mouse':
          return <EntypoMouse className="iconblock__sample" style={style}/>;
        case 'MousePointer':
          return <EntypoMousePointer className="iconblock__sample" style={style}/>;
        case 'Music':
          return <EntypoMusic className="iconblock__sample" style={style}/>;
        case 'Network':
          return <EntypoNetwork className="iconblock__sample" style={style}/>;
        case 'New':
          return <EntypoNew className="iconblock__sample" style={style}/>;
        case 'NewMessage':
          return <EntypoNewMessage className="iconblock__sample" style={style}/>;
        case 'News':
          return <EntypoNews className="iconblock__sample" style={style}/>;
        case 'Newsletter':
          return <EntypoNewsletter className="iconblock__sample" style={style}/>;
        case 'Note':
          return <EntypoNote className="iconblock__sample" style={style}/>;
        case 'Notification':
          return <EntypoNotification className="iconblock__sample" style={style}/>;
        case 'NotificationsOff':
          return <EntypoNotificationsOff className="iconblock__sample" style={style}/>;
        case 'OldMobile':
          return <EntypoOldMobile className="iconblock__sample" style={style}/>;
        case 'OldPhone':
          return <EntypoOldPhone className="iconblock__sample" style={style}/>;
        case 'Onedrive':
          return <EntypoOnedrive className="iconblock__sample" style={style}/>;
        case 'OpenBook':
          return <EntypoOpenBook className="iconblock__sample" style={style}/>;
        case 'Palette':
          return <EntypoPalette className="iconblock__sample" style={style}/>;
        case 'PaperPlane':
          return <EntypoPaperPlane className="iconblock__sample" style={style}/>;
        case 'Paypal':
          return <EntypoPaypal className="iconblock__sample" style={style}/>;
        case 'Pencil':
          return <EntypoPencil className="iconblock__sample" style={style}/>;
        case 'Phone':
          return <EntypoPhone className="iconblock__sample" style={style}/>;
        case 'Picasa':
          return <EntypoPicasa className="iconblock__sample" style={style}/>;
        case 'PieChart':
          return <EntypoPieChart className="iconblock__sample" style={style}/>;
        case 'Pin':
          return <EntypoPin className="iconblock__sample" style={style}/>;
        case 'Pinterest':
          return <EntypoPinterest className="iconblock__sample" style={style}/>;
        case 'PinterestWithCircle':
          return <EntypoPinterestWithCircle className="iconblock__sample" style={style}/>;
        case 'Plus':
          return <EntypoPlus className="iconblock__sample" style={style}/>;
        case 'Popup':
          return <EntypoPopup className="iconblock__sample" style={style}/>;
        case 'PowerPlug':
          return <EntypoPowerPlug className="iconblock__sample" style={style}/>;
        case 'PriceRibbon':
          return <EntypoPriceRibbon className="iconblock__sample" style={style}/>;
        case 'PriceTag':
          return <EntypoPriceTag className="iconblock__sample" style={style}/>;
        case 'Print':
          return <EntypoPrint className="iconblock__sample" style={style}/>;
        case 'ProgressEmpty':
          return <EntypoProgressEmpty className="iconblock__sample" style={style}/>;
        case 'ProgressFull':
          return <EntypoProgressFull className="iconblock__sample" style={style}/>;
        case 'ProgressOne':
          return <EntypoProgressOne className="iconblock__sample" style={style}/>;
        case 'ProgressTwo':
          return <EntypoProgressTwo className="iconblock__sample" style={style}/>;
        case 'Publish':
          return <EntypoPublish className="iconblock__sample" style={style}/>;
        case 'Qq':
          return <EntypoQq className="iconblock__sample" style={style}/>;
        case 'QqWithCircle':
          return <EntypoQqWithCircle className="iconblock__sample" style={style}/>;
        case 'Quote':
          return <EntypoQuote className="iconblock__sample" style={style}/>;
        case 'Radio':
          return <EntypoRadio className="iconblock__sample" style={style}/>;
        case 'Raft':
          return <EntypoRaft className="iconblock__sample" style={style}/>;
        case 'RaftWithCircle':
          return <EntypoRaftWithCircle className="iconblock__sample" style={style}/>;
        case 'Rainbow':
          return <EntypoRainbow className="iconblock__sample" style={style}/>;
        case 'Rdio':
          return <EntypoRdio className="iconblock__sample" style={style}/>;
        case 'RdioWithCircle':
          return <EntypoRdioWithCircle className="iconblock__sample" style={style}/>;
        case 'RemoveUser':
          return <EntypoRemoveUser className="iconblock__sample" style={style}/>;
        case 'Renren':
          return <EntypoRenren className="iconblock__sample" style={style}/>;
        case 'Reply':
          return <EntypoReply className="iconblock__sample" style={style}/>;
        case 'ReplyAll':
          return <EntypoReplyAll className="iconblock__sample" style={style}/>;
        case 'Resize100':
          return <EntypoResize100 className="iconblock__sample" style={style}/>;
        case 'ResizeFullScreen':
          return <EntypoResizeFullScreen className="iconblock__sample" style={style}/>;
        case 'Retweet':
          return <EntypoRetweet className="iconblock__sample" style={style}/>;
        case 'Rocket':
          return <EntypoRocket className="iconblock__sample" style={style}/>;
        case 'RoundBrush':
          return <EntypoRoundBrush className="iconblock__sample" style={style}/>;
        case 'Rss':
          return <EntypoRss className="iconblock__sample" style={style}/>;
        case 'Ruler':
          return <EntypoRuler className="iconblock__sample" style={style}/>;
        case 'Save':
          return <EntypoSave className="iconblock__sample" style={style}/>;
        case 'Scissors':
          return <EntypoScissors className="iconblock__sample" style={style}/>;
        case 'Scribd':
          return <EntypoScribd className="iconblock__sample" style={style}/>;
        case 'SelectArrows':
          return <EntypoSelectArrows className="iconblock__sample" style={style}/>;
        case 'Share':
          return <EntypoShare className="iconblock__sample" style={style}/>;
        case 'ShareAlternative':
          return <EntypoShareAlternative className="iconblock__sample" style={style}/>;
        case 'Shareable':
          return <EntypoShareable className="iconblock__sample" style={style}/>;
        case 'Shield':
          return <EntypoShield className="iconblock__sample" style={style}/>;
        case 'Shop':
          return <EntypoShop className="iconblock__sample" style={style}/>;
        case 'ShoppingBag':
          return <EntypoShoppingBag className="iconblock__sample" style={style}/>;
        case 'ShoppingBasket':
          return <EntypoShoppingBasket className="iconblock__sample" style={style}/>;
        case 'ShoppingCart':
          return <EntypoShoppingCart className="iconblock__sample" style={style}/>;
        case 'Shuffle':
          return <EntypoShuffle className="iconblock__sample" style={style}/>;
        case 'Signal':
          return <EntypoSignal className="iconblock__sample" style={style}/>;
        case 'SinaWeibo':
          return <EntypoSinaWeibo className="iconblock__sample" style={style}/>;
        case 'Skype':
          return <EntypoSkype className="iconblock__sample" style={style}/>;
        case 'SkypeWithCircle':
          return <EntypoSkypeWithCircle className="iconblock__sample" style={style}/>;
        case 'Slideshare':
          return <EntypoSlideshare className="iconblock__sample" style={style}/>;
        case 'Smashing':
          return <EntypoSmashing className="iconblock__sample" style={style}/>;
        case 'Sound':
          return <EntypoSound className="iconblock__sample" style={style}/>;
        case 'SoundMix':
          return <EntypoSoundMix className="iconblock__sample" style={style}/>;
        case 'SoundMute':
          return <EntypoSoundMute className="iconblock__sample" style={style}/>;
        case 'Soundcloud':
          return <EntypoSoundcloud className="iconblock__sample" style={style}/>;
        case 'SportsClub':
          return <EntypoSportsClub className="iconblock__sample" style={style}/>;
        case 'Spotify':
          return <EntypoSpotify className="iconblock__sample" style={style}/>;
        case 'SpotifyWithCircle':
          return <EntypoSpotifyWithCircle className="iconblock__sample" style={style}/>;
        case 'Spreadsheet':
          return <EntypoSpreadsheet className="iconblock__sample" style={style}/>;
        case 'SquaredCross':
          return <EntypoSquaredCross className="iconblock__sample" style={style}/>;
        case 'SquaredMinus':
          return <EntypoSquaredMinus className="iconblock__sample" style={style}/>;
        case 'SquaredPlus':
          return <EntypoSquaredPlus className="iconblock__sample" style={style}/>;
        case 'Star':
          return <EntypoStar className="iconblock__sample" style={style}/>;
        case 'StarOutlined':
          return <EntypoStarOutlined className="iconblock__sample" style={style}/>;
        case 'Stopwatch':
          return <EntypoStopwatch className="iconblock__sample" style={style}/>;
        case 'Stumbleupon':
          return <EntypoStumbleupon className="iconblock__sample" style={style}/>;
        case 'StumbleuponWithCircle':
          return <EntypoStumbleuponWithCircle className="iconblock__sample" style={style}/>;
        case 'Suitcase':
          return <EntypoSuitcase className="iconblock__sample" style={style}/>;
        case 'Swap':
          return <EntypoSwap className="iconblock__sample" style={style}/>;
        case 'Swarm':
          return <EntypoSwarm className="iconblock__sample" style={style}/>;
        case 'Sweden':
          return <EntypoSweden className="iconblock__sample" style={style}/>;
        case 'Switch':
          return <EntypoSwitch className="iconblock__sample" style={style}/>;
        case 'Tablet':
          return <EntypoTablet className="iconblock__sample" style={style}/>;
        case 'TabletMobileCombo':
          return <EntypoTabletMobileCombo className="iconblock__sample" style={style}/>;
        case 'Tag':
          return <EntypoTag className="iconblock__sample" style={style}/>;
        case 'Text':
          return <EntypoText className="iconblock__sample" style={style}/>;
        case 'TextDocument':
          return <EntypoTextDocument className="iconblock__sample" style={style}/>;
        case 'TextDocumentInverted':
          return <EntypoTextDocumentInverted className="iconblock__sample" style={style}/>;
        case 'Thermometer':
          return <EntypoThermometer className="iconblock__sample" style={style}/>;
        case 'ThumbsDown':
          return <EntypoThumbsDown className="iconblock__sample" style={style}/>;
        case 'ThumbsUp':
          return <EntypoThumbsUp className="iconblock__sample" style={style}/>;
        case 'ThunderCloud':
          return <EntypoThunderCloud className="iconblock__sample" style={style}/>;
        case 'Ticket':
          return <EntypoTicket className="iconblock__sample" style={style}/>;
        case 'TimeSlot':
          return <EntypoTimeSlot className="iconblock__sample" style={style}/>;
        case 'Tools':
          return <EntypoTools className="iconblock__sample" style={style}/>;
        case 'TrafficCone':
          return <EntypoTrafficCone className="iconblock__sample" style={style}/>;
        case 'Trash':
          return <EntypoTrash className="iconblock__sample" style={style}/>;
        case 'Tree':
          return <EntypoTree className="iconblock__sample" style={style}/>;
        case 'TriangleDown':
          return <EntypoTriangleDown className="iconblock__sample" style={style}/>;
        case 'TriangleLeft':
          return <EntypoTriangleLeft className="iconblock__sample" style={style}/>;
        case 'TriangleRight':
          return <EntypoTriangleRight className="iconblock__sample" style={style}/>;
        case 'TriangleUp':
          return <EntypoTriangleUp className="iconblock__sample" style={style}/>;
        case 'Tripadvisor':
          return <EntypoTripadvisor className="iconblock__sample" style={style}/>;
        case 'Trophy':
          return <EntypoTrophy className="iconblock__sample" style={style}/>;
        case 'Tumblr':
          return <EntypoTumblr className="iconblock__sample" style={style}/>;
        case 'TumblrWithCircle':
          return <EntypoTumblrWithCircle className="iconblock__sample" style={style}/>;
        case 'Tv':
          return <EntypoTv className="iconblock__sample" style={style}/>;
        case 'Twitter':
          return <EntypoTwitter className="iconblock__sample" style={style}/>;
        case 'TwitterWithCircle':
          return <EntypoTwitterWithCircle className="iconblock__sample" style={style}/>;
        case 'Typing':
          return <EntypoTyping className="iconblock__sample" style={style}/>;
        case 'Uninstall':
          return <EntypoUninstall className="iconblock__sample" style={style}/>;
        case 'Unread':
          return <EntypoUnread className="iconblock__sample" style={style}/>;
        case 'Untag':
          return <EntypoUntag className="iconblock__sample" style={style}/>;
        case 'Upload':
          return <EntypoUpload className="iconblock__sample" style={style}/>;
        case 'UploadToCloud':
          return <EntypoUploadToCloud className="iconblock__sample" style={style}/>;
        case 'User':
          return <EntypoUser className="iconblock__sample" style={style}/>;
        case 'Users':
          return <EntypoUsers className="iconblock__sample" style={style}/>;
        case 'VCard':
          return <EntypoVCard className="iconblock__sample" style={style}/>;
        case 'Video':
          return <EntypoVideo className="iconblock__sample" style={style}/>;
        case 'VideoCamera':
          return <EntypoVideoCamera className="iconblock__sample" style={style}/>;
        case 'Vimeo':
          return <EntypoVimeo className="iconblock__sample" style={style}/>;
        case 'VimeoWithCircle':
          return <EntypoVimeoWithCircle className="iconblock__sample" style={style}/>;
        case 'Vine':
          return <EntypoVine className="iconblock__sample" style={style}/>;
        case 'VineWithCircle':
          return <EntypoVineWithCircle className="iconblock__sample" style={style}/>;
        case 'Vinyl':
          return <EntypoVinyl className="iconblock__sample" style={style}/>;
        case 'Vk':
          return <EntypoVk className="iconblock__sample" style={style}/>;
        case 'VkAlternitive':
          return <EntypoVkAlternitive className="iconblock__sample" style={style}/>;
        case 'VkWithCircle':
          return <EntypoVkWithCircle className="iconblock__sample" style={style}/>;
        case 'Voicemail':
          return <EntypoVoicemail className="iconblock__sample" style={style}/>;
        case 'Wallet':
          return <EntypoWallet className="iconblock__sample" style={style}/>;
        case 'Warning':
          return <EntypoWarning className="iconblock__sample" style={style}/>;
        case 'Water':
          return <EntypoWater className="iconblock__sample" style={style}/>;
        case 'WindowsStore':
          return <EntypoWindowsStore className="iconblock__sample" style={style}/>;
        case 'Xing':
          return <EntypoXing className="iconblock__sample" style={style}/>;
        case 'XingWithCircle':
          return <EntypoXingWithCircle className="iconblock__sample" style={style}/>;
        case 'Yelp':
          return <EntypoYelp className="iconblock__sample" style={style}/>;
        case 'Youko':
          return <EntypoYouko className="iconblock__sample" style={style}/>;
        case 'YoukoWithCircle':
          return <EntypoYoukoWithCircle className="iconblock__sample" style={style}/>;
        case 'Youtube':
          return <EntypoYoutube className="iconblock__sample" style={style}/>;
        case 'YoutubeWithCircle':
          return <EntypoYoutubeWithCircle className="iconblock__sample" style={style}/>;
      }
    };

    return (
      <Col className="iconblock__item" md={3} sm={4} data-iconname={this.props.icon} style={styles}>
        <ReturnIcon icon={this.displayText}/>{' '}
        <span className="iconblock__label iconblock__label-small">
          <small ref="sethere"/>
        </span>
      </Col>
    );
  }
}
IconBlock.propTypes = {
  icon: React.PropTypes.string,
  searchFor: React.PropTypes.string
};
IconBlock.defaultProps = {
  icon: 'info',
  searchFor: ''
};

export default EntypoIconDisplay;
