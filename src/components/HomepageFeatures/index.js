import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '쉬운 사용',
    Svg: require('@site/static/img/main1.svg').default,
    description: (
      <>
        주문 생성과 확인을 한번에
      </>
    ),
  },
  {
    title: '중요한 것에 집중',
    Svg: require('@site/static/img/main2.svg').default,
    description: (
      <>
        효율적인 시공관리를 위한 주문생성과 주문확인
      </>
    ),
  },
  {
    title: '다양항 환경에서도 지원',
    Svg: require('@site/static/img/main3.svg').default,
    description: (
      <>
        오프라인 비회원 주문도 결제까지 한번에-!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
