import React from 'react';
import { Button, Image, Card } from 'antd';

const Content = ({ navigate }) => {
  return (
    <div className="container content">
      <div className="flex">
        <div className="left">
          <h1>Get UTI Relief Today</h1>
          <p>Get a prescription for your UTI after an online visit with a doctor. </p>
          <ul className="checked-list">
            <li>Talk to a provider within minutes</li>
            <li>Pick up your prescription same-day at your pharmacy or get it discreetly delivered</li>
            <li>No insurance needed</li>
          </ul>
          <b>$19 visit with Gold membership* • $39 single visit</b>
          <b>Ages 18-65 • Female</b>
          <Button type="primary" style={{ minWidth: '200px', borderRadius: '5px' }} onClick={() => navigate()}>Get Started</Button>
        </div>
        <div className="right">
          <Image src="doctor.svg" preview={false} width={'100%'} />
        </div>
      </div>
      <div className="flex column align-center">
        <h2>What is a UTI?</h2>
        <p>A urinary tract infection, or UTI, is an infection in any part of your urinary tract. UTIs commonly occur in women when bacteria enter the urinary tract (including the urethra and bladder). Typical symptoms include pain and burning when urinating, frequent urination, urgent urination, and cloudy-appearing urine.</p>
        <div className="flex">
          <div className="left" style={{width: '50%'}}>
            <Card style={{textAlign: 'left', minHeight: '300px', marginRight: '5px'}}>
              <h4>How Can GoodRx Care Help with UTIs?</h4>
              <p>Most UTIs respond quickly to treatment with an appropriate antibiotic. GoodRx Care can connect you with providers who can prescribe antibiotics. The exact treatment they prescribe depends on your diagnosis and risk factors. Generally, they prescribe an oral antibiotic like</p>
              <ul>
                <li>Macrobid (Nitrofurantoin)</li>
                <li>Keflex (Cephalexin)</li>
                <li>Bactrim (Sulfamethoxazole / Trimethoprim)</li>
              </ul>
              <p>They can also provide advice on how to prevent UTIs in the future.</p>
            </Card>
          </div>
          <div className="right">
            <Card style={{textAlign: 'left', minHeight: '300px'}}>
              <h4>Is This Service Right For Me?</h4>
              <p>Whether it’s your first UTI or you’ve had several (if so, we’re so sorry!), providers may be able to help.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
