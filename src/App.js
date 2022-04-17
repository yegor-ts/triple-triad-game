import Header from './components/Header/index';
import Slider from './components/Slider/index';
import Footer from './components/Footer/index';
import Text from './components/Text/index';

import './App.css';

function App() {
    return (
        <>
            <Header/>
            <Slider/>
            <Text element="p" strong italic disabled>
                Lorem Ipsum is slechts een proeftekst
                uit het drukkerij- en zetterijwezen.
            </Text>
            <Footer/>
        </>
    );
}

export default App;
