import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';

const Faqs = (props) => {
    console.log(props)
    return (
        <>
            <Helmet>
                <title>{`Faqs - ${PageTitle}`}</title>
            </Helmet>

            <h1>Frequently Asked Questions</h1>

            <h2>Do I need a referral?</h2>
            <p>No. You can call me to book an appointment without a referral. However without a referral you will not be able to claim rebates through Medicare.</p>

            <h2>How can I claim Medicare rebates?</h2>
            <p>To claim rebates through the Medicare Better Access Scheme, you need to obtain a referral from your GP, psychiatrist or paediatrician.  Let them know when booking that you’d like a mental health assessment so that they can book a longer appointment. They will prepare a Mental Health Care Plan which you should bring along to your first appointment with me. This entitles you to receive a rebate for up to 10 sessions per calendar year.</p>
            <p>The full fee is payable at the session.  The receipt may then be presented to Medicare (in person, or using their app) to obtain a rebate. The current medicare rebate for a clinical psychology appointment is $124.50 (at June 2016).</p>

            <h2>Can I claim on private health insurance?</h2>
            <p>If your insurance policy covers clinical psychology, you are able to claim for my services.  You cannot receive a rebate through Medicare and private health insurance for the same session. You may claim a rebate through private health insurance (if eligible) on sessions that do not attract a medicare rebate. For example, on your eleventh and subsequent sessions in the calendar year.  Clinical psychology services are an extra and rebates vary, so contact your health insurance provider for information.</p>

            <h2>How often should I come? How long will therapy last?</h2>
            <p>This will depend upon your reason for coming to therapy. I believe you should come as often or as infrequently as is best for your particular situation. Some people attend weekly, some less often. Some people need only short-term therapy because their concern has only just arisen and requires only a few new skills that are easy to learn and put into practice. Other people find they need more sessions to explore how their personal history led to the patterns they want to change. Learning new skills and gaining insights are processes that can happen quickly or more slowly, depending on the situation. Some people want to move as quickly as possible and need only six to ten sessions, while others need slightly more, and others feel that a longer term course of therapy enables them to maintain gains or identify new areas for growth. I think it is important to find your own balance, so that the therapeutic process does not feel rushed, but so you are in therapy for no longer than you need or want to be.</p>

            <p>Generally some of the factors that are common to people requiring shorter term therapy include things such as:</p>
            <ul>
                <li>shorter duration of their presenting concern</li>
                <li>access to good support networks</li>
                <li>connected with family and friends</li>
                <li>fewer co-existing concerns</li>
                <li>positive attitude to help-seeking</li>
            </ul>

            <p>How long therapy will take for you can be tricky to predict at the outset, but is easier to gauge once you have attended a couple of sessions and we have a joint understanding of your personal history, your reasons for seeking therapy, and can get a sense of how you are progressing.</p>

            <h2>Can you prescribe medication?</h2>
            <p>No, clinical psychologists are not able to prescribe medication. If you believe you may benefit from medication, this is something you may wish to discuss with your GP or psychiatrist.</p>

            <h2>Do you offer after-hours appointments?</h2>
            <p>Yes, appointments are available at 4.30, 5.30 and 6.30 PM on Tuesdays.</p>

            <h2>What is the difference between a psychologist and a clinical psychologist?</h2>
            <p>
                The terms ‘psychologist’ and ‘clinical psychologist’ are protected and their use is regulated by the Australian Health Practitioner Regulation Agency (AHPRA).  Psychologists and clinical psychologists must be qualified and licensed by AHPRA, just as medical practitioners are.</p>
            <p>As a clinical psychologist, I have completed an Honours Degree (4 years) in Psychology and have then undertaken specialist clinical training by completing a Masters degree (2 years) in Clinical Psychology. The Masters of Clinical Psychology is a professional program that provides advanced training in psychological assessment and therapy skills. In addition, as a clinical psychologist I take part in continuous professional development including training, clinical supervision and peer supervision. I subscribe to, and am regulated by, a professional code of ethics and must maintain a high standard of practice. As a registered practitioner, therapy services I offer are eligible for Medicare rebates.</p>
            <p>A psychologist has also undergone the 4 year degree and supervision and registration, but they have not completed the specialist training in the Masters of Clinical Psychology.</p>

            <h2>What is the difference between a therapist/counsellor/life coach and a clinical psychologist?</h2>
            <p>Terms such as ‘therapist’, ‘counsellor’, ‘life coach’, etc, are not regulated terms. Anyone can call themselves a therapist or counsellor and charge fees for their services, without undertaking training, supervision and ongoing professional development, and without subscribing to the same professional standards and code of ethics as clinical psychologists.</p>
        </>
    )
}
export default Faqs;