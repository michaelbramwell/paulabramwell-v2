import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';

const MyApproach = () => (
    <>
        <Helmet>
            <title>{`My Approach - ${PageTitle}`}</title>
        </Helmet>
        
        <h1>My Approach</h1>

        <p>I draw from evidence-based techniques that I have specialist training and experience with including Cognitive Behaviour Therapy (CBT), Acceptance and Commitment Therapy (ACT), interpersonal therapy, Dialectical Behaviour Therapy (DBT), systemic therapy, family therapy and attachment-based therapy. The particular approach selected in your therapy depends upon the nature of your concern and any preference you may have for one approach over another. I often find an individually-tailored blend of approaches is most helpful for people.</p>

        <h2>Building a trusting therapeutic relationship</h2>
        <p>There is extensive research that shows that the most important factor in achieving positive outcomes in therapy is the relationship between the therapist and the client. The most effective therapists achieve the best outcomes because they are willing to hear about how their clients experience them. I will invite feedback from you to improve the way we work together and to provide a space where you can safely explore and understand difficult experiences. It is through warmth, understanding and empathy that I will work together with you to help you to heal.</p>
    </>
)
export default MyApproach;