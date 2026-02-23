export interface ThemeCardContent {
  label: string;
  srcImg: string;
  tooltip: {
    message: string;
    idColor: string;
  };
}

export interface ThemeCardProps {
  data: ThemeCardContent;
}
