import * as React from "react";
import Layout from "../../components/Layout";
import Newsletter from "../../components/Newsletter";

const Index = () => {
    return (
        <Layout>
            <div style={{ margin: 50 }}>
                <Newsletter isWide={true}>
                    <br />
                    <p>
                        I used to feel like the empty shell of a person just going through the motions of life. People jokingly referred to me as a robot and described me as overly logical without any apparent emotions.
                    </p>
                    <p>
                        I was depressed, anxious, and didn't understand the point of being alive. Nothing really seemed to matter at all, I mostly  isolated myself. I spent holidays alone, didn't put much effort into developing friendships, and overcompensated for the emptiness inside of me by embracing workaholicism and consuming recreational drugs such as alcohol, weed, and nicotine.
                    </p>
                    <p>
                        But then, everything changed when I found the courage to be myself and started attracting the right people. Nowadays, instead of waking up with dreadful fear of what is to come, I get out of bed with excitement and full of gratitude. I spend my time doing things I enjoy, with people that make everything more meaningful. I want to help you make the same journey, and that's why I've summarized everything I learned into the following habits.
                    </p>
                </Newsletter>
            </div>
        </Layout>
    );
}
export default Index;