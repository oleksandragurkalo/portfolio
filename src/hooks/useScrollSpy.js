import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 100) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  return activeId
}
