import { useParams } from 'react-router-dom';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from '../../components/Container';
import { BIO } from './Biography.data';

import style from './Biography.module.scss';

const Biography = () => {
  const { id } = useParams();

  return (
    <div className={style.root}>
      <Container>
        <div>
          {BIO[id].map((item, i) => {
            switch (item.type) {
              case 'h1':
                /* eslint-disable react/no-array-index-key */
                return (
                  <Heading key={i} level={1}>
                    {item.text}
                  </Heading>
                );
              case 'h2':
                return (
                  <Heading key={i} level={1}>
                    {item.text}
                  </Heading>
                );
              case 'paragraph':
                return (
                  <Text key={i} element="p">
                    {item.text}
                  </Text>
                );
              case 'img':
                return (
                  <div key={i} className={style.imgWrap}>
                    <img src={item.src} alt="Comics pic" />
                  </div>
                );
              default:
                return (
                  <Text key={i} element="p">
                    {item.text}
                  </Text>
                );
            }
          })}
        </div>
      </Container>
    </div>
  );
};

export default Biography;
