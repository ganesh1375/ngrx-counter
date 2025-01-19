import { Action, createReducer } from "@ngrx/store"
import { initialState, PostState } from "./posts.store"

const _postsReducer = createReducer(initialState)


export const postsReducer = (state: PostState | undefined, action: Action<string>) => {
    return _postsReducer(state, action)
}