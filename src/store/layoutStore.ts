import create from 'zustand';
import { persist } from 'zustand/middleware';

const layoutStore: any = create(
  persist(
    (set: any) => ({
      collapsed: false,
      tabPane: [{ path: 'home', title: '首页', fullpath: '/home' }],
      activePane: '/home',
      setCollapsed: (payload: any) => {
        set(() => ({ collapsed: payload }));
      },
      setActivePane: (payload: any) => {
        set(() => ({ activePane: payload }));
      },
      setTabPane: (payload: any) => {
        set(() => ({ tabPane: payload }));
      },
      resetLayoutStore: () =>
        set({
          collapsed: false,
          tabPane: [{ path: 'home', title: '首页', fullpath: '/home' }],
          activePane: '/home',
        }), // clears the entire store, actions included
    }),
    {
      name: 'LAYOUT_INFO', // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default layoutStore;
