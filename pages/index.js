
export default function Home() {
  const osList = [
    {name: "SUN OS", emoji: "☀️", link: "https://sun-os.vercel.app", color: "#FFA000", desc: "Solar Energy Core"},
    {name: "LUNA OS", emoji: "🌙", link: "https://luna-os.vercel.app", color: "#B0BEC5", desc: "Lunar Base Control"},
    {name: "MARS OS", emoji: "🔴", link: "https://mars-os.vercel.app", color: "#D32F2F", desc: "Colony Management"},
    {name: "JUPITER OS", emoji: "🪐", link: "https://jupiter-os.vercel.app", color: "#F57C00", desc: "Gas Giant Analytics"},
    {name: "SATURN OS", emoji: "💍", link: "https://saturn-os.vercel.app", color: "#FBC02D", desc: "Ring System OS"},
    {name: "VENUS OS", emoji: "♀️", link: "https://venus-os.vercel.app", color: "#E91E63", desc: "Atmospheric Control"},
    {name: "EARTH OS", emoji: "🌍", link: "https://earth-os-ecru.vercel.app", color: "#2E7D32", desc: "Home Base OS"},
    {name: "URANUS OS", emoji: "🔵", link: "https://uranus-os.vercel.app", color: "#0277BD", desc: "Cryogenic Computing"},
    {name: "NEPTUNE OS", emoji: "🔱", link: "https://neptune-os.vercel.app", color: "#0D47A1", desc: "Supersonic Processing"},
  ]

  return (
    <div style={{background: 'linear-gradient(180deg, #000 0%, #1A237E 100%)', color: '#FFF', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial'}}>
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '50px', margin: 0}}>SOLAR SYSTEM OS SUITE 👑</h1>
        <p style={{fontSize: '18px', opacity: 0.9}}>Command Center for 9 Planetary Operating Systems</p>
        <p style={{fontSize: '14px', opacity: 0.7}}>Built by Chandan Jha | Jamalpur, Bihar | 2026</p>
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto'}}>
        {osList.map(os => (
          <a key={os.name} href={os.link} target="_blank" style={{background: os.color, padding: '25px', borderRadius: '15px', textDecoration: 'none', color: '#FFF', transition: 'transform 0.2s'}}>
            <h2 style={{fontSize: '24px', margin: '0 0 10px 0'}}>{os.emoji} {os.name}</h2>
            <p style={{margin: 0, opacity: 0.9}}>{os.desc}</p>
          </a>
        ))}
      </div>

      <div style={{textAlign: 'center', marginTop: '60px', fontSize: '12px', opacity: 0.6}}>
        <p>Disclaimer: For educational purposes only. Not affiliated with any space agency.</p>
      </div>
    </div>
  )
}
