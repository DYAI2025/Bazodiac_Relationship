import { footerContent } from "../data/content";

type Props={onNavigate:(path:string)=>void};
export function Footer({onNavigate}:Props){return <footer className="site-footer"><div className="shell footer-grid"><div className="brand-lockup"><span className="wordmark serif-display">Bazodiac</span><span className="sub">Relationships</span></div>{footerContent.groups.map(g=><div key={g.title}><h3>{g.title}</h3><ul>{g.links.map(l=><li key={l.href}><a href={l.href} onClick={e=>{e.preventDefault();onNavigate(l.href)}}>{l.label}</a></li>)}</ul></div>)}</div><p className="footer-disclaimer">{footerContent.disclaimer}</p></footer>}
