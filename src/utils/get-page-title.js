import defaultSettings from '@/settings'

const title = defaultSettings.title || '智能交互阅读书库'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
