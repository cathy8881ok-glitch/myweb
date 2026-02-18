function About() {
    return (
        <div className="about-page pt-nav">
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" alt="芳療師專業形象" style={{ width: '100%', borderRadius: '20px', boxShadow: '20px 20px 0 var(--secondary-wood)' }} />
                        </div>
                        <div className="about-text">
                            <div className="label">ABOUT ME</div>
                            <h2>專業芳療師與日常美學實踐者</h2>
                            <p>身為具備 NAHA (美國整體芳療協會) 國際證照的芳療師，我專注於將精油與自然之美融入日常生活。在「綠善生活會館」，我不僅提供傳統的芳療諮詢，更致力於推廣「五感療育」。</p>
                            <div className="certifications">
                                <div className="cert-item">✓ NAHA 國際證照資深芳療師</div>
                                <div className="cert-item">✓ 五感療育課程設計師</div>
                                <div className="cert-item">✓ 綠善生活會館駐站芳療講師</div>
                            </div>
                            <p style={{ marginTop: '20px' }}>
                                我們位於台北民生東路，這是一個致力於推廣「綠色、善良、美好」生活的空間。
                                在這裡，我們不僅僅提供服務，更希望能與您分享一種更有溫度的生活方式。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
