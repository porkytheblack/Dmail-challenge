const drawer_out = "DRAWER_OUT"
const drawer_in = "DRAWER_IN"
const searching = "SEARCHING"
const scroll_up = "SCROLL_UP"
const scroll_down = "SCROLL_DOWN"
const top_press = "TOP_PRESS"
const switch_screen = "SWITCH_SCREEN"
const set_user = "SET_USER"
const set_token = "SET_TOKEN"
const tupdate_token = "UPDATE_TOKEN"
const tedit_user = "EDIT_USER"
const tdelete_token = "DELETE_TOKEN"

interface UserInterface {
    user: any;
    token: any;
}

interface LayoutInterface {
    drawer_out: boolean;
    drawer_in: boolean;
    searching: boolean;
    scroll_up: boolean;
    scroll_down: boolean;
    top_press: boolean;
    switch_screen: string;
}

interface top_press_down {
    type: typeof top_press;
    payload: boolean
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
interface toggle_screen {
    type: typeof switch_screen,
    payload: string
}

interface create_user{
    type: typeof set_user;
    payload: any
}
interface create_token {
    type: typeof set_token;
    payload: any;
}
interface delete_token {
    type: typeof tdelete_token;
    payload: any;
}
interface update_token{
    type: typeof tupdate_token;
    payload: any;
}
interface edit_user{
    type: typeof tedit_user;
    payload: any;
}



type LayoutActionTypes = toggle_screen | move_drawer_in | move_drawer_out | toggle_search | scrollup | scrolldown | top_press_down ;
type UserActionTypes = create_user | create_token | edit_user | update_token | delete_token;

export {UserActionTypes, set_user, set_token, UserInterface, tedit_user, tupdate_token, tdelete_token}
export {LayoutInterface, switch_screen, drawer_in, drawer_out, searching, scroll_up, scroll_down, top_press, LayoutActionTypes}