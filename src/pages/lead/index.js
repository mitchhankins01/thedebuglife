import * as React from "react";
import Layout from "../../components/Layout";
import Newsletter from "../../components/Newsletter";

const Index = () => {
    return (
        <Layout>
            <div style={{ margin: 50 }}>
                <Newsletter isWide={true}>
                    <br />
                    <h3>
                        Six Habits to Overcome Isolation: Your Guide to a Connected Life
                    </h3>
                    <h5>
                        Transform Your Life and Foster Meaningful Connections
                    </h5>
                    <p>
                        Are you feeling isolated and disconnected from the world around you? Discover six daily habits that will help you overcome isolation and embrace a life full of joy and meaningful connection.
                    </p>
                    <p>
                        In this guide, you'll uncover the power of:
                        <ul>
                            <li>Journaling: Document your thoughts and experiences, gain clarity on your ideas, and track your personal growth journey.</li>
                            <li>Reading: Access the wisdom of experts and thought leaders, equipping yourself with the knowledge and strategies you need to reach your goals and aspirations.</li>
                            <li> Exercising: Elevate your physical and mental well-being through regular activity that releases mood-boosting chemicals and supports overall health.</li>
                            <li>Meditating: Embrace serenity and focus, nurture creativity, and develop resilience against daily stressors with consistent meditation practice.</li>
                            <li>Executing: Set and achieve daily intentions, maintaining a laser focus on your goals and fostering a positive, proactive mindset.</li>
                            <li>Contributing: Make a difference in the lives of others, forge meaningful social connections, and grow your confidence by actively engaging in acts of kindness and support.</li>
                        </ul>
                    </p>
                    <p>
                        Don't let isolation hold you back. 
                    </p>
                </Newsletter>
            </div>
        </Layout>
    );
}
export default Index;