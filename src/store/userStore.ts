import create from 'zustand';
import { persist } from 'zustand/middleware';

const userStore: any = create(
  persist(
    (set: any) => ({
      token: '',
      userInfo: <any>{
        nickname: '',
        //后端获取的原始路由
        routes: [],
      },
      flatRoutes: [],
      setToken: (payload: any) => set(() => ({ token: payload.access_token })),
      setUserInfo: (payload: any) =>
        set(() => ({
          userInfo: payload,
        })),
      // 设置扁平化后的路由
      setFlatRoutes: (payload: any) =>
        set(() => ({
          flatRoutes: payload,
        })),
      // 重置数据
      resetUserStore: () =>
        set({
          token: '',
          userInfo: <any>{
            nickname: '',
            routes: [],
          },
          flatRoutes: [],
        }), // clears the entire store, actions included
    }),
    {
      name: 'USER_INFO', // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default userStore;
