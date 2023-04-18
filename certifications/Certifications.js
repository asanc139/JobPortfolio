import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import certificationData from './certificationsData.json';
import PageHeader from '../../components/PageHeader';
import CodeCademyCertifications from '../../components/CodeCademyCertifications';

import Code2 from '../../components/Code2';
import Code3 from '../../components/Code3';
import Code4 from '../../components/Code4';
import Code5 from '../../components/Code5';
import Code6 from '../../components/Code6';
import Code7 from '../../components/Code7';
import Code8 from '../../components/Code8';
import Code9 from '../../components/Code9';
import Code10 from '../../components/Code10';
import Code11 from '../../components/Code11';
import Code12 from '../../components/Code12';
import Code13 from '../../components/Code13';
import Code14 from '../../components/Code14';
//import './certifications.css';

const Certificate = () => {
  const certList = () =>
    certificationData.map((CodeCademyCertifications, i) => (
      <CodeCademyCertifications
        key={i}
        id={CodeCademyCertifications.id}
        title={CodeCademyCertifications.title}
        technology={CodeCademyCertifications.technology}
        image={CodeCademyCertifications.image}
        color={CodeCademyCertifications.bgcolor}
      />
    ));

  return (
    <section className="certifications">
      <PageHeader
        title="CodeCademy Certificates"
        description="Courses Completed"
      />

      <div className="row">
        <CodeCademyCertifications />
        <Code2 />
        <Code3 />
        <Code4 />
        <Code5 />
        <Code6 />
        <Code7 />
        <Code8 />
        <Code9 />
        <Code10 />
        <Code12 />
        <Code13 />
        <Code14 />
      </div>
    </section>
  );
};

export default Certificate;
