export default function Google1998Page() {
  return (
    <div style={{ fontFamily: 'Times New Roman, serif', fontSize: 15 }}>
      <table width="760" cellPadding={0} cellSpacing={0} border={0} style={{ margin: '40px auto 0 auto', textAlign: 'center' }}>
        <tbody>
          <tr>
            <td>
              <img
                src="https://web.archive.org/web/19990504112211im_/http://www.google.com/google.jpg"
                alt="Google!"
                height={110}
                style={{ display: 'block', margin: '0 auto' }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', justifyContent: 'center' }}>
              <table width="420" align="center" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr>
                    <td align="center" style={{ fontSize: 17, padding: '0 4px 0 4px', lineHeight: 1.2 }}>Search the web using Google</td>
                  </tr>
                  <tr>
                    <td align="center" style={{ padding: '0 4px 1px 4px' }}>
                      <input type="text" size={30} style={{
                        background: '#ffffff',
                        border: '1px solid #808080',
                        boxShadow: 'inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080',
                        height: 25,
                        padding: '3px 4px',
                        fontSize: 15
                      }} />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style={{ padding: '0 4px 4px 4px' }}>
                      <input type="submit" value="Google Search" className="g99-btn" style={{ padding: '1px 8px', fontSize: 13, marginRight: 6 }} />
                      <input type="submit" value="I'm feeling lucky" className="g99-btn" style={{ padding: '1px 8px', fontSize: 13 }} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 8 }}><a href="#" style={{ color: '#0000EE', textDecoration: 'underline', fontSize: 16 }}>More Google!</a></td>
          </tr>
          <tr>
            <td style={{ paddingTop: 12, fontSize: 12 }}>Copyright ©1999 Google Inc.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


