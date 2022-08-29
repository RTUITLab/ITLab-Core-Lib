export interface useNavigationProps{
  showIcons: boolean;
  activeMenuItem: string | number;
  setActiveMenuItem: (item: string | number) => void;
  lastOpenedItem: string | number;
  setLastOpenedItem: (item: string | number) => void;
  activeItem: string | number;
  setActiveItem: (item: string | number) => void;
}
