interface IGlobalState {
    collapsed: boolean;
    songTitle: string;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    collapsed: true,
    songTitle: "La Tecnologia Rules"

}

