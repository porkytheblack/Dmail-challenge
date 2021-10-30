const drawer_out = "DRAWER_OUT"
const drawer_in = "DRAWER_IN"
const searching = "SEARCHING"
const scroll_up = "SCROLL_UP"
const scroll_down = "SCROLL_DOWN"

interface LayoutInterface {
    drawer_out: boolean;
    drawer_in: boolean;
    searching: boolean;
    scroll_up: boolean;
    scroll_down: boolean;
}

interface move_drawer_in {
    type:  typeof drawer_in;
    payload: boolean
}
interface move_drawer_out {
    type:  typeof drawer_out;
    payload: boolean
}
interface toggle_search {
    type: typeof searching;
    payload: boolean;
}
interface scrollup {
    type: typeof scroll_up;
    payload: boolean;
}
interface scrolldown {
    type: typeof scroll_down;
    payload: boolean;
}

type LayoutActionTypes = move_drawer_in | move_drawer_out | toggle_search | scrollup | scrolldown ;


export {LayoutInterface, drawer_in, drawer_out, searching, scroll_up, scroll_down, LayoutActionTypes}