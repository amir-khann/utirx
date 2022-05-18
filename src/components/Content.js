import React, { useState, useEffect } from "react";
import { Button, Image, Card, Collapse } from "antd";
import axios from "axios";

import Loader from "./Loader";
import config from "../config";

const Content = ({ navigate }) => {
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${config.baseUrl}settings/price`);
      setPrice(data.price);
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container content">
      <div className="flex">
        <div className="left">
          <h1>Get your UTI Treated Today</h1>
          <p>Don’t have time to go to your doctor ? </p>
          <p>
            Get your UTI diagnosed online right now and get a subscription for
            antibiotics sent straight to your pharmacy within 24 hours all
            without the hassle of going to a doctor’s office.{" "}
          </p>
          <ul className="checked-list">
            {/*<li>Got a UTI?</li>*/}
            <li>Don’t have time to wait for an appointment with your doc?</li>
            <li>Get connected to a provider within minutes.</li>
            <li>
              Pick up your prescription within 24 hours if qualified at your
              pharmacy.
            </li>
            <li>
              It’s fast. It’s easy. There are no hidden fees. And there’s no
              appointment necessary.
            </li>
            <li>No insurance needed. It’s affordable, fast, and easy.</li>
            {/*<li>Get your UTI diagnosed online right now and get a subscription for antibiotics sent straight to your pharmacy - all without the hassle of going to a doctor’s office.</li>*/}
          </ul>
          <b>${price} single visit</b>
          {/*<b>Ages 18-65 • Female</b>*/}
          <b className="message-fl">
            This application is only available to Florida residents and visitors
            and prescription will be sent to Florida Pharmacies only.
          </b>
          <Button
            type="primary"
            style={{
              minWidth: "200px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            onClick={() => navigate()}
          >
            Get Started
          </Button>
        </div>
        <div className="right image">
          <Image src="doctor.svg" preview={false} width={"100%"} />
        </div>
      </div>
      <div className="flex column align-center section">
        <h2>What is a UTI?</h2>
        <p>
          A urinary tract infection, or UTI, is an infection in any part of your
          urinary tract. UTIs commonly occur in women when bacteria enter the
          urinary tract (including the urethra and bladder). Typical symptoms
          include pain and burning when urinating, frequent urination, urgent
          urination, and cloudy-appearing urine.
        </p>
        <div className="flex wrap column-on-mobile">
          <div className="left">
            <Card style={{ textAlign: "left", marginRight: "5px" }}>
              <h4>How Can UTIRX.com Help with UTIs?</h4>
              <p>
                Most UTIs respond quickly to treatment with an appropriate
                antibiotic. UTIRX.com connect you with providers who can
                prescribe antibiotics. The exact treatment they prescribe
                depends on your diagnosis and history.
              </p>
              <span>Common Antibiotics Include:</span>
              <ul>
                <li>Macrobid (Nitrofurantoin)</li>
                <li>Keflex (Cephalexin)</li>
                <li>Bactrim (Sulfamethoxazole / Trimethoprim)</li>
              </ul>
              {/*<p>They can also provide advice on how to prevent UTIs in the future.</p>*/}
            </Card>
          </div>
          <div className="right">
            <Card style={{ textAlign: "left", height: "100%" }}>
              <h4>Is This Service Right For Me?</h4>
              <p>
                Whether it’s your first UTI or you’ve had several (if so, we’re
                so sorry!), providers may be able to help.
              </p>
              <p>
                We’ll ask you a series of questions to see if this service is
                right for you. You will only proceed if we feel that this
                service will benefit you. If you are a good candidate.
              </p>
            </Card>
          </div>
        </div>
        <Button
          type="primary"
          style={{ minWidth: "200px", borderRadius: "5px", marginTop: "10px" }}
          onClick={() => navigate()}
        >
          Get Started
        </Button>
      </div>
      <div className="flex column section">
        <div className="align-center">
          <h2>Frequently Asked Questions</h2>
          <p>Still have questions? Read our FAQ before your visit.</p>
        </div>
        <Collapse style={{ textAlign: "left" }} ghost>
          <Collapse.Panel
            header="Can I get antibiotics for a urinary tract infection (UTI) without seeing a doctor?"
            key="1"
          >
            <p>
              Now you do not need to visit a provider’s office to be prescribed
              antibiotics for a simple urinary tract infection (UTI). Instead,
              you can be put in contact with a provider online from the comfort
              of your home, which can help you start treatment sooner.UTIRX.com
              offers online visits for UTI prescriptions for as low as ${price}.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header="When should I see a doctor for a UTI?"
            key="2"
          >
            <p>
              You’ll want to see a provider as soon as you notice symptoms of a
              urinary tract infection (UTI). A common symptom is pain or burning
              when you urinate, but you might also feel a frequent urge to
              urinate even when your bladder is empty. If you start experiencing
              pain in your back or side, or if you develop a fever, this might
              be a sign of a more serious infection in your kidneys.While we
              always advise making an appointment + seeing a doc in person , we
              may be able to provide immediate Tx for simple UTIs saving you
              time + money.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="What causes a UTI?" key="3">
            <p>
              Urinary tract infections (UTIs) happen when bacteria is able to
              get into the urinary tract, causing an infection. Different
              factors can increase the likelihood of this happening, like sexual
              activity, changes in hormone levels during menopause, pregnancy.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="Can a UTI go away on its own?" key="4">
            <p>
              It is best to see a provider if you are experiencing symptoms of a
              urinary tract infection (UTI). Leaving it untreated may result in
              a more serious infection that spreads to your kidneys. UTIRX.com
              offers online visits for UTI so that you can get started on
              treatment sooner.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="What are the symptoms of a UTI?" key="5">
            <p>
              A common symptom of a urinary tract infection (UTI) is a painful
              or burning sensation when you urinate. You might also feel a
              frequent urge to pee even when your bladder is empty or notice
              that your urine looks bloody or cloudy. Sometimes a UTI can spread
              to your kidneys, causing back or side pain, fever, chills, and
              nausea.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header="What is the best thing to do for a UTI?"
            key="6"
          >
            <p>
              First, you’ll want to see a provider to get started on an
              antibiotic as soon as you start experiencing symptoms of a urinary
              tract infection (UTI). The sooner you start treatment, the sooner
              you’ll start to feel better. Make sure that you drink plenty of
              water or other fluids. Your provider may also prescribe the
              medication phenazopyridine to help with any pain or discomfort.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header="What is the main cause of UTIs in females?"
            key="7"
          >
            <p>
              Women are more likely to get urinary tract infections (UTIs)
              because their anatomy (shorter urethra) makes it easier for
              bacteria to get into the urinary tract to cause an infection.
              Factors that can make this more likely to happen include sexual
              activity, changes in hormone levels during menopause, pregnancy,
              and certain forms of birth control.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="What does a UTI feel like?" key="8">
            <p>
              A urinary tract infection (UTI) usually feels like a painful or a
              burning sensation when you urinate, and you may feel a frequent
              urge to pee even when you have an empty bladder. Sometimes the
              infection can reach your kidneys and cause back or side pain,
              fever, chills, and nausea.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header="Will a UTI go away without antibiotics?"
            key="9"
          >
            <p>
              Since a urinary tract infection (UTI) is an infection that is
              usually caused by bacteria, you’ll typically need an antibiotic to
              clear it. Leaving a UTI untreated can result in a more serious
              infection that spreads to your kidneys.
            </p>
          </Collapse.Panel>
        </Collapse>
        <div className="align-center">
          <Button
            type="primary"
            style={{
              minWidth: "200px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            onClick={() => navigate()}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
