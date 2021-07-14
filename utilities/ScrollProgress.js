import { isBrowser } from './isBrowser'

export default function ScroollProgress() {
  if (isBrowser()) {
    const currentState = document.body.scrollTop ||
      document.documentElement.scrollTop
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollStatePercentage = (currentState / pageHeight) * 100
    window.document.querySelector('.page-scroll-indicator > .progress').style.width = scrollStatePercentage + '%'
  }

}