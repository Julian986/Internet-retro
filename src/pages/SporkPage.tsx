import { useEffect, useState } from 'react'

export default function SporkPage() {
  const [html, setHtml] = useState<string>('')
  useEffect(() => {
    // Intenta cargar el mirror completo si existe; si no, usa el archivo único
    fetch('/spork/index.html')
      .then(r => r.ok ? r.text() : Promise.reject())
      .then(processAndSet)
      .catch(() => fetch('/spork.html').then(r => r.text()).then(processAndSet).catch(() => setHtml('<pre>Unable to load spork mirror</pre>')))
  }, [])

  function processAndSet(source: string) {
    // Extrae el contenido del <body> si existe
    const bodyMatch = source.match(/<body[\s\S]*?>([\s\S]*?)<\/body>/i)
    let content = bodyMatch ? bodyMatch[1] : source
    // Prefija rutas relativas a /spork/
    content = content.replace(/(src|href)=("|')([^"'#:][^"']*)\2/gi, (_m, attr: string, q: string, url: string) => {
      if (url.startsWith('/')) return `${attr}=${q}${url}${q}`
      return `${attr}=${q}/spork/${url}${q}`
    })
    // Inyecta estilos básicos del sitio original
    const styles = [
      '.spork { background:#000000; color:#dfe7e7; }',
      '.spork a { color:#ffff00; }',
      '.spork a:visited { color:#cccc00; }',
      'img[align="left"]{ float:left; }',
      'img[align="right"]{ float:right; }',
    ].join('\n')
    const wrapped = `<style>${styles}</style><div class="spork">${content}</div>`
    setHtml(wrapped)
  }
  return (
    <div style={{ fontFamily: 'Times New Roman, serif', color: '#000000' }} dangerouslySetInnerHTML={{ __html: html }} />
  )
}


