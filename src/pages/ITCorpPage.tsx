type Props = { query?: string }

export default function ITCorpPage({ query = 'technology' }: Props) {
  // Página simple estilo 1986: solo HTML básico en JSX (sin CSS)
  const q = query.trim() || 'technology'
  return (
    <div   style={{
        fontFamily: 'Times New Roman, serif',
        color: '#000000',
        marginLeft: 14,
        marginRight: 14
      }}>
      <center>
        <h1 style={{ fontSize: 28, marginBottom: 17 }}>Interrupt Technology Corporation — {q}</h1>
      </center>

      <p>
        This is the home page of Interrupt Technology Corporation. If you are
        looking for another company that calls itself "ITcorp", you'll have to
        try typing the company's full name into a search engine.
      </p>

      <h2 style={{ fontSize: 20 }}>Notes on {q}</h2>

      <p>
        We are a small, privately held software consulting firm. Some visitors
        reach us while researching <b>{q}</b>. From time to time we keep brief
        notes about {q} as it intersects with operating systems and file systems.
      </p>
      <p>
        If you have a need for our services regarding {q}, you may contact
        itcorp at itcorp.com (replacing the "at" with an @ sign).
      </p>

      <h2 style={{ fontSize: 20 }}>Why Is This Web Page So Plain?</h2>

      <p>
        We do not actively seek outside business. This Web page exists primarily
        to satisfy the needs of those who expect every domain to have a Web
        presence. The text is occasionally adjusted to reflect topics visitors
        search for, including {q}.
      </p>
    </div>
  )
}


