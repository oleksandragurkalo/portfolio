import { useEffect, useState } from 'react'

export function useScrollSpy(ids, topInset = 0) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    function onScroll() {
      const viewportHeight = window.innerHeight
      const atBottom =
        window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 1

      if (atBottom) {
        setActiveId(ids[ids.length - 1])
        return
      }

      let bestId = ids[0]
      let bestVisible = -1

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const visibleTop = Math.max(rect.top, topInset)
        const visibleBottom = Math.min(rect.bottom, viewportHeight)
        const visible = visibleBottom - visibleTop
        if (visible > bestVisible) {
          bestVisible = visible
          bestId = id
        }
      }

      setActiveId(bestId)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topInset])

  return activeId
}
