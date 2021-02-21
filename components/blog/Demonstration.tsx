import { useState } from 'react'
import cn from 'classnames'

export const Demonstration = (): JSX.Element => {
  const [tapped, setTapped] = useState(false)

  return (
    <button
      type="button"
      className={cn(
        'p-4 rounded outline-none shadow-lg text-center transition duration-300',
        {
          'bg-teal-200 text-teal-900': tapped,
          'bg-purple-600 text-purple-100': !tapped,
        }
      )}
      onClick={() => setTapped(!tapped)}
    >
      🤜 Tap this React Component 🤛
    </button>
  )
}
