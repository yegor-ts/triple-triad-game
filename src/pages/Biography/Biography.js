import { Navigate, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { BIO } from './Biography.data';
import { ReactComponent as Anchor } from '../../assets/link_icon.svg';

import style from './Biography.module.scss';

const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  const handleAnchorClick = (alt) => {
    const path = `${window.location.origin}${window.location.pathname}#${alt}`;
    navigator.clipboard.writeText(path);
  };

  if (!BIO[id]) return <Navigate to="/characters" replace />;

  return (
    <div className={style.root}>
      <Container>
        <div>
          <Button onClick={handleBackClick} color="black">
            Go Back
          </Button>
        </div>
        <div>
          {BIO[id].map((item, i) => {
            switch (item.type) {
              case 'h1':
                /* eslint-disable react/no-array-index-key */
                return (
                  <div
                    key={i}
                    className={classNames(style.heading, style.marginTop)}
                  >
                    <Heading level={1}>{item.text}</Heading>
                  </div>
                );
              case 'h2':
                return (
                  <div key={i} className={style.heading}>
                    <Heading level={1}>{item.text}</Heading>
                    <Anchor
                      className={style.anchor}
                      onClick={() =>
                        handleAnchorClick(item.text.replaceAll(/[\W\s]+/g, '_'))
                      }
                    />
                  </div>
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
