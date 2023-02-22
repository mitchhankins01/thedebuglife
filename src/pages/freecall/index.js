import * as React from "react";
import Layout from "../../components/Layout";

const ps = [
    //video
    { title: "Sales Video " },
    //promise
    { subtitle: "Discover how the Debug Life can help you live your best life yet. Imagine waking up every day excited for what's to come instead of settling for a life of regrets and unfulfilled potential. " },
    //button
    { button: true },
    //problem
    { subtitle: "Right now, you're dealing with a lot of self-doubt and frustration. It can be tough when your mindset and fears hold you back from taking risks and making progress, especially when you're eager to see results quickly." },
    //pain
    { subtitle: "Do you feel frustrated and unfulfilled with the life you're currently living? Are you tired of feeling like you're living for others instead of being your true self? Do you sense that something is missing and wish you could achieve your goals faster?" },
    //premise
    { subtitle: "Are you tired of feeling uncomfortable around others or isolating yourself? Do you often feel bored, lonely, and believe that nobody could understand what you're going through? It's time to start analyzing your needs and growing your confidence, so you can create more meaningful relationships and live the life you truly want. Discover how you can transform your life and find purpose, just like I did." },
    //process
    { subtitle: "Learn how to leverage the power of self-discovery to build a meaningful life filled with joy, confidence, and connection. I will teach you how to focus on what really matters to you, and to be free from anxiety and overwhelm." },
    //button
    { button: true },
    //payoff
    { subtitle: "the Debug Life will give you the ability to focus on what matters to you, while gaining clarity about your values and goals. You'll feel more grounded, happier, and confident, allowing you to live with authenticity and attract others with your discipline and confidence. No more distractions or meaningless minutiae, just a more fulfilling life." },
    //proof
    { subtitle: "I have worked with young professional techies just like you who were tired of feeling isolated and undervalued. By leveraging my expertise in working with organizations such as Nasdaq, the US Air Force, and Seeking Alpha, I was able to help them break free from the confines of their routines and thrive in all areas of their lives." },
    //promotion
    { subtitle: "I can help you come out from behind the screen and thrive in all areas of life through my 3-month coaching program. Let's work together to build confidence, meaningful relationships, and a more fulfilling life." },
    //button
    { button: true },
    //pull
    { subtitle: "I want to help you because it pains me to see people struggle as I once did, and I want to share what I've learned to help others shorten their learning curve to months instead of decades. I wish I had someone like that to guide me through my journey so I wouldn't have felt so lonely and misunderstood, and I wouldn't have had to figure everything out on my own. I want to save you time, money, and pain while freeing you from the oppression of society so you can discover the strength of living life on your own terms." },
    //person
    { title: "Meet Mitch Hankins", subtitle: "Mitch Hankins is a full-stack developer with over a decade of experience working with some of the largest organizations in the US, including Nasdaq and the US Military. Mitch understands the challenges of the tech industry inside-out and has seen many of his colleagues suffer from feelings of isolation, complacency, and loneliness. That's why he's dedicated to helping techies like you break free from loneliness and find deeper connections. With Mitch's expertise, you can break free from these negative feelings and experience a more fulfilling and connected life. Don't let loneliness hold you back - let Mitch help you live the life you know you're capable of!" },
    //button
    { button: true },
];

const Index = () => {
    return (
        <Layout>
            {ps.map((({ title, subtitle, button }, index) => {
                if (button) {
                    return (
                        <section className={`hero is-small ${index % 2 === 0 && 'is-primary'}`}>
                            <div className="hero-body hero-body-button-container">
                                <button className="button is-link" type="submit">
                                    Schedule Your Free Call
                                </button>
                            </div>
                        </section>
                    );
                }
                return (
                    <section className={`hero is-large ${index % 2 === 0 && 'is-primary'}`}>
                        <div className="hero-body">
                            <p className={`title ${index % 2 === 0 && 'has-text-light'}`}>
                                {title}
                            </p>
                            <p className={`subtitle ${index % 2 === 0 && 'has-text-light'}`}>
                                {subtitle}
                            </p>
                        </div>
                    </section>
                );
            }))}
        </Layout>
    );
}
export default Index;