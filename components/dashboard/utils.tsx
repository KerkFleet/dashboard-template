export interface ListItem{
  name: string,
  icon: any,
  component: any
}

export interface DashboardProps {
  title: string,
  mainListItems: ListItem[],
  secondaryTitle: string,
  secondaryListItems: ListItem[]
}