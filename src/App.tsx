import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { projects, skills, education, type Project, certificate } from './data'

const KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined
const BMC = (import.meta.env.VITE_BMC_URL as string | undefined) ?? '#'
const GFORM = 'https://docs.google.com/forms/d/e/1FAIpQLSfS4sMYPK6rZV82DfW-2wQafK6M-UgTUQ410HEgNVgZqn5PfQ/formResponse'
const links = ['about', 'skills', 'education', 'portfolio', 'contact']
const socials = [
  { name: 'GitHub', href: 'https://github.com/JinalPatel17',
    d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jinal-patel17/',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Email', href: 'mailto:jinalptl17@gmail.com',
    d: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z' },
]


const H = 'font-bold text-gold-hi [text-shadow:1px_1px_0_#000]'
const still = () => matchMedia('(prefers-reduced-motion: reduce)').matches

function Loader() {
  const [p, setP] = useState(10), [done, setDone] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setP(v => Math.min(v + 8, 90)), 200)
    const fin = () => { setP(100); setTimeout(() => setDone(true), 400) }
    document.readyState === 'complete' ? fin() : addEventListener('load', fin)
    return () => { clearInterval(t); removeEventListener('load', fin) }
  }, [])
  return <>
    <div className="bar" style={{ width: p + '%', opacity: done ? 0 : 1 }} />
    <div className={`fixed inset-0 z-[800] grid place-items-center bg-[#151515] transition-opacity duration-500 ${done ? 'pointer-events-none opacity-0' : ''}`}><div className="loader" /></div>
  </>
}

function Socials({ className = '' }: { className?: string }) {
  return <div className={`flex justify-center gap-4 ${className}`}>{socials.map(s =>
    <a key={s.name} href={s.href} aria-label={s.name} title={s.name} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
      className="grid size-11 place-items-center rounded-full border border-white/30 text-white transition hover:-translate-y-1 hover:border-gold-hi hover:text-gold-hi">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden><path d={s.d} /></svg></a>)}</div>
}

function Nav() {
  const [open, setOpen] = useState(false)
  return <header className="fixed top-0 z-[600] flex w-full justify-between p-4">
   <a href="#top" aria-label="Back to top" className="rounded bg-black p-2"><img src="Public/Icon/android-chrome-192x192.png" alt="JP" className="size-8" /></a>
    <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className={`burger z-[700] rounded bg-black px-3 py-4 ${open ? 'open' : ''}`}><span /><span /><span /></button>
    <nav className={`menu fixed inset-0 z-[650] flex flex-col items-center justify-center gap-6 bg-black/95 text-4xl uppercase tracking-widest transition-opacity ${open ? 'open opacity-100' : 'pointer-events-none opacity-0'}`}>
      {links.map((l, i) => <a key={l} href={`#${l}`} style={{ transitionDelay: open ? i * 80 + 'ms' : '0ms' }} onClick={() => setOpen(false)} className="text-white hover:text-gold-hi">{l}</a>)}
    </nav>
  </header>
}

function BgVideo({ name, className = '' }: { name: string; className?: string }) {
  const r = useRef<HTMLVideoElement>(null)
  useEffect(() => { if (still()) r.current?.pause() }, [])
  return <video ref={r} autoPlay loop muted playsInline preload="metadata" poster={`Public/vds/${name}.jpg`} className={className}>
    <source src={`Public/vds/${name}.webm`} type="video/webm" /><source src={`Public/vds/${name}.mp4`} type="video/mp4" /></video>
}

function Fireflies() {
  const f = useMemo(() => Array.from({ length: 8 }, () => ({ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', '--dx': (Math.random() * 300 - 150) + 'px', '--dy': (Math.random() * 300 - 150) + 'px', '--d': 8 + Math.random() * 10 + 's' }) as CSSProperties), [])
  return <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">{f.map((s, i) => <i key={i} className="fly" style={s} />)}</div>
}

const shadows = (n: number) => Array.from({ length: n }, () => `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`).join(',')

function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'ok'>('idle')
  const layers = useMemo(() => [[1, 700, '50s'], [2, 200, '100s'], [3, 100, '150s']].map(([w, n, t]) => ({ '--s': shadows(n as number), '--t': t, width: w + 'px', height: w + 'px' }) as CSSProperties), [])
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState('sending')
    const fd = new FormData(e.currentTarget)
    try {
      if (!KEY) throw new Error('no key')
      fd.append('access_key', KEY)
      const j = await (await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })).json()
      if (!j.success) throw new Error('rejected')
    } catch { // fallback: Google Form
      const g = new FormData()
      g.append('entry.1141342697', String(fd.get('name'))); g.append('entry.1726958948', String(fd.get('email')))
      g.append('entry.1104091493', String(fd.get('subject'))); g.append('entry.179987403', String(fd.get('message')))
      await fetch(GFORM, { method: 'POST', mode: 'no-cors', body: g }).catch(() => {})
    }
    e.currentTarget.reset(); setState('ok')
  }
  const field = (name: string, label: string, area = false) => <div className="fc">
    {area ? <textarea name={name} rows={4} required /> : <input name={name} type={name === 'email' ? 'email' : 'text'} required />}
    <label>{label.split('').map((c, i) => <span key={i} style={{ transitionDelay: i * 50 + 'ms' }}>{c === ' ' ? '\u00a0' : c}</span>)}</label></div>
  return <section id="contact" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#1b2735,#090a0f)] px-6 py-28">
    {layers.map((s, i) => <div key={i} className="stars" style={s} aria-hidden />)}
    <div className="relative mx-auto flex max-w-3xl flex-col items-center">
      <h2 className={`text-4xl ${H}`}>Contact</h2>
      <p className="mt-3 text-center text-white/70">I'd love to hear from you. Your comments and recommendations are really appreciated.</p>
      <form onSubmit={submit} className="mt-10 bg-panel px-10 py-5">
        {field('name', 'Your name')}{field('email', 'Your email')}{field('subject', 'Subject')}{field('message', 'Your Message', true)}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
        <button disabled={state === 'sending'} className="w-full rounded bg-gold p-4 font-bold shadow-[0_2px_25px_rgb(0,38,255)] active:scale-90">{state === 'sending' ? 'Sending...' : 'Submit'}</button>
        {state === 'ok' && <p role="status" className="mt-4 text-center text-gold-hi">Your message was sent. Thank you!</p>}
      </form>
      <div className="mt-14 grid gap-8 text-center sm:grid-cols-3">
      <div><h3 className="text-sm font-bold tracking-widest text-gold-hi uppercase">Located</h3><a href="https://www.google.com/maps/place/Regina,+SK" target="_blank" rel="noreferrer">Regina, Saskatchewan</a></div>
      <div><h3 className="text-sm font-bold tracking-widest text-gold-hi uppercase">Email</h3><a href="mailto:jinalptl17@gmail.com">Jinalptl17@gmail.com</a></div>
      <div><h3 className="text-sm font-bold tracking-widest text-gold-hi uppercase">Discord</h3><a href="https://discordapp.com/users/502866986221568010" target="_blank" rel="noreferrer">Jinal | COD3X</a></div>
      </div>
      <Socials className="mt-8" />
    </div></section>
}

function Media({ p, className }: { p: Project; className?: string }) {
  if (!p.video) return <img src={p.img} alt={p.title} loading="lazy" className={className} />
  return <video autoPlay={!still()} loop muted playsInline preload="metadata" poster={p.img} className={className}>
    <source src={`${p.video}.webm`} type="video/webm" /><source src={`${p.video}.mp4`} type="video/mp4" /></video>
}

function Portfolio() {
  const [cat, setCat] = useState('All'), [sel, setSel] = useState<Project | null>(null), d = useRef<HTMLDialogElement>(null)
  const list = projects.filter(p => cat === 'All' || p.cat === cat)
  useEffect(() => { sel ? d.current?.showModal() : d.current?.close() }, [sel])
  return <section id="portfolio" className="bg-[radial-gradient(ellipse_at_bottom,#1b2735,#090a0f)] px-6 py-24">
    <h2 className={`text-center text-4xl ${H}`}>Portfolio</h2>
    <div className="my-8 flex flex-wrap justify-center gap-3">{['All', 'Web', 'Data', 'Cloud'].map(c => <button key={c} onClick={() => setCat(c)} className={`rounded-full border border-gold px-5 py-2 text-sm ${cat === c ? 'bg-gold text-black' : 'text-gold-hi hover:bg-gold/20'}`}>{c}</button>)}</div>
    <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(p => <button key={p.title} onClick={() => setSel(p)} className="group relative aspect-video overflow-hidden rounded-lg bg-panel text-left transition hover:-translate-y-2 hover:shadow-[0_12px_30px_#9B700066]">
      <Media p={p} className="size-full object-cover transition duration-500 group-hover:scale-110" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 p-4"><h3 className="font-bold">{p.title}</h3><span className="text-xs uppercase tracking-widest text-gold-hi">{p.cat}</span></div></button>)}</div>
    <dialog ref={d} onClose={() => setSel(null)} onClick={e => e.target === d.current && setSel(null)} className="m-auto w-[min(550px,92vw)] rounded-lg bg-[#1d1d1d] text-white">
      {sel && <><Media p={sel} className="w-full" /><div className="p-6"><h3 className={`text-xl ${H}`}>{sel.title}</h3><p className="my-3 text-white/80">{sel.text}</p>
        <div className="flex gap-3">{sel.link && <a href={sel.link} target="_blank" rel="noreferrer" className="rounded bg-gold px-5 py-2">Details</a>}<button onClick={() => setSel(null)} className="rounded border border-gold px-5 py-2">Close</button></div></div></>}
    </dialog></section>
}

export default function App() {
  return <div id="top">
    <Loader /><Nav />
    <section className="relative grid min-h-screen place-items-center overflow-hidden text-center">
      <BgVideo name="intro" className="absolute inset-0 -z-10 size-full object-cover" /><div className="absolute inset-0 -z-10 bg-[#111]/85" />
      <div className="px-6"><p className="tracking-[.3em] text-gold uppercase">Hello,</p>
        <h1 className="my-4 text-6xl font-bold sm:text-8xl">I'm JINAL</h1>
        <p className="tracking-widest uppercase">Full-Stack Developer | Data Analyst | Cloud Engineer | DevOps | Machine Learning</p>
        <a href="#about" className="mt-8 inline-block border-2 border-white/30 px-8 py-4 text-sm uppercase tracking-widest hover:border-gold-hi hover:text-gold-hi">More about me</a>
        <Socials className="mt-8" /></div>      
    </section>
    <section id="about" className="relative px-6 py-28">
      <BgVideo name="about" className="fixed inset-0 -z-20 size-full object-cover" /><Fireflies />
        <div className="relative mx-auto max-w-4xl bg-panel p-8"><h2 className={`text-4xl ${H}`}>About Me</h2>
        <p className="mt-4 text-lg">I'm a Computer Science graduate who loves turning ideas into working software. I build full-stack web applications, explore data-driven solutions, and work with cloud and DevOps technologies. I learn quickly, collaborate well with others, and enjoy solving problems that create real value. I'm also passionate about blockchain technology and its potential to transform industries through decentralized systems, smart contracts, and digital innovation.</p>
        <p className="mt-4 text-lg">Right now, I'm building personal projects and preparing for the ITIL 4 Foundation certification. I'm always eager to expand my knowledge and connect with others in full-stack development, data analytics, cloud computing, and DevOps.</p>
        <p className="mt-4 text-lg">Alongside this, I work with clients on freelance web development and technology projects, helping businesses build and improve their digital presence. From creating websites and applications to providing technical support, systems analysis, and IT solutions, I enjoy turning complex challenges into practical results.</p>
        <p className="mt-4 text-lg">Need a hand with a project? Looking for a collaborator? Just want to ask something? Send me an email and I'll get back to you.</p>
        <a href="mailto:jinalptl17@gmail.com" className="mt-6 inline-block rounded bg-gold px-6 py-3 font-bold">Email me</a>
        <p className="mt-6 text-gold-hi">Saskatchewan, Canada</p></div>
      {/* <div className="relative mx-auto max-w-3xl bg-panel p-8"><h2 className={`text-4xl ${H}`}>About</h2>
        <p className="mt-4 text-lg">Full-stack developer with a fierce work ethic and an unyielding devotion to self-improvement. I never back down from a challenge that needs solving.</p>
        <p className="mt-4 text-gold-hi">Regina, Saskatchewan</p></div> */}
        
    </section>
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24"><h2 className={`mb-10 text-center text-4xl ${H}`}>Tech Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">{Object.entries(skills).map(([g, items]) => <div key={g} className="bg-panel p-6"><h3 className="mb-4 text-sm font-bold tracking-widest text-gold-hi uppercase">{g}</h3>
        <div className="flex flex-wrap gap-2">{items.map(s => <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-sm transition hover:border-gold-hi hover:text-gold-hi">{s}</span>)}</div></div>)}</div></section>
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className={`mb-10 text-center text-4xl ${H}`}>Education</h2>
      <ol className="space-y-8 border-l-2 border-gold pl-6 bg-panel">{education.map(e => <li key={e.what} className="relative before:absolute before:top-2 before:-left-[31px] before:size-3 before:rounded-full before:bg-gold-hi"><p className="text-sm text-white/60">{e.when}</p><h3 className="font-bold">{e.what}</h3><p className="text-gold-hi">{e.where}<p className="mt-1 text-sm text-white/70">{e.note}</p></p></li>)}</ol>
      <br /> <br />
      <h2 className={`mb-10 text-center text-4xl  ${H}`}>Certifications & Professional Development</h2>
      <ol className="mt-12 space-y-8 border-l-2 border-gold pl-6 bg-panel">{certificate.map(e => <li key={e.what} className="relative before:absolute before:top-2 before:-left-[31px] before:size-3 before:rounded-full before:bg-gold-hi"><p className="text-sm text-white/60">{e.when}</p><h3 className="font-bold">{e.what}</h3><p className="text-gold-hi">{e.where}<p className="mt-1 text-sm text-white/70">{e.note}</p></p></li>)}</ol>
      </section>
    <Portfolio /><Contact />
    {/* <footer className="flex flex-col items-center gap-4 bg-[#1d1d1d] px-6 py-10 text-sm">
      <a href={BMC} target="_blank" rel="noreferrer" className="rounded-full bg-gold-hi px-6 py-3 font-bold text-black transition hover:scale-105">☕ Buy me a coffee</a>
      <p>© {new Date().getFullYear()} Jinal Patel. All rights reserved.</p>
    </footer> */}
    <footer className="flex flex-col items-center gap-3 bg-[#1d1d1d] px-6 py-6 text-center text-sm">
      <a href={BMC} target="_blank" rel="noreferrer" className="rounded-full bg-gold-hi px-5 py-2 font-bold text-black transition hover:scale-105">☕ Buy me a coffee</a>
      <p>© {new Date().getFullYear()} Jinal Patel. All rights reserved. · Designed and built by <a href="https://github.com/JinalPatel17" className="text-gold-hi">Jinal Patel</a></p>
    </footer>
    </div>
    
}
// Designed by Jinal Patel | GitHub:https://github.com/JinalPatel17
