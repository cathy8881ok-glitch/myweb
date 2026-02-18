function Services() {
    return (
        <div className="services-page pt-nav">
            <section className="section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>五感療育服務</h2>
                        <p>聽覺、視覺、嗅覺、味覺、觸覺的深度放鬆</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600" alt="五感芳療" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="service-content">
                                <h3>芳療私塾</h3>
                                <p>客製化精油配方，結合身心律動。我們在民生東路提供一個安靜的療育環境。</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600" alt="品茶時光" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="service-content">
                                <h3>品茶區服務</h3>
                                <p>嚴選自然農法茶葉，在安靜的空間中，透過茶湯體會四季的流動。</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600" alt="蔬食美學" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="service-content">
                                <h3>精緻蔬食服務</h3>
                                <p>將「食療」結合「美學」，提供純粹健康的餐點，滋養日常的疲累。</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://images.unsplash.com/photo-1488459711616-d39faad52382?auto=format&fit=crop&q=80&w=600" alt="小農市集" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="service-content">
                                <h3>自然熟成市集</h3>
                                <p>定期舉辦小農聚落，分享無毒、無農藥的天然農產品與手作生活好物。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
