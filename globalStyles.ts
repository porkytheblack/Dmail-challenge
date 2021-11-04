type s = {
    display: string,
    flexDirection: string,
    alignItems: string,
    justifyContent: string
}

const flex_row_center:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
}
const flex_row_end:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
}

const flex_row_start:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
}
const flex_row_top:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
}

const flex_col_start:s = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center"
}
const flex_col_start_top:s = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start"
}

const flex_col_center:s = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
}
const flex_col_center_top:s = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
}

const flex_col_end:s = {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "space-between"
}

const flex_row_between:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}
const flex_row_around:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
}

const flex_row_even:s = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
}

interface m {
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
}

const generate_padding = (t: number, r: number, b: number, l:number): m =>{
    return (
        {
            paddingTop: t,
            paddingRight: r,
            paddingBottom: b,
            paddingLeft: l
        }
    )
}
export {generate_padding}
export {flex_row_center, flex_col_center_top, flex_row_end, flex_col_start_top, flex_row_top, flex_col_center, flex_row_start, flex_col_start, flex_row_between, flex_row_around, flex_row_even, flex_col_end}
