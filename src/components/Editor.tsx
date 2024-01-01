import { useEffect, useState } from 'react'
import logo from "../codepen.png"
import useLocalStorage from '../storage';
function Editor() {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [codepenCode, setCodepenCode] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCodepenCode(`
            <html>
            <style>${css}</style>
            <script>${js}</script>
            <body>${html}</body>
            </html>
        `)
        }, 200);

        return () => clearTimeout(timeout);
    }, [html, css, js]);


    return (
        <div className='wrapper'>
            <div className="header">
                <img src={logo} alt="" />
                <span>Codepen</span>
            </div>
            <div className='input-cover'>
                <textarea className="input" value={html} placeholder="HTML" onChange={(e) => { setHtml(e.target.value) }} />
                <textarea className="input" value={css} placeholder="CSS" onChange={(e) => { setCss(e.target.value) }} />
                <textarea className="input" value={js} placeholder="JS" onChange={(e) => { setJs(e.target.value) }} />
            </div>
            <div className="output">
                <iframe srcDoc={codepenCode} sandbox='allow-scripts' width="100%" height="100%" />
            </div>
        </div>
    )
}

export default Editor;