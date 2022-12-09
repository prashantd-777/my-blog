import { variable } from "./environments";
const ENV = process.env.NODE_ENV || "development";


const CRA_MAP = {
    release: "production",
    pre_release: "preproduction",
    master: "stage-master",
    develop: "stage"
};
const NEXT_ENV =
    ENV === "development" ? "development" : CRA_MAP[branch_name] || "development";

const envConfig = variable[NEXT_ENV];

export const badgesPath =
    (process.env.REACT_APP_PUBLIC_URL || "") + "/images/BadgesMap/";
// const envConfig = variable[ENV];

export const config = Object.assign(
    {
        // env: ENV,
        env: NEXT_ENV
    },
    envConfig
);

export const h__isDevEnv = () => NEXT_ENV === "development";
