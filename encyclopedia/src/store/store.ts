import { configureStore } from '@reduxjs/toolkit'
import { descriptionSlice } from './game/descriptionSlice'
import { characterSlice } from './characters/characterSlice';
import { monsterSlice } from './monster/monsterSlice';
import { bossesSlice } from './bosses/bossesSlice';
import { dungeonSlice } from './dungeons/dungeonsSlice';

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        description: descriptionSlice.reducer,
        characters: characterSlice.reducer,
        monsters: monsterSlice.reducer,
        bosses: bossesSlice.reducer,
        dungeons: dungeonSlice.reducer
    },
})
export type AppStore = typeof store;
export type ZeldaState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']