export function About(){
    return (       
        <section className="about-page">
            <header className="about-hero">
                <div className="hero-content">
                    <h3>About Swiggy Clone</h3>
                    <h1>Delicious food, delivered fast</h1>
                    <p>Welcome to the Swiggi Clone — a bite-sized demo that shows how food delivery apps connect hungry people with local restaurants. Built for learning, inspired by real apps.</p>

                    <div className="stats">
                        <div className="stat">
                            <strong>1k+</strong>
                            <span>Restaurants</span>
                        </div>
                        <div className="stat">
                            <strong>50k+</strong>
                            <span>Orders/day</span>
                        </div>
                        <div className="stat">
                            <strong>4.8</strong>
                            <span>Avg. Rating</span>
                        </div>
                    </div>
                </div>
                <div className="hero-media">
                    <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b0b2f1d3c8d7e1d6a2c0b9f9b5e3f2a" alt="Delicious food" />
                </div>
            </header>

            <section className="about-features">
                <article className="feature-card">
                    <h3>Wide selection</h3>
                    <p>Explore a variety of restaurants, cuisines, and dishes — all in one place.</p>
                </article>
                <article className="feature-card">
                    <h3>Fast delivery</h3>
                    <p>Optimized delivery routes get food to you hot and fresh.</p>
                </article>
                <article className="feature-card">
                    <h3>Trusted partners</h3>
                    <p>We work with local restaurants to ensure quality and reliability.</p>
                </article>
            </section>
        </section>
    );
}
