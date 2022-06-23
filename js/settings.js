const collectionInfo = {
    name: "Hype Dudes",
    title: "{name}",
    date: "23.06.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "logo.jpg",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bg.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 0.5,
    totalSupply: 1000,
    toFixed: 1,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);