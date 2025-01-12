interface RateLimitModal {
  show: boolean;
  timeout: number;
  start: Date;
}

interface ReadPost {
  postId: string;
  numComments: number;
  time: Date;
}

export type UserPostType = "links" | "comments";

export interface MainContextType {
  nsfw: boolean | undefined;
  toggleNSFW: () => void;
  loginModal: boolean;
  toggleLoginModal: (forceOn?: boolean) => void;
  premiumModal: boolean;
  setPremiumModal: React.Dispatch<React.SetStateAction<boolean>>;
  rateLimitModal: RateLimitModal;
  setRateLimitModal: React.Dispatch<React.SetStateAction<RateLimitModal>>;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  autoplay: boolean | undefined;
  toggleAutoplay: () => void;
  hoverplay: boolean | undefined;
  toggleHoverPlay: () => void;
  columns: number;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  wideUI: boolean | undefined;
  syncWideUI: boolean;
  postWideUI: boolean | undefined;
  setPostWideUI: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setSyncWideUI: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSyncWideUI: () => void;
  togglePostWideUI: () => void;
  saveWideUI: boolean | undefined;
  toggleWideUI: () => void;
  setWideUI: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  columnOverride: number | undefined;
  setColumnOverride: React.Dispatch<React.SetStateAction<number | undefined>>;
  mediaOnly: boolean | undefined;
  setMediaOnly: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  toggleMediaOnly: () => void;
  pauseAll: boolean;
  setPauseAll: React.Dispatch<React.SetStateAction<boolean>>;
  audioOnHover: boolean | undefined;
  setaudioOnHover: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  toggleAudioOnHover: () => void;
  cardStyle: string;
  setCardStyle: React.Dispatch<React.SetStateAction<string>>;
  posts: any[]; //  unsure of post type
  setPosts: React.Dispatch<React.SetStateAction<any[]>>; // unsure of post type
  gAfter: string;
  setGAfter: React.Dispatch<React.SetStateAction<string>>;
  postNum: number;
  setPostNum: React.Dispatch<React.SetStateAction<number>>;
  localSubs: string[];
  localFavoriteSubs: string[];
  subToSub: (action: "sub" | "unsub", sub: string) => Promise<boolean>;
  favoriteLocalSub: (makeFavorite: boolean, subname: string) => Promise<void>;
  token: string | undefined; //unsure of token type
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>; //unsure of token type
  updateLikes: (i: number, like: boolean | null) => void;
  updateSaves: (i: number, save: boolean | null) => void;
  updateHidden: (i: number, hidden: boolean) => void;
  fastRefresh: number;
  setFastRefresh: React.Dispatch<React.SetStateAction<number>>;
  ready: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  toggleFilter: (filter: string) => void;
  seenFilter: boolean | undefined;
  readFilter: boolean | undefined;
  imgFilter: boolean | undefined;
  vidFilter: boolean | undefined;
  galFilter: boolean | undefined;
  linkFilter: boolean | undefined;
  selfFilter: boolean | undefined;
  imgResExactFilter: boolean;
  imgResFilter: boolean;
  imgLandscapeFilter: boolean | undefined;
  imgPortraitFilter: boolean | undefined;
  imgResXFilter: number;
  imgResYFilter: number;
  scoreFilter: boolean;
  scoreGreater: boolean;
  scoreFilterNum: number | undefined;
  replyFocus: boolean;
  setReplyFocus: React.Dispatch<React.SetStateAction<boolean>>;
  userPostType: UserPostType;
  toggleUserPostType: () => void;
  readPosts: Record<string, ReadPost>;
  readPostsChange: number;
  addReadPost: (post: { postId: string; numComments: number }) => void;
  bulkAddReadPosts: (posts: { postId: string; numComments: number }[]) => void;
  toggleReadPost: (post: {
    postId: string;
    numComments: number;
  }) => Promise<void>;
  clearReadPosts: () => Promise<boolean>;
  postOpen: boolean;
  setPostOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ribbonCollapseOnly: boolean | undefined;
  toggleRibbonCollapseOnly: () => void;

  collapseChildrenOnly: boolean | undefined;
  toggleCollapseChildrenOnly: () => void;
  disableOverlay: boolean | undefined;
  toggleDisableOverlay: () => void;
  defaultCollapseChildren: boolean | undefined;
  toggleDefaultCollapseChildren: () => void;
  showUserIcons: boolean | undefined;
  toggleShowUserIcons: () => void;
  showAwardings: boolean | undefined;
  toggleShowAwardings: () => void;
  showFlairs: boolean | undefined;
  toggleShowFlairs: () => void;
  showUserFlairs: boolean | undefined;
  toggleShowUserFlairs: () => void;
  expandedSubPane: boolean | undefined;
  toggleExpandedSubPane: () => void;
  infiniteLoading: boolean | undefined;
  toggleInfiniteLoading: () => void;
  dimRead: boolean | undefined;
  toggleDimRead: () => void;
  autoRead: boolean | undefined;
  toggleAutoRead: () => void;

  autoSeen: boolean | undefined;
  toggleAutoSeen: () => void;
  disableEmbeds: boolean | undefined;
  toggleDisableEmbeds: () => void;
  preferEmbeds: boolean | undefined;
  togglePreferEmbeds: () => void;
  embedsEverywhere: boolean | undefined;
  toggleEmbedsEverywhere: () => void;
  updateFilters: number;
  setUpdateFilters: React.Dispatch<React.SetStateAction<number>>;
  applyFilters: (filters?: {
    seenFilter: boolean | undefined;
    readFilter: boolean | undefined;
    imgFilter: boolean | undefined;
    vidFilter: boolean | undefined;
    selfFilter: boolean | undefined;
    linkFilter: boolean | undefined;
    imgPortraitFilter: boolean | undefined;
    imgLandscapeFilter: boolean | undefined;
  }) => void;
  filtersApplied: number;
  progressKey: number;
  setProgressKey: React.Dispatch<React.SetStateAction<number>>;
  safeSearch: boolean;
  setSafeSearch: React.Dispatch<React.SetStateAction<boolean>>;
  volume: number | undefined;
  setVolume: React.Dispatch<React.SetStateAction<number | undefined>>;
  autoRefreshComments: boolean | undefined;
  setAutoRefreshComments: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  autoRefreshFeed: boolean | undefined;
  setAutoRefreshFeed: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  askToUpdateFeed: boolean | undefined;
  setAskToUpdateFeed: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  refreshOnFocus: boolean | undefined;
  setRefreshOnFocus: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  fastRefreshInterval: number | undefined;
  setFastRefreshInterval: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  slowRefreshInterval: number | undefined;
  setSlowRefreshInterval: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  autoPlayInterval: number | undefined;
  setAutoPlayInterval: React.Dispatch<React.SetStateAction<number | undefined>>;
  waitForVidInterval: boolean | undefined;
  setWaitForVidInterval: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  mediaMode: boolean;
  setMediaMode: React.Dispatch<React.SetStateAction<boolean>>;

  autoPlayMode: boolean | undefined;
  setAutoPlayMode: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  defaultSortComments: string | undefined;
  setDefaultSortComments: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;

  compactLinkPics: boolean | undefined;
  toggleCompactLinkPics: () => void;
  uniformHeights: boolean | undefined;
  setUniformHeights: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  highRes: boolean;
  setHighRes: React.Dispatch<React.SetStateAction<boolean>>;
  autoHideNav: boolean | undefined;
  toggleAutoHideNav: () => void;
  disableSideBySide: boolean | undefined;
  toggleDisableSideBySide: () => void;
  preferSideBySide: boolean | undefined;
  togglePreferSideBySide: () => void;
  autoCollapseComments: boolean | undefined;
  toggleAutoCollapseComments: () => void;
}
