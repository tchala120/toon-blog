import ReactGA from 'react-ga'

export const initGA = (): void => {
  ReactGA.initialize(process.env.GA_KEY)
}
export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = ''): void => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false): void => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

function setupGA(): void {
  if (!window.GA_INITIALIZED) {
    initGA()
    window.GA_INITIALIZED = true
  }
  logPageView()
}

export default setupGA
