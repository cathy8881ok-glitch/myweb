function Space() {
    return (
        <div className="space-page pt-nav">
            <section className="section">
                <div className="container">
                    <div className="space-showcase">
                        <div className="space-info">
                            <div className="label">VENUE RENTAL</div>
                            <h2>綠善美學教室</h2>
                            <p>位居台北精華地點，我們提供寬敞明亮、充滿綠意的多功能教室。適合：</p>
                            <ul>
                                <li>🌿 芳療/精油手作工作坊</li>
                                <li>🧘 瑜珈與靜坐冥想</li>
                                <li>🍵 各式茶道/藝文交流空間</li>
                                <li>🎨 小型市集或品牌展示</li>
                            </ul>
                            <div style={{ marginTop: '2rem' }}>
                                <p>地址：台北市松山區民生東路 (綠善生活會館)</p>
                                <p>設備：專業級音響、投影機、瑜珈器材、品茶桌、小農展示架</p>
                            </div>
                        </div>
                        <div className="space-image">
                            <img src="https://images.unsplash.com/photo-1545209174-cd1d15765bc6?auto=format&fit=crop&q=80&w=1200" alt="優雅大氣的教室空間" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Space;
