import React from 'react';

interface ScrollState {
  list: string[];
  active: number;
  up: () => void;
  down: () => void;
  reset: () => void;
}

const listSection = [
  'hero',
  'form',
  'community',
  'promotion',
  'exclustive',
  'footer',
];

export const ScrollContext = React.createContext<ScrollState>({
  list: listSection,
  active: 0,
  up: () => {},
  down: () => {},
  reset: () => {},
});

export function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [active, setActive] = React.useState<number>(0);
  React.useEffect(() => {
    setActive(0);
  }, []);
  const vals: ScrollState = React.useMemo(
    () => ({
      list: listSection,
      active,

      up: () => setActive((e) => (e > 0 ? e - 1 : 0)),
      down: () =>
        setActive((e) =>
          e < listSection.length - 1 ? e + 1 : listSection.length - 1,
        ),
      reset: () => setActive(0),
    }),
    [active, setActive],
  );
  return (
    <ScrollContext.Provider value={vals}>{children}</ScrollContext.Provider>
  );
}

const useScrollContext = (): ScrollState => React.useContext(ScrollContext);

export default useScrollContext;
