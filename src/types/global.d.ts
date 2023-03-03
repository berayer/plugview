interface Window {
  $loadingBar: import('naive-ui').LoadingBarProviderInst
  $dialog: import('naive-ui').DialogProviderInst
  $message: import('naive-ui').MessageProviderInst
  $notification: import('naive-ui').NotificationProviderInst
  isLoading: boolean
}

interface GlobalMenu {
  path: string
  title: string
  icon?: string
  children?: GlobalMenu[]
}
