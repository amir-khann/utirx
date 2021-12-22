import React from "react";

const Consent = () => {
  const paragraph = [
      {"paragraph":<span>Telehealth involves the use of secure electronic communications,
              information technology, or other means to enable a healthcare provider and a patient at different locations to communicate
              and share individual patient health information for the purpose of rendering clinical care. This “<span>Telehealth Informed Consent</span>”
              informs the patient (“<span>patient,</span>” “<span>you,</span>” or “<span>your</span>”) concerning the treatment methods, risks, and limitations of using a telehealth platform.
</span>},
      {"paragraph":<b>Services Provided:
          </b>},
      {"paragraph":<span>Telehealth services offered by the Medical Group (as defined in the <a href="#" target="_blank" rel="noreferrer">OnlineUTIMeds Terms of Use</a>) (“<span>Group”</span>), and the Group’s engaged providers ( “<span>Providers</span>” or your
              “<span>Provider</span>”) may include a patient consultation, diagnosis, treatment recommendation, prescription, and/or a referral to
              in-person care, as determined clinically appropriate (the “<span>Services</span>”).
</span>},
      {"paragraph":<b>Electronic Transmissions:
          </b>},
      {"paragraph":"The types of electronic transmissions that may occur using the telehealth platform include, but are not limited to:\n"},
  ];
  const paragraph2 = [
      {"paragraph":<b>Patient Acknowledgments:
          </b>},
      {"paragraph":"I further acknowledge and understand the following: (1) As part of my the telehealth visit, I have been assigned a provider.\n"},
      {"paragraph":"(2) The Group provider will take responsibility for my care only after I have created an account, answered all the required health questions and provided a photo and/or  made payment, and the Group provider has subsequently received my request for treatment and my responses to all the required health questions and any photos and/or information received, reviewed all my information, and then subsequently determined that I am a good candidate for the telehealth services. I " +
              "understand that the provider’s duty of care does not begin at the point of me answering questions or making payment or starting a video visit but at the point at which the doctor accepts the duty of care.\n"},
      {"paragraph":"(3) Making a request for treatment (by completing a visit in the mobile app or website and making payment, including providing photos through the mobile app or website does not in and of itself create a " +
              "duty of care or create a doctor-patient relationship. Group provider reserves the right to deny care if, in the professional judgment of the Group provider, the provision of the telehealth services is not medically or ethically appropriate.\n"},
      {"paragraph":"(4) If I am experiencing a medical emergency, it is my responsibility to dial 9-1-1 immediately. I cannot hold OnlineUTIMeds responsible for any consequence of a medical emergency or adverse event despite having used their services. \n"},
      {"paragraph":"(5) I may elect to seek services from a medical group with in-person clinics as an alternative to receiving telehealth services.\n"},
      {"paragraph":"(6) Federal and state law requires health care providers to protect the privacy and the security of health information. " +
              "I am entitled to all confidentiality protections under applicable federal and state laws. I understand all medical reports resulting from the telehealth visit are part of my medical record.\n"},
      {"paragraph":"(7) Group will take steps to make sure that my health information is not seen by anyone who should not see it. Telehealth may involve electronic communication of my personal health information to other health practitioners " +
              "who may be located in other areas, including out of state. I consent to Group using and disclosing my health information for purposes of my treatment and care coordination, to receive reimbursement for the services provided to me, and for Group’s health care operations.\n"},
      {"paragraph":"(8) Dissemination of any patient identifiable images or information from the telehealth visit to researchers or other educational entities will not occur without my affirmative consent.\n"},
      {"paragraph":"(9) There is a risk of technical failures during the telehealth visit beyond the control of Group. I AGREE TO HOLD HARMLESS GROUP AND ITS EMPLOYEES, CONTRACTORS, AGENTS, DIRECTORS, MEMBERS, " +
              "MANAGERS, SHAREHOLDERS, OFFICERS, REPRESENTATIVES, ASSIGNS, PARENTS, PREDECESSORS, AND SUCCESSORS for delays in evaluation or for information lost due to such technical failures.\n"},
      {"paragraph":" (10) Persons may be present during the telehealth visit other than my Provider in order to operate the telehealth technologies. \n"},
      {"paragraph":" (11) A copy will be provided to me at reasonable cost of preparation, shipping and delivery.\n"},
      {"paragraph":"(12) It is necessary to provide my Provider a complete, accurate, and current medical history. \n"},
      {"paragraph":"(13) There is no guarantee that I will be issued a prescription and that the decision of whether a prescription is" +
              " appropriate will be made in the professional judgement of my Provider. If my Provider issues a prescription, I have the right to select the pharmacy of my choice.\n"},
      {"paragraph":"(14) There is no guarantee that I will be treated by a Group provider. My Provider reserves the right to deny care for " +
              "potential misuse of the Services or for any other reason if, in the professional judgment of my Provider, the provision of the Services is not medically or ethically appropriate.\n"},
  ];
  const points = [
      {"point":<li>Appointment scheduling</li>},
      {"point":<li>Completion, exchange, and review of medical intake forms and other clinically relevant information
              (for example: health records; images; output data from medical devices; sound and video files; diagnostic and/or lab test results) between you and your Provider via: </li>},
      {"point":<ul>
              <li>asynchronous communications;</li>
              <li>two-way interactive audio in combination with store-and-forward communications; and/or
                  </li>
              <li>two-way interactive audio and video interaction;</li>
      </ul>},
      {"point":<li>Treatment recommendations by your Provider based upon such review and exchange of clinical information;
          </li>},
      {"point":<li>Delivery of a consultation report with a diagnosis, treatment and/or prescription recommendations, as deemed clinically relevant;
          </li>},
      {"point":<li>Prescription refill reminders (if applicable); and/or
          </li>},
      {"point":<li>Other electronic transmissions for the purpose of rendering clinical care to you.
          </li>}

  ];
  const points2 = [
      {"point":<li>The primary difference between telehealth and direct in-person service delivery is the inability to have direct, physical contact with the patient. Accordingly, some clinical needs may not be appropriate for a telehealth visit and your Provider will make that determination.
          </li>},
      {"point":<li style={{fontWeight:"bold"}}>Our providers do not address medical emergencies. If you believe you are experiencing a medical emergency, You should dial 9-1-1 and/or go to the nearest emergency room. Please do not attempt to contact OnlineUTIMeds Care, LLC, GROUP, or your Provider. After receiving emergency healthcare treatment, you should visit your local primary care PROVIDER.
          </li>},
      {"point":<li>Our Providers are an addition to, and not a replacement for, your local primary care provider. Responsibility for your overall medical care should remain with your local primary care provider, if you have one, and we strongly encourage you to locate one if you do not.
          </li>},
      {"point":<li>Group does not have any in-person clinic locations.
          </li>},
  ];
  const points3 = [
      {"point":<li>Delays in evaluation and treatment could occur due to deficiencies or failures of the equipment and technologies, or provider availability.
          </li>},
      {"point":<li>In rare events, your Provider may determine that the transmitted information is of inadequate quality, thus necessitating a rescheduled telehealth consult or an in-person meeting with your local primary care doctor.
          </li>},
      {"point":<li>In very rare events, security protocols could fail, causing a breach of privacy of personal medical information.
          </li>},
  ];
  return (
    <div className="content-container">
      <h2>Telehealth Informed Consent</h2>
        {
            paragraph.map((i=>{
                return (<p>{i.paragraph}</p>)
            }))
        }
        <ul>
            {
                points.map((i=>{
                    return (i.point)
                }))
            }
        </ul>
        <p><b>Service Limitations:</b></p>
        <ul>
            {
                points2.map((i=>{
                    return (i.point)
                }))
            }
        </ul>
        <p><b>Security Measures:</b></p>
        <p>The electronic communication systems we use will incorporate network and software security protocols to protect the confidentiality of patient identification and imaging data and will include measures to safeguard the data and to ensure its integrity against intentional or unintentional corruption. All the Services delivered to the patient through telehealth will be delivered over a secure connection that complies with the requirements of the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”).
        </p>
        <p><b>Possible Risks:</b></p>
        <ul>
            {
                points3.map((i=>{
                    return (i.point)
                }))
            }
        </ul>
        {
            paragraph2.map((i=>{
                return (<p>{i.paragraph}</p>)
            }))
        }
    </div>
  );
};

export default Consent;
