declare function getRandomUUID(): string;

declare class ret {
    constructor();
    getRandomUUID = getRandomUUID;
}

export = new ret();