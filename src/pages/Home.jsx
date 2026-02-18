import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <header className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=2000')" }}>
                <div className="container">
                    <div className="reveal active">
                        <div className="badge">NAHA 國際認證芳療師</div>
                        <h1>在城市森林中<br />尋回五感的悸動</h1>
                        <p>
                            位於台北民生東路「綠善生活會館」，我們以芳療為核心，
                            結合品茶、蔬食與市集，為您打造一個身心復甦的專業場域。
                        </p>
                        <div className="hero-btns">
                            <Link to="/services" className="btn btn-primary">看所有服務</Link>
                            <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem', borderColor: 'white', color: 'white' }}>立即諮詢</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* 首頁精選亮點 */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>探索綠善生活</h2>
                        <p>我們提供全方位的專業身心靈療育空間</p>
                    </div>
                    <div className="services-grid">
                        <Link to="/services" className="service-card">
                            <div className="service-image">
                                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600" alt="五感芳療" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="service-content">
                                <h3>芳療與五感療育</h3>
                                <p>專業 NAHA 國際證照輔導，結合植物精油的自然純淨力量。</p>
                            </div>
                        </Link>
                        <Link to="/space" className="service-card">
                            <div className="service-image">
                                <img src="https://images.unsplash.com/photo-1545209174-cd1d15765bc6?auto=format&fit=crop&q=80&w=600&v=2" alt="空間租借" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="service-content">
                                <h3>教室與空間租借</h3>
                                <p>民生東路精華地段，寬大且專業的瑜珈、課程與靜心場域。</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
