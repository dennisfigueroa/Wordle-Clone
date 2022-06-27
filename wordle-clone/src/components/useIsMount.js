import {useEffect, useRef} from 'react';

//If this is the initial load, ...
const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };

export default useIsMount;