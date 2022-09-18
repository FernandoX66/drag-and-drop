type Theme =
  | 'orange'
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'lightblue'
  | 'gray';

export interface Tag {
  label: string;
  value: string;
  theme: Theme;
}
