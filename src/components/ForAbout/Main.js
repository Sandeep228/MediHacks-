import React from 'react';

const Main = () => {
    return (
        <div className='mainSection' style={{ minHeight: '100vh' }}>
            <div className='about-us-container' style={{ padding: '40px' }}>
                <h1 style={{
                    fontSize:"50px",
                    textAlign: "center"
                }}>About Us</h1>
                <p style={{
                    fontSize:"25px",
                    textAlign: "center"
                }}>Welcome to MindAignite - Your Mental Wellness Companion.</p>

                <div>
                    <h2 style={{
                        fontSize:"25px"
                    }}>What is MindAignite?</h2>
                    <p>MindAignite is more than just a platform; it's a movement dedicated to promoting mental wellbeing and providing comprehensive support to individuals seeking better mental health. Our mission is to break the stigma surrounding mental health and create a safe space for everyone to prioritize their emotional and psychological wellness.</p>

                    <p>At MindAignite, we believe that mental health is fundamental to living a fulfilling life. Just as you care for your physical health, your mental health deserves the same attention and care. We offer a range of resources, tools, and services designed to empower you on your mental health journey.</p>

                    <p>Our platform is built on three core principles:</p>
                    <ul>
                        <li><strong>Accessibility:</strong> We are committed to making mental health support accessible to all. Our services are user-friendly and available to anyone who seeks them.</li>
                        <li><strong>Community:</strong> MindAignite fosters a sense of belonging and community. You're never alone on your mental health journey, as you can connect with others who share similar experiences and challenges.</li>
                        <li><strong>Empowerment:</strong> We empower individuals with knowledge, tools, and resources to take control of their mental health. Through education and self-help strategies, you can build resilience and emotional strength.</li>
                    </ul>

                    <p>Whether you're dealing with stress, anxiety, depression, or simply seeking ways to maintain good mental health, MindAignite is here to guide and support you. We offer various features, including mood-lifting games, a supportive chatbot, mental health recommendations, and access to mental health professionals.</p>
                </div>
                <br />
                <div>
                    <h2 style={{
                        fontSize:"25px"
                    }}>Why Should You Prefer Mental Wellbeing?</h2>
                    <p>At MindAignite, we believe that mental wellbeing is the cornerstone of a happy and fulfilling life. Choosing to prioritize your mental health offers numerous benefits:</p>
                    <ul>
                        <li><strong>Emotional Resilience:</strong> Improved mental wellbeing equips you with greater emotional resilience, helping you navigate life's challenges more effectively.</li>
                        <li><strong>Enhanced Productivity:</strong> Good mental health enhances your cognitive abilities, increasing productivity and creativity.</li>
                        <li><strong>Positive Relationships:</strong> Mental wellbeing fosters healthier relationships, both with yourself and with others.</li>
                        <li><strong>Better Physical Health:</strong> Your mental health has a significant impact on your physical health, making it essential to maintain a balance between the two.</li>
                        <li><strong>Quality of Life:</strong> Prioritizing mental wellbeing ultimately leads to a higher quality of life, filled with joy, purpose, and contentment.</li>
                    </ul>
                </div>
                <br/>
                <p>We understand that mental wellbeing is a personal and ongoing journey. Let MindAignite be your trusted companion on this path to a happier, healthier you.</p>
            </div>
        </div>
    );
};

export default Main;
