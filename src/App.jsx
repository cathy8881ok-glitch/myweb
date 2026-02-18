import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

// 匯入頁面組件
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Space from './pages/Space'
import Contact from './pages/Contact'

// 導覽列組件 (處理捲動與頁面變換顏色)
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // 是否為首頁 (首頁需要透明導航列)
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // 每次路徑變換時回到頂部
    window.scrollTo(0, 0);
    setMenuOpen(false); // 切換頁面後自動關閉手機選單
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">芳療師 • 綠善生活</Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="切換選單">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">首頁</Link></li>
          <li><Link to="/about">關於我</Link></li>
          <li><Link to="/services">療育與門市服務</Link></li>
          <li><Link to="/space">空間租借</Link></li>
          <li><Link to="/contact">聯絡預約</Link></li>
        </ul>
      </div>
    </nav>
  )
}

// 頁尾組件
function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-info">
            <span className="footer-logo">芳療師 • 綠善生活</span>
            <p>地址：台北市松山區民生東路 (綠善生活會館)</p>
            <p>專業 NAHA 國際證照 | 五感療育 | 空間服務</p>
          </div>
          <div className="footer-cta">
            <h3>開啟您的療育旅程</h3>
            <p>如果您對芳療課程、空間租借或市集有興趣，歡迎聯絡我們。</p>
            <Link to="/contact" className="btn btn-primary">立即預約聯絡</Link>
          </div>
        </div>
        <div className="copyright">
          &copy; 2026 Aroma Living & Green Wellness Club. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/space" element={<Space />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
