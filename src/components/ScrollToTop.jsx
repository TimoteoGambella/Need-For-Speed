import { useContext, useEffect } from 'react';
import { UseApiContext } from '../context/ApiContext';

const ScrollToTop = ({ children }) => {
    const { scroll, setScroll } = useContext(UseApiContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
        return () => setScroll(false);
    }, [scroll]);

    return <>{children}</>;
};

export default ScrollToTop;
