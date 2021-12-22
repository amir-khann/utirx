import React from 'react'

const Marketing = () => {
    const points =[
        <li>
            <span>Information to be Used and Disclosed.</span>
             I authorize the healthcare providers contracted with OnlineUTIMeds to use and disclose to affiliates of OnlineUTIMeds Care, LLC, including OnlineUTIMeds, Inc., (collectively, “Affiliates”) the information I provide and is collected during my interactions with OnlineUTIMeds Care, including: name, date of birth, address, telephone number(s), e-mail address, medical information, prescription and prescription-related information, and pharmacy name and other contact information. If my medical information, prescriptions and/or prescription-related information disclose information regarding any sensitive medical conditions I may have, including but not limited to those related to mental health, substance use, HIV or other communicable diseases, developmental disabilities, and/or genetic conditions, I authorize that information to be used and disclosed pursuant to this Authorization.
        </li>,
        <li><span>Purpose.</span> The purpose of this Authorization is to: (a) permit OnlineUTIMeds Care and Affiliates to use and disclose my information for marketing purposes, including contacting me at my contact information saved in my profile to provide me with marketing and promotional messages about Affiliates’ products and services, including but not limited to, prescription pricing and coupons, savings offers, refill reminders, and marketing and promotional messages about other pharmacy, pharmaceutical, medical, or laboratory services, either provided directly by Affiliates or by companies that may otherwise partner with Affiliates and/or OnlineUTIMeds Care, and (b) inform you that OnlineUTIMeds Care and/or Affiliates may receive direct or indirect compensation in relation to such marketing. I understand that either OnlineUTIMeds Care and/or Affiliates may contact me using my contact information for these purposes.
        </li>,
        <li><span>Your Rights.</span>  I understand that information used or disclosed as a result of this Authorization may be subject to re-disclosure by Affiliates and may no longer be protected by applicable privacy laws. I understand that OnlineUTIMeds Care may not condition treatment, payment, enrollment or eligibility for benefits on your execution of this Authorization. I understand that if I agree to this Authorization by checking the related box.
        </li>,
        <li><span>Expiration.</span> This Authorization will remain in effect as long as I obtain services from OnlineUTIMeds Care or until I revoke it, whichever occurs first.
        </li>,
    ];
  return (
    <div className="content-container">
      <h2>Authorization for Use and Disclosure of Information</h2>
        <ul>
            {
                points.map(i=>{
                    return (i)
                })
            }
        </ul>
      <p>By signing this Authorization or by checking the related box, I am authorizing the use and disclosure of all information as outlined above.
      </p>
    </div>
  )
}

export default Marketing
