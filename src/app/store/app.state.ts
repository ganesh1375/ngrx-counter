import { CounterState } from "../counter/state/counter.state";
import { PostState } from "../posts/posts-list/store/posts.store";
import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../posts/posts-list/store/posts.reducers";

export interface AppState {
    counterState : CounterState,
    postState : PostState
};

export const appReducer = {
    counter : counterReducer,
    posts : postsReducer
}