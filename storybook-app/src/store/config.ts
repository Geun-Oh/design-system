import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'; // type을 정의해주기 위해 'npm i --save-dev @types/redux-logger' 실행함
import themeSlice from './slices/themeSlice'

const logger = createLogger();

const rootReducer = combineReducers({
    theme: themeSlice.reducer,
})

const initialState = {}

/**
 * reducer:
 * 리덕스 스토어의 rootReducer를 설정.
 * conbineReducers 함수를 사용하여 slice reducer들을 병합한 rootReducer를 설정 가능.
 * 단일 함수로 설정한 경우엔 스토어의 rootReducer로 사용됨.
 * slice reducer로 설정한 경우엔 자동으로 combineReducers에 전달하여 rootReducer를 생성.
 * 
 * middleware:
 * redux-logger와 같은 미들웨어를 설정
 * 미들웨어를 설정한 경우엔 자동으로 applyMiddleware에 전달.
 * 설정하지 않은 경우엔 getDefaultMiddleware를 호출.
 * 
 * devTools:
 * Redux DevTools 사용 여부 결정.(기본값은 true)
 * 
 * preloadedState:
 * 리덕스 스토어의 초기값 설정
 * 
 * enhancers:
 * 사용자 정의 미들웨어를 설정
 * 콜백 함수로 설정함녀 미들웨어 적용 순서를 정의 가능
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // 로그를 남겨주는 logger를 미들웨어에 붙인다!
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;