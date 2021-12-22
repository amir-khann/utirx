import React from 'react'

const Privacy = () => {
  const points = [
      {'point':"Name, date of birth, and demographic information (e.g., age, gender, etc.)"},
      {'point':"Home, work, billing, and/or shipping addresses"},
      {'point':"Email address"},
      {'point':"Home, work and/or mobile phone number"},
      {'point':"Password"},
      {'point':"Health, prescription, pharmacy, and related information"},
      {'point':"Messages from you"},
      {'point':"Credit card information"},
      {'point':"Insurance information"},
      {'point':"Driver’s license or other government identification number"},
      {'point':"Professional information (e.g., National Provider Number (“NPI”), medical specialty)"}
      ];
  const points2 = [
      {"point":"Geo-location information"},
      {"point":"Internet Protocol (IP) address"},
      {"point":"Information about your operating system and browser, such as its maker or version"},
      {"point":"The pages and content of our websites/screens that you view (including URL and screen name)"},
      {"point":"What information, content, or advertisements you view, hover over, or click on"},
      {"point":"Referrer websites"},
      {"point":"Unique identifiers"},
      {"point":"Login information"},
      {"point":"Mobile device information, such as your telephone number, mobile device ID, the make, model, operating system, capacity and settings of your device"},
      {"point":"For healthcare providers who are participants in Healthcare Communications Network provided by DMD Marketing Corp, we may receive information such as name and professional information (e.g., NPI, medical specialty)"},
  ];
  const points3 = [
      {"point":<li><span>Cookies.</span> We use cookies, tags, pixels, SDKs and other tracking technology to collect, store and track your information and use of the Services, including to save your settings, provide customizable and personalized Services and information and associate information with your account and session. Your browser and/or device may allow you to disable and/or control the use of cookies. We do not control the use of any cookies that are deposited
              on your computer when you visit third-party websites, and we expressly disclaim responsibility for information collected through them. </li>},
      {"point":<li><span>Marketing and remarketing technology</span>. We may use Google and Facebook, and other marketing and remarketing providers to advertise online and offline. We may place cookies, tags, pixels, SDKs and other tracking technology on your computer or other devices, or otherwise collect and provide your information to assist Google, Facebook, other third parties, or OnlineUTIMeds to feed advertisements or to send direct mail campaigns to you based on your past visits to OnlineUTIMeds and other websites, to market to you via and to measure the effectiveness of marketing and remarketing; and we may also allow other third parties, including Google, to do so as well. We may permit third parties to collect your personal information over time or across third-party websites,
              mobile applications and/or online services, including those that assist us in operating our Services.</li>},
      {"point":<li><span>Web beacons</span>. Web beacons are graphic image files that collect information about your use of and interactions with the Services.
          </li>},
      {"point":<li><span>Embedded scripts</span>. An embedded script is programming code that collects information about your use of and interactions with the Services.</li>},
      {"point":<li><span>Plug-Ins</span>. We may use plug-ins, such as Facebook or Twitter. Each plug-in is the responsibility of the plug-in provider, and we have no control over the information that the respective provider collects through its plug-in or how that provider uses such information. If you are not yet a user of the provider or have not consented to having your data collected and used by that provider, you should not click on those plug-ins. If you are already a user of the plug-in provider, you should refer directly to the relevant provider for information on the kind of personal data that the provider collects and uses, and for what purposes.</li>},
  ]
  const points4 = [
      {"point":<li><span>Healthcare professionals</span>. Some healthcare professionals who use OnlineUTIMeds may text or email you a coupon. In order to receive the coupon from your healthcare professional, you must provide your contact information and your prescription information. By providing your healthcare professional with your contact information and your prescription information, you are requesting to be contacted with prescription-related information, and you acknowledge that there may be some risk that the message could be read by a third party. We also receive information from our Medical Groups and other healthcare partners.
            </li>},
      {"point":<li><span>Marketing partners</span>. We may work with third parties to conduct marketing campaigns and/or receive information for potential users of our Services. Such third parties may collect and provide to us personal information such as your name, contact information, medical information (such as condition and prescription) and demographic information (such as age and location). Third parties may also include friends and family members who participate in our referral program.
            </li>},
      {"point":<li><span>Data partners </span>. We may supplement the information we collect about you with information from third parties, including data regarding online activities across devices and online platforms.
            </li>},
      {"point":<li><span>Pharmacy benefit managers</span>. Most prescriptions purchased in the United States, including prescriptions filled through the use of discount coupons, loyalty cards or insurance co-pays, result in the pharmacy reporting patient data back to the company that provides the benefit.
            </li>},

    ];
  const points5 = [
      {"point":"To market and advertise to you and measure performance of marketing and advertisements"},
      {"point":"To provide or send you a discount card, coupons, pharmaceutical manufacturer copay cards (in cases where you provide us with your information to determine your eligibility for such copay card and you meet the eligibility criteria for such copay card) and/or communications (such as information about your account and marketing)"},
      {"point":"To process your credit card information (in cases where you provide us with your credit card information) and track payments"},
      {"point":"To supplement our data"},
      {"point":"To fulfill, deliver, develop and enhance services and products"},
      {"point":"To store data"},
      {"point":"To analyze data"},
      {"point":"To address or handle patient advocacy support requests"},
      {"point":"For information security, fraud detection and prevention"},
      {"point":"For identity and professional credential verification"},
      {"point":"For healthcare providers, we may provide pharmaceutical manufacturers and other third parties we work with to provide sponsored programs, content or advertisements on our websites or mobile applications, with your information, such as name, NPI, medical specialty and practice information, and information about your activities and engagement with the Services"},
      {"point":"If we are required to do so by law or if we have a good faith belief that disclosure is necessary to (1) comply with the law or with legal process served on us; (2) protect and defend our rights or property; or (3) act in an emergency to protect someone’s safety.\n"},
  ];
  const paragraph = [
        {"paragraph":"If you choose to provide us with information about your family members or any other individual, you represent and warrant that you have permission to provide this information to OnlineUTIMeds."},
        {"paragraph":"You agree to let us use and share the information you provide in order to provide and customize the Services, to run our business (including for the purposes of internal business operations, " +
                "analytics, and to provide, develop, change, market or optimize our services and products), and to communicate and market to you (directly or via third parties).."},
      {"paragraph":"You agree that OnlineUTIMeds may contact you by mail, telephone, email, or text message (including by an automatic telephone dialing system) at any of the addresses, phone numbers or other information provided by you or on your behalf in connection with your account, including for marketing purposes. OnlineUTIMeds advertising and communications may include health, prescription, pharmacy, and related information. You understand that you are not required to provide this consent as a condition of using our Services. "}
      ]
  const paragraph2 = [
        {"paragraph":"By using our Services, you agree to let us use and share such information in order to provide and customize the Services, to run our business (including for the purposes of internal business operations, analytics, and to provide, develop, change, market or optimize our services and products), and to communicate and market to you (directly or via third parties). "},
      {"paragraph":<span style={{fontWeight:"bold",textDecoration:'underline'}}><a href="https://support.goodrx.com/hc/en-us/articles/360026530331-Advertising-on-GoodRx" target={"_blank"}  rel="noreferrer">Advertising on OnlineUTIMeds’s Websites and Apps</a></span>},
        {"paragraph":<span>We use third-party advertising companies to serve ads when you use the Services. These companies may use internet or electronic information about our Services and other websites and mobile applications in order to provide advertisements about goods and services of interest to you. OnlineUTIMeds adheres to " +
                "Digital Advertising Alliance principles. If you would like more information about this practice and to know your choices about not having this information used by these companies, click <a href="https://thenai.org/" target="_blank"  rel="noreferrer">here</a>.</span>},
        {"paragraph":<span style={{fontWeight:"bold",textDecoration:'italic'}}>Demographics and Interest Information</span>},
        {"paragraph":"The Services have implemented Google Analytics Demographics and Interest reporting. This tool requires that we permit access to cookie identification information and enables us to view demographic and other information aggregated from the overall population of the visitors to our website. The information we receive does not include your name or contact information.  "},
      {"paragraph":<i style={{fontWeight:"bold"}}>Information From/To Third Parties</i>},
        {"paragraph":"We receive information about you from third parties, including as detailed below: "}]
  const paragraph3 = [
      {"paragraph":"By using the Services, you agree to let us use and share such personal information in order to provide and customize the Services, to run our business (including for the purposes of internal business operations, analytics, and to provide, change, market or optimize our services and products), and to communicate and market to you (directly or via third parties). "},
      {"paragraph":<b>When do we share information that can identify you with a third party?</b>},
      {"paragraph":"OnlineUTIMeds does not sell personal medical information. We do not provide your personally-identifiable medical information to third parties in exchange for payment. "},
      {"paragraph":"Like many companies, OnlineUTIMeds uses personal information in order to provide and customize Services, to run our business (including for the purposes of internal business operations and analytics, to provide, change, market or optimize our services and products), and to communicate and market to you. In some instances, we may use third parties to help assist us in the above."},
      {"paragraph":"Here are some examples where we may share information with third parties:"},
  ]
  const paragraph4 = [
      {"paragraph":"OnlineUTIMeds may transfer its user database, including personal information contained therein, to a third party who acquires all or substantially all of the assets or stock of OnlineUTIMeds whether by merger, acquisition, reorganization or otherwise."},
      {"paragraph":<b>Additional Privacy Disclosures Relating to OnlineUTIMeds Care</b>},
      {"paragraph":"OnlineUTIMeds Care offers a platform that enables health care professionals (“Providers”) and patients to connect virtually for medical visits."},
      {"paragraph":<span><b>Your Provider is responsible for providing you with a Notice of Privacy Practices, which describes how the entities in the Medical Group (as defined below) may use and disclose your Protected Health Information.
              If you do not agree to be bound by those terms, which are available <a href="https://www.goodrx.com/care/legals/notice-of-privacy-practices"  target="_blank" rel="noreferrer">here</a>, you are not authorized to access or use OnlineUTIMeds Care services.</b></span>},
      {"paragraph":"Note that we currently contract with independent healthcare workers  (the “Medical Group”) to facilitate medical visits through the OnlineUTIMeds Care platform. However, the medical groups and individuals  we contract with may change from time to time and employ or contract with physicians and other healthcare professionals to provide virtual medical consultations."},
      {"paragraph":<b>What about kids’ personally identifiable information?
          </b>},
      {"paragraph":"The Services are only for users of the age of 18 or older. If you are under the age of 18, please do not attempt to register with us or provide any personal information about yourself to us at any time " +
              "for the Services. We assume our Services are used by adults. We respect the privacy of parents and children and are committed to complying with the Children’s Online Privacy Protection Act (“COPPA”). "},
      {"paragraph":"We may ask prospective users to provide their age during the registration process and at other times while using the Services. If a user indicates that he or she is under the age of 13 then all personal data collected during the registration process is automatically deleted except that we may retain and use" +
              " limited information, such as the child’s email address, for a limited period of time, in those cases where we believe that the collection and use of such information is permitted under COPPA."},
      {"paragraph":"If a parent believes that his or her child has provided us with personal information, he or she can contact us via email or postal mail as listed below. We will promptly delete the information upon learning that it relates to a child under the age of 13."},
      {"paragraph":<b>Additional privacy related information</b>},
      {"paragraph":<b>Security</b>},
      {"paragraph":"Although we will have reasonable security safeguards with respect to the Services, we cannot ensure or warrant the security of any information transmitted to us over the internet or other electronic means (such as text messages), and we accept no liability for any unintentional disclosure."},
      {"paragraph":<b>Third-Party Services and Promotions</b>},
      {"paragraph":"Our Services contain information about third-party services, and hyperlinks and pointers to Internet sites maintained by third parties and uses some services by third parties. We do not control, operate or endorse in any respect information, products or services provided by such third parties. " +
              "Many third parties have their own privacy policies that differ from ours. This privacy policy only covers our Services and does not cover any other third parties. We do not control the policies of third parties."},
      {"paragraph":<b>European Union Visitors</b>},
      {"paragraph":"Please do not use the Services if you are not a resident of the United States. The Services are intended for use only by residents of the United States. Use by visitors from the European Economic Area, or EEA, is prohibited."},
      {"paragraph":<b>Deletion Requests, Unsubscribing and Opt-Outs
          </b>},
      {"paragraph":<span>All users nationwide can request deletion of their data as specified in the California Consumer Privacy Act. You can submit a request by visiting <a href="https://www.OnlineUTIMeds.com/requestdeletion" target="_blank"  rel="noreferrer">https://www.OnlineUTIMeds.com/requestdeletion</a>. Please note that we will need to verify your request before we can fulfill it, including verifying your identity. 
</span>},
      {"paragraph":<b>Accessing Your Information</b>},
      {"paragraph":"We offer consumers nationwide the option to request certain information about our collection and use of your personal information over the past 12 months. You may only make a verifiable consumer request for access twice within a 12-month period. "},
      {"paragraph":<b>Changes to this Privacy Policy</b>},
      {"paragraph":"We may make changes to our privacy policy from time to time. When we do so, we will post the revised privacy policy on our website. Please check the revision date at the top of this page to determine if the policy has been modified since you last reviewed it. The modified privacy policy will be effective immediately upon posting on the service. Your continued use of the Services after the " +
              "posting of the modified privacy policy constitutes your agreement to abide and be bound by it. We encourage you to periodically review this page for the latest information on our privacy practices. If you object to any modification, your sole recourse is to stop using the Services."},

  ]
  return (
    <div className="content-container">
      <h2>Privacy Police</h2>
      <p>This privacy policy governs your access or use, of content, products, and services made available by UTImedsOnline and its parents, subsidiaries, and affiliates, (collectively, the “Services”).</p>
        <p>
            Your use of our Services, including any dispute concerning privacy, is subject to this Privacy Policy and our Terms of Use.
                         <b>BY USING OUR SERVICES, YOU ARE ACCEPTING THIS PRIVACY POLICY AND OUR TERMS OF USE AND AUTHORIZING THE COLLECTION, USES AND DISCLOSURES SET FORTH HEREIN.</b>
            If you do not agree to this Privacy Policy or our Terms of Use, do not access or use the Services. This Privacy Policy and our Terms of Use expressly supersede prior agreements or arrangements with you.
        </p>
        <p style={{textDecoration:"underline"}}><b>Information Collected</b></p>
        <p><i><b>Information You Provide to us.</b></i></p>
        <p>You may choose to provide us with information to receive certain Services. The information you provide us depends on the Services you choose to access and may include:  </p>
        <ul>
            {
                points.map((i=>{
                    return (<li>{i.point}</li>);
                }))
            }
        </ul>
        {
            paragraph.map((i=>{
                return (<p>{i.paragraph}</p>);
            }))
        }
        <p><i><b>Information Collected When You Use Our Websites or Mobile Applications</b></i></p>
        <p>In addition to any information that you choose to submit to us, we and the third parties we work with may use a variety of technologies that automatically (or passively) collect certain information whenever you use the Services. This information includes but is not limited to:</p>
        <ul>{
            points2.map((i=>{
                return (<li>{i.point}</li>);
            }))
        }
        </ul>
        <p>We and/or third parties we work with collect this information using technologies including but not limited to the following:</p>
        <ul>{
                points3.map((i=>{
                    return (i.point);
                }))
            }
        </ul>
        {
            paragraph2.map((i=>{
                return (<p>{i.paragraph}</p>);
            }))
        }
        <ul>{
            points4.map((i=>{
                return (i.point);
            }))
        }
        </ul>

        {
            paragraph3.map((i=>{
                return (<p>{i.paragraph}</p>);
            }))
        }
        <ul>{
            points5.map((i=>{
                return (<li>{i.point}</li>);
            }))
        }
        </ul>

        {
            paragraph4.map((i=>{
                return (<p>{i.paragraph}</p>);
            }))
        }
    </div>
  )
}

export default Privacy;
