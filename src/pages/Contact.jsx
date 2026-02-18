function Contact() {
    return (
        <div className="contact-page pt-nav">
            <section className="section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>預約與聯絡</h2>
                        <p>開啟您的療育旅程</p>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="contact-card" style={{ background: 'white', padding: '4rem', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '2rem' }}>如果您對芳療課程、空間租借或市集有興趣，歡迎聯絡我們。</h3>
                            <div style={{ fontSize: '1.2rem', color: '#444', marginBottom: '3rem' }}>
                                <p>📍 地址：台北市松山區民生東路 (綠善生活會館)</p>
                                <p>📞 預約專線：(服務洽詢中)</p>
                                <p>⏰ 營業時間：10:00 - 20:00 (週一至週日 | 預約制)</p>
                            </div>
                            <button className="btn btn-primary" style={{ fontSize: '1.1rem' }}>立即 Line 聯繫 @aromaliving</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
