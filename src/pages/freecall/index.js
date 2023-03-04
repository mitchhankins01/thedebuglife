import * as React from "react";
import Layout from "../../components/Layout";

const ps = [
    //video
    { title: "Free Call" },
    //promise
    {
        title: 'Discover how the Debug Life can help you live your best life yet.',
        subtitle: "Imagine waking up every day excited for what's to come instead of settling for a life of regrets and unfulfilled potential. "
    },
    //button
    { button: true },
    //problem
    {
        title: "Right now, you're dealing with a lot of self-doubt and frustration",
        subtitle: "It can be tough when your mindset and fears hold you back from taking risks and making progress, especially when you're eager to see results quickly."
    },
    //pain
    {
        title: "Do you feel frustrated and unfulfilled with the life you're currently living?",
        subtitle: "Do you sense that something is missing and wish you could achieve your goals faster?"
    },
    //premise
    {
        title: "Discover how you can transform your life and find purpose, just like I did.",
        subtitle: "Maybe you often feel bored, lonely, and believe that nobody could understand what you're going through. It's time to start analyzing your needs and growing your confidence, so you can create more meaningful relationships and live the life you truly want. "
    },
    //process
    {
        title: "I will teach you how to focus on what really matters to you, and to be free from anxiety and overwhelm.", subtitle: "Learn how to leverage the power of self-discovery to build a meaningful life filled with joy, confidence, and connection."
    },
    //button
    { button: true },
    //payoff
    {
        title: "No more distractions or meaningless minutiae, just a more fulfilling life.",
        subtitle: "the Debug Life will give you the ability to focus on what matters to you, while gaining clarity about your values and goals. You'll feel more grounded, happier, and confident, allowing you to live with authenticity and attract others with your discipline and confidence."
    },
    //proof
    {
        title: "I have worked with young professional techies just like you who were tired of feeling isolated and undervalued.",
        subtitle: "By leveraging my expertise in working with organizations such as Nasdaq, the US Air Force, and Seeking Alpha, I was able to help them break free from the confines of their routines and thrive in all areas of their lives."
    },
    //promotion
    {
        title: "I can help you come out from behind the screen and thrive in all areas of life.",
        subtitle: "Let's work together to build confidence, meaningful relationships, and a more fulfilling life."
    },
    //button
    { button: true },
    //pull
    {
        title: "I want to help you because it pains me to see people struggle as I once did, and I want to share what I've learned to help others shorten their learning curve to months instead of decades.",
        subtitle: "I wish I had someone like that to guide me through my journey so I wouldn't have felt so lonely and misunderstood, and I wouldn't have had to figure everything out on my own. I want to save you time, money, and pain while freeing you from the oppression of society so you can discover the strength of living life on your own terms."
    },
    //person
    {
        title: "Meet Mitch Hankins",
        subtitle: "Mitch Hankins is a full-stack developer with over a decade of experience working with some of the largest organizations in the US, including Nasdaq and the US Military. Mitch understands the challenges of the tech industry inside-out and has seen many of his colleagues suffer from feelings of isolation, complacency, and loneliness. That's why he's dedicated to helping techies like you break free from loneliness and find deeper connections. With Mitch's expertise, you can break free from these negative feelings and experience a more fulfilling and connected life. Don't let loneliness hold you back - let Mitch help you live the life you know you're capable of!"
    },
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
                                <button className="button is-link" type="submit" onClick={() => window.open("https://calendly.com/thedebuglife/freecall", "_blank")}>
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
                            <p style={{ marginTop: 10 }} className={`subtitle ${index % 2 === 0 && 'has-text-light'}`}>
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

{/* <div style={{ display: "grid" }}>
    <StaticImage
        style={{
            gridArea: "1/1",
            maxHeight: 600,
        }}
        layout="constrained"
        // aspectRatio={3 / 1}
        alt=""
        src="../../img/community/canoe.jpeg"
    // formats={["auto", "webp", "avif"]}
    />
    <div
        style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            display: "grid",
            // placeItems: "center",
            // alignItems: "center",
            // justifyItems: "center"
        }}
    >
        <div style={{
            background: "rgba(0, 0, 0, 0.5)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            padding: "0px 50px"
        }}>
            <p className={`title has-text-light`}>
                {title}
            </p>
            <p style={{ marginTop: 0 }} className={`subtitle has-text-light`}>
                {subtitle}
            </p>
        </div>
    </div>
</div> */}