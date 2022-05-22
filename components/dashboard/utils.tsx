export interface ListItem{
  name: string,
  icon: any
}

export interface DashboardProps {
  title: string,
  mainListItems: ListItem[],
  secondaryListItems: ListItem[]
}